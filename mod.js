// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return r!=r},t=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY,u=t,I=n;var N=function(r){return r===u||r===I},a=Math.sqrt,e=r,f=N,o=t,v=a;var T=function(r,t){var n;return e(r)||e(t)?NaN:f(r)||f(t)?o:(r<0&&(r=-r),t<0&&(t=-t),r<t&&(n=t,t=r,r=n),0===r?0:r*v(1+(t/=r)*t))};export{T as default};
//# sourceMappingURL=mod.js.map
