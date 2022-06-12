/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={591:(t,e,n)=>{var r=n(8).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},n=Object.prototype,i=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function h(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new T(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=f(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var d={};function v(){}function p(){}function y(){}var m={};l(m,c,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(S([])));b&&b!==n&&i.call(b,c)&&(m=b);var L=y.prototype=v.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function n(o,a,c,s){var u=f(t[o],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==r(h)&&i.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,s)}))}s(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function S(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=y,l(L,"constructor",y),l(y,"constructor",p),p.displayName=l(y,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},x(w.prototype),l(w.prototype,s,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new w(h(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(L),l(L,u,"Generator"),l(L,c,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=S,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(M),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),s=i.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),M(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;M(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},8:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},757:(t,e,n)=>{var r=n(591)();t.exports=r;try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var o=function(){function e(n,r){t(this,e),this.linksInternos=document.querySelectorAll(n),this.options=void 0===r?{behavior:"smooth",block:"start"}:r,this.scrollToSection=this.scrollToSection.bind(this)}return r(e,[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}},{key:"addLinkEvent",value:function(){var t=this;this.linksInternos.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.linksInternos.length&&this.addLinkEvent(),this}}]),e}(),i=function(){function e(n){t(this,e),this.accordionList=document.querySelectorAll(n),this.active="active"}return r(e,[{key:"toggleDescription",value:function(t){t.classList.toggle(this.active),t.nextElementSibling.classList.toggle(this.active)}},{key:"addAcorddionEvent",value:function(){var t=this;this.accordionList.forEach((function(e){e.addEventListener("click",(function(){return t.toggleDescription(e)}))}))}},{key:"init",value:function(){return this.accordionList.length&&(this.toggleDescription(this.accordionList[0]),this.addAcorddionEvent()),this}}]),e}(),a=function(){function e(n,r){t(this,e),this.sections=Array.from(document.querySelectorAll(r)),this.tabNav=Array.from(document.querySelectorAll(n)),this.activeClass="active"}return r(e,[{key:"activeTab",value:function(t){var e=this;this.sections.forEach((function(t){t.classList.remove(e.activeClass),t.dataset.anime=""}));var n=this.sections[t].dataset.anime="show-right";this.sections[t].classList.add(this.activeClass,n)}},{key:"addEventTab",value:function(){var t=this;this.tabNav.forEach((function(e,n){e.addEventListener("click",(function(){return t.activeTab(n)}))}))}},{key:"init",value:function(){return this.tabNav.length&&this.sections.length&&(this.activeTab(0),this.addEventTab()),this}}]),e}(),c=function(){function e(n,r,o){t(this,e),this.botaoAbrir=document.querySelector(n),this.botaoFechar=document.querySelector(r),this.containerModal=document.querySelector(o),this.eventToggleModal=this.eventToggleModal.bind(this),this.clickOutsideOfModal=this.clickOutsideOfModal.bind(this)}return r(e,[{key:"toggleModal",value:function(){this.containerModal.classList.toggle("active")}},{key:"eventToggleModal",value:function(t){t.preventDefault(),this.toggleModal()}},{key:"clickOutsideOfModal",value:function(t){t.target===this.containerModal&&this.toggleModal(t)}},{key:"addEventModal",value:function(){this.botaoAbrir.addEventListener("click",this.eventToggleModal),this.botaoFechar.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.clickOutsideOfModal)}},{key:"init",value:function(){return this.botaoAbrir&&this.botaoFechar&&this.containerModal&&this.addEventModal(),this}}]),e}(),s=function(){function e(n){t(this,e),this.tooltips=document.querySelectorAll(n),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseOver=this.onMouseOver.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}return r(e,[{key:"onMouseMove",value:function(t){this.tooltipBox.style.top="".concat(t.pageY+20,"px"),t.pageX+240>window.innerWidth?this.tooltipBox.style.left="".concat(t.pageX-190,"px"):this.tooltipBox.style.left="".concat(t.pageX+20,"px")}},{key:"onMouseLeave",value:function(t){var e=t.currentTarget;this.tooltipBox.remove(),e.removeEventListener("mouseleave",this.onMouseLeave),e.removeEventListener("mousemove",this.onMouseMove)}},{key:"criarTooltipBox",value:function(t){var e=document.createElement("div"),n=t.getAttribute("aria-label");e.innerText=n,e.classList.add("tooltip"),document.body.appendChild(e),this.tooltipBox=e}},{key:"onMouseOver",value:function(t){var e=t.currentTarget;this.criarTooltipBox(e),e.addEventListener("mouseleave",this.onMouseLeave),e.addEventListener("mousemove",this.onMouseMove)}},{key:"addTooltipsEvents",value:function(){var t=this;this.tooltips.forEach((function(e){e.addEventListener("mouseover",t.onMouseOver)}))}},{key:"init",value:function(){return this.tooltips.length&&this.addTooltipsEvents(),this}}]),e}();function u(t,e,n){var r=document.documentElement,o="data-outside";function i(a){t.contains(a.target)||(t.removeAttribute(o),e.forEach((function(t){r.removeEventListener(t,i)})),n())}t.hasAttribute(o)||(e.forEach((function(t){setTimeout((function(){r.addEventListener(t,i)}))})),t.setAttribute(o,""))}function l(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function h(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){l(i,r,o,a,c,"next",t)}function c(t){l(i,r,o,a,c,"throw",t)}a(void 0)}))}}var f,d,v,p,y,m,g,b=n(757),L=n.n(b);function x(){var t,e=document.querySelectorAll("[data-numero]");t=new MutationObserver((function(n){n[0].target.classList.contains("active")&&(t.disconnect(),e.forEach((function(t){var e=+t.innerText,n=Math.floor(e/100),r=0,o=setInterval((function(){r+=n,t.innerText=r,r>e&&(t.innerText=e,clearInterval(o))}),25*Math.random())})))}));var n=document.querySelector(".numeros");t.observe(n,{attributes:!0})}new o('[data-menu="list"] a[href^="#"]').init(),new i(".js-accordion dt").init(),new a('[data-tabnav="nav"] li','[data-tab="content"] section').init(),new c('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),new s("[data-tooltip]").init(),function(){function t(t){var e=this;t.preventDefault(),this.classList.add("active"),u(this,["touchstart","click"],(function(){e.classList.remove("active")}))}document.querySelectorAll("[data-dropdown]").forEach((function(e){["touchstart","click"].forEach((function(n){e.addEventListener(n,t)}))}))}(),function(){var t=document.querySelector('[data-menu="button"]'),e=document.querySelector('[data-menu="list"]'),n=["click","touchstart"];function r(){t.classList.add("active"),e.classList.add("active"),u(e,n,(function(){t.classList.remove("active"),e.classList.remove("active")}))}t&&n.forEach((function(e){return t.addEventListener(e,r)}))}(),function(){function t(t){var e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML="<h3>".concat(t.especie,"</h3>\n                    <span data-numero>").concat(t.total,"</span>"),e}function e(){return(e=h(L().mark((function e(n){var r,o,i;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:o=e.sent,i=document.querySelector(".numeros-grid"),o.forEach((function(e){var n=t(e);i.appendChild(n)})),x(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(Error("".concat(e.t0," Erro no fetch Animais")));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(t){e.apply(this,arguments)}("./animaisapi.json")}(),d=(f=document.querySelector("[data-semana]")).dataset.semana.split(",").map(Number),v=f.dataset.horario.split(",").map(Number),y=(p=new Date).getDay(),m=p.getHours(),g=-1!==d.indexOf(y),m>v[0]&&m<v[1]&&g&&f.classList.add("aberto"),function(){function t(){return(t=h(L().mark((function t(){var e,n,r;return L().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=document.querySelector(".btc-preco"),t.next=4,fetch("https://blockchain.info/ticker");case 4:return n=t.sent,t.next=7,n.json();case 7:r=t.sent,e.innerText=(100/r.BRL.buy).toFixed(5),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(Error("".concat(t.t0," Erro no fetch bitcoin")));case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}(),function(){var t=document.querySelectorAll('[data-anime="scroll"]'),e=.6*window.innerHeight,n="active";function r(){t.forEach((function(t){t.getBoundingClientRect().top-e<0?t.classList.add(n):t.classList.contains(n)&&t.classList.remove(n)}))}r(),window.addEventListener("scroll",r)}()})()})();