// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.7-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";function n(n,m){var r;return s(n)||s(m)?NaN:t(n)||t(m)?e:(n<0&&(n=-n),m<0&&(m=-m),n<m&&(r=m,m=n,n=r),0===n?0:n*i(1+(m/=n)*m))}export{n as default};
//# sourceMappingURL=index.mjs.map
