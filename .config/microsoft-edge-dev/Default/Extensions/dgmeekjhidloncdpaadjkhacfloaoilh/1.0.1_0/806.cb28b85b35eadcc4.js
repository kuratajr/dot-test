"use strict";(self.webpackChunkangular_chrome_extension=self.webpackChunkangular_chrome_extension||[]).push([[806],{806:(I,a,s)=>{s.r(a),s.d(a,{OptionsModule:()=>A});var l=s(19),c=s(404),t=s(865),u=s(518);function m(o,r){1&o&&(t.ynx(0),t._uU(1," Loading ...\n"),t.BQk())}function g(o,r){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"h1",3),t._uU(2,"Welcome!"),t.qZA(),t.TgZ(3,"p",3),t._uU(4,"You are logged in!"),t.qZA(),t.TgZ(5,"button",4),t.NdJ("click",function(){return t.CHM(e),t.oxw().logout()}),t._uU(6,"Logout"),t.qZA(),t.BQk()}}function d(o,r){}let f=(()=>{class o{constructor(e){this.apiService=e,this.isLoggedIn=null}ngOnInit(){this.apiService.token.subscribe(e=>{this.isLoggedIn=!!e})}logout(){this.apiService.logout()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.s))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-options"]],decls:4,vars:3,consts:[[4,"ngIf"],[4,"ngIf","ngIfElse"],["loginSection",""],[2,"text-align","center"],[3,"click"]],template:function(e,i){if(1&e&&(t.YNc(0,m,2,0,"ng-container",0),t.YNc(1,g,7,0,"ng-container",1),t.YNc(2,d,0,0,"ng-template",null,2,t.W1O)),2&e){const p=t.MAs(3);t.Q6J("ngIf",null==i.isLoggedIn),t.xp6(1),t.Q6J("ngIf",1==i.isLoggedIn)("ngIfElse",p)}},directives:[l.O5],styles:[""]}),o})();var n=s(10),_=s(53);function h(o,r){1&o&&(t.TgZ(0,"div",11),t._uU(1," URL is required"),t.qZA())}function v(o,r){1&o&&(t.TgZ(0,"div",11),t._uU(1," URL is not correct"),t.qZA())}function x(o,r){1&o&&(t.TgZ(0,"div",11),t._uU(1," Max character limit is 500"),t.qZA())}function Z(o,r){1&o&&(t.TgZ(0,"div",11),t._uU(1," Message is not correct"),t.qZA())}function T(o,r){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",2),t.TgZ(2,"div",3),t._uU(3,"If you recieved a phishing warning but believe that this is actually a legitimate page, please complete the form below to report the error to FinLock."),t.qZA(),t._UZ(4,"div",4),t.qZA(),t.TgZ(5,"div",5),t.TgZ(6,"h4"),t._uU(7,"URL"),t.qZA(),t.TgZ(8,"div",6),t._UZ(9,"input",7),t.qZA(),t.YNc(10,h,2,0,"div",8),t.YNc(11,v,2,0,"div",8),t.TgZ(12,"h4"),t._uU(13,"Additional details (optional)"),t.qZA(),t.TgZ(14,"div",6),t._UZ(15,"textarea",9),t.qZA(),t.YNc(16,x,2,0,"div",8),t.YNc(17,Z,2,0,"div",8),t.TgZ(18,"div"),t.TgZ(19,"button",10),t.NdJ("click",function(){return t.CHM(e),t.oxw().submit()}),t._uU(20,"Submit Report"),t.qZA(),t.qZA(),t.qZA(),t.BQk()}if(2&o){const e=t.oxw();t.xp6(5),t.Q6J("formGroup",e.reportForm),t.xp6(5),t.Q6J("ngIf",e.reportForm.get("url").dirty&&(null==e.reportForm.get("url").errors?null:e.reportForm.get("url").errors.required)),t.xp6(1),t.Q6J("ngIf",e.reportForm.get("url").dirty&&(null==e.reportForm.get("url").errors?null:e.reportForm.get("url").errors.url)),t.xp6(5),t.Q6J("ngIf",e.reportForm.get("message").dirty&&(null==e.reportForm.get("message").errors||null==e.reportForm.get("message").errors.maxlength?null:e.reportForm.get("message").errors.maxlength.requiredLength)),t.xp6(1),t.Q6J("ngIf",e.reportForm.get("message").dirty&&(null==e.reportForm.get("message").errors?null:e.reportForm.get("message").errors.message)),t.xp6(2),t.Q6J("disabled",e.reportForm.invalid)}}function F(o,r){if(1&o&&(t.ynx(0),t.TgZ(1,"div"),t.TgZ(2,"h3"),t._uU(3),t.qZA(),t.qZA(),t.BQk()),2&o){const e=t.oxw();t.xp6(3),t.hij(" ",e.err,"\n")}}const C=[{path:"",pathMatch:"full",component:f},{path:"report",pathMatch:"full",component:(()=>{class o{constructor(e,i,p){this.formBuilder=e,this.apiService=i,this.router=p,this.loader=!1}ngOnInit(){this.reportForm=this.formBuilder.group({url:["",[n.kI.required]],message:["",n.kI.maxLength(500)]}),this.router.queryParams.subscribe(e=>{e.url&&this.reportForm.patchValue({url:e.url})})}submit(){if(this.reportForm.invalid)for(const e of Object.keys(this.reportForm.controls))this.reportForm.controls[e].markAsTouched();else this.loader=!0,this.apiService.report(this.reportForm.value.email,this.reportForm.value.password).pipe((0,_.U)(e=>{this.err="Thank you for your feedback."})).subscribe()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(n.qu),t.Y36(u.s),t.Y36(c.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-report"]],decls:3,vars:2,consts:[[1,"container"],[4,"ngIf"],[1,"intro"],[1,"text","emailStep"],["id","headSub",1,"text"],[1,"formElementWrapper",3,"formGroup"],[1,"borderBox","emailStep"],["type","url","formControlName","url","placeholder","Enter url address","value","",1,"required","tooltip",2,"width","80%"],["class","alert alert-danger",4,"ngIf"],["type","message","formControlName","message","value","",1,"required","tooltip",2,"height","80px"],["type","submit",1,"required","tooltip",3,"disabled","click"],[1,"alert","alert-danger"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.YNc(1,T,21,6,"ng-container",1),t.YNc(2,F,4,1,"ng-container",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",!i.err),t.xp6(1),t.Q6J("ngIf",i.err))},directives:[l.O5,n.JL,n.sg,n.Fj,n.JJ,n.u],styles:[".container[_ngcontent-%COMP%]{margin:0 20%}"]}),o})()}];let y=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.Bz.forChild(C)],c.Bz]}),o})(),A=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[l.ez,n.u5,n.UX,y]]}),o})()}}]);