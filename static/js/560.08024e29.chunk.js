(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[560,488],{6713:function(e,r,t){"use strict";t.d(r,{Df:function(){return c},M1:function(){return o},NV:function(){return f},TP:function(){return i},tx:function(){return p}});var n=t(5861),a=t(7757),s=t.n(a),u=t(3263).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"bab84c6abc9ea1f5c44be5c540a9092e"}}),c=function(){var e=(0,n.Z)(s().mark((function e(){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("trending/movie/day",{params:{page:1}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("movie/".concat(r,"/reviews"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("search/movie",{params:{query:r}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},488:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return u}});var n=t(4691),a="loader_box__zGRZa",s=t(184);var u=function(){return(0,s.jsx)("div",{className:a,children:(0,s.jsx)(n.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})}},3748:function(e,r,t){"use strict";t.d(r,{s:function(){return v}});var n=t(3433),a=t(1413),s=t(5861),u=t(9439),c=t(7757),i=t.n(c),o=t(2007),p=t.n(o),f=t(2791);function v(e){var r=e.getFetch,t=e.array,c=void 0===t?[]:t,o=e.params,p=e.firstRender,v=void 0===p?{}:p,l=(0,f.useState)({items:[],loading:!1,error:null}),d=(0,u.Z)(l,2),h=d[0],m=d[1];return(0,f.useEffect)((function(){function e(){return(e=(0,s.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m((function(e){return(0,a.Z)((0,a.Z)({},e),{},{loading:!0})})),e.prev=1,e.next=4,r(o);case 4:t=e.sent,m((function(e){return(0,a.Z)((0,a.Z)({},e),{},{items:(0,n.Z)(t)})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),m((function(r){return(0,a.Z)((0,a.Z)({},r),{},{error:e.t0})}));case 11:return e.prev=11,m((function(e){return(0,a.Z)((0,a.Z)({},e),{},{loading:!1})})),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}v.current?v.current=!1:function(){e.apply(this,arguments)}()}),(0,n.Z)(c)),{state:h,setState:m}}v.defaultProps={getFetch:function(){},array:[],firstRender:{}},v.propTypes={getFetch:p().func.isRequired,array:p().array,params:p().string,firstRender:p().object}},560:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return m}});var n=t(7689),a="reviewsItem_list__6uUMa",s="reviewsItem_item__H92z3",u="reviewsItem_author__Nw6Zc",c="reviewsItem_content__viU8c",i=t(184);function o(e){var r=e.items.map((function(e){var r=e.id,t=e.author,n=e.content;return(0,i.jsxs)("li",{className:s,children:[(0,i.jsx)("p",{className:u,children:t}),(0,i.jsx)("p",{className:c,children:n})]},r)}));return(0,i.jsx)("ul",{className:a,children:r})}var p=o;o.defaultProps={items:[]};var f=t(488),v=t(3748),l=t(6713),d={};var h=function(){var e=(0,n.UO)().id,r=(0,v.s)({getFetch:l.tx,array:[e],params:e}).state,t=r.items,a=r.loading,s=r.error,u=t.length>0;return(0,i.jsxs)(i.Fragment,{children:[a&&(0,i.jsx)(f.default,{}),s&&(0,i.jsx)("p",{className:d.p,children:"Reviews not found"}),!u&&!a&&(0,i.jsx)("p",{children:"Movie has not reviews."}),u&&(0,i.jsx)(p,{items:t})]})};var m=function(){return(0,i.jsx)(h,{})}},888:function(e,r,t){"use strict";var n=t(9047);function a(){}function s(){}s.resetWarningCache=a,e.exports=function(){function e(e,r,t,a,s,u){if(u!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:s,resetWarningCache:a};return t.PropTypes=t,t}},2007:function(e,r,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=560.08024e29.chunk.js.map