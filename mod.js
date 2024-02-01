// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function n(r,e,t){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(a):i(a)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,i,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(i=(-c).toString(e),r.precision&&(i=n(i,r.precision,r.padRight)),i="-"+i):(i=c.toString(e),c||r.precision?r.precision&&(i=n(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===o.call(r.specifier)?o.call(i):a.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(r){return"string"==typeof r}var u=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,v=/^(\d+)e/,b=/\.0$/,y=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,i,n=parseFloat(r.arg);if(!isFinite(n)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+i);n=r.arg}switch(r.specifier){case"e":case"E":i=n.toExponential(r.precision);break;case"f":case"F":i=n.toFixed(r.precision);break;case"g":case"G":u(n)<1e-4?((e=r.precision)>0&&(e-=1),i=n.toExponential(e)):i=n.toPrecision(r.precision),r.alternate||(i=f.call(i,w,"$1e"),i=f.call(i,y,"e"),i=f.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),r.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,v,"$1.e")),n>=0&&r.sign&&(i=r.sign+i),i=r.specifier===p.call(r.specifier)?p.call(i):l.call(i)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function S(r,e,t){var i=e-r.length;return i<0?r:r=t?r+_(i):_(i)+r}var E=String.fromCharCode,k=isNaN,x=Array.isArray;function $(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function j(r){var e,t,i,a,o,u,l,p,f;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",l=1,p=0;p<r.length;p++)if(s(i=r[p]))u+=i;else{if(e=void 0!==i.precision,!(i=$(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,k(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,k(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!k(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=k(o)?String(i.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=S(i.arg,i.width,i.padRight)),u+=i.arg||"",l+=1}return u}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,i,n;for(t=[],n=0,i=V.exec(r);i;)(e=r.slice(n,V.lastIndex-i[0].length)).length&&t.push(e),t.push(T(i)),n=V.lastIndex,i=V.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function F(r){return"string"==typeof r}function O(r){var e,t,i;if(!F(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=A(r),(t=new Array(arguments.length))[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return j.apply(null,t)}var C=Object.prototype,I=C.toString,P=C.__defineGetter__,R=C.__defineSetter__,Z=C.__lookupGetter__,G=C.__lookupSetter__;var L=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var i,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(Z.call(r,e)||G.call(r,e)?(i=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(r,e,t.get),o&&R&&R.call(r,e,t.set),r};function W(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function U(r){return"string"==typeof r}var z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function N(){return z&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;var q="function"==typeof Symbol?Symbol:void 0,B="function"==typeof q?q.toStringTag:"";var D=N()?function(r){var e,t,i,n,a;if(null==r)return X.call(r);t=r[B],a=B,e=null!=(n=r)&&M.call(n,a);try{r[B]=void 0}catch(e){return X.call(r)}return i=X.call(r),e?r[B]=t:delete r[B],i}:function(r){return X.call(r)},H=String.prototype.valueOf;var J=N();function K(r){return"object"==typeof r&&(r instanceof String||(J?function(r){try{return H.call(r),!0}catch(r){return!1}}(r):"[object String]"===D(r)))}function Q(r){return U(r)||K(r)}function Y(r,e,t){return r.replace(e,t)}W(Q,"isPrimitive",U),W(Q,"isObject",K);var rr=void 0!==String.prototype.trim,er=String.prototype.trim;var tr=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;var ir=rr&&""===er.call(" \n\t\r\n\f\v            \u2028\u2029  　\ufeff")&&"᠎"===er.call("᠎")?function(r){return er.call(r)}:function(r){return Y(r,tr,"$1")},nr=/\s+/g,ar=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,or=/(?:\s|^)([^\s]+)(?=\s|$)/g,cr=/([a-z0-9])([A-Z])/g;function sr(r,e,t){return e=e.toLowerCase(),0===t?e:function(r){return""===r?"":r.charAt(0).toUpperCase()+r.slice(1)}(e)}function ur(r){if(!U(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));return function(r){return r=Y(r,ar," "),r=Y(r,nr," "),r=Y(r,cr,"$1 $2"),Y(r=ir(r),or,sr)}(r)}export{ur as default};
//# sourceMappingURL=mod.js.map
