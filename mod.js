// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var s=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,p=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,y=/(\..*[^0])0*e/;function w(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":s(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=p.call(i,y,"$1e"),i=p.call(i,b,"e"),i=p.call(i,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=p.call(i,f,"e+0$1"),i=p.call(i,g,"e-0$1"),e.alternate&&(i=p.call(i,d,"$1."),i=p.call(i,h,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===u.call(e.specifier)?u.call(i):l.call(i)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var _=String.fromCharCode,S=isNaN,E=Array.isArray;function k(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function x(e){var r,t,i,a,o,s,l,u,p,f,g,d,h;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",l=1,u=0;u<e.length;u++)if(i=e[u],"string"==typeof i)s+=i;else{if(r=void 0!==i.precision,!(i=k(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,S(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=w(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(f=i.arg,g=i.width,d=i.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+m(h):m(h)+f)),s+=i.arg||"",l+=1}return s}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,t,i,n;for(t=[],n=0,i=$.exec(e);i;)(r=e.slice(n,$.lastIndex-i[0].length)).length&&t.push(r),t.push(j(i)),n=$.lastIndex,i=$.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function O(e){var r,t;if("string"!=typeof e)throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[V(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return x.apply(null,r)}var T=Object.prototype,C=T.toString,F=T.__defineGetter__,A=T.__defineSetter__,I=T.__lookupGetter__,P=T.__lookupSetter__;var R=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(I.call(e,r)||P.call(e,r)?(i=e.__proto__,e.__proto__=T,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&F&&F.call(e,r,t.get),o&&A&&A.call(e,r,t.set),e};function Z(e,r,t){R(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(e){return"string"==typeof e}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return L&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;var N="function"==typeof Symbol?Symbol:void 0,X="function"==typeof N?N.toStringTag:"";var M=U()?function(e){var r,t,i,n,a;if(null==e)return W.call(e);t=e[X],a=X,r=null!=(n=e)&&z.call(n,a);try{e[X]=void 0}catch(r){return W.call(e)}return i=W.call(e),r?e[X]=t:delete e[X],i}:function(e){return W.call(e)},q=String.prototype.valueOf;var B=U();function D(e){return"object"==typeof e&&(e instanceof String||(B?function(e){try{return q.call(e),!0}catch(e){return!1}}(e):"[object String]"===M(e)))}function H(e){return G(e)||D(e)}function J(e,r,t){return e.replace(r,t)}Z(H,"isPrimitive",G),Z(H,"isObject",D);var K=void 0!==String.prototype.trim,Q=String.prototype.trim;var Y=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;var ee=K&&""===Q.call(" \n\t\r\n\f\v            \u2028\u2029  　\ufeff")&&"᠎"===Q.call("᠎")?function(e){return Q.call(e)}:function(e){return J(e,Y,"$1")},re=/\s+/g,te=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,ie=/(?:\s|^)([^\s]+)(?=\s|$)/g,ne=/([a-z0-9])([A-Z])/g;function ae(e,r,t){return r=r.toLowerCase(),0===t?r:function(e){return""===e?"":e.charAt(0).toUpperCase()+e.slice(1)}(r)}function oe(e){if(!G(e))throw new TypeError(function(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}("1OV3F",e));return function(e){return e=J(e,te," "),e=J(e,re," "),e=J(e,ne,"$1 $2"),J(e=ee(e),ie,ae)}(e)}export{oe as default};
//# sourceMappingURL=mod.js.map
