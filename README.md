<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# hypot

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [hypotenuse][hypotenuse] avoiding overflow and underflow.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
hypot = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-hypot@v0.2.0-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var hypot = require( 'path/to/vendor/umd/math-base-special-hypot/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-hypot@v0.2.0-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.hypot;
})();
</script>
```

#### hypot( x, y )

Computes the [hypotenuse][hypotenuse] avoiding overflow and underflow.

```javascript
var h = hypot( -5.0, 12.0 );
// returns 13.0

h = hypot( -0.0, -0.0 );
// returns +0.0
```

If either argument is `NaN`, the function returns `NaN`.

```javascript
var h = hypot( NaN, 12.0 );
// returns NaN

h = hypot( 5.0, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The textbook approach to calculating the hypotenuse is subject to overflow and underflow. For example, for a sufficiently large `x` and/or `y`, computing the hypotenuse will overflow.

    ```javascript
    var sqrt = require( '@stdlib/math-base-special-sqrt' );

    var x2 = 1.0e154 * 1.0e154;
    // returns 1.0e308

    var h = sqrt( x2 + x2 );
    // returns Infinity
    ```

    Similarly, for sufficiently small `x` and/or `y`, computing the hypotenuse will underflow.

    ```javascript
    var sqrt = require( '@stdlib/math-base-special-sqrt' );

    var x2 = 1.0e-200 * 1.0e-200;
    // returns 0.0

    var h = sqrt( x2 + x2 );
    // returns 0.0
    ```

    This implementation uses a numerically stable algorithm which avoids overflow and underflow.

    ```javascript
    var h = hypot( 1.0e154, 1.0e154 );
    // returns ~1.4142e+154

    h = hypot( 1.0e-200, 1.0e-200 );
    // returns ~1.4142e-200
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-hypot@v0.2.0-umd/browser.js"></script>
<script type="text/javascript">
(function () {

var x;
var y;
var h;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu()*100.0 ) - 50.0;
    y = round( randu()*100.0 ) - 50.0;
    h = hypot( x, y );
    console.log( 'h(%d,%d) = %d', x, y, h );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-hypot.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-hypot

[test-image]: https://github.com/stdlib-js/math-base-special-hypot/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/math-base-special-hypot/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-hypot/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-hypot?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-hypot.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-hypot/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-hypot/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-hypot/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-hypot/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-hypot/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-hypot/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-hypot/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-hypot/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-hypot/main/LICENSE

[hypotenuse]: https://en.wikipedia.org/wiki/Pythagorean_theorem

</section>

<!-- /.links -->
