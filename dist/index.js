"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var a=s(function(c,n){
var t=require('@stdlib/math-base-assert-is-nan/dist'),u=require('@stdlib/math-base-assert-is-infinite/dist'),f=require('@stdlib/constants-float64-pinf/dist'),q=require('@stdlib/math-base-special-sqrt/dist');function v(e,r){var i;return t(e)||t(r)?NaN:u(e)||u(r)?f:(e<0&&(e=-e),r<0&&(r=-r),e<r&&(i=r,r=e,e=i),e===0?0:(r/=e,e*q(1+r*r)))}n.exports=v
});var o=a();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
