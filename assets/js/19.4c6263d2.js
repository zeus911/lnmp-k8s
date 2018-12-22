(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{184:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("请查看 "),s("a",{attrs:{href:"https://github.com/khs1994-docker/lnmp-k8s",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),s("OutboundLink")],1),t._v(" README.md 文件。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._m(33),t._v(" "),t._m(34),t._v(" "),s("p",[t._v("务必保证各组件正常运行之后，再进行测试！（$ sudo systemctl status XXX）")]),t._v(" "),t._m(35),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"部署-kubernetes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署-kubernetes","aria-hidden":"true"}},[this._v("#")]),this._v(" 部署 Kubernetes")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"kubectl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kubectl","aria-hidden":"true"}},[this._v("#")]),this._v(" kubectl")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("复制 K8s 配置文件到 "),e("code",[this._v("~/.kube/config")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("cp")]),this._v(" cert/kubectl.kubeconfig ~/.kube/config\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("若还有其他集群，请将生成的文件追加到 "),e("code",[this._v("~/.kube/config")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"check"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#check","aria-hidden":"true"}},[this._v("#")]),this._v(" Check")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"etcd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etcd","aria-hidden":"true"}},[this._v("#")]),this._v(" etcd")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("第一步启动 "),e("code",[this._v("etcd")]),this._v(" 集群。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ systemctl status etcd-member\n\n$ journalctl -u etcd-member\n\n$ ETCDCTL_API"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("3 etcdctl \\\n    --endpoints"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${node_ip:-192.168.57.110}")]),t._v(":2379 \\\n    --cacert"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/certs/ca.pem \\\n    --cert"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/certs/etcd.pem \\\n    --key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/certs/etcd-key.pem endpoint health\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"flannel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flannel","aria-hidden":"true"}},[this._v("#")]),this._v(" flannel")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("第二步启动 "),e("code",[this._v("flannel")]),this._v(" 配置 Docker 网段")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ systemctl status flanneld\n\n$ journalctl -u flanneld\n\ncore@coreos1 ~ $ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /run/flannel/flannel_docker_opts.env\n\n\nDOCKER_OPT_BIP"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--bip=172.30.27.1/24"')]),t._v("\nDOCKER_OPT_IPMASQ"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--ip-masq=false"')]),t._v("\nDOCKER_OPT_MTU"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--mtu=1450"')]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ systemctl status docker\n\n$ journalctl -u docker\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"master"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#master","aria-hidden":"true"}},[this._v("#")]),this._v(" Master")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"kube-apiserver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kube-apiserver","aria-hidden":"true"}},[this._v("#")]),this._v(" kube-apiserver")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ systemctl status kube-apiserver\n\n$ journalctl -u kube-apiserver\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install kubectl")]),t._v("\n\n$ kubectl cluster-info\n\n$ kubectl get all --all-namespaces\n\n$ kubectl get componentstatuses\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -lnpt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" kube-apiserver\n\ntcp        0      0 192.168.57.110:6443     0.0.0.0:*               LISTEN      847/kube-apiserver\ntcp        0      0 127.0.0.1:8080          0.0.0.0:*               LISTEN      847/kube-apiserver\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("6443")]),this._v(" 接收 https 请求的安全端口，对所有请求做认证和授权")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"kube-controller-manager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kube-controller-manager","aria-hidden":"true"}},[this._v("#")]),this._v(" kube-controller-manager")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ systemctl status kube-controller-manager\n\n$ journalctl -u kube-controller-manager\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -lnpt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" kube-controll\n\ntcp        0      0 127.0.0.1:10257         0.0.0.0:*               LISTEN      638/kube-controller\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s --cacert /etc/kubernetes/certs/ca.pem https://127.0.0.1:10257/metrics "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("head")]),t._v("\n\n$ kubectl get endpoints kube-controller-manager --namespace"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("kube-system  -o yaml\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("10257")]),this._v(" 监听 10257 端口，接收 https 请求")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"kube-scheduler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kube-scheduler","aria-hidden":"true"}},[this._v("#")]),this._v(" kube-scheduler")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ systemctl status kube-scheduler\n\n$ journalctl -u kube-scheduler\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -lnpt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" kube-sche\n\ntcp        0      0 127.0.0.1:10251         0.0.0.0:*               LISTEN      636/kube-scheduler\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s http://127.0.0.1:10251/metrics "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("head")]),t._v("\n\n$ kubectl get endpoints kube-scheduler --namespace"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("kube-system  -o yaml\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("10251")]),this._v(" 接收 http 请求")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"worker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#worker","aria-hidden":"true"}},[this._v("#")]),this._v(" Worker")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"kubelet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kubelet","aria-hidden":"true"}},[this._v("#")]),this._v(" kubelet")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ systemctl status kubelet\n\n$ journalctl -u kubelet\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -lnpt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" kubelet\n\ntcp        0      0 127.0.0.1:10248         0.0.0.0:*               LISTEN      29531/kubelet\ntcp        0      0 192.168.57.111:10250    0.0.0.0:*               LISTEN      29531/kubelet\ntcp        0      0 127.0.0.1:41039         0.0.0.0:*               LISTEN      29531/kubelet\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("strong",[t._v("4194")]),t._v(" cadvisor http 服务")]),t._v(" "),s("li",[s("strong",[t._v("10248")]),t._v(" healthz http 服务")]),t._v(" "),s("li",[s("strong",[t._v("10250")]),t._v(" https API 服务 注意：未开启只读端口 10255")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"approve-kubelet-csr-请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#approve-kubelet-csr-请求","aria-hidden":"true"}},[this._v("#")]),this._v(" approve kubelet CSR 请求")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("\n$ kubectl get csr\n\n$ kubectl get nodes\n\nNo resources found.\n\n$ kubectl apply -f disk/system/csr-crb.yaml\n\n$ kubectl get csr\n\n$ kubectl get nodes\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"自动生成的证书"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动生成的证书","aria-hidden":"true"}},[this._v("#")]),this._v(" 自动生成的证书")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("而 kubelet 与 apiserver 通讯所使用的证书为 "),e("code",[this._v("kubelet-client.crt")]),this._v(" 剩下的 "),e("code",[this._v("kubelet.crt")]),this._v(" 将会被用于 kubelet server(10250) 做鉴权使用")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"kube-proxy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kube-proxy","aria-hidden":"true"}},[this._v("#")]),this._v(" kube-proxy")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ systemctl status kube-proxy\n\n$ journalctl -u kube-proxy\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -lnpt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" kube-proxy\n\ntcp        0      0 192.168.57.111:10249    0.0.0.0:*               LISTEN      656/kube-proxy\ntcp        0      0 192.168.57.111:10256    0.0.0.0:*               LISTEN      656/kube-proxy\ntcp6       0      0 :::8588                 :::*                    LISTEN      656/kube-proxy\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("10249")]),this._v(" http prometheus metrics port")]),this._v(" "),e("li",[e("strong",[this._v("10256")]),this._v(" http healthz port;")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"test-k8s-cluster"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-k8s-cluster","aria-hidden":"true"}},[this._v("#")]),this._v(" Test k8s Cluster")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" ~/lnmp/kubernetes\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" deployment/demo/\n\n$ kubectl create -f lnmp-ds.yaml\n\n$ kubectl get pods  -o wide"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" nginx-ds\n\nnginx-ds-dxc8j   1/1       Running   0          12s       172.30.100.2   coreos1\n\n$ kubectl get "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" nginx-ds\n\nnginx-ds     NodePort    10.254.199.71   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("none"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("        80:8448/TCP   3m\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("open browser "),e("code",[this._v("node_ip:8448")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"cleanup-test-resource"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cleanup-test-resource","aria-hidden":"true"}},[this._v("#")]),this._v(" Cleanup test resource")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ kubectl delete "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" -l test"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v("\n\n$ kubectl delete deployment -l test"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v("\n\n$ kubectl delete pod -l test"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v("\n\n$ kubectl delete daemonset -l test"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v("\n")])])])}],!1,null,null,null);r.options.__file="install.md";e.default=r.exports}}]);