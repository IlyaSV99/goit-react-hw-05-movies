(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[390,488],{6713:function(t,e,r){"use strict";r.d(e,{Df:function(){return c},M1:function(){return o},NV:function(){return p},TP:function(){return u},tx:function(){return f}});var n=r(5861),a=r(7757),i=r.n(a),s=r(3263).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"bab84c6abc9ea1f5c44be5c540a9092e"}}),c=function(){var t=(0,n.Z)(i().mark((function t(){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("trending/movie/day",{params:{page:1}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,n.Z)(i().mark((function t(e){var r,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("movie/".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(i().mark((function t(e){var r,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("movie/".concat(e,"/credits"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(i().mark((function t(e){var r,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("movie/".concat(e,"/reviews"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(i().mark((function t(e){var r,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("search/movie",{params:{query:e}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},6864:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});var n="container_container__yWowe",a=r(184);var i=function(t){var e=t.children;return(0,a.jsx)("div",{className:n,children:e})}},488:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return s}});var n=r(4691),a="loader_box__zGRZa",i=r(184);var s=function(){return(0,i.jsx)("div",{className:a,children:(0,i.jsx)(n.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})}},7204:function(t,e,r){"use strict";r.d(e,{Z:function(){return l}});var n=r(1087),a=r(7689),i="MovieListItem_item__ZQ-IP",s="MovieListItem_img__2-byB",c="MovieListItem_title__XJUiR",u=r(184);var o=function(t){var e=t.title,r=t.poster_path;return(0,u.jsxs)("li",{className:i,children:[(0,u.jsx)("img",{className:s,src:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2".concat(r),alt:e,width:"150"}),(0,u.jsx)("h3",{className:c,children:e})]})},f="MovieList_list__yjDCC";function p(t){var e=t.items,r=(0,a.TH)(),i=e.map((function(t){var e=t.id,a=t.title,i=t.poster_path;return(0,u.jsx)("li",{children:(0,u.jsx)(n.rU,{to:"/movies/".concat(e),state:{from:r},children:(0,u.jsx)(o,{title:a,poster_path:i})})},e)}));return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("ul",{className:f,children:i})})}var l=p;p.defaultProps={items:[]}},3748:function(t,e,r){"use strict";r.d(e,{s:function(){return l}});var n=r(3433),a=r(1413),i=r(5861),s=r(9439),c=r(7757),u=r.n(c),o=r(2007),f=r.n(o),p=r(2791);function l(t){var e=t.getFetch,r=t.array,c=void 0===r?[]:r,o=t.params,f=t.firstRender,l=void 0===f?{}:f,d=(0,p.useState)({items:[],loading:!1,error:null}),v=(0,s.Z)(d,2),h=v[0],m=v[1];return(0,p.useEffect)((function(){function t(){return(t=(0,i.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m((function(t){return(0,a.Z)((0,a.Z)({},t),{},{loading:!0})})),t.prev=1,t.next=4,e(o);case 4:r=t.sent,m((function(t){return(0,a.Z)((0,a.Z)({},t),{},{items:(0,n.Z)(r)})})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),m((function(e){return(0,a.Z)((0,a.Z)({},e),{},{error:t.t0})}));case 11:return t.prev=11,m((function(t){return(0,a.Z)((0,a.Z)({},t),{},{loading:!1})})),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})))).apply(this,arguments)}l.current?l.current=!1:function(){t.apply(this,arguments)}()}),(0,n.Z)(c)),{state:h,setState:m}}l.defaultProps={getFetch:function(){},array:[],firstRender:{}},l.propTypes={getFetch:f().func.isRequired,array:f().array,params:f().string,firstRender:f().object}},5390:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return p}});var n=r(3748),a=r(488),i=r(7204),s=r(6713),c="trendMovies_title__7mUby",u=r(184);var o=function(){var t=(0,n.s)({getFetch:s.Df}).state,e=t.items,r=t.loading,o=t.error;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h1",{className:c,children:"Films in trend"}),r&&(0,u.jsx)(a.default,{}),o&&(0,u.jsx)("p",{children:"Something went wrong"}),(0,u.jsx)(i.Z,{items:e})]})},f=r(6864);var p=function(){return(0,u.jsx)("main",{children:(0,u.jsx)(f.Z,{children:(0,u.jsx)(o,{})})})}},888:function(t,e,r){"use strict";var n=r(9047);function a(){}function i(){}i.resetWarningCache=a,t.exports=function(){function t(t,e,r,a,i,s){if(s!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return t}t.isRequired=t;var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:a};return r.PropTypes=r,r}},2007:function(t,e,r){t.exports=r(888)()},9047:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=390.d5ab0926.chunk.js.map