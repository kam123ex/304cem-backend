(function(e){function t(t){for(var n,a,u=t[0],i=t[1],c=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==s[u]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},s={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d217357":"a62aa533","chunk-2d22d746":"4974875a","chunk-36b69bc0":"0c7355b5","chunk-3e9e93f6":"79e64c3d","chunk-5008e19a":"8be71981","chunk-739297ef":"90a12881","chunk-7685059a":"7411985e"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-36b69bc0":1,"chunk-3e9e93f6":1,"chunk-5008e19a":1,"chunk-739297ef":1,"chunk-7685059a":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-2d217357":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-36b69bc0":"af14168a","chunk-3e9e93f6":"9a253942","chunk-5008e19a":"e60205ef","chunk-739297ef":"580b9edd","chunk-7685059a":"d24fc502"}[e]+".css",s=i.p+n,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var c=o[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===s))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){c=d[u],l=c.getAttribute("data-href");if(l===n||l===s)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],p.parentNode.removeChild(p),r(o)},p.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=s[e]=[t,r]}));t.push(n[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=s[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}s[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"214f":function(e,t,r){},"54a7":function(e,t,r){"use strict";var n=r("214f"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Navbar"),r("div",{staticClass:"container"},[e.error?r("Errors",{attrs:{msg:e.error}}):e._e(),r("router-view")],1)],1)},s=[],o=r("5530"),u=r("2f62"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[r("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e._v("My Diary")]),e._m(0),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[r("ul",{staticClass:"navbar-nav ml-auto"},[r("li",{staticClass:"nav-item active"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[e._v(" Home "),r("span",{staticClass:"sr-only"},[e._v("(current)")])])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[e._v("About")])],1),e.isLoggedIn?e._e():r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[e._v("Login")])],1),e.isLoggedIn?e._e():r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/register"}},[e._v("Register")])],1),e.isLoggedIn?r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/createDiary"}},[e._v("Create Diaries")])],1):e._e(),e.isLoggedIn?r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/diaries"}},[e._v("Diaries")])],1):e._e(),e.isLoggedIn?r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/profile"}},[e._v("Profile")])],1):e._e(),e.isLoggedIn?r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{to:"/logout"},on:{click:function(t){return t.preventDefault(),e.logoutUser(t)}}},[e._v("Logout")])]):e._e()])])],1)},c=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])}],l={computed:Object(o["a"])({},Object(u["c"])(["isLoggedIn"])),methods:Object(o["a"])(Object(o["a"])({},Object(u["b"])(["logout"])),{},{logoutUser:function(){this.logout()}})},d=l,p=r("2877"),f=Object(p["a"])(d,i,c,!1,null,"c1aabbb8",null),h=f.exports,m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"alert alert-danger"},[e._v(e._s(e.msg))])},g=[],v={props:["msg"]},b=v,_=(r("54a7"),Object(p["a"])(b,m,g,!1,null,"761c04db",null)),k=_.exports,y={components:{Navbar:h,Errors:k},computed:Object(o["a"])({},Object(u["c"])(["error"]))},w=y,C=Object(p["a"])(w,a,s,!1,null,null,null),O=C.exports,j=(r("45fc"),r("d3b7"),r("8c4f")),x=(r("96cf"),r("1da1")),q=r("7338"),D=r.n(q),R={token:localStorage.getItem("token")||"",user:{},diaries:{},diary:{},status:"",error:null},S={isLoggedIn:function(e){return!!e.token},authState:function(e){return e.status},user:function(e){return e.user},diaries:function(e){return e.diaries},diary:function(e){return e.diary},error:function(e){return e.error}},I={login:function(e,t){return Object(x["a"])(regeneratorRuntime.mark((function r(){var n,a,s,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,n("auth_request"),r.prev=2,r.next=5,D.a.post("http://localhost:3000/api/users/login",t);case 5:return a=r.sent,a.data.success&&(s=a.data.token,o=a.data.user,localStorage.setItem("token",s),D.a.defaults.headers.common["Authorization"]=s,n("auth_success",s,o)),r.abrupt("return",a);case 10:r.prev=10,r.t0=r["catch"](2),n("auth_error",r.t0);case 13:case"end":return r.stop()}}),r,null,[[2,10]])})))()},register:function(e,t){return Object(x["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,n("register_request"),r.next=5,D.a.post("http://localhost:3000/api/users/register",t);case 5:return a=r.sent,void 0!==a.data.success&&n("register_success"),r.abrupt("return",a);case 10:r.prev=10,r.t0=r["catch"](1),n("register_error",r.t0);case 13:case"end":return r.stop()}}),r,null,[[1,10]])})))()},getProfile:function(e){return Object(x["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,r("profile_request"),t.next=4,D.a.get("http://localhost:3000/api/users/profile");case 4:return n=t.sent,r("user_profile",n.data.user),t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})))()},logout:function(e){return Object(x["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,localStorage.removeItem("token");case 3:return r("logout"),delete D.a.defaults.headers.common["Authorization"],T.push("/login"),t.abrupt("return");case 7:case"end":return t.stop()}}),t)})))()},getDiary:function(e,t){return Object(x["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,n("diary_request"),r.next=5,D.a.get("http://localhost:3000/api/diaries/"+t);case 5:return a=r.sent,n("diary_data",a.data),r.abrupt("return",a);case 10:r.prev=10,r.t0=r["catch"](1),n("diary_error",r.t0);case 13:case"end":return r.stop()}}),r,null,[[1,10]])})))()},insertDiary:function(e,t){return Object(x["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,n("insert_request"),r.next=5,D.a.post("http://localhost:3000/api/diaries/insert",t);case 5:return a=r.sent,void 0!==a.data.success&&n("insert_success"),console.log(a.data),r.abrupt("return",a);case 11:r.prev=11,r.t0=r["catch"](1),n("insert_error",r.t0);case 14:case"end":return r.stop()}}),r,null,[[1,11]])})))()},updateDiary:function(e,t){return Object(x["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,console.log(t),r.prev=2,n("diary_request"),r.next=6,D.a.put("http://localhost:3000/api/diaries/update/"+t.diaryId,t);case 6:return a=r.sent,void 0!==a.data.success&&n("updateDiary_success"),console.log(a.data),r.abrupt("return",a);case 12:r.prev=12,r.t0=r["catch"](2),n("diary_error",r.t0);case 15:case"end":return r.stop()}}),r,null,[[2,12]])})))()},deleteDiary:function(e,t){return Object(x["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,n("diary_request"),r.next=5,D.a.delete("http://localhost:3000/api/diaries/delete/"+t);case 5:return a=r.sent,void 0!==a.data.success&&n("deleteDiary_success"),console.log(a.data),r.abrupt("return",a);case 11:r.prev=11,r.t0=r["catch"](1),n("diary_error",r.t0);case 14:case"end":return r.stop()}}),r,null,[[1,11]])})))()},getDiaries:function(e){return Object(x["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,r("diaries_request"),t.next=5,D.a.get("http://localhost:3000/api/diaries");case 5:return n=t.sent,r("diaries_data",n.data),console.log(n.data),t.abrupt("return",n);case 11:t.prev=11,t.t0=t["catch"](1),r("diaries_error",t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})))()}},L={auth_request:function(e){e.error=null,e.status="loading"},auth_success:function(e,t,r){e.token=t,e.user=r,e.status="success",e.error=null},auth_error:function(e,t){e.error=t.response.data.msg},register_request:function(e){e.error=null,e.status="loading"},register_success:function(e){e.error=null,e.status="success"},register_error:function(e,t){e.error=t.response.data.msg},logout:function(e){e.error=null,e.status="",e.token="",e.user=""},profile_request:function(e){e.status="loading"},user_profile:function(e,t){e.user=t},diaries_request:function(e){e.error=null,e.status="loading"},insert_request:function(e){e.error=null,e.status="loading"},insert_success:function(e){e.error=null,e.status="success"},insert_error:function(e,t){e.error=t.response.data.msg},diaries_data:function(e,t){e.diaries=t},diaries_error:function(e,t){e.error=t.response.data.msg},diary_request:function(e){e.error=null,e.status="loading"},diary_data:function(e,t){e.diary=t},diary_error:function(e,t){e.error=t.response.data.msg},updateDiary_request:function(e){e.error=null,e.status="loading"},updateDiary_success:function(e){e.error=null,e.status="success"},updateDiary_error:function(e,t){e.error=t.response.data.msg},deleteDiary_success:function(e){e.error=null,e.status="success"}},A={state:R,actions:I,mutations:L,getters:S};n["a"].use(u["a"]);var E=new u["a"].Store({state:{},mutations:{},actions:{},modules:{Auth:A}});n["a"].use(j["a"]);var P=new j["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:function(){return r.e("chunk-36b69bc0").then(r.bind(null,"abfb"))}},{path:"/about",name:"about",component:function(){return r.e("chunk-2d22d746").then(r.bind(null,"f820"))}},{path:"/login",name:"login",component:function(){return r.e("chunk-3e9e93f6").then(r.bind(null,"a55b"))},meta:{requiresGuest:!0}},{path:"/register",name:"register",component:function(){return r.e("chunk-5008e19a").then(r.bind(null,"73cf"))},meta:{requiresGuest:!0}},{path:"/profile",name:"profile",component:function(){return r.e("chunk-2d217357").then(r.bind(null,"c66d"))},meta:{requiresAuth:!0}},{path:"/diaries",name:"diaries",component:function(){return r.e("chunk-36b69bc0").then(r.bind(null,"abfb"))},meta:{requiresAuth:!0}},{path:"/diaries/:diaryId",name:"diary",component:function(){return r.e("chunk-739297ef").then(r.bind(null,"5fa4"))},meta:{requiresAuth:!0}},{path:"/createDiary",name:"createDiary",component:function(){return r.e("chunk-7685059a").then(r.bind(null,"0987"))},meta:{requiresAuth:!0}}]});P.beforeEach((function(e,t,r){e.matched.some((function(e){return e.meta.requiresAuth}))?E.getters.isLoggedIn?r():r("/login"):e.matched.some((function(e){return e.meta.requiresGuest}))&&E.getters.isLoggedIn?r("/profile"):r()}));var T=P;n["a"].config.productionTip=!1,n["a"].prototype.$http=D.a;var N=localStorage.getItem("token");N&&(n["a"].prototype.$http.defaults.headers.common["Authorization"]=N),new n["a"]({router:T,store:E,render:function(e){return e(O)}}).$mount("#app")}});
//# sourceMappingURL=app.3b6890a1.js.map