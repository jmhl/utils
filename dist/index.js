"use strict";function _sliceIterator(r,t){var a=[],e=!0,o=!1,n=void 0;try{for(var i,c=r[Symbol.iterator]();!(e=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);e=!0);}catch(r){o=!0,n=r}finally{try{e||null==c.return||c.return()}finally{if(o)throw n}}return a}function _slicedToArray(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return _sliceIterator(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}function formatReadableFraction(r){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=r.denominator,e=(r.error,r.numerator);if(0===e)return"";if(t||e<a)return"".concat(e,"/").concat(a);var o=Math.floor(e/a),n=e%a,i=0!==n;return"".concat(o).concat(i?" ".concat(n,"/").concat(a):"")}Object.defineProperty(exports,"__esModule",{value:!0});var NONDIGIT_OR_SLASH=/(\D|^\/)/;function fractionToDecimal(r){var t=r.split(NONDIGIT_OR_SLASH);if(1===t.length)return+t[0];if(3===t.length){var a=_slicedToArray(t,3),e=a[0];a[1];return+e/+a[2]}var o=_slicedToArray(t,5),n=o[0],i=(o[1],o[2]);o[3];return+n+ +i/+o[4]}function toReadableFraction(r){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=r,e=1;r<0&&(e=-1,r*=-1);for(var o,n=[[1,0],[0,1]],i=r,c=0;n[1][0]*(o=Math.floor(i))+n[1][1]<=10&&!(c+=!1);){var l=n[0][0]*o+n[0][1];if(n[0][1]=n[0][0],n[0][0]=l,l=n[1][0]*o+n[1][1],n[1][1]=n[1][0],n[1][0]=l,i===o)break;i=1/Math.abs(i-o)}var f=n[0][0];f*=e;var u={denominator:n[1][0],error:a-n[0][0]/n[1][0],numerator:f};return t?formatReadableFraction(u):u}exports.formatReadableFraction=formatReadableFraction,exports.fractionToDecimal=fractionToDecimal,exports.toReadableFraction=toReadableFraction;
