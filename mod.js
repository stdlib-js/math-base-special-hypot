// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var t=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;function u(r){return r===t||r===n}var I=Math.sqrt;function N(n,N){var a;return r(n)||r(N)?NaN:u(n)||u(N)?t:(n<0&&(n=-n),N<0&&(N=-N),n<N&&(a=N,N=n,n=a),0===n?0:n*I(1+(N/=n)*N))}export{N as default};
//# sourceMappingURL=mod.js.map
