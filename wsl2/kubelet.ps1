. $PSScriptRoot/.env.example.ps1
. $PSScriptRoot/.env.ps1

$wsl_ip=wsl -- bash -c "ip addr | grep eth0 | grep inet | cut -d ' ' -f 6 | cut -d '/' -f 1"

$NODE_NAME="wsl2"
# $KUBE_APISERVER='https://192.168.199.100:16443'
# $K8S_ROOT="/opt/k8s"
$K8S_WSL2_ROOT=powershell -c "cd $PSScriptRoot ; wsl pwd"

(Get-Content $PSScriptRoot/conf/kubelet-config.yaml.temp) `
    -replace "##NODE_NAME##",$NODE_NAME `
    -replace "##NODE_IP##",$wsl_ip `
    -replace "##K8S_ROOT##",$K8S_ROOT `
  | Set-Content $PSScriptRoot/conf/kubelet-config.yaml

wsl -u root -- bash -c "echo NODE_NAME=$NODE_NAME > ${K8S_ROOT}/.env"
wsl -u root -- `
  bash -c "echo KUBE_APISERVER=$KUBE_APISERVER | tee -a ${K8S_ROOT}/.env > /dev/null"

$command=wsl -u root -- echo ${K8S_ROOT}/bin/kubelet `
--bootstrap-kubeconfig=${K8S_ROOT}/conf/kubelet-bootstrap.kubeconfig `
--cert-dir=${K8S_ROOT}/certs `
--container-runtime=remote `
--container-runtime-endpoint=unix:///run/kube-containerd/containerd.sock `
--root-dir=${K8S_ROOT}/var/lib/kubelet `
--kubeconfig=${K8S_ROOT}/conf/kubelet.kubeconfig `
--config=${K8S_WSL2_ROOT}/conf/kubelet-config.yaml `
--hostname-override=${NODE_NAME} `
--pod-infra-container-image=gcr.azk8s.cn/google-containers/pause:3.1 `
--image-pull-progress-deadline=15m `
--volume-plugin-dir=${K8S_ROOT}/var/lib/kubelet/kubelet-plugins/volume/exec/ `
--logtostderr=true `
--v=2

# --container-runtime=docker `
# --container-runtime-endpoint=unix:///var/run/dockershim.sock `

# --container-runtime=remote `
# --container-runtime-endpoint=unix:///run/kube-containerd/containerd.sock `

#
# $ kubectl --kubeconfig .\rpi\certs\kubectl.kubeconfig get csr --sort-by='{.metadata.creationTimestamp}'
#

mkdir -Force $PSScriptRoot/supervisor.d | out-null

echo "[program:kubelet]

command=$command
stdout_logfile=${K8S_ROOT}/log/kubelet-stdout.log
stderr_logfile=${K8S_ROOT}/log/kubelet-error.log
directory=/
autostart=false
autorestart=false
startretries=2
user=root
startsecs=10" > $PSScriptRoot/supervisor.d/kubelet.ini

if($args[0] -ne 'start' -and $args[0] -ne 'init'){
  exit
}

$env:ErrorActionPreference="stop"

wsl -u root -- ${K8S_ROOT}/bin/kubeadm version
wsl -u root -- ls ${K8S_ROOT}/bin/generate-kubelet-bootstrap-kubeconfig.sh

$env:ErrorActionPreference="continue"

if (Test-Path $PSScriptRoot/conf/.wsl_ip){
   $wsl_ip_from_file=cat $PSScriptRoot/conf/.wsl_ip

   if($wsl_ip -eq $wsl_ip_from_file){
      Write-Warning "wsl ip not changed, skip rm cert"
   }else{
      Write-Warning "wsl ip changed, rm cert ..."
      echo $wsl_ip > $PSScriptRoot/conf/.wsl_ip
      # wsl -u root -- rm -rf ${K8S_ROOT}/certs/kubelet-*
      wsl -u root -- rm -rf ${K8S_ROOT}/certs/kubelet-server-*.pem
      # wsl -u root -- rm -rf ${K8S_ROOT}/conf/kubelet-bootstrap.kubeconfig
   }
}else{
   Write-Warning "wsl ip changed, rm cert ..."
   echo $wsl_ip > $PSScriptRoot/conf/.wsl_ip
   # wsl -u root -- rm -rf ${K8S_ROOT}/certs/kubelet-*
   wsl -u root -- rm -rf ${K8S_ROOT}/certs/kubelet-server-*.pem
   # wsl -u root -- rm -rf ${K8S_ROOT}/conf/kubelet-bootstrap.kubeconfig
}

sleep 2

# wsl -u root -- /usr/sbin/swapoff -a
# wsl -u root -- /sbin/swapoff -a
wsl -u root -- ${K8S_ROOT}/bin/generate-kubelet-bootstrap-kubeconfig.sh ${K8S_ROOT}
wsl -u root -- mkdir -p ${K8S_ROOT}/var/lib/kubelet

if($args[0] -eq 'init'){
  "==> kubelet init success !"
  exit
}

sleep 5

if($args[0] -eq 'start' -and $args[1] -eq '-d'){
  wsl -u root -- supervisorctl start kube-node:kubelet

  exit
}

if($args[0] -eq 'start'){
  wsl -u root -- bash -c $command
}