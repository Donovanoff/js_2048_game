parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return o(e)||n(e)||r(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}function n(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return a(e)}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var i,c,s,d,u,f=0,l=4,m=4,v=document.querySelector(".message-start"),g=document.querySelector(".message-win"),h=document.querySelector(".message-lose"),y=document.querySelector(".button"),S=!1,L="ArrowLeft",b="ArrowRight",p="ArrowUp",M="ArrowDown";function w(){i=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];for(var e=0;e<l;e++)for(var t=0;t<m;t++){var r=document.createElement("div");r.classList.add("field-cell"),r.id=e.toString()+"-"+t.toString(),E(r,i[e][t]),document.querySelector(".game-field").append(r)}S=!1}function E(e,t){e.innerText="",e.classList.value="",e.classList.add("field-cell"),t>0&&(e.innerText=t,e.classList.add("field-cell--".concat(t)))}function A(){f=0,document.querySelector(".game-score").innerHTML=f,g.classList.add("hidden"),h.classList.add("hidden"),v.classList.remove("hidden"),i=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];for(var e=0;e<m;e++)for(var t=0;t<l;t++){E(document.getElementById(t.toString()+"-"+e.toString()),0)}}function T(e){return e.filter(function(e){return 0!==e})}function I(e){for(var t=T(e),r=0;r<t.length-1;r++)t[r]===t[r+1]&&(t[r]*=2,t[r+1]=0,f+=t[r]);for(t=T(t);t.length<m;)t.push(0);return t}function q(){for(var t=!1,r=0;r<l;r++){var n=i[r],o=e(n);n=I(n),i[r]=n,U(o,n)||(t=!0);for(var a=0;a<m;a++){E(document.getElementById(r.toString()+"-"+a.toString()),i[r][a])}}t&&x()}function B(){for(var t=!1,r=0;r<l;r++){var n=i[r],o=e(n);n.reverse(),(n=I(n)).reverse(),i[r]=n,U(o,n)||(t=!0);for(var a=0;a<m;a++){E(document.getElementById(r.toString()+"-"+a.toString()),i[r][a])}}t&&x()}function k(){for(var t=!1,r=0;r<m;r++){var n=[i[0][r],i[1][r],i[2][r],i[3][r]];U(e(n),n=I(n))||(t=!0);for(var o=0;o<l;o++){i[o][r]=n[o],E(document.getElementById(o.toString()+"-"+r.toString()),i[o][r])}}t&&x()}function H(){for(var t=!1,r=0;r<m;r++){var n=[i[0][r],i[1][r],i[2][r],i[3][r]],o=e(n);n.reverse(),(n=I(n)).reverse(),U(o,n)||(t=!0);for(var a=0;a<l;a++){i[a][r]=n[a],E(document.getElementById(a.toString()+"-"+r.toString()),i[a][r])}}t&&x()}function j(){for(var e=0;e<l;e++)for(var t=0;t<m;t++)if(0===i[e][t])return!0;return!1}function x(){if(j())for(var e=!1;!e;){var t=Math.floor(Math.random()*l),r=Math.floor(Math.random()*m);if(0===i[t][r]){var n=document.getElementById(t.toString()+"-"+r.toString()),o=Math.random()<.9?2:4;i[t][r]=o,n.innerText=o,n.classList.add("field-cell--".concat(o)),e=!0}}}function O(){for(var e=!j(),t=!0,r=0;r<l;r++)for(var n=0;n<m;n++)n>0&&i[r][n]===i[r][n-1]?t=!1:n<m-1&&i[r][n]===i[r][n+1]?t=!1:r<l-1&&i[r][n]===i[r+1][n]?t=!1:r>0&&i[r][n]===i[r-1][n]&&(t=!1);return t&&e}function R(){for(var e=0;e<l;e++)for(var t=0;t<m;t++)if(2048===i[e][t])return!0;return!1}function U(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}window.onload=function(){w()},document.addEventListener("keyup",function(e){if(S){switch(e.code){case L:q();break;case b:B();break;case p:k();break;case M:H()}document.querySelector(".game-score").innerHTML=f,O()&&h.classList.remove("hidden"),R()&&g.classList.remove("hidden")}}),document.addEventListener("touchstart",function(e){S&&(c=e.touches[0].pageX,s=e.touches[0].pageY)}),document.addEventListener("touchend",function(e){if(S){d=e.changedTouches[0].pageX,u=e.changedTouches[0].pageY;var t=d-c,r=u-s;Math.abs(t)>Math.abs(r)?Math.abs(t)>20&&(t>0?B():q()):Math.abs(r)>20&&(r>0?H():k()),document.querySelector(".game-score").innerHTML=f,O()&&h.classList.remove("hidden"),R()&&g.classList.remove("hidden")}}),y.addEventListener("click",function(){S?(y.classList.remove("restart"),y.classList.add("start"),y.innerHTML="Start",S=!1,A()):(y.classList.remove("start"),y.classList.add("restart"),y.innerHTML="Restart",v.classList.add("hidden"),S=!0,x(),x())});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.568e32be.js.map