(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{bE6p:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=u("7r6W"),a=u("X7Jp"),i=function(l,n,u,e){return new(u||(u=Promise))(function(t,a){function i(l){try{r(e.next(l))}catch(l){a(l)}}function o(l){try{r(e.throw(l))}catch(l){a(l)}}function r(l){l.done?t(l.value):new u(function(n){n(l.value)}).then(i,o)}r((e=e.apply(l,n||[])).next())})},o=function(l,n){var u,e,t,a,i={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(a){return function(o){return function(a){if(u)throw new TypeError("Generator is already executing.");for(;i;)try{if(u=1,e&&(t=2&a[0]?e.return:a[0]?e.throw||((t=e.return)&&t.call(e),0):e.next)&&!(t=t.call(e,a[1])).done)return t;switch(e=0,t&&(a=[2&a[0],t.value]),a[0]){case 0:case 1:t=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,e=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(t=(t=i.trys).length>0&&t[t.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!t||a[1]>t[0]&&a[1]<t[3])){i.label=a[1];break}if(6===a[0]&&i.label<t[1]){i.label=t[1],t=a;break}if(t&&i.label<t[2]){i.label=t[2],i.ops.push(a);break}t[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(l,i)}catch(l){a=[6,l],e=0}finally{u=t=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}},r=function(){function l(l,n){this.docService=l,this.cdr=n,this.item=new t.c,this.items=[]}return l.prototype.ngOnInit=function(){return i(this,void 0,void 0,function(){var l,n=this;return o(this,function(u){switch(u.label){case 0:return this.subscription=this.docService.subscribeChanges(a.d).subscribe(function(l){return i(n,void 0,void 0,function(){var l;return o(this,function(n){switch(n.label){case 0:return l=this,[4,this.docService.getAllDocs(a.d)];case 1:return l.items=n.sent(),console.log("Group Refresh: ",this.items),this.cdr.detectChanges(),[2]}})})}),l=this,[4,this.docService.getAllDocs(a.d)];case 1:return l.items=u.sent(),console.log("Group Page: ",this.items),this.cdr.detectChanges(),[2]}})})},l.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},l.prototype.onSubmit=function(){console.log("Saving: ",this.item),this.docService.save(Object.assign({},this.item,{_id:null}),a.d)},l.prototype.removeItem=function(l){console.log("Removing: ",l),this.docService.delete(l,a.d)},l}(),c=function(){},s=u("pMnS"),d=u("ra/t"),p=u("ntG5"),g=u("M9A9"),h=u("ZYCi"),f=u("Ip0R"),m=u("gIcY"),b=u("Zq1E"),v=e.La({encapsulation:0,styles:[[""]],data:{}});function k(l){return e.db(0,[(l()(),e.Na(0,0,null,null,11,"ion-item",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Xa(l,2).onClick(u)&&t),t},d.V,d.p)),e.Ma(1,49152,null,0,p.F,[e.k],null,null),e.Ma(2,16384,null,0,g.a,[[2,h.l],e.k],null,null),(l()(),e.Na(3,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),e.cb(4,null,["",""])),(l()(),e.Na(5,0,null,0,1,"div",[["class","item-color"]],null,null,null,null,null)),(l()(),e.cb(6,null,[" -- "," "])),(l()(),e.Na(7,0,null,0,4,"div",[["class","item-delete"],["slot","end"]],null,null,null,null,null)),(l()(),e.Na(8,0,null,null,3,"ion-button",[["color","danger"],["fill","outline"],["shape","round"]],null,[[null,"click"]],function(l,n,u){var t=!0,a=l.component;return"click"===n&&(t=!1!==e.Xa(l,10).onClick(u)&&t),"click"===n&&(t=!1!==a.removeItem(l.context.$implicit)&&t),t},d.H,d.b)),e.Ma(9,49152,null,0,p.f,[e.k],{color:[0,"color"],fill:[1,"fill"],shape:[2,"shape"]},null),e.Ma(10,16384,null,0,g.a,[[2,h.l],e.k],null,null),(l()(),e.cb(-1,0,["Remove"]))],function(l,n){l(n,9,0,"danger","outline","round")},function(l,n){l(n,4,0,n.context.$implicit.content),l(n,6,0,n.context.$implicit.color)})}function M(l){return e.db(0,[(l()(),e.Na(0,0,null,null,2,"ion-label",[["color","danger"],["position","stacked"]],null,null,null,d.W,d.q)),e.Ma(1,49152,null,0,p.L,[e.k],{color:[0,"color"],position:[1,"position"]},null),(l()(),e.cb(-1,0,[" Title is required "]))],function(l,n){l(n,1,0,"danger","stacked")},null)}function C(l){return e.db(2,[(l()(),e.Na(0,0,null,null,10,"ion-header",[],null,null,null,d.S,d.m)),e.Ma(1,49152,null,0,p.y,[e.k],null,null),(l()(),e.Na(2,0,null,0,8,"ion-toolbar",[],null,null,null,d.La,d.E)),e.Ma(3,49152,null,0,p.Xa,[e.k],null,null),(l()(),e.Na(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,d.I,d.c)),e.Ma(5,49152,null,0,p.g,[],null,null),(l()(),e.Na(6,0,null,0,1,"ion-menu-button",[],null,null,null,d.Y,d.t)),e.Ma(7,49152,null,0,p.P,[e.k],null,null),(l()(),e.Na(8,0,null,0,2,"ion-title",[],null,null,null,d.Ka,d.F)),e.Ma(9,49152,null,0,p.Ya,[e.k],null,null),(l()(),e.cb(-1,0,["GroupsGroups"])),(l()(),e.Na(11,0,null,null,39,"ion-content",[["padding",""]],null,null,null,d.Q,d.k)),e.Ma(12,49152,null,0,p.r,[e.k],null,null),(l()(),e.Na(13,0,null,0,3,"ion-list",[],null,null,null,d.X,d.r)),e.Ma(14,49152,null,0,p.M,[e.k],null,null),(l()(),e.Ea(16777216,null,0,1,null,k)),e.Ma(16,278528,null,0,f.h,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.Na(17,0,null,0,33,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0,a=l.component;return"submit"===n&&(t=!1!==e.Xa(l,19).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Xa(l,19).onReset()&&t),"ngSubmit"===n&&(t=!1!==a.onSubmit()&&t),t},null,null)),e.Ma(18,16384,null,0,m.m,[],null,null),e.Ma(19,4210688,[["form",4]],0,m.i,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Za(2048,null,m.a,null,[m.i]),e.Ma(21,16384,null,0,m.h,[[4,m.a]],null,null),(l()(),e.Na(22,0,null,null,13,"ion-item",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Xa(l,24).onClick(u)&&t),t},d.V,d.p)),e.Ma(23,49152,null,0,p.F,[e.k],null,null),e.Ma(24,16384,null,0,g.a,[[2,h.l],e.k],null,null),(l()(),e.Na(25,0,null,0,8,"ion-input",[["id","content"],["name","content"],["placeholder","Title - Required"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"ionBlur"]],function(l,n,u){var t=!0,a=l.component;return"input"===n&&(t=!1!==e.Xa(l,28)._handleInputEvent(u.target.value)&&t),"ionBlur"===n&&(t=!1!==e.Xa(l,28)._handleBlurEvent()&&t),"ngModelChange"===n&&(t=!1!==(a.item.content=u)&&t),t},d.U,d.o)),e.Ma(26,16384,null,0,m.k,[],{required:[0,"required"]},null),e.Za(1024,null,m.d,function(l){return[l]},[m.k]),e.Ma(28,16384,null,0,b.a,[e.k],null,null),e.Za(1024,null,m.e,function(l){return[l]},[b.a]),e.Ma(30,671744,[["content",4]],0,m.j,[[2,m.a],[6,m.d],[8,null],[6,m.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Za(2048,null,m.f,null,[m.j]),e.Ma(32,16384,null,0,m.g,[[4,m.f]],null,null),e.Ma(33,49152,null,0,p.E,[e.k],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(l()(),e.Ea(16777216,null,0,1,null,M)),e.Ma(35,16384,null,0,f.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.Na(36,0,null,null,9,"ion-item",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Xa(l,38).onClick(u)&&t),t},d.V,d.p)),e.Ma(37,49152,null,0,p.F,[e.k],null,null),e.Ma(38,16384,null,0,g.a,[[2,h.l],e.k],null,null),(l()(),e.Na(39,0,null,0,6,"ion-input",[["id","color"],["name","color"],["placeholder","Color"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"ionBlur"]],function(l,n,u){var t=!0,a=l.component;return"input"===n&&(t=!1!==e.Xa(l,40)._handleInputEvent(u.target.value)&&t),"ionBlur"===n&&(t=!1!==e.Xa(l,40)._handleBlurEvent()&&t),"ngModelChange"===n&&(t=!1!==(a.item.color=u)&&t),t},d.U,d.o)),e.Ma(40,16384,null,0,b.a,[e.k],null,null),e.Za(1024,null,m.e,function(l){return[l]},[b.a]),e.Ma(42,671744,[["color",4]],0,m.j,[[2,m.a],[8,null],[8,null],[6,m.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Za(2048,null,m.f,null,[m.j]),e.Ma(44,16384,null,0,m.g,[[4,m.f]],null,null),e.Ma(45,49152,null,0,p.E,[e.k],{name:[0,"name"],placeholder:[1,"placeholder"],type:[2,"type"]},null),(l()(),e.Na(46,0,null,null,4,"div",[["padding",""],["text-center",""]],null,null,null,null,null)),(l()(),e.Na(47,0,null,null,3,"ion-button",[["expand","block"],["size","large"],["type","submit"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Xa(l,49).onClick(u)&&t),t},d.H,d.b)),e.Ma(48,49152,null,0,p.f,[e.k],{disabled:[0,"disabled"],expand:[1,"expand"],size:[2,"size"],type:[3,"type"]},null),e.Ma(49,16384,null,0,g.a,[[2,h.l],e.k],null,null),(l()(),e.cb(-1,0,["Save"]))],function(l,n){var u=n.component;l(n,16,0,u.items),l(n,26,0,""),l(n,30,0,"content",u.item.content),l(n,33,0,"content","Title - Required","","text"),l(n,35,0,!e.Xa(n,30).valid&&!e.Xa(n,30).pristine),l(n,42,0,"color",u.item.color),l(n,45,0,"color","Color","text"),l(n,48,0,!e.Xa(n,19).valid,"block","large","submit")},function(l,n){l(n,17,0,e.Xa(n,21).ngClassUntouched,e.Xa(n,21).ngClassTouched,e.Xa(n,21).ngClassPristine,e.Xa(n,21).ngClassDirty,e.Xa(n,21).ngClassValid,e.Xa(n,21).ngClassInvalid,e.Xa(n,21).ngClassPending),l(n,25,0,e.Xa(n,26).required?"":null,e.Xa(n,32).ngClassUntouched,e.Xa(n,32).ngClassTouched,e.Xa(n,32).ngClassPristine,e.Xa(n,32).ngClassDirty,e.Xa(n,32).ngClassValid,e.Xa(n,32).ngClassInvalid,e.Xa(n,32).ngClassPending),l(n,39,0,e.Xa(n,44).ngClassUntouched,e.Xa(n,44).ngClassTouched,e.Xa(n,44).ngClassPristine,e.Xa(n,44).ngClassDirty,e.Xa(n,44).ngClassValid,e.Xa(n,44).ngClassInvalid,e.Xa(n,44).ngClassPending)})}var X=e.Ja("app-groups",r,function(l){return e.db(0,[(l()(),e.Na(0,0,null,null,1,"app-groups",[],null,null,null,C,v)),e.Ma(1,245760,null,0,r,[a.b,e.h],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),y=u("95zI"),N=u("9opb"),w=u("apKv"),S=u("B4/3");u.d(n,"GroupsPageModuleNgFactory",function(){return V});var V=e.Ka(c,[],function(l){return e.Ua([e.Va(512,e.j,e.Z,[[8,[s.a,X]],[3,e.j],e.v]),e.Va(4608,f.k,f.j,[e.s,[2,f.r]]),e.Va(4608,m.n,m.n,[]),e.Va(4608,y.a,y.a,[e.x,e.g]),e.Va(4608,N.a,N.a,[y.a,e.j,e.p]),e.Va(4608,w.a,w.a,[y.a,e.j,e.p]),e.Va(1073742336,f.b,f.b,[]),e.Va(1073742336,m.l,m.l,[]),e.Va(1073742336,m.c,m.c,[]),e.Va(1073742336,S.a,S.a,[]),e.Va(1073742336,h.n,h.n,[[2,h.t],[2,h.l]]),e.Va(1073742336,c,c,[]),e.Va(1024,h.j,function(){return[[{path:"",component:r}]]},[])])})}}]);