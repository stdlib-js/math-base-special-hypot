// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).hypot=n()}(this,(function(){"use strict";var e=function(e){return e!=e},n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY,o=n,r=t;var u=function(e){return e===o||e===r},f=Math.sqrt,i=e,d=u,s=n,I=f;return function(e,n){var t;return i(e)||i(n)?NaN:d(e)||d(n)?s:(e<0&&(e=-e),n<0&&(n=-n),e<n&&(t=n,n=e,e=t),0===e?0:e*I(1+(n/=e)*n))}}));
//# sourceMappingURL=bundle.js.map
