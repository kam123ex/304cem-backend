(function(t){function e(e){for(var a,n,i=e[0],c=e[1],u=e[2],l=0,d=[];l<i.length;l++)n=i[l],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,n=1;n<r.length;n++){var i=r[n];0!==s[i]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=r[0]))}return t}var a={},n={app:0},s={app:0},o=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d217357":"a62aa533","chunk-2d22d746":"56b51715","chunk-3ece0627":"97fb74a6","chunk-5008e19a":"8be71981"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={"chunk-3ece0627":1,"chunk-5008e19a":1};n[t]?e.push(n[t]):0!==n[t]&&r[t]&&e.push(n[t]=new Promise((function(e,r){for(var a="css/"+({}[t]||t)+"."+{"chunk-2d217357":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-3ece0627":"9a253942","chunk-5008e19a":"e60205ef"}[t]+".css",s=c.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===s))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===a||l===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete n[t],p.parentNode.removeChild(p),r(o)},p.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){n[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,r){a=s[t]=[e,r]}));e.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var r=s[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",d.name="ChunkLoadError",d.type=a,d.request=n,r[1](d)}s[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(r,a,function(e){return t[e]}.bind(null,a));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"214f":function(t,e,r){},"54a7":function(t,e,r){"use strict";var a=r("214f"),n=r.n(a);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Navbar"),r("div",{staticClass:"container"},[t.error?r("Errors",{attrs:{msg:t.error}}):t._e(),r("router-view")],1)],1)},s=[],o=r("5530"),i=r("2f62"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[r("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("My Diary")]),t._m(0),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[r("ul",{staticClass:"navbar-nav ml-auto"},[r("li",{staticClass:"nav-item active"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v(" Home "),r("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1),t.isLoggedIn?t._e():r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v("Login")])],1),t.isLoggedIn?t._e():r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/register"}},[t._v("Register")])],1),t.isLoggedIn?r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/profile"}},[t._v("Profile")])],1):t._e(),t.isLoggedIn?r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{to:"/logout"},on:{click:function(e){return e.preventDefault(),t.logoutUser(e)}}},[t._v("Logout")])]):t._e()])])],1)},u=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])}],l={computed:Object(o["a"])({},Object(i["c"])(["isLoggedIn"])),methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["logout"])),{},{logoutUser:function(){this.logout()}})},d=l,p=r("2877"),f=Object(p["a"])(d,c,u,!1,null,"4e5331db",null),m=f.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.msg))])},v=[],h={props:["msg"]},b=h,_=(r("54a7"),Object(p["a"])(b,g,v,!1,null,"761c04db",null)),k=_.exports,C={components:{Navbar:m,Errors:k},computed:Object(o["a"])({},Object(i["c"])(["error"]))},y=C,w=Object(p["a"])(y,n,s,!1,null,null,null),x=w.exports,j=(r("45fc"),r("d3b7"),r("8c4f")),O=(r("96cf"),r("1da1")),E=r("7338"),S=r.n(E),I={token:localStorage.getItem("token")||"",user:{},status:"",error:null},M={isLoggedIn:function(t){return!!t.token},authState:function(t){return t.status},user:function(t){return t.user},error:function(t){return t.error}},q={login:function(t,e){return Object(O["a"])(regeneratorRuntime.mark((function r(){var a,n,s,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t.commit,a("auth_request"),r.prev=2,r.next=5,S.a.post("/api/users/login",e);case 5:return n=r.sent,n.data.success&&(s=n.data.token,o=n.data.user,localStorage.setItem("token",s),S.a.defaults.headers.common["Authorization"]=s,a("auth_success",s,o)),r.abrupt("return",n);case 10:r.prev=10,r.t0=r["catch"](2),a("auth_error",r.t0);case 13:case"end":return r.stop()}}),r,null,[[2,10]])})))()},register:function(t,e){return Object(O["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t.commit,r.prev=1,a("register_request"),r.next=5,S.a.post("/api/users/register",e);case 5:return n=r.sent,void 0!==n.data.success&&a("register_success"),r.abrupt("return",n);case 10:r.prev=10,r.t0=r["catch"](1),a("register_error",r.t0);case 13:case"end":return r.stop()}}),r,null,[[1,10]])})))()},getProfile:function(t){return Object(O["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,r("profile_request"),e.next=4,S.a.get("/api/users/profile");case 4:return a=e.sent,r("user_profile",a.data.user),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))()},logout:function(t){return Object(O["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,localStorage.removeItem("token");case 3:return r("logout"),delete S.a.defaults.headers.common["Authorization"],J.push("/login"),e.abrupt("return");case 7:case"end":return e.stop()}}),e)})))()},diary:function(t,e){return Object(O["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t.commit,r.prev=1,a("diary_request"),r.next=5,S.a.post("/api/users/diary",e);case 5:return n=r.sent,void 0!==n.data.success&&a("diary_success"),r.abrupt("return",n);case 10:r.prev=10,r.t0=r["catch"](1),a("diary_error",r.t0);case 13:case"end":return r.stop()}}),r,null,[[1,10]])})))()},getDiary:function(t){return Object(O["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,r("diary_request"),e.next=5,S.a.post("/api/users/diary");case 5:return a=e.sent,void 0!==a.data.success&&r("diary_success"),e.abrupt("return",a);case 10:e.prev=10,e.t0=e["catch"](1),r("diary_error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()}},L={auth_request:function(t){t.error=null,t.status="loading"},auth_success:function(t,e,r){t.token=e,t.user=r,t.status="success",t.error=null},auth_error:function(t,e){t.error=e.response.data.msg},register_request:function(t){t.error=null,t.status="loading"},register_success:function(t){t.error=null,t.status="success"},register_error:function(t,e){t.error=e.response.data.msg},logout:function(t){t.error=null,t.status="",t.token="",t.user=""},profile_request:function(t){t.status="loading"},user_profile:function(t,e){t.user=e},diary_request:function(t){t.error=null,t.status="loading"},diary_success:function(t){t.error=null,t.status="success"},diary_error:function(t,e){t.error=e.response.data.msg},diary_data:function(t,e){t.diary=e}},A={state:I,actions:q,mutations:L,getters:M};a["a"].use(i["a"]);var N=new i["a"].Store({state:{},mutations:{},actions:{},modules:{Auth:A}}),P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("div",{staticClass:"jumbotron jumbotron-fluid"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"display-4"},[t._v("MEVN Stack")]),r("p",{staticClass:"lead"},[t._v("Simple authentication application built with MEVN Stack using Express, Node.js, Vue.js and MongoDB by Codebook Inc.")])])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-3 col-sm-6 col-xs-12"},[r("div",{staticClass:"card bg-dark text-white"},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v("MongoDB")]),r("p",{staticClass:"card-text"},[t._v("MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemata. MongoDB is developed by MongoDB Inc.")]),r("a",{staticClass:"btn bg-white",attrs:{href:"https://www.mongodb.com/",target:"_blank"}},[t._v("More Info.")])])])]),r("div",{staticClass:"col-md-3 col-sm-6 col-xs-12"},[r("div",{staticClass:"card bg-info text-white"},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v("Express.js")]),r("p",{staticClass:"card-text"},[t._v("Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.")]),r("a",{staticClass:"btn bg-white",attrs:{href:"https://expressjs.com/",target:"_blank"}},[t._v("More Info.")])])])]),r("div",{staticClass:"col-md-3 col-sm-6 col-xs-12"},[r("div",{staticClass:"card bg-danger text-white"},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v("Vue.js")]),r("p",{staticClass:"card-text"},[t._v("Vue.js features an incrementally adoptable architecture that focuses on declarative rendering and component composition. Advanced features required for complex applications such as routing...")]),r("a",{staticClass:"btn bg-white",attrs:{href:"https://vuejs.org/",target:"_blank"}},[t._v("More Info.")])])])]),r("div",{staticClass:"col-md-3 col-sm-6 col-xs-12"},[r("div",{staticClass:"card bg-success text-white"},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v("Node.js")]),r("p",{staticClass:"card-text"},[t._v('As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently.')]),r("a",{staticClass:"btn bg-white",attrs:{href:"https://nodejs.org/",target:"_blank"}},[t._v("More Info.")])])])])])])}],D={name:"home",components:{}},T=D,B=Object(p["a"])(T,P,R,!1,null,null,null),$=B.exports;a["a"].use(j["a"]);var V=new j["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:$},{path:"/about",name:"about",component:function(){return r.e("chunk-2d22d746").then(r.bind(null,"f820"))}},{path:"/login",name:"login",component:function(){return r.e("chunk-3ece0627").then(r.bind(null,"a55b"))},meta:{requiresGuest:!0}},{path:"/register",name:"register",component:function(){return r.e("chunk-5008e19a").then(r.bind(null,"73cf"))},meta:{requiresGuest:!0}},{path:"/profile",name:"profile",component:function(){return r.e("chunk-2d217357").then(r.bind(null,"c66d"))},meta:{requiresAuth:!0}}]});V.beforeEach((function(t,e,r){t.matched.some((function(t){return t.meta.requiresAuth}))?N.getters.isLoggedIn?r():r("/login"):t.matched.some((function(t){return t.meta.requiresGuest}))&&N.getters.isLoggedIn?r("/profile"):r()}));var J=V;a["a"].config.productionTip=!1,a["a"].prototype.$http=S.a;var z=localStorage.getItem("token");z&&(a["a"].prototype.$http.defaults.headers.common["Authorization"]=z),new a["a"]({router:J,store:N,render:function(t){return t(x)}}).$mount("#app")}});
//# sourceMappingURL=app.70ea866d.js.map