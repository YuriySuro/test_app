(()=>{"use strict";var e,t={606:(e,t,n)=>{var r=n(294),a=n(935),u=n(372),c=n(399),o=(0,c.oM)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),s=o.actions,l=s.login,m=s.logout,i=function(e){return e.user.user};const f=o.reducer;var p=n(861),v=n(152),g=n(757),d=n.n(g),h=n(669),E=n.n(h);const b=function(){var e=(0,r.useState)(""),t=(0,v.Z)(e,2),n=t[0],a=t[1],c=(0,r.useState)(""),o=(0,v.Z)(c,2),s=o[0],m=o[1],i=(0,r.useState)(""),f=(0,v.Z)(i,2),g=f[0],h=f[1],b=(0,u.I0)(),k=!1,x=function(){var e=(0,p.Z)(d().mark((function e(t){var r;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,E().post("http://localhost:5000/login",{name:n,email:s,message:g});case 3:return r=e.sent,b(l({name:n,email:s,message:g,loggedIn:!0})),alert(r.data),k||(a(""),m(""),h("")),e.abrupt("return",(function(){return k=!0}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.createElement("form",{className:"our_form",onSubmit:function(e){return x(e)}},r.createElement("h3",null,"Reach out to us!"),r.createElement("input",{type:"text",placeholder:"Your name*",value:n,onChange:function(e){return a(e.target.value)}}),r.createElement("input",{type:"email",placeholder:"Your email*",value:s,onChange:function(e){return m(e.target.value)}}),r.createElement("textarea",{placeholder:"Your message*",value:g,onChange:function(e){return h(e.target.value)}}),r.createElement("button",{type:"submit"},"Send message"))},k=function(){var e=(0,u.v9)(i),t=(0,u.I0)();return r.createElement("div",{className:"our_form"},r.createElement("h3",null,"Welcome ",r.createElement("span",null,e.name)),r.createElement("button",{type:"submit",onClick:function(e){return e.preventDefault(),void t(m())}},"Logout"))},x=function(){var e=(0,r.useState)([]),t=(0,v.Z)(e,2),n=t[0],a=t[1],u=!1;return(0,r.useEffect)((0,p.Z)(d().mark((function e(){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E().get("http://localhost:5000/socialnetworks");case 2:return t=e.sent,u||a(t.data),e.abrupt("return",(function(){return u=!0}));case 5:case"end":return e.stop()}}),e)}))),[]),r.createElement("div",{className:"social_networks"},n.map((function(e){return r.createElement("a",{key:e.id,href:"https://".concat(e.name,".com")},r.createElement("img",{src:"./assets/img/".concat(e.name,".svg"),className:e.name,alt:e.name}))})))},y=function(){var e=(0,r.useState)([]),t=(0,v.Z)(e,2),n=t[0],a=t[1],u=!1;return(0,r.useEffect)((0,p.Z)(d().mark((function e(){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E().get("http://localhost:5000/images/imagestop");case 2:return t=e.sent,u||a(t.data),e.abrupt("return",(function(){return u=!0}));case 5:case"end":return e.stop()}}),e)}))),[]),r.createElement(r.Fragment,null,n.map((function(e){return r.createElement("img",{key:e.id,className:"".concat(e.name),src:"./assets/img/".concat(e.name,".png"),alt:"".concat(e.name)})})))},w=function(){var e=(0,r.useState)([]),t=(0,v.Z)(e,2),n=t[0],a=t[1],u=!1;return(0,r.useEffect)((0,p.Z)(d().mark((function e(){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E().get("http://localhost:5000/images/imagesmiddle");case 2:return t=e.sent,u||a(t.data),e.abrupt("return",(function(){return u=!0}));case 5:case"end":return e.stop()}}),e)}))),[]),r.createElement(r.Fragment,null,n.map((function(e){return r.createElement("img",{key:e.id,className:"".concat(e.name),src:"./assets/img/".concat(e.name,".png"),alt:"".concat(e.name)})})))},Z=function(){var e=(0,r.useState)([]),t=(0,v.Z)(e,2),n=t[0],a=t[1];return(0,r.useEffect)((0,p.Z)(d().mark((function e(){var t,n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!1,e.next=3,E().get("http://localhost:5000/images/imagesbottom");case 3:return n=e.sent,t||a(n.data),e.abrupt("return",(function(){return cleanupFunction=!0}));case 6:case"end":return e.stop()}}),e)}))),[]),r.createElement(r.Fragment,null,n.map((function(e){return r.createElement("img",{key:e.id,src:"./assets/img/".concat(e.name,".png"),alt:"".concat(e.name),className:"".concat(e.name)})})))},O=function(){var e=(0,u.v9)(i);return r.createElement("div",{className:"form_container"},r.createElement("div",{className:"form_background"}),r.createElement(y,null),e?r.createElement(k,null):r.createElement(b,null),r.createElement(w,null),r.createElement("div",{className:"footer"}),r.createElement(x,null),r.createElement(Z,null))},N=(0,c.xC)({reducer:{user:f}});a.render(r.createElement(u.zt,{store:N},r.createElement(O,null)),document.getElementById("app"))}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var u=n[e]={exports:{}};return t[e](u,u.exports,r),u.exports}r.m=t,e=[],r.O=(t,n,a,u)=>{if(!n){var c=1/0;for(m=0;m<e.length;m++){for(var[n,a,u]=e[m],o=!0,s=0;s<n.length;s++)(!1&u||c>=u)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(o=!1,u<c&&(c=u));if(o){e.splice(m--,1);var l=a();void 0!==l&&(t=l)}}return t}u=u||0;for(var m=e.length;m>0&&e[m-1][2]>u;m--)e[m]=e[m-1];e[m]=[n,a,u]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,u,[c,o,s]=n,l=0;if(c.some((t=>0!==e[t]))){for(a in o)r.o(o,a)&&(r.m[a]=o[a]);if(s)var m=s(r)}for(t&&t(n);l<c.length;l++)u=c[l],r.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return r.O(m)},n=self.webpackChunktest_app=self.webpackChunktest_app||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[736],(()=>r(606)));a=r.O(a)})();
//# sourceMappingURL=main.js.map