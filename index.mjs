// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";var n=s,r=t,m=e,a=i;var d=function(s,t){var e;return n(s)||n(t)?NaN:r(s)||r(t)?m:(s<0&&(s=-s),t<0&&(t=-t),s<t&&(e=t,t=s,s=e),0===s?0:s*a(1+(t/=s)*t))};export{d as default};
//# sourceMappingURL=index.mjs.map
