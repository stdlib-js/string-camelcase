<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# camelcase

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert a string to camel case.

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import camelcase from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-camelcase@esm/index.mjs';
```

#### camelcase( str )

Converts a string to camel case.

```javascript
var out = camelcase( 'foo bar' );
// returns 'fooBar'

out = camelcase( 'IS_MOBILE' );
// returns 'isMobile'

out = camelcase( 'Hello World!' );
// returns 'helloWorld'

out = camelcase( '--foo-bar--' );
// returns 'fooBar'
```

</section>

<!-- /.usage -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import camelcase from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-camelcase@esm/index.mjs';

var str = 'Hello World!';
var out = camelcase( str );
// returns 'helloWorld'

str = 'HELLO WORLD!';
out = camelcase( str );
// returns 'helloWorld'

str = 'To be, or not to be: that is the question.';
out = camelcase( str );
// returns 'toBeOrNotToBeThatIsTheQuestion'

</script>
</body>
</html>
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string-constantcase`][@stdlib/string/constantcase]</span><span class="delimiter">: </span><span class="description">convert a string to constant case.</span>
-   <span class="package-name">[`@stdlib/string-kebabcase`][@stdlib/string/kebabcase]</span><span class="delimiter">: </span><span class="description">convert a string to kebab case.</span>
-   <span class="package-name">[`@stdlib/string-snakecase`][@stdlib/string/snakecase]</span><span class="delimiter">: </span><span class="description">convert a string to snake case.</span>

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

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-camelcase.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-camelcase

[test-image]: https://github.com/stdlib-js/string-camelcase/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/string-camelcase/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-camelcase/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-camelcase?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-camelcase.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-camelcase/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/string-camelcase#cli
[cli-url]: https://github.com/stdlib-js/string-camelcase/tree/cli
[@stdlib/string-camelcase]: https://github.com/stdlib-js/string-camelcase/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-camelcase/tree/deno
[umd-url]: https://github.com/stdlib-js/string-camelcase/tree/umd
[esm-url]: https://github.com/stdlib-js/string-camelcase/tree/esm
[branches-url]: https://github.com/stdlib-js/string-camelcase/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-camelcase/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/string/constantcase]: https://github.com/stdlib-js/string-constantcase/tree/esm

[@stdlib/string/kebabcase]: https://github.com/stdlib-js/string-kebabcase/tree/esm

[@stdlib/string/snakecase]: https://github.com/stdlib-js/string-snakecase/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
