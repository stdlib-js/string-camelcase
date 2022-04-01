// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-capitalize@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-lowercase@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-replace@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-trim@esm/index.mjs";var m=s.isPrimitive,d=t,g=i,o=r,j=e,l=n,a=/\s+/g,p=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,h=/(?:\s|^)([^\s]+)(?=\s|$)/g,c=/([a-z0-9])([A-Z])/g;function f(s,t,i){return t=g(t),0===i?t:d(t)}var v=function(s){if(!m(s))throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",s));return s=o(s,p," "),s=o(s,a," "),s=o(s,c,"$1 $2"),s=l(s),s=o(s,h,f)};export{v as default};
//# sourceMappingURL=index.mjs.map
