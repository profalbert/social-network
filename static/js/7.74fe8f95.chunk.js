(window["webpackJsonpreact-kabzda-1"]=window["webpackJsonpreact-kabzda-1"]||[]).push([[7],{298:function(e,n,t){e.exports={selectedPage:"Paginator_selectedPage__2oU5Y",pogination:"Paginator_pogination__oF_EG",pageNumber:"Paginator_pageNumber__29o1y",poginatorButton:"Paginator_poginatorButton__37JXT"}},299:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var s=o.apply(null,r);s&&e.push(s)}else if("object"===a)for(var l in r)t.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(e.exports=r)}()},302:function(e,n,t){"use strict";t.r(n);var r=t(56),o=t(57),a=t(60),s=t(58),l=t(61),u=t(0),i=t.n(u),c=t(12),f=t(59),p=t(298),g=t.n(p),h=t(299),m=t.n(h),d=function(e){for(var n=e.totalUsersCount,t=e.pageSize,r=e.currentPage,o=e.onPageChanged,a=e.portionSize,s=void 0===a?10:a,l=Math.ceil(n/t),p=[],h=1;h<=l;h++)p.push(h);var d=Math.ceil(l/s),P=Object(u.useState)(1),v=Object(f.a)(P,2),w=v[0],b=v[1],E=(w-1)*s+1,y=w*s;return Object(u.useEffect)((function(){b(Math.ceil(r/s))}),[r,s]),i.a.createElement("div",{className:m()(g.a.pogination)},w>1&&i.a.createElement("button",{className:g.a.poginatorButton,onClick:function(){b(w-1)}},"PREV"),p.filter((function(e){return e>=E&&e<=y})).map((function(e){return i.a.createElement("span",{className:m()(Object(c.a)({},g.a.selectedPage,r===e),g.a.pageNumber),key:e,onClick:function(){o(e)}},e)})),d>w&&i.a.createElement("button",{className:g.a.poginatorButton,onClick:function(){b(w+1)}},"NEXT"))},P=t(51),v=t.n(P),w=t(67),b=t.n(w),E=t(7),y=function(e){var n=e.user;return i.a.createElement("div",{className:v.a.User},i.a.createElement("div",{className:v.a.UserImg},i.a.createElement(E.b,{to:"/profile/"+n.id},i.a.createElement("img",{className:v.a.userPhoto,src:null!=n.photos.small?n.photos.small:b.a,alt:"icon"}))),i.a.createElement("div",{className:v.a.UserInfo},i.a.createElement("div",{className:v.a.UserName},n.name),i.a.createElement("div",{className:v.a.UserStatus},n.status?'"'.concat(n.status,'"'):'"'.concat("no information",'"')),i.a.createElement("div",{className:v.a.UserFollow},n.followed?i.a.createElement("button",{className:v.a.UserFollowUnfol,disabled:!e.isAuth||e.followingInProgress.some((function(e){return e===n.id})),onClick:function(){e.unfollow(n.id)}},"Unfollow"):i.a.createElement("button",{className:v.a.UserFollowFol,disabled:!e.isAuth||e.followingInProgress.some((function(e){return e===n.id})),onClick:function(){e.follow(n.id)}},"Follow"))))},N=t(28),U=function(e){return i.a.createElement("div",{className:v.a.usersWrapper},i.a.createElement(d,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged}),e.isFetching?i.a.createElement("div",{className:v.a.usersPreloaderBlock},i.a.createElement("div",{className:v.a.usersPreloader},i.a.createElement(N.a,null))):e.users.map((function(n){return i.a.createElement(y,{user:n,follow:e.follow,unfollow:e.unfollow,isAuth:e.isAuth,followingInProgress:e.followingInProgress,key:n.id})})))},C=t(26),F=t(30);function A(e,n){return e===n}function j(e,n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,o=0;o<r;o++)if(!e(n[o],t[o]))return!1;return!0}function k(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return n}var S=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return function(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];var a=0,s=r.pop(),l=k(r),u=e.apply(void 0,[function(){return a++,s.apply(null,arguments)}].concat(t)),i=e((function(){for(var e=[],n=l.length,t=0;t<n;t++)e.push(l[t].apply(null,arguments));return u.apply(null,e)}));return i.resultFunc=s,i.dependencies=l,i.recomputations=function(){return a},i.resetRecomputations=function(){return a=0},i}}((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:A,t=null,r=null;return function(){return j(n,t,arguments)||(r=e.apply(null,arguments)),t=arguments,r}}));var _=S((function(e){return function(e){return e.usersPage.users}(e)}),(function(e){return e.filter((function(){return!0}))})),z=function(e){return e.usersPage.pageSize},O=function(e){return e.usersPage.totalUsersCount},I=function(e){return e.usersPage.currentPage},x=function(e){return e.usersPage.isFetching},B=function(e){return e.usersPage.followingInProgress},M=function(e){return e.auth.isAuth},q=t(18),J=function(e){function n(){var e,t;Object(r.a)(this,n);for(var o=arguments.length,l=new Array(o),u=0;u<o;u++)l[u]=arguments[u];return(t=Object(a.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(l)))).onPageChanged=function(e){t.props.requestUsers(e,t.props.pageSize,!0)},t}return Object(l.a)(n,e),Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize,!0)}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(U,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,isAuth:this.props.isAuth,isFetching:this.props.isFetching,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followingInProgress}))}}]),n}(i.a.Component),R={follow:F.a,unfollow:F.f,setCurrentPage:F.c,toggleFollowingProgress:F.d,requestUsers:F.b},T=Object(q.d)(Object(C.b)((function(e){return{users:_(e),pageSize:z(e),totalUsersCount:O(e),currentPage:I(e),isFetching:x(e),isAuth:M(e),followingInProgress:B(e)}}),R))(J);n.default=T}}]);
//# sourceMappingURL=7.74fe8f95.chunk.js.map