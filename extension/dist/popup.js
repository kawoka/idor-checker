!function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=1)}([,function(e,n){var r=null,t=function(e){var n=e.reverse().map(function(e){if(e)return'\n      <li class="idor-cell idor-level-'.concat(e.level,'">\n        <h2>').concat(e.level,'</h2>\n        <a class="idor-cell-description" href=\'').concat(e.url,'\' target="_blank">\n          ').concat(e.url,'\n        </a>\n        <p class="idor-cell-description">\n          ').concat(e.description,"\n        </p>\n      </li>\n    ")}).join(""),t=""===n?'<li class="clear-cell">No Detect IDOR</li>':n;r.innerHTML=t};r=document.querySelector("#app"),t([]),chrome.runtime.sendMessage({name:"get idors"},function(e){t(e||[])}),document.querySelector("#clear-btn").addEventListener("click",function(){chrome.runtime.sendMessage({name:"clear idors"},function(e){t(e||[])})})}]);