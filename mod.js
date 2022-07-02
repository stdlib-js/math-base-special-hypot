// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return r!=r},t=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY,u=t,I=n;var N=function(r){return r===u||r===I},a=Math.sqrt;function e(n,u){var I;return r(n)||r(u)?NaN:N(n)||N(u)?t:(n<0&&(n=-n),u<0&&(u=-u),n<u&&(I=u,u=n,n=I),0===n?0:n*a(1+(u/=n)*u))}export{e as default};
//# sourceMappingURL=mod.js.map
