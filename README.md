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

```javascript
import hypot from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-hypot@esm/index.mjs';
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
    import sqrt from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs';

    var x2 = 1.0e154 * 1.0e154;
    // returns 1.0e308

    var h = sqrt( x2 + x2 );
    // returns Infinity
    ```

    Similarly, for sufficiently small `x` and/or `y`, computing the hypotenuse will underflow.

    ```javascript
    import sqrt from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs';

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
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs';
import hypot from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-hypot@esm/index.mjs';

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

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-hypot.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-hypot

[test-image]: https://github.com/stdlib-js/math-base-special-hypot/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-hypot/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-hypot/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-hypot?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-hypot.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-hypot/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-hypot/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-hypot/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-hypot/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-hypot/main/LICENSE

[hypotenuse]: http://en.wikipedia.org/wiki/Pythagorean_theorem

</section>

<!-- /.links -->
