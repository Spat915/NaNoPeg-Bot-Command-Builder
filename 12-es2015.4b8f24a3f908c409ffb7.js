(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{ILzh:function(e,t,o){"use strict";o.r(t),o.d(t,"SeshatPageModule",(function(){return C}));var n=o("ofXK"),a=o("3Pt+"),i=o("TEn/"),s=o("tyNb"),r=o("9dvU"),c=o("fXoL"),l=o("mrSG");function u(e,t){if(1&e){const e=c.Nb();c.Mb(0,"ion-icon",4),c.Ub("click",(function(){return c.ec(e),c.Wb().clearSelection()})),c.Lb()}}let b=(()=>{class e{constructor(e){this.alertCtrl=e,this.categoryTypes=r.a.meta.seshat.idea.categoryTypes,this.anyBtn={name:"any",type:"radio",label:"Any Type",checked:!0},this.cancelBtn={text:"Cancel",role:"cancel",cssClass:"secondary"},this.okayBtn={text:"Okay",cssClass:"primary",handler:e=>{e&&(this.value=this.categoryTypes[e],this.selectedValue=e)}},this.defaultValue=void 0,this.categoryType=new c.n,this.initValues()}set selectedValue(e){this._selectedValue=e,this.categoryType.emit(this.selectedValue)}get selectedValue(){return this._selectedValue}ngOnInit(){}initValues(){null!=this.defaultValue?(this.selectedValue=this.defaultValue,this.value=this.categoryTypes[this.defaultValue]):(this.selectedValue=null,this.value="None")}openSelect(){return Object(l.a)(this,void 0,void 0,(function*(){const e=yield this.alertCtrl.create({header:"Select a Category",inputs:[{name:"name",type:"radio",label:this.categoryTypes.name,value:"name"},{name:"occupation",type:"radio",label:this.categoryTypes.occupation,value:"occupation"},{name:"dialog",type:"radio",label:this.categoryTypes.dialog,value:"dialog"},{name:"setting",type:"radio",label:this.categoryTypes.setting,value:"setting"},{name:"plotDare",type:"radio",label:this.categoryTypes.plotDare,value:"plotDare"}],buttons:[this.cancelBtn,Object.assign(Object.assign({},this.okayBtn),{handler:e=>{if(e){switch(e){case"name":this.nameSelect();break;case"occupation":this.occupationSelect();break;case"plotDare":this.plotDareSelect();break;default:this.value=this.categoryTypes[e]}this.selectedValue=e}}})]});yield e.present()}))}nameSelect(){return Object(l.a)(this,void 0,void 0,(function*(){const e=yield this.alertCtrl.create({header:"Select a Name Type",inputs:[Object.assign(Object.assign({},this.anyBtn),{value:"name"}),{name:"female",type:"radio",label:this.categoryTypes.femName,value:"femName"},{name:"male",type:"radio",label:this.categoryTypes.maleName,value:"maleName"},{name:"last",type:"radio",label:this.categoryTypes.lastName,value:"lastName"}],buttons:[this.cancelBtn,this.okayBtn]});yield e.present()}))}occupationSelect(){return Object(l.a)(this,void 0,void 0,(function*(){const e=yield this.alertCtrl.create({header:"Select an Occupation Type",inputs:[Object.assign(Object.assign({},this.anyBtn),{value:"occupation"}),{name:"modern",type:"radio",label:this.categoryTypes.modern,value:"modern"},{name:"archaic",type:"radio",label:this.categoryTypes.archaic,value:"archaic"}],buttons:[this.cancelBtn,this.okayBtn]});yield e.present()}))}plotDareSelect(){return Object(l.a)(this,void 0,void 0,(function*(){const e=yield this.alertCtrl.create({header:"Select a Plot or a Dare",inputs:[Object.assign(Object.assign({},this.anyBtn),{value:"plotDare"}),{name:"plot",type:"radio",label:this.categoryTypes.plot,value:"plot"},{name:"dare",type:"radio",label:this.categoryTypes.dare,value:"dare"}],buttons:[this.cancelBtn,this.okayBtn]});yield e.present()}))}clearSelection(){this.initValues()}}return e.\u0275fac=function(t){return new(t||e)(c.Hb(i.a))},e.\u0275cmp=c.Bb({type:e,selectors:[["app-category-type-select"]],inputs:{defaultValue:"defaultValue"},outputs:{categoryType:"categoryType"},decls:5,vars:2,consts:[["color","dark"],["position","floating"],["readonly","true",3,"value","click"],["name","close","slot","end","class","ion-align-self-end",3,"click",4,"ngIf"],["name","close","slot","end",1,"ion-align-self-end",3,"click"]],template:function(e,t){1&e&&(c.Mb(0,"ion-item",0),c.Mb(1,"ion-label",1),c.ic(2,"Category / Type"),c.Lb(),c.Mb(3,"ion-input",2),c.Ub("click",(function(){return t.openSelect()})),c.Lb(),c.hc(4,u,1,0,"ion-icon",3),c.Lb()),2&e&&(c.xb(3),c.bc("value",t.value),c.xb(1),c.bc("ngIf",t.selectedValue))},directives:[i.p,i.q,i.o,i.G,n.k,i.n],styles:[""]}),e})();var m=o("peOo");const d=["scroll"];function p(e,t){if(1&e){const e=c.Nb();c.Mb(0,"ion-col",9),c.Mb(1,"ion-card",10),c.Ub("click",(function(){c.ec(e);const o=t.$implicit;return c.Wb().selectCommand(o.idx)})),c.Mb(2,"ion-card-header",5),c.Mb(3,"ion-card-subtitle"),c.ic(4),c.Lb(),c.Mb(5,"ion-card-title"),c.Ib(6,"ion-icon",11),c.ic(7),c.Lb(),c.Lb(),c.Lb(),c.Lb()}if(2&e){const e=t.$implicit,o=c.Wb();c.xb(1),c.bc("color",o.selectedCmd===e.idx?"primary":"dark"),c.xb(3),c.jc(e.summary),c.xb(2),c.bc("name",e.icon)("src",e.iconSrc),c.xb(1),c.kc("\xa0",e.name,"")}}function h(e,t){1&e&&(c.Mb(0,"ion-card-subtitle"),c.Mb(1,"ion-text",19),c.ic(2,"One or more fields are invalid."),c.Lb(),c.Lb())}function f(e,t){if(1&e){const e=c.Nb();c.Mb(0,"app-category-type-select",22),c.Ub("categoryType",(function(t){return c.ec(e),c.Wb(3).setCategory(t)})),c.Lb()}}function y(e,t){if(1&e&&(c.Mb(0,"ion-item",23),c.Mb(1,"ion-label",24),c.ic(2,"Rating"),c.Lb(),c.Mb(3,"ion-range",25),c.Mb(4,"ion-label",2),c.ic(5),c.Lb(),c.Mb(6,"ion-label",26),c.ic(7),c.Lb(),c.Lb(),c.Lb()),2&e){const e=c.Wb().$implicit,t=c.Wb(2);c.bc("formGroup",t.formGroup),c.xb(3),c.bc("min",e.min)("max",e.max)("formControlName",e.controlName)("color",t.computeRangeColour()),c.xb(2),c.jc(t.ratings[t.formGroup.controls.rating.value.lower]),c.xb(2),c.jc(t.ratings[t.formGroup.controls.rating.value.upper])}}function g(e,t){if(1&e&&(c.Kb(0),c.hc(1,f,1,0,"app-category-type-select",20),c.hc(2,y,8,7,"ion-item",21),c.Jb()),2&e){const e=t.$implicit;c.xb(1),c.bc("ngIf","Category / Type"===e.name),c.xb(1),c.bc("ngIf","Rating"===e.name)}}function v(e,t){if(1&e){const e=c.Nb();c.Mb(0,"ion-row"),c.Mb(1,"ion-col",12),c.Mb(2,"ion-card",13),c.Mb(3,"ion-card-header",5),c.hc(4,h,3,0,"ion-card-subtitle",8),c.Lb(),c.Mb(5,"ion-card-content",14),c.Mb(6,"form",15),c.Mb(7,"ion-list",16),c.hc(8,g,3,2,"ng-container",17),c.Lb(),c.Mb(9,"ion-button",18),c.Ub("click",(function(){return c.ec(e),c.Wb().generateCommand()})),c.ic(10,"Generate"),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb()}if(2&e){const e=c.Wb();c.xb(4),c.bc("ngIf",e.formError),c.xb(2),c.bc("formGroup",e.formGroup),c.xb(2),c.bc("ngForOf",e.commandOpts)}}function x(e,t){if(1&e&&(c.Mb(0,"ion-row"),c.Mb(1,"ion-col",27),c.Ib(2,"app-copy-card",28),c.Lb(),c.Lb()),2&e){const e=c.Wb();c.xb(2),c.bc("command",e.getCommand())}}const L=[{path:"",component:(()=>{class e{constructor(){this.commands=r.a.commands.seshat.map((e,t)=>Object.assign(Object.assign({},e),{idx:t+1})),this.ratings=r.a.meta.seshat.idea.ratings.values,this.selectedCmd=null,this.submitted=!1,this.formGroup=null,this.commandOpts=null,this.formError=!1}ngOnInit(){}ionViewWillLeave(){null!=this.formSub&&this.formSub.unsubscribe()}selectCommand(e){if(this.selectedCmd=e,"Idea"===this.findSelected().name){this.commandOpts=r.a.commandOpts.seshat.idea;const e={};this.commandOpts.forEach(t=>{e[t.controlName]=new a.a(void 0,[])}),e.rating=new a.a(r.a.meta.seshat.idea.ratings.defaults,[]),this.formGroup=new a.c(e),this.formSub=this.formGroup.valueChanges.subscribe(e=>{this.submitted=!1})}else null!=this.formSub&&(this.formSub.unsubscribe(),this.formSub=null),this.commandOpts=null,this.formGroup=null,this.submitted=!1,this.formError=!1}generateCommand(){this.formGroup.valid?(this.formError=!1,this.submitted=!0,setTimeout(()=>this.container.nativeElement.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),100)):this.formError=!0}findSelected(){return this.commands.find(e=>e.idx===this.selectedCmd)}isPrivacy(){return"Privacy Policy"===this.findSelected().name}isIdea(){return"Idea"===this.findSelected().name}isCommandSubmitted(){return this.isIdea()&&this.submitted}getCommand(){return`${r.a.commandToken.seshat}${this.processCommand()}`}processCommand(){const e=this.findSelected();let t=e.command;if("Privacy Policy"!==e.name&&this.submitted){const e=this.formGroup.value;if(e.categoryType){const{commandFlags:o,commandValues:n}=r.a.meta.seshat.idea;t+=` ${o[e.categoryType]} ${n[e.categoryType]}`}if(e.rating){const o=e.rating,{commandFlags:n,values:a,defaults:i}=r.a.meta.seshat.idea.ratings;o.upper===o.lower?t+=` ${n.single} ${a[o.upper]}`:(i.lower===o.lower||(t+=` ${n.lower} ${a[o.lower]}`),i.upper===o.upper||(t+=` ${n.upper} ${a[o.upper]}`))}}return t}setCategory(e){this.formGroup.controls.categoryType.setValue(e)}computeRangeColour(){const e=this.formGroup.controls.rating.value.upper;return e<3?"success":e<4?"warning":"danger"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Bb({type:e,selectors:[["app-seshat"]],viewQuery:function(e,t){var o;1&e&&c.lc(d,!0),2&e&&c.dc(o=c.Vb())&&(t.container=o.first)},decls:16,vars:5,consts:[[1,""],["scroll",""],["slot","start"],["color","primary",3,"routerLink","routerDirection"],["name","chevron-back"],[1,"ion-text-center"],["slot","end",1,"ion-page-invisible"],["size","12","size-md","6","size-lg","5","size-xl","4","push-lg","1","push-xl","2",4,"ngFor","ngForOf"],[4,"ngIf"],["size","12","size-md","6","size-lg","5","size-xl","4","push-lg","1","push-xl","2"],[3,"color","click"],[3,"name","src"],["size","12","size-md","8","size-lg","6","size-xl","4","offset-md","2","offset-lg","3","offset-xl","4"],["color","dark"],[1,"ion-text-center","selectable-text"],[3,"formGroup"],[1,"ion-no-padding"],[4,"ngFor","ngForOf"],["expand","block",3,"click"],["color","danger"],[3,"categoryType",4,"ngIf"],["color","dark",3,"formGroup",4,"ngIf"],[3,"categoryType"],["color","dark",3,"formGroup"],["position","floating"],["snaps","true","dualKnobs","true","ticks","true",3,"min","max","formControlName","color"],["slot","end"],["size","12","size-lg","10","size-xl","8","offset-lg","1","offset-xl","2"],[3,"command"]],template:function(e,t){1&e&&(c.Mb(0,"div",0,1),c.Mb(2,"ion-toolbar"),c.Mb(3,"ion-buttons",2),c.Mb(4,"ion-button",3),c.Ib(5,"ion-icon",4),c.Lb(),c.Lb(),c.Mb(6,"h3",5),c.ic(7,"Seshat the Scribe Command Generation"),c.Lb(),c.Mb(8,"ion-buttons",6),c.Mb(9,"ion-button"),c.Ib(10,"ion-icon",4),c.Lb(),c.Lb(),c.Lb(),c.Mb(11,"ion-grid"),c.Mb(12,"ion-row"),c.hc(13,p,8,5,"ion-col",7),c.Lb(),c.hc(14,v,11,3,"ion-row",8),c.hc(15,x,3,1,"ion-row",8),c.Lb(),c.Lb()),2&e&&(c.xb(4),c.bc("routerLink","")("routerDirection","back"),c.xb(9),c.bc("ngForOf",t.commands),c.xb(1),c.bc("ngIf",t.selectedCmd&&t.isIdea()),c.xb(1),c.bc("ngIf",t.selectedCmd&&(t.isPrivacy()||t.isCommandSubmitted())))},directives:[i.z,i.d,i.c,i.E,s.h,i.n,i.l,i.w,n.j,n.k,i.j,i.e,i.g,i.h,i.i,i.f,a.l,a.i,a.d,i.r,i.x,b,i.p,i.q,i.u,i.F,a.h,a.b,m.a],styles:[""]}),e})()}];let M=(()=>{class e{}return e.\u0275mod=c.Fb({type:e}),e.\u0275inj=c.Eb({factory:function(t){return new(t||e)},imports:[[s.j.forChild(L)],s.j]}),e})();var T=o("ZfhW");let k=(()=>{class e{}return e.\u0275mod=c.Fb({type:e}),e.\u0275inj=c.Eb({factory:function(t){return new(t||e)},imports:[[n.c,i.A,a.j]]}),e})(),C=(()=>{class e{}return e.\u0275mod=c.Fb({type:e}),e.\u0275inj=c.Eb({factory:function(t){return new(t||e)},imports:[[n.c,a.e,i.A,M,T.a,a.j,k]]}),e})()}}]);