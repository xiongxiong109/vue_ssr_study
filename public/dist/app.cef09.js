webpackJsonp([3],{38:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{meeting:""}},methods:{evtChange:function(){this.meeting="Hello SSR"}}}},39:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CHANGE_TITLE=void 0;var u=n(22),r=function(e){return e&&e.__esModule?e:{default:e}}(u),o=t.CHANGE_TITLE="COM/CHANGE_TITLE",a=(0,r.default)({},o,function(e,t){e.commit(o,t)});t.default=a},42:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}var r=n(41),o=u(r),a=n(14),i=u(a),c=n(80),l=(0,c.createApp)(),s=l.app,f=l.router,d=l.store;i.default.mixin({beforeMount:function(){var e=this.$options.asyncData;e&&(this.dataPromise=e({store:this.$store,route:this.$route}))}}),window.__INITIAL_STATE__&&d.replaceState(window.__INITIAL_STATE__),f.onReady(function(){f.beforeResolve(function(e,t,n){var u=f.getMatchedComponents(e),r=f.getMatchedComponents(t),a=!1,i=u.filter(function(e,t){return a||(a=r[t]!==e)});if(!i.length)return n();o.default.all(i.map(function(t){if(t.asyncData)return t.asyncData({store:d,route:e})})).then(function(){n()}).catch(n)}),s.$mount("#app")})},80:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}function r(){var e=(0,s.createRouter)(),t=(0,l.createStore)();return(0,f.sync)(t,e),{app:new a.default({router:e,store:t,render:function(e){return e(c.default)}}),router:e,store:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.createApp=r;var o=n(14),a=u(o),i=n(81),c=u(i),l=n(83),s=n(90),f=n(92)},81:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(38),r=n.n(u);for(var o in u)"default"!==o&&function(e){n.d(t,e,function(){return u[e]})}(o);var a=n(82),i=n(40),c=i(r.a,a.a,!1,null,null,null);t.default=c.exports},82:function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ssr-app",attrs:{id:"app"}},[n("button",{on:{click:e.evtChange}},[e._v("click me to see the answer")]),n("p",[e._v(e._s(e.meeting))]),n("router-view")],1)},r=[],o={render:u,staticRenderFns:r};t.a=o},83:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}function r(){return new c.default.Store({state:s.default,actions:d.default,mutations:p.default})}Object.defineProperty(t,"__esModule",{value:!0}),t.createStore=r;var o=n(14),a=u(o),i=n(84),c=u(i),l=n(85),s=u(l),f=n(39),d=u(f),_=n(89),p=u(_);a.default.use(c.default)},85:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u={title:""};t.default=u},89:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(22),r=function(e){return e&&e.__esModule?e:{default:e}}(u),o=n(39),a=(0,r.default)({},o.CHANGE_TITLE,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";e.title=t});t.default=a},90:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.createRouter=void 0;var r=n(14),o=u(r),a=n(91),i=u(a);o.default.use(i.default);var c=function(){return n.e(0).then(n.bind(null,93))},l=function(){return n.e(1).then(n.bind(null,94))};t.createRouter=function(){return new i.default({mode:"history",fallback:!1,routes:[{name:"index",path:"/",redirect:"/home"},{name:"home",path:"/home",component:c},{name:"list",path:"/list",component:l}]})}}},[42]);