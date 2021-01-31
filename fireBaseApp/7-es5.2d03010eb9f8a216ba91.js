function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{jwQ9:function(t,e,n){"use strict";n.r(e),n.d(e,"HomeModule",(function(){return F}));var i,c,a,r,o=n("8lv1"),s=n("tyNb"),u=n("fXoL"),l=n("zees"),d=n("bTqV"),f=((c=function(){function t(e){_classCallCheck(this,t),this.authService=e}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"logout",value:function(){this.authService.signOut()}}]),t}()).\u0275fac=function(t){return new(t||c)(u.Qb(l.a))},c.\u0275cmp=u.Kb({type:c,selectors:[["app-header"]],decls:3,vars:0,consts:[[1,"nav"],["mat-raised-button","","color","warn",3,"click"]],template:function(t,e){1&t&&(u.Wb(0,"div",0),u.Wb(1,"button",1),u.ec("click",(function(){return e.logout()})),u.Dc(2,"Logout"),u.Vb(),u.Vb())},directives:[d.a],styles:[".nav[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding:10px 20px 10px 10px}"]}),c),b=((i=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=u.Kb({type:i,selectors:[["app-home"]],decls:2,vars:0,template:function(t,e){1&t&&(u.Rb(0,"app-header"),u.Rb(1,"router-outlet"))},directives:[f,s.e],styles:[""]}),i),p=n("mrSG"),m=n("I/3d"),h=((a=function(){function t(e){_classCallCheck(this,t),this.firestore=e}return _createClass(t,[{key:"get",value:function(){return this.firestore.collection("/users").valueChanges()}},{key:"getById",value:function(t){return this.firestore.collection("/users").doc(t).valueChanges()}},{key:"delete",value:function(t){return this.firestore.collection("/users").doc(t).delete()}},{key:"update",value:function(t){return this.firestore.collection("/users").doc(t.uid).update(t)}}]),t}()).\u0275fac=function(t){return new(t||a)(u.ac(m.a))},a.\u0275prov=u.Mb({token:a,factory:a.\u0275fac,providedIn:"root"}),a),v=n("kmnG"),C=n("qFsG"),g=n("3Pt+"),y=((r=function(){function t(e,n,i){_classCallCheck(this,t),this.usersService=e,this.router=n,this.route=i,this.user={uid:null,email:null,roles:null}}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.usersService.getById(this.route.snapshot.params.id).subscribe((function(e){t.user=e}))}},{key:"update",value:function(){return Object(p.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.usersService.update(this.user);case 2:this.router.navigate(["/users"]);case 3:case"end":return t.stop()}}),t,this)})))}}]),t}()).\u0275fac=function(t){return new(t||r)(u.Qb(h),u.Qb(s.b),u.Qb(s.a))},r.\u0275cmp=u.Kb({type:r,selectors:[["app-details"]],decls:14,vars:2,consts:[[1,"wrapper"],["matInput","","placeholder","Id","readonly","",3,"value"],["matInput","","placeholder","Email","readonly","",3,"ngModel","ngModelChange"],[1,"buttons"],["mat-raised-button","","color","accent","routerLink","/users"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,e){1&t&&(u.Wb(0,"div",0),u.Wb(1,"mat-form-field"),u.Wb(2,"mat-label"),u.Dc(3,"Id"),u.Vb(),u.Rb(4,"input",1),u.Vb(),u.Wb(5,"mat-form-field"),u.Wb(6,"mat-label"),u.Dc(7,"Email"),u.Vb(),u.Wb(8,"input",2),u.ec("ngModelChange",(function(t){return e.user.email=t})),u.Vb(),u.Vb(),u.Wb(9,"div",3),u.Wb(10,"button",4),u.Dc(11,"Back to list"),u.Vb(),u.Wb(12,"button",5),u.ec("click",(function(){return e.update()})),u.Dc(13,"Update"),u.Vb(),u.Vb(),u.Vb()),2&t&&(u.Db(4),u.nc("value",e.user.uid),u.Db(4),u.nc("ngModel",e.user.email))},directives:[v.c,v.f,C.b,g.b,g.j,g.m,d.a,s.c],styles:[".wrapper[_ngcontent-%COMP%]{padding-top:20px;width:30%;margin:0 auto;display:flex;justify-content:center;flex-direction:column}@media screen and (max-width:425px){.wrapper[_ngcontent-%COMP%]{width:90%}}.buttons[_ngcontent-%COMP%], mat-form-field[_ngcontent-%COMP%]{width:100%}.buttons[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"]}),r),D=n("M9IT"),w=n("+0xr"),k=n("XNiG"),V=n("1G5W"),_=n("ofXK");function W(t,e){1&t&&(u.Wb(0,"th",11),u.Dc(1," ID "),u.Vb())}function x(t,e){if(1&t&&(u.Wb(0,"td",12),u.Dc(1),u.Vb()),2&t){var n=e.$implicit;u.Db(1),u.Fc(" ",n.uid," ")}}function O(t,e){1&t&&(u.Wb(0,"th",11),u.Dc(1," Email "),u.Vb())}function I(t,e){if(1&t&&(u.Wb(0,"td",12),u.Dc(1),u.Vb()),2&t){var n=e.$implicit;u.Db(1),u.Fc(" ",n.email," ")}}function M(t,e){1&t&&(u.Wb(0,"th",11),u.Dc(1," Role "),u.Vb())}function S(t,e){1&t&&(u.Wb(0,"span"),u.Dc(1,"Admin"),u.Vb())}function P(t,e){1&t&&(u.Wb(0,"span"),u.Dc(1,"User"),u.Vb())}function R(t,e){if(1&t&&(u.Wb(0,"td",12),u.Cc(1,S,2,0,"span",13),u.Cc(2,P,2,0,"span",13),u.Vb()),2&t){var n=e.$implicit;u.Db(1),u.nc("ngIf",n.roles.admin),u.Db(1),u.nc("ngIf",!n.roles.admin)}}function j(t,e){1&t&&(u.Wb(0,"th",11),u.Dc(1,"Actions"),u.Vb())}function A(t,e){if(1&t&&(u.Wb(0,"button",16),u.Dc(1,"Edit"),u.Vb()),2&t){var n=u.ic().$implicit;u.oc("routerLink","/users/",n.uid,"")}}function Q(t,e){if(1&t){var n=u.Xb();u.Wb(0,"button",17),u.ec("click",(function(){u.vc(n);var t=u.ic().$implicit;return u.ic().delete(t.uid)})),u.Dc(1,"Delete"),u.Vb()}}function T(t,e){1&t&&(u.Wb(0,"span"),u.Dc(1,"Don't have available actions"),u.Vb())}function L(t,e){if(1&t&&(u.Wb(0,"td",12),u.Cc(1,A,2,1,"button",14),u.Cc(2,Q,2,0,"button",15),u.Cc(3,T,2,0,"span",13),u.Vb()),2&t){var n=u.ic();u.Db(1),u.nc("ngIf",n.isAdmin),u.Db(1),u.nc("ngIf",n.isAdmin),u.Db(1),u.nc("ngIf",!n.isAdmin)}}function U(t,e){1&t&&u.Rb(0,"tr",18)}function z(t,e){1&t&&u.Rb(0,"tr",19)}var E,G,H,K=function(){return[5,10,20]},$=[{path:"",redirectTo:"users",pathMatch:"full"},{path:"",component:b,children:[{path:"users",component:(E=function(){function t(e,n){_classCallCheck(this,t),this.usersService=e,this.authService=n,this.componentDestroyer=new k.a,this.displayedColumns=["uid","email","role","actions"],this.dataSource=new w.k}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.usersService.get().pipe(Object(V.a)(this.componentDestroyer)).subscribe((function(e){return t.dataSource.data=e})),this.isAdmin=this.authService.isAdmin()}},{key:"ngAfterViewInit",value:function(){this.dataSource.paginator=this.paginator}},{key:"ngOnDestroy",value:function(){this.componentDestroyer.next(),this.componentDestroyer.complete()}},{key:"delete",value:function(t){this.usersService.delete(t)}}]),t}(),E.\u0275fac=function(t){return new(t||E)(u.Qb(h),u.Qb(l.a))},E.\u0275cmp=u.Kb({type:E,selectors:[["app-users"]],viewQuery:function(t,e){var n;1&t&&u.Hc(D.a,!0),2&t&&u.sc(n=u.fc())&&(e.paginator=n.first)},decls:17,vars:5,consts:[[1,"mat-elevation-z8"],["mat-table","",3,"dataSource"],["matColumnDef","uid"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","email"],["matColumnDef","role"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],[4,"ngIf"],["mat-raised-button","","color","primary","style","margin-right: 15px;",3,"routerLink",4,"ngIf"],["mat-raised-button","","color","warn",3,"click",4,"ngIf"],["mat-raised-button","","color","primary",2,"margin-right","15px",3,"routerLink"],["mat-raised-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(u.Wb(0,"div",0),u.Wb(1,"table",1),u.Ub(2,2),u.Cc(3,W,2,0,"th",3),u.Cc(4,x,2,1,"td",4),u.Tb(),u.Ub(5,5),u.Cc(6,O,2,0,"th",3),u.Cc(7,I,2,1,"td",4),u.Tb(),u.Ub(8,6),u.Cc(9,M,2,0,"th",3),u.Cc(10,R,3,2,"td",4),u.Tb(),u.Ub(11,7),u.Cc(12,j,2,0,"th",3),u.Cc(13,L,4,3,"td",4),u.Tb(),u.Cc(14,U,1,0,"tr",8),u.Cc(15,z,1,0,"tr",9),u.Vb(),u.Rb(16,"mat-paginator",10),u.Vb()),2&t&&(u.Db(1),u.nc("dataSource",e.dataSource),u.Db(13),u.nc("matHeaderRowDef",e.displayedColumns),u.Db(1),u.nc("matRowDefColumns",e.displayedColumns),u.Db(1),u.nc("pageSizeOptions",u.pc(4,K)))},directives:[w.j,w.c,w.e,w.b,w.g,w.i,D.a,w.d,w.a,_.k,d.a,s.c,w.f,w.h],styles:["table[_ngcontent-%COMP%]{width:100%}@media screen and (max-width:425px){td[_ngcontent-%COMP%]{font-size:10px}button[_ngcontent-%COMP%]{min-width:55px;padding:0 8px}td.mat-cell[_ngcontent-%COMP%]:first-of-type{padding-left:3px}td.mat-cell[_ngcontent-%COMP%]:last-of-type{padding-right:3px}}"]}),E)},{path:"users/:id",component:y}]}],B=((H=function t(){_classCallCheck(this,t)}).\u0275mod=u.Ob({type:H}),H.\u0275inj=u.Nb({factory:function(t){return new(t||H)},imports:[[s.d.forChild($)],s.d]}),H),F=((G=function t(){_classCallCheck(this,t)}).\u0275mod=u.Ob({type:G}),G.\u0275inj=u.Nb({factory:function(t){return new(t||G)},imports:[[B,o.a]]}),G)}}]);