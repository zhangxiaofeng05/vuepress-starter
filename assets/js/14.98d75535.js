(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{413:function(t,a,i){"use strict";i.r(a);var _=i(69),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h2",{attrs:{id:"对接文档"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#对接文档"}},[t._v("#")]),t._v(" 对接文档")]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),i("ol",[i("li",[t._v("客户投放的产品是什么类型(H5、安卓、ios)")]),t._v(" "),i("li",[t._v("业务上需要对接几个转化节点(代表什么含义)")]),t._v(" "),i("li",[t._v("给客户的文档是哪个(是不是最新的)")]),t._v(" "),i("li",[t._v("如果客户是H5落地页,每一个节点是js还是api")])])]),t._v(" "),i("h3",{attrs:{id:"h5"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#h5"}},[t._v("#")]),t._v(" H5")]),t._v(" "),i("p",[t._v("最新文档V4.0.0")]),t._v(" "),i("h4",{attrs:{id:"qa"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#qa"}},[t._v("#")]),t._v(" QA")]),t._v(" "),i("ol",[i("li",[t._v("Q：在客户落地页url上拼接的参数plid,sign,mob_cid是唯一点击id吗？")])]),t._v(" "),i("blockquote",[i("p",[t._v("A：不全是。"),i("br"),t._v("\n投放的两种形式(灼见客户:id=82(H5_自建站_JS),id=52(H5Redirect))"),i("br"),t._v("\nid=52：包链接,出的分链是我们的域名,由分链跳转到客户落地页,跳转的时候拼接动态参数"),i("code",[t._v("mob_cid")]),t._v("和当前分链的固定分链id---"),i("code",[t._v("plid")]),i("br"),t._v("\nid=82：直投,出的分链是拼接固定的分链id---"),i("code",[t._v("plid")]),t._v("和"),i("code",[t._v("sign")]),t._v(",这种方式没有办法回传媒体,只能自己收到转化数据"),i("br"),t._v("\n所以和客户对接的时候有三个参数mob_cid、plid、sign,"),i("br"),t._v("\n有mob_cid的回传是根据唯一点击归因到分链的,mob_cid和type是唯一的，第二次收到会提示重复回调，不会入库;"),i("br"),t._v("\n有sign的回传是根据分链id累计归因到分链的，查不到对应的点击，没有办法回传，显示的数据是收到的数据")])]),t._v(" "),i("ol",{attrs:{start:"2"}},[i("li",[t._v("Q：js和api回传应该怎么选择？")])]),t._v(" "),i("blockquote",[i("p",[t._v("A：首先要知道js和api的本质是一样的，接收的数据是一样的，只是回传的方式不一样。"),i("br"),t._v("\n比如：回传type=0(表单)、type=1(激活)、type=2(付费)"),i("br"),t._v("\n表单：js和api在html页面中都可以，激活：在落地页不能确认，只能在客户服务器上确认，然后回传转化数据，只能api，付费也是只能api"),i("br"),t._v("\n结论：客户可以选择(一个转化事件js和api只能二选一，否则会重复)")])]),t._v(" "),i("ul",[i("li",[t._v("type=0:js、type=1:api、type=2:api")]),t._v(" "),i("li",[t._v("type=0:api、type=1:api、type=2:api")])]),t._v(" "),i("div",{staticClass:"custom-block danger"},[i("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),i("p",[t._v("错误回传：type=0:js   type=0,1,2:api  type=0回传重复")])]),t._v(" "),i("h3",{attrs:{id:"app"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#app"}},[t._v("#")]),t._v(" APP")]),t._v(" "),i("p",[i("code",[t._v("android&ios")]),t._v(",最新文档V3.0.0")]),t._v(" "),i("h3",{attrs:{id:"返回到上一级"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#返回到上一级"}},[t._v("#")]),t._v(" "),i("RouterLink",{attrs:{to:"/zh/work/"}},[t._v("返回到上一级")])],1)])}),[],!1,null,null,null);a.default=s.exports}}]);