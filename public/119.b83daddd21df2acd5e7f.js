(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{nr6a:function(t,e,n){"use strict";n.r(e),n.d(e,"IonBackButton",function(){return r});var o=n("cBjU"),i=n("XGMM"),r=function(){function t(){}return t.prototype.onClick=function(t){return function(t,e,n,o){return new(n||(n=Promise))(function(e,i){function r(t){try{c(o.next(t))}catch(t){i(t)}}function a(t){try{c(o.throw(t))}catch(t){i(t)}}function c(t){t.done?e(t.value):new n(function(e){e(t.value)}).then(r,a)}c((o=o.apply(t,[])).next())})}(this,0,void 0,function(){var e;return function(t,e){var n,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function c(r){return function(c){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(t){r=[6,t],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,c])}}}(this,function(n){return e=this.el.closest("ion-nav"),t.preventDefault(),e&&e.canGoBack()?e.pop({skipIfBusy:!0}):this.defaultHref&&Object(i.c)(this.win,this.defaultHref,t,"back"),[2]})})},t.prototype.hostData=function(){var t=!!this.defaultHref;return{class:Object.assign({},Object(i.b)(this.color),{button:!0,"show-back-button":t}),"ion-activable":!0}},t.prototype.render=function(){var t=this,e=this.icon||this.config.get("backButtonIcon","arrow-back"),n=null!=this.text?this.text:this.config.get("backButtonText","Back");return Object(o.b)("button",{type:"button",class:"back-button-native",onClick:function(e){return t.onClick(e)}},Object(o.b)("span",{class:"back-button-inner"},e&&Object(o.b)("ion-icon",{icon:e,lazy:!1}),"ios"===this.mode&&n&&Object(o.b)("span",{class:"button-text"},n),"md"===this.mode&&Object(o.b)("ion-ripple-effect",null)))},Object.defineProperty(t,"is",{get:function(){return"ion-back-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},defaultHref:{type:String,attr:"default-href"},el:{elementRef:!0},icon:{type:String,attr:"icon"},mode:{type:String,attr:"mode"},text:{type:String,attr:"text"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-back-button-md-h{display:none;color:var(--ion-color-base);pointer-events:all;text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none;--ion-color-base:currentColor}.show-back-button.sc-ion-back-button-md-h, .can-go-back.sc-ion-back-button-md-h > ion-header.sc-ion-back-button-md, .can-go-back > ion-header   .sc-ion-back-button-md-h{display:block}.back-button-native.sc-ion-back-button-md{font-family:inherit;font-style:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;-webkit-transition:background-color,opacity .1s linear;transition:background-color,opacity .1s linear;outline:0;line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.back-button-inner.sc-ion-back-button-md{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.back-button-text.sc-ion-back-button-md{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.back-button-native.sc-ion-back-button-md{margin:1px 6px 0 0;padding:0 5px;min-width:44px;height:32px;border:0;background-color:transparent;font-size:14px;font-weight:500;text-transform:uppercase;-webkit-box-shadow:none;box-shadow:none}.back-button-native.activated.sc-ion-back-button-md{opacity:.4}ion-icon.sc-ion-back-button-md{padding-right:.3em;margin:0 6px;font-size:24px;font-weight:400;line-height:.67;text-align:start;pointer-events:none}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}()}}]);