(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[219,488],{6713:function(t,e,r){"use strict";r.d(e,{Df:function(){return u},M1:function(){return o},NV:function(){return f},TP:function(){return c},tx:function(){return p}});var n=r(5861),a=r(7757),i=r.n(a),s=r(3263).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"bab84c6abc9ea1f5c44be5c540a9092e"}}),u=function(){var t=(0,n.Z)(i().mark((function t(){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("trending/movie/day",{params:{page:1}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=(0,n.Z)(i().mark((function t(e){var r,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("movie/".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(i().mark((function t(e){var r,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("movie/".concat(e,"/credits"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(i().mark((function t(e){var r,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("movie/".concat(e,"/reviews"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(i().mark((function t(e){var r,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("search/movie",{params:{query:e}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},6864:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});var n="container_container__yWowe",a=r(184);var i=function(t){var e=t.children;return(0,a.jsx)("div",{className:n,children:e})}},488:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return s}});var n=r(4691),a="loader_box__zGRZa",i=r(184);var s=function(){return(0,i.jsx)("div",{className:a,children:(0,i.jsx)(n.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})}},7204:function(t,e,r){"use strict";r.d(e,{Z:function(){return l}});var n=r(1087),a=r(7689),i="MovieListItem_item__ZQ-IP",s="MovieListItem_img__2-byB",u="MovieListItem_title__XJUiR",c=r(184);var o=function(t){var e=t.title,r=t.poster_path;return(0,c.jsxs)("li",{className:i,children:[(0,c.jsx)("img",{className:s,src:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2".concat(r),alt:e,width:"150"}),(0,c.jsx)("h3",{className:u,children:e})]})},p="MovieList_list__yjDCC";function f(t){var e=t.items,r=(0,a.TH)(),i=e.map((function(t){var e=t.id,a=t.title,i=t.poster_path;return(0,c.jsx)("li",{children:(0,c.jsx)(n.rU,{to:"/movies/".concat(e),state:{from:r},children:(0,c.jsx)(o,{title:a,poster_path:i})})},e)}));return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("ul",{className:p,children:i})})}var l=f;f.defaultProps={items:[]}},3748:function(t,e,r){"use strict";r.d(e,{s:function(){return l}});var n=r(3433),a=r(1413),i=r(5861),s=r(9439),u=r(7757),c=r.n(u),o=r(2007),p=r.n(o),f=r(2791);function l(t){var e=t.getFetch,r=t.array,u=void 0===r?[]:r,o=t.params,p=t.firstRender,l=void 0===p?{}:p,m=(0,f.useState)({items:[],loading:!1,error:null}),h=(0,s.Z)(m,2),v=h[0],d=h[1];return(0,f.useEffect)((function(){function t(){return(t=(0,i.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d((function(t){return(0,a.Z)((0,a.Z)({},t),{},{loading:!0})})),t.prev=1,t.next=4,e(o);case 4:r=t.sent,d((function(t){return(0,a.Z)((0,a.Z)({},t),{},{items:(0,n.Z)(r)})})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),d((function(e){return(0,a.Z)((0,a.Z)({},e),{},{error:t.t0})}));case 11:return t.prev=11,d((function(t){return(0,a.Z)((0,a.Z)({},t),{},{loading:!1})})),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})))).apply(this,arguments)}l.current?l.current=!1:function(){t.apply(this,arguments)}()}),(0,n.Z)(u)),{state:v,setState:d}}l.defaultProps={getFetch:function(){},array:[],firstRender:{}},l.propTypes={getFetch:p().func.isRequired,array:p().array,params:p().string,firstRender:p().object}},2219:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return Z}});var n=r(1413),a=r(9439),i=r(1087),s=r(2791),u=r(4942),c=r(2007),o=r.n(c);function p(t){var e=t.onSubmit,r=t.initialState,i=(0,s.useState)({initialState:r}),c=(0,a.Z)(i,2),o=c[0],p=c[1],f=function(){p((0,n.Z)({},r))};return{state:o,setState:p,handleChange:function(t){var e=t.target,r=e.name,a=e.value,i=e.type,s=e.checked,c="checkbox"===i?s:a;p((function(t){return(0,n.Z)((0,n.Z)({},t),{},(0,u.Z)({},r,c))}))},handleSubmit:function(t){t.preventDefault(),e((0,n.Z)({},o)),f()}}}p.defaulProps={onSubmit:function(){},initialState:{}},p.propTypes={onSubmit:o().func.isRequired,initialState:o().object.isRequired};var f={search:""},l={wrapper:"moviesSearchForm_wrapper__wH9kq",label:"moviesSearchForm_label__OO2W6",input:"moviesSearchForm_input__390H4",button:"moviesSearchForm_button__FjFWY"},m=r(184);function h(t){var e=p({onSubmit:t.onSubmit,initialState:f}),r=e.state,n=e.handleChange,a=e.handleSubmit,i=r.search;return(0,m.jsx)("div",{className:l.wrapper,children:(0,m.jsxs)("form",{className:l.form,onSubmit:a,children:[(0,m.jsx)("input",{className:l.input,type:"text",name:"search",value:i,onChange:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0}),(0,m.jsx)("button",{className:l.button,type:"submit",children:"Search movie"})]})})}var v=h;h.defaultProps={onSubmit:function(){}};var d=r(7204),_=r(488),b=r(6713),x=r(3748);var y=function(){var t=(0,s.useRef)(!0),e=(0,i.lr)(),r=(0,a.Z)(e,2),u=r[0],c=r[1],o=u.get("search"),p=(0,x.s)({getFetch:b.NV,array:[o],params:o,firstRender:t}),f=p.state,l=p.setState,h=f.items,y=f.loading;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(v,{onSubmit:function(t){var e=t.search;c({search:e}),l((function(t){return(0,n.Z)((0,n.Z)({},t),{},{items:[]})}))}}),y&&(0,m.jsx)(_.default,{}),(0,m.jsx)(d.Z,{items:h})]})},g=r(6864);var Z=function(){return(0,m.jsx)("main",{children:(0,m.jsx)(g.Z,{children:(0,m.jsx)(y,{})})})}},888:function(t,e,r){"use strict";var n=r(9047);function a(){}function i(){}i.resetWarningCache=a,t.exports=function(){function t(t,e,r,a,i,s){if(s!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return t}t.isRequired=t;var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:a};return r.PropTypes=r,r}},2007:function(t,e,r){t.exports=r(888)()},9047:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=219.1ee51415.chunk.js.map