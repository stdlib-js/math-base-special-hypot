// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";function e(e){return e!=e}var t=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;function r(e){return e===t||e===n}var o=Math.sqrt;return function(n,u){var f;return e(n)||e(u)?NaN:r(n)||r(u)?t:(n<0&&(n=-n),u<0&&(u=-u),n<u&&(f=u,u=n,n=f),0===n?0:n*o(1+(u/=n)*u))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).hypot=t();
//# sourceMappingURL=browser.js.map
