(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8nT/":function(n,e,t){"use strict";t.d(e,"a",function(){return a}),t.d(e,"b",function(){return u}),t.d(e,"c",function(){return c}),t.d(e,"d",function(){return p}),t.d(e,"e",function(){return l}),t.d(e,"f",function(){return v}),t.d(e,"g",function(){return h}),t.d(e,"h",function(){return s});var r=function(n,e,t,r){return new(t||(t=Promise))(function(i,o){function a(n){try{c(r.next(n))}catch(n){o(n)}}function u(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){n.done?i(n.value):new t(function(e){e(n.value)}).then(a,u)}c((r=r.apply(n,e||[])).next())})},i=function(n,e){var t,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(n,a)}catch(n){o=[6,n],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},o=0;function a(n,e){var t=n.ownerDocument;(function(n){0===o&&(o=1,n.body.addEventListener("keyup",function(e){if("Escape"===e.key){var t=c(n);t&&!0===t.backdropDismiss&&t.dismiss("backdrop")}}))})(t),Object.assign(n,e),n.classList.add("ion-page-invisible");var r=o++;return n.overlayIndex=r,n.hasAttribute("id")||(n.id="ion-overlay-"+r),f(t).appendChild(n),t.body.addEventListener("keyup",function(n){if("Escape"===n.key){var e=c(t);e&&e.backdropDismiss&&e.dismiss(null,p)}}),n.componentOnReady()}function u(n,e,t,r,i){var o=c(n,r,i);return o?o.dismiss(e,t):Promise.reject("overlay does not exist")}function c(n,e,t){var r=function(n,e){var t=Array.from(f(n).children);return null==e?t:(e=e.toUpperCase(),t.filter(function(n){return n.tagName===e}))}(n,e);return null!=t?r.find(function(n){return n.id===t}):null==t?r[r.length-1]:r.find(function(n){return n.overlayIndex===t})}function s(n,e,t,o,a){return r(this,void 0,void 0,function(){var r;return i(this,function(i){switch(i.label){case 0:return n.presented?[2]:(n.presented=!0,n.willPresent.emit(),r=n.enterAnimation?n.enterAnimation:n.config.get(e,"ios"===n.mode?t:o),[4,d(n,r,n.el,a)]);case 1:return i.sent(),n.didPresent.emit(),[2]}})})}function l(n,e,t,o,a,u,c){return r(this,void 0,void 0,function(){var r;return i(this,function(i){switch(i.label){case 0:return n.presented?(n.presented=!1,n.willDismiss.emit({data:e,role:t}),r=n.leaveAnimation?n.leaveAnimation:n.config.get(o,"ios"===n.mode?a:u),[4,d(n,r,n.el,c)]):[2];case 1:return i.sent(),n.didDismiss.emit({data:e,role:t}),n.el.remove(),[2]}})})}function f(n){return n.querySelector("ion-app")||n.body}function d(n,e,t,o){return r(this,void 0,void 0,function(){var r,a;return i(this,function(i){switch(i.label){case 0:return n.animation&&(n.animation.destroy(),n.animation=void 0),t.classList.remove("ion-page-invisible"),a=n,[4,n.animationCtrl.create(e,t.shadowRoot||n.el,o)];case 1:return r=a.animation=i.sent(),n.animation=r,n.animated||r.duration(0),n.keyboardClose&&r.beforeAddWrite(function(){var n=t.ownerDocument.activeElement;n&&n.matches("input, ion-input, ion-textarea")&&n.blur()}),[4,r.playAsync()];case 2:return i.sent(),r.destroy(),n.animation=void 0,[2]}})})}function v(n,e){var t,r=new Promise(function(n){return t=n});return function(n,e,t){var r=function(i){n.removeEventListener(e,r),t(i)};n.addEventListener(e,r)}(n,e,function(n){t(n.detail)}),r}function h(n){return"cancel"===n||n===p}var p="backdrop"},B4SP:function(n,e,t){"use strict";t.d(e,"a",function(){return h}),t.d(e,"b",function(){return d}),t.d(e,"c",function(){return p}),t.d(e,"d",function(){return u});var r=function(n,e,t,r){return new(t||(t=Promise))(function(i,o){function a(n){try{c(r.next(n))}catch(n){o(n)}}function u(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){n.done?i(n.value):new t(function(e){e(n.value)}).then(a,u)}c((r=r.apply(n,e||[])).next())})},i=function(n,e){var t,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(n,a)}catch(n){o=[6,n],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},o=function(){return t.e(136).then(t.bind(null,"v4tM"))},a=function(){return t.e(135).then(t.bind(null,"aLs3"))};function u(n){return new Promise(function(e,t){n.queue.write(function(){(function(n){var e=n.enteringEl,t=n.leavingEl;(function(n,e,t){n&&(n.style.zIndex="back"===t?"99":"101"),e&&(e.style.zIndex="100")})(e,t,n.direction),n.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),p(e,!1),t&&p(t,!1)})(n),function(n){return r(this,void 0,void 0,function(){var e;return i(this,function(t){switch(t.label){case 0:return[4,function(n){return r(this,void 0,void 0,function(){var e,t;return i(this,function(r){switch(r.label){case 0:return n.leavingEl&&!1!==n.animated&&0!==n.duration?n.animationBuilder?(e=n.animationBuilder,[3,6]):[3,1]:[3,7];case 1:return"ios"!==n.mode?[3,3]:[4,o()];case 2:return t=r.sent().iosTransitionAnimation,[3,5];case 3:return[4,a()];case 4:t=r.sent().mdTransitionAnimation,r.label=5;case 5:e=t,r.label=6;case 6:return[2,e];case 7:return[2]}})})}(n)];case 1:return[2,(e=t.sent())?function(n,e){return r(this,void 0,void 0,function(){var t;return i(this,function(r){switch(r.label){case 0:return[4,s(e,!0)];case 1:return r.sent(),[4,e.animationCtrl.create(n,e.baseEl,e)];case 2:return t=r.sent(),l(e.window,e.enteringEl,e.leavingEl),[4,function(n,e){var t=e.progressCallback,r=new Promise(function(e){return n.onFinish(e)});return t?(n.progressStart(),t(n)):n.play(),r}(t,e)];case 3:return[2,(r.sent(),t.hasCompleted&&f(e.window,e.enteringEl,e.leavingEl),{hasCompleted:t.hasCompleted,animation:t})]}})})}(e,n):function(n){return r(this,void 0,void 0,function(){var e,t;return i(this,function(r){switch(r.label){case 0:return e=n.enteringEl,t=n.leavingEl,[4,s(n,!1)];case 1:return[2,(r.sent(),l(n.window,e,t),f(n.window,e,t),{hasCompleted:!0})]}})})}(n)]}})})}(n).then(function(t){t.animation&&t.animation.destroy(),c(n),e(t)},function(e){c(n),t(e)})})})}function c(n){return r(this,void 0,void 0,function(){var e,t;return i(this,function(r){return t=n.leavingEl,(e=n.enteringEl)&&e.classList.remove("ion-page-invisible"),t&&t.classList.remove("ion-page-invisible"),[2]})})}function s(n,e){return r(this,void 0,void 0,function(){var t;return i(this,function(o){switch(o.label){case 0:return t=(null!=n.deepWait?n.deepWait:e)?[h(n.enteringEl),h(n.leavingEl)]:[v(n.enteringEl),v(n.leavingEl)],[4,Promise.all(t)];case 1:return o.sent(),[4,function(n,e){return r(this,void 0,void 0,function(){return i(this,function(t){switch(t.label){case 0:return n?[4,n(e)]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}})})}(n.viewIsReady,n.enteringEl)];case 2:return o.sent(),[2]}})})}function l(n,e,t){d(n,t,"ionViewWillLeave"),d(n,e,"ionViewWillEnter")}function f(n,e,t){d(n,e,"ionViewDidEnter"),d(n,t,"ionViewDidLeave")}function d(n,e,t){if(e){var r=new(0,n.CustomEvent)(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(r)}}function v(n){return n&&n.componentOnReady?n.componentOnReady():Promise.resolve()}function h(n){return r(this,void 0,void 0,function(){var e,t;return i(this,function(r){switch(r.label){case 0:return(e=n)?(t=e.componentOnReady)?[4,e.componentOnReady()]:[3,2]:[3,4];case 1:t=r.sent(),r.label=2;case 2:return t?[2]:[4,Promise.all(Array.from(e.children).map(h))];case 3:r.sent(),r.label=4;case 4:return[2]}})})}function p(n,e){e?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))}},JqmT:function(n,e,t){"use strict";t.d(e,"a",function(){return i});var r={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)"};function i(n,e){return!e||n.matchMedia(r[e]).matches}},XGMM:function(n,e,t){"use strict";t.d(e,"a",function(){return u}),t.d(e,"b",function(){return a}),t.d(e,"c",function(){return s}),t.d(e,"d",function(){return o}),t.d(e,"e",function(){return c});var r=function(n,e,t,r){return new(t||(t=Promise))(function(i,o){function a(n){try{c(r.next(n))}catch(n){o(n)}}function u(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){n.done?i(n.value):new t(function(e){e(n.value)}).then(a,u)}c((r=r.apply(n,e||[])).next())})},i=function(n,e){var t,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(n,a)}catch(n){o=[6,n],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};function o(n,e){return!!e.closest(n)}function a(n){var e;return n?((e={"ion-color":!0})["ion-color-"+n]=!0,e):null}function u(n,e){var t;return(t={})[e]=!0,t[e+"-"+n]=!!n,t}function c(n){var e={};return function(n){return n?(Array.isArray(n)?n:n.split(" ")).filter(function(n){return null!=n}).map(function(n){return n.trim()}).filter(function(n){return""!==n}):[]}(n).forEach(function(n){return e[n]=!0}),e}function s(n,e,t,o){return r(this,void 0,void 0,function(){var r;return i(this,function(i){switch(i.label){case 0:return e&&"#"!==e[0]&&-1===e.indexOf("://")&&(r=n.document.querySelector("ion-router"))?(t&&t.preventDefault(),[4,r.componentOnReady()]):[3,2];case 1:return[2,(i.sent(),r.push(e,o))];case 2:return[2,Promise.resolve()]}})})}},hMga:function(n,e,t){"use strict";t.d(e,"a",function(){return f});var r=t("mrSG"),i=t("jHOD"),o=t("AytR"),a=t("NtTr"),u=t("CcnG"),c=function(n,e,t,r){return new(t||(t=Promise))(function(i,o){function a(n){try{c(r.next(n))}catch(n){o(n)}}function u(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){n.done?i(n.value):new t(function(e){e(n.value)}).then(a,u)}c((r=r.apply(n,e||[])).next())})},s=function(n,e){var t,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(n,a)}catch(n){o=[6,n],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},l=t("Gppw"),f=function(n){function e(e){var t=n.call(this)||this;return t._feathers=e,t._serviceName=o.a.service_groups,t.feathersService=e.getService(t._serviceName),t.feathersService.on("created",function(n){return t._save(n)}),t.feathersService.on("updated",function(n){return t._save(n)}),t.feathersService.on("removed",function(n){return t._remove(n)}),t}return Object(r.b)(e,n),e.prototype.remove=function(n){return c(this,void 0,void 0,function(){var e;return s(this,function(t){switch(t.label){case 0:return console.log("Doc getting ready for remove",n),n._removed=!0,n._dirty=!0,n=this._save(n),this._filterDeleted(),[4,this.feathersService.update(n._id,n)];case 1:return e=t.sent(),console.log("Deleting result",e),[2]}})})},e.prototype.save=function(n){return c(this,void 0,void 0,function(){var e;return s(this,function(t){switch(t.label){case 0:return n._dirty=!0,n._id||(n._id=l.generate(Date.now()/10),n._newid=!0),n=this._save(n),console.log("saved doc, not sedning to server",n),n._newid?(delete(e=Object.assign({},n))._newid,[4,this.feathersService.create(e)]):[3,2];case 1:return t.sent(),[3,4];case 2:return[4,this.feathersService.update(n._id,n)];case 3:t.sent(),t.label=4;case 4:return[2]}})})},e.prototype.loadAllDocs=function(n){return void 0===n&&(n=!1),c(this,void 0,void 0,function(){var e,t;return s(this,function(r){switch(r.label){case 0:if(!n&&0!==this.getAllDocs.length)return[3,4];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this.feathersService.find({query:{$limit:5e3}})];case 2:return e=r.sent(),console.log("Loading all docs::::",e),this._loadAllDocs(e.data),[3,4];case 3:return t=r.sent(),console.log("Error pulling all events",t),[3,4];case 4:return[2]}})})},e.ngInjectableDef=u.Q({factory:function(){return new e(u.U(a.a))},token:e,providedIn:"root"}),e}(i.a)}}]);