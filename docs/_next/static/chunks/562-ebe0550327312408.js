(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[562],{2666:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{suspense:function(){return o},NoSSR:function(){return a}}),n(6927),n(6006);let r=n(8131);function o(){let e=Error(r.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=r.NEXT_DYNAMIC_NO_SSR_CODE,e}function a(e){let{children:t}=e;return t}},5506:function(){},6814:function(e){e.exports={style:{fontFamily:"'__Fira_Mono_35c97c', '__Fira_Mono_Fallback_35c97c'",fontStyle:"normal"},className:"__className_35c97c"}},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(6006),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)u.call(t,r)&&!s.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:l,props:a,_owner:i.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},9268:function(e,t,n){"use strict";e.exports=n(3177)},9247:function(e,t,n){var r;e.exports=(r=n(6006),(()=>{var e={"./node_modules/css-mediaquery/index.js":(e,t)=>{"use strict";t.match=function(e,t){return i(e).some(function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!(r||n))return!1;var o=e.expressions.every(function(e){var n=e.feature,r=e.modifier,o=e.value,a=t[n];if(!a)return!1;switch(n){case"orientation":case"scan":return a.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=l(o),a=l(a);break;case"resolution":o=c(o),a=c(a);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=s(o),a=s(a);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,a=parseInt(a,10)||0}switch(r){case"min":return a>=o;case"max":return a<=o;default:return a===o}});return o&&!n||!o&&n})},t.parse=i;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,a=/(em|rem|px|cm|mm|in|pt|pc)?$/,u=/(dpi|dpcm|dppx)?$/;function i(e){return e.split(",").map(function(e){var t=(e=e.trim()).match(n),a=t[1],u=t[2],i=t[3]||"",s={};return s.inverse=!!a&&"not"===a.toLowerCase(),s.type=u?u.toLowerCase():"all",i=i.match(/\([^\)]+\)/g)||[],s.expressions=i.map(function(e){var t=e.match(r),n=t[1].toLowerCase().match(o);return{modifier:n[1],feature:n[2],value:t[2]}}),s})}function s(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function c(e){var t=parseFloat(e);switch(String(e).match(u)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function l(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var r=/[A-Z]/g,o=/^ms-/,a={};function u(e){return"-"+e.toLowerCase()}let i=function(e){if(a.hasOwnProperty(e))return a[e];var t=e.replace(r,u);return a[e]=o.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":(e,t,n)=>{"use strict";var r=n(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,o="undefined"!=typeof window?window.matchMedia:null;function a(e,t,n){var a=this;if(o&&!n){var u=o.call(window,e);this.matches=u.matches,this.media=u.media,u.addListener(i)}else this.matches=r(e,t),this.media=e;function i(e){a.matches=e.matches,a.media=e.media}this.addListener=function(e){u&&u.addListener(e)},this.removeListener=function(e){u&&u.removeListener(e)},this.dispose=function(){u&&u.removeListener(i)}}e.exports=function(e,t,n){return new a(e,t,n)}},"./node_modules/object-assign/index.js":e=>{"use strict";/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=!function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var o={};if("abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},o)).join(""))return!1;return!0}catch(e){return!1}}()?function(e,o){for(var a,u,i=function(e){if(null==e)throw TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var c in a=Object(arguments[s]))n.call(a,c)&&(i[c]=a[c]);if(t){u=t(a);for(var l=0;l<u.length;l++)r.call(a,u[l])&&(i[u[l]]=a[u[l]])}}return i}:Object.assign},"./node_modules/prop-types/checkPropTypes.js":(e,t,n)=>{"use strict";var r=function(){},o=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),a={},u=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function i(e,t,n,i,s){for(var c in e)if(u(e,c)){var l;try{if("function"!=typeof e[c]){var f=Error((i||"React class")+": "+n+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw f.name="Invariant Violation",f}l=e[c](t,c,i,n,null,o)}catch(e){l=e}if(!l||l instanceof Error||r((i||"React class")+": type specification of "+n+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in a)){a[l.message]=!0;var p=s?s():"";r("Failed "+n+" type: "+l.message+(null!=p?p:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw Error(t)}catch(e){}},i.resetWarningCache=function(){a={}},e.exports=i},"./node_modules/prop-types/factoryWithTypeCheckers.js":(e,t,n)=>{"use strict";var r=n(/*! react-is */"./node_modules/react-is/index.js"),o=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),u=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),i=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js"),s=function(){};function c(){return null}s=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,l="<<anonymous>>",f={array:y("array"),bigint:y("bigint"),bool:y("boolean"),func:y("function"),number:y("number"),object:y("object"),string:y("string"),symbol:y("symbol"),any:d(c),arrayOf:function(e){return d(function(t,n,r,o,u){if("function"!=typeof e)return new p("Property `"+u+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var i=t[n];if(!Array.isArray(i)){var s=v(i);return new p("Invalid "+o+" `"+u+"` of type `"+s+"` supplied to `"+r+"`, expected an array.")}for(var c=0;c<i.length;c++){var l=e(i,c,r,o,u+"["+c+"]",a);if(l instanceof Error)return l}return null})},element:d(function(t,n,r,o,a){var u=t[n];if(!e(u)){var i=v(u);return new p("Invalid "+o+" `"+a+"` of type `"+i+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}),elementType:d(function(e,t,n,o,a){var u=e[t];if(!r.isValidElementType(u)){var i=v(u);return new p("Invalid "+o+" `"+a+"` of type `"+i+"` supplied to `"+n+"`, expected a single ReactElement type.")}return null}),instanceOf:function(e){return d(function(t,n,r,o,a){if(!(t[n]instanceof e)){var u,i=e.name||l,s=(u=t[n]).constructor&&u.constructor.name?u.constructor.name:l;return new p("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}return null})},node:d(function(t,r,o,a,u){return!function t(r){switch(typeof r){case"number":case"string":case"undefined":return!0;case"boolean":return!r;case"object":if(Array.isArray(r))return r.every(t);if(null===r||e(r))return!0;var o=function(e){var t=e&&(n&&e[n]||e["@@iterator"]);if("function"==typeof t)return t}(r);if(!o)return!1;var a,u=o.call(r);if(o!==r.entries){for(;!(a=u.next()).done;)if(!t(a.value))return!1}else for(;!(a=u.next()).done;){var i=a.value;if(i&&!t(i[1]))return!1}return!0;default:return!1}}(t[r])?new p("Invalid "+a+" `"+u+"` supplied to `"+o+"`, expected a ReactNode."):null}),objectOf:function(e){return d(function(t,n,r,o,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var s=t[n],c=v(s);if("object"!==c)return new p("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var l in s)if(u(s,l)){var f=e(s,l,r,o,i+"."+l,a);if(f instanceof Error)return f}return null})},oneOf:function(e){return Array.isArray(e)?d(function(t,n,r,o,a){for(var u,i=t[n],s=0;s<e.length;s++)if(i===(u=e[s])?0!==i||1/i==1/u:i!=i&&u!=u)return null;var c=JSON.stringify(e,function(e,t){return"symbol"===h(t)?String(t):t});return new p("Invalid "+o+" `"+a+"` of value `"+String(i)+"` supplied to `"+r+"`, expected one of "+c+".")}):(arguments.length>1?s("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):s("Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return s("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+function(e){var t=h(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}(n)+" at index "+t+"."),c}return d(function(t,n,r,o,i){for(var s=[],c=0;c<e.length;c++){var l=(0,e[c])(t,n,r,o,i,a);if(null==l)return null;l.data&&u(l.data,"expectedType")&&s.push(l.data.expectedType)}var f=s.length>0?", expected one of type ["+s.join(", ")+"]":"";return new p("Invalid "+o+" `"+i+"` supplied to `"+r+"`"+f+".")})},shape:function(e){return d(function(t,n,r,o,u){var i=t[n],s=v(i);if("object"!==s)return new p("Invalid "+o+" `"+u+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var l=e[c];if("function"!=typeof l)return m(r,o,u,c,h(l));var f=l(i,c,r,o,u+"."+c,a);if(f)return f}return null})},exact:function(e){return d(function(t,n,r,i,s){var c=t[n],l=v(c);if("object"!==l)return new p("Invalid "+i+" `"+s+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");var f=o({},t[n],e);for(var d in f){var y=e[d];if(u(e,d)&&"function"!=typeof y)return m(r,i,s,d,h(y));if(!y)return new p("Invalid "+i+" `"+s+"` key `"+d+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var b=y(c,d,r,i,s+"."+d,a);if(b)return b}return null})}};function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function d(e){var n={},r=0;function o(o,u,i,c,f,d,y){if(c=c||l,d=d||i,y!==a){if(t){var m=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var v=c+":"+i;!n[v]&&r<3&&(s("You are manually calling a React.PropTypes validation function for the `"+d+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[v]=!0,r++)}}return null!=u[i]?e(u,i,c,f,d):o?new p(null===u[i]?"The "+f+" `"+d+"` is marked as required in `"+c+"`, but its value is `null`.":"The "+f+" `"+d+"` is marked as required in `"+c+"`, but its value is `undefined`."):null}var u=o.bind(null,!1);return u.isRequired=o.bind(null,!0),u}function y(e){return d(function(t,n,r,o,a,u){var i=t[n];if(v(i)!==e){var s=h(i);return new p("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e})}return null})}function m(e,t,n,r,o){return new p((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":"symbol"===t||e&&("Symbol"===e["@@toStringTag"]||"function"==typeof Symbol&&e instanceof Symbol)?"symbol":t}function h(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}return p.prototype=Error.prototype,f.checkPropTypes=i,f.resetWarningCache=i.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":(e,t,n)=>{var r=n(/*! react-is */"./node_modules/react-is/index.js");e.exports=n(/*! ./factoryWithTypeCheckers */"./node_modules/prop-types/factoryWithTypeCheckers.js")(r.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":e=>{e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(e,t)=>{"use strict";!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,u=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,y=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,v=e?Symbol.for("react.block"):60121,h=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,_=e?Symbol.for("react.scope"):60119;function g(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var d=e.type;switch(d){case c:case l:case o:case u:case a:case p:return d;default:var v=d&&d.$$typeof;switch(v){case s:case f:case m:case y:case i:return v;default:return t}}case r:return t}}}var O=!1;function j(e){return g(e)===l}t.AsyncMode=c,t.ConcurrentMode=l,t.ContextConsumer=s,t.ContextProvider=i,t.Element=n,t.ForwardRef=f,t.Fragment=o,t.Lazy=m,t.Memo=y,t.Portal=r,t.Profiler=u,t.StrictMode=a,t.Suspense=p,t.isAsyncMode=function(e){return O||(O=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),j(e)||g(e)===c},t.isConcurrentMode=j,t.isContextConsumer=function(e){return g(e)===s},t.isContextProvider=function(e){return g(e)===i},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return g(e)===f},t.isFragment=function(e){return g(e)===o},t.isLazy=function(e){return g(e)===m},t.isMemo=function(e){return g(e)===y},t.isPortal=function(e){return g(e)===r},t.isProfiler=function(e){return g(e)===u},t.isStrictMode=function(e){return g(e)===a},t.isSuspense=function(e){return g(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===l||e===u||e===a||e===p||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===y||e.$$typeof===i||e.$$typeof===s||e.$$typeof===f||e.$$typeof===h||e.$$typeof===b||e.$$typeof===_||e.$$typeof===v)},t.typeOf=g}()},"./node_modules/react-is/index.js":(e,t,n)=>{"use strict";e.exports=n(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(e,t,n)=>{"use strict";function r(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),o=n.length;if(r.length!==o)return!1;for(var a=0;a<o;a++){var u=n[a];if(e[u]!==t[u]||!Object.prototype.hasOwnProperty.call(t,u))return!1}return!0}function o(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=e.length;if(t.length!==n)return!1;for(var r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}n.r(t),n.d(t,{shallowEqualArrays:()=>o,shallowEqualObjects:()=>r})},"./src/Component.ts":function(e,t,n){"use strict";var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,n=e.device,o=e.onChange,u=r(e,["children","device","onChange"]),i=(0,a.default)(u,n,o);return"function"==typeof t?t(i):i?t:null}},"./src/Context.ts":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=(0,n(/*! react */"react").createContext)(void 0);t.default=r},"./src/index.ts":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var o=r(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.useMediaQuery=o.default;var a=r(n(/*! ./Component */"./src/Component.ts"));t.default=a.default;var u=r(n(/*! ./toQuery */"./src/toQuery.ts"));t.toQuery=u.default;var i=r(n(/*! ./Context */"./src/Context.ts"));t.Context=i.default},"./src/mediaQuery.ts":function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=a(n(/*! prop-types */"./node_modules/prop-types/index.js")),i=u.default.oneOfType([u.default.string,u.default.number]),s={all:u.default.bool,grid:u.default.bool,aural:u.default.bool,braille:u.default.bool,handheld:u.default.bool,print:u.default.bool,projection:u.default.bool,screen:u.default.bool,tty:u.default.bool,tv:u.default.bool,embossed:u.default.bool},c={orientation:u.default.oneOf(["portrait","landscape"]),scan:u.default.oneOf(["progressive","interlace"]),aspectRatio:u.default.string,deviceAspectRatio:u.default.string,height:i,deviceHeight:i,width:i,deviceWidth:i,color:u.default.bool,colorIndex:u.default.bool,monochrome:u.default.bool,resolution:i,type:Object.keys(s)};c.type;var l=o(c,["type"]),f=r({minAspectRatio:u.default.string,maxAspectRatio:u.default.string,minDeviceAspectRatio:u.default.string,maxDeviceAspectRatio:u.default.string,minHeight:i,maxHeight:i,minDeviceHeight:i,maxDeviceHeight:i,minWidth:i,maxWidth:i,minDeviceWidth:i,maxDeviceWidth:i,minColor:u.default.number,maxColor:u.default.number,minColorIndex:u.default.number,maxColorIndex:u.default.number,minMonochrome:u.default.number,maxMonochrome:u.default.number,minResolution:i,maxResolution:i},l),p=r(r({},s),f);t.default={all:p,types:s,matchers:c,features:f}},"./src/toQuery.ts":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),a=r(n(/*! ./mediaQuery */"./src/mediaQuery.ts")),u=function(e,t){var n=(0,o.default)(e);return("number"==typeof t&&(t="".concat(t,"px")),!0===t)?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")};t.default=function(e){var t=[];return Object.keys(a.default.all).forEach(function(n){var r=e[n];null!=r&&t.push(u(n,r))}),t.join(" and ")}},"./src/useMediaQuery.ts":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(/*! react */"react"),a=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),u=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),i=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),s=r(n(/*! ./toQuery */"./src/toQuery.ts")),c=r(n(/*! ./Context */"./src/Context.ts")),l=function(e){if(e)return Object.keys(e).reduce(function(t,n){return t[(0,u.default)(n)]=e[n],t},{})},f=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)(function(){e.current=!0},[]),e.current},p=function(e){var t=(0,o.useContext)(c.default),n=function(){return l(e)||l(t)},r=(0,o.useState)(n),a=r[0],u=r[1];return(0,o.useEffect)(function(){var e=n();(0,i.shallowEqualObjects)(a,e)||u(e)},[e,t]),a},d=function(e){var t=function(){return e.query||(0,s.default)(e)},n=(0,o.useState)(t),r=n[0],a=n[1];return(0,o.useEffect)(function(){var e=t();r!==e&&a(e)},[e]),r},y=function(e,t){var n=function(){return(0,a.default)(e,t||{},!!t)},r=(0,o.useState)(n),u=r[0],i=r[1],s=f();return(0,o.useEffect)(function(){if(s){var e=n();return i(e),function(){e&&e.dispose()}}},[e,t]),u},m=function(e){var t=(0,o.useState)(e.matches),n=t[0],r=t[1];return(0,o.useEffect)(function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}},[e]),n};t.default=function(e,t,n){var r=p(t),a=d(e);if(!a)throw Error("Invalid or missing MediaQuery!");var u=y(a,r),i=m(u),s=f();return(0,o.useEffect)(function(){s&&n&&n(i)},[i]),(0,o.useEffect)(function(){return function(){u&&u.dispose()}},[]),i}},react:e=>{"use strict";e.exports=r}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})())},2073:function(e,t,n){"use strict";n.d(t,{Hb:function(){return o},UO:function(){return i},mE:function(){return s},sj:function(){return a}});var r=n(6006);function o(e){return Object.freeze({__version:1,map:e})}function a(e,t){return Object.freeze({...e,...t})}let u=(0,r.createContext)(null),i=u.Provider;function s(){let e=(0,r.useContext)(u);if(null==e)throw Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}},9266:function(e,t,n){"use strict";n.d(t,{I:function(){return a},O:function(){return o}});var r=n(6006);function o(e,t,n){return Object.freeze({instance:e,context:t,container:n})}function a(e,t){return null==t?function(t,n){let o=(0,r.useRef)();return o.current||(o.current=e(t,n)),o}:function(n,o){let a=(0,r.useRef)();a.current||(a.current=e(n,o));let u=(0,r.useRef)(n),{instance:i}=a.current;return(0,r.useEffect)(function(){u.current!==n&&(t(i,n,u.current),u.current=n)},[i,n,o]),a}}},5672:function(e,t,n){"use strict";n.d(t,{Au:function(){return c},Lf:function(){return l}});var r=n(6006);n(8431);var o=n(2073),a=n(9266);function u(e,t){let n=(0,r.useRef)();(0,r.useEffect)(function(){return null!=t&&e.instance.on(t),n.current=t,function(){null!=n.current&&e.instance.off(n.current),n.current=null}},[e,t])}var i=n(5481);function s(e,t){(0,r.useEffect)(function(){let n=t.layerContainer??t.map;return n.addLayer(e.instance),function(){t.layerContainer?.removeLayer(e.instance),t.map.removeLayer(e.instance)}},[t,e])}function c(e,t){var n;let c=(0,a.I)(e,t);return n=function(e){let t=(0,o.mE)(),n=c((0,i.q)(e,t),t);return u(n.current,e.eventHandlers),s(n.current,t),function(e,t){let n=(0,r.useRef)();(0,r.useEffect)(function(){if(t.pathOptions!==n.current){let r=t.pathOptions??{};e.instance.setStyle(r),n.current=r}},[e,t])}(n.current,e),n},(0,r.forwardRef)(function(e,t){let{instance:a,context:u}=n(e).current;return(0,r.useImperativeHandle)(t,()=>a),null==e.children?null:r.createElement(o.UO,{value:u},e.children)})}function l(e,t){var n;let c=(0,a.I)(e,t);return n=function(e){let t=(0,o.mE)(),n=c((0,i.q)(e,t),t);return function(e,t){let n=(0,r.useRef)(t);(0,r.useEffect)(function(){t!==n.current&&null!=e.attributionControl&&(null!=n.current&&e.attributionControl.removeAttribution(n.current),null!=t&&e.attributionControl.addAttribution(t)),n.current=t},[e,t])}(t.map,e.attribution),u(n.current,e.eventHandlers),s(n.current,t),n},(0,r.forwardRef)(function(e,t){let{instance:o}=n(e).current;return(0,r.useImperativeHandle)(t,()=>o),null})}},5481:function(e,t,n){"use strict";function r(e,t){let n=e.pane??t.pane;return n?{...e,pane:n}:e}n.d(t,{q:function(){return r}})},752:function(e,t,n){"use strict";n.d(t,{Q:function(){return i}});var r=n(5672),o=n(9266),a=n(2073),u=n(9494);let i=(0,r.Au)(function({data:e,...t},n){let r=new u.GeoJSON(e,t);return(0,o.O)(r,(0,a.sj)(n,{overlayContainer:r}))},function(e,t,n){t.style!==n.style&&(null==t.style?e.resetStyle():e.setStyle(t.style))})},3441:function(e,t,n){"use strict";n.d(t,{h:function(){return i}});var r=n(2073),o=n(9494),a=n(6006);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let i=(0,a.forwardRef)(function({bounds:e,boundsOptions:t,center:n,children:i,className:s,id:c,placeholder:l,style:f,whenReady:p,zoom:d,...y},m){let[v]=(0,a.useState)({className:s,id:c,style:f}),[h,b]=(0,a.useState)(null);(0,a.useImperativeHandle)(m,()=>h?.map??null,[h]);let _=(0,a.useCallback)(a=>{if(null!==a&&null===h){let u=new o.Map(a,y);null!=n&&null!=d?u.setView(n,d):null!=e&&u.fitBounds(e,t),null!=p&&u.whenReady(p),b((0,r.Hb)(u))}},[]);(0,a.useEffect)(()=>()=>{h?.map.remove()},[h]);let g=h?a.createElement(r.UO,{value:h},i):l??null;return a.createElement("div",u({},v,{ref:_}),g)})},7466:function(e,t,n){"use strict";n.d(t,{X:function(){return c}});var r=n(9494),o=n(2073),a=n(6006),u=n(8431);let i=["mapPane","markerPane","overlayPane","popupPane","shadowPane","tilePane","tooltipPane"];function s(e,t){let{[t]:n,...r}=e;return r}let c=(0,a.forwardRef)(function(e,t){let[n]=(0,a.useState)(e.name),[c,l]=(0,a.useState)(null);(0,a.useImperativeHandle)(t,()=>c,[c]);let f=(0,o.mE)(),p=(0,a.useMemo)(()=>({...f,pane:n}),[f]);return(0,a.useEffect)(()=>(l(function(e,t,n){if(-1!==i.indexOf(e))throw Error(`You must use a unique name for a pane that is not a default Leaflet pane: ${e}`);if(null!=n.map.getPane(e))throw Error(`A pane with this name already exists: ${e}`);let o=t.pane??n.pane,a=o?n.map.getPane(o):void 0,u=n.map.createPane(e,a);return null!=t.className&&function(e,t){t.split(" ").filter(Boolean).forEach(t=>{r.DomUtil.addClass(e,t)})}(u,t.className),null!=t.style&&Object.keys(t.style).forEach(e=>{u.style[e]=t.style[e]}),u}(n,e,f)),function(){let e=f.map.getPane(n);e?.remove?.(),null!=f.map._panes&&(f.map._panes=s(f.map._panes,n),f.map._paneRenderers=s(f.map._paneRenderers,n))}),[]),null!=e.children&&null!=c?(0,u.createPortal)(a.createElement(o.UO,{value:p},e.children),c):null})},5733:function(e,t,n){"use strict";n.d(t,{I:function(){return i}});var r=n(5672),o=n(5481),a=n(9266),u=n(9494);let i=(0,r.Lf)(function({url:e,...t},n){let r=new u.TileLayer(e,(0,o.q)(t,n));return(0,a.O)(r,n)},function(e,t,n){!function(e,t,n){let{opacity:r,zIndex:o}=t;null!=r&&r!==n.opacity&&e.setOpacity(r),null!=o&&o!==n.zIndex&&e.setZIndex(o)}(e,t,n);let{url:r}=t;null!=r&&r!==n.url&&e.setUrl(r)})},9243:function(e,t,n){"use strict";n.d(t,{Sx:function(){return o}});var r=n(2073);function o(){return(0,r.mE)().map}n(6006)}}]);