"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[288],{4288:(j,u,o)=>{o.r(u),o.d(u,{AuthSignInModule:()=>_});var g=o(3423),d=o(1095),Z=o(7539),m=o(8295),f=o(6627),p=o(9983),h=o(4885),v=o(5935),x=o(588),I=o(4466),s=o(3679),A=o(8288),t=o(7716),y=o(8951),T=o(8583),w=o(3994);const U=["signInNgForm"];function b(e,r){if(1&e&&(t.TgZ(0,"fuse-alert",42),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.Q6J("appearance","outline")("showIcon",!1)("type",n.alert.type)("@shake","error"===n.alert.type),t.xp6(1),t.hij(" ",n.alert.message," ")}}function C(e,r){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Email address is required "),t.qZA())}function S(e,r){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Please enter a valid email address "),t.qZA())}function q(e,r){1&e&&t._UZ(0,"mat-icon",23),2&e&&t.Q6J("svgIcon","heroicons_solid:eye")}function J(e,r){1&e&&t._UZ(0,"mat-icon",23),2&e&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function F(e,r){1&e&&(t.TgZ(0,"span"),t._uU(1," Sign in "),t.qZA())}function Q(e,r){1&e&&t._UZ(0,"mat-progress-spinner",43),2&e&&t.Q6J("diameter",24)("mode","indeterminate")}const N=[{path:"",component:(()=>{class e{constructor(n,i,a,l){this._activatedRoute=n,this._authService=i,this._formBuilder=a,this._router=l,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.signInForm=this._formBuilder.group({email:["admin@admin.com",[s.kI.required,s.kI.email]],password:["admin123",s.kI.required],rememberMe:[""]})}signIn(){this.signInForm.invalid||(this.signInForm.disable(),this.showAlert=!1,console.log(this.signInForm.value),this._authService.signIn(this.signInForm.value).subscribe(n=>{console.log(n);const i=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||"/signed-in-redirect";this._router.navigateByUrl(i)},n=>{console.log(n),this.signInForm.enable(),this.signInNgForm.resetForm(),this.alert={type:"error",message:"Wrong email or password"},this.showAlert=!0}))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(g.gz),t.Y36(y.e),t.Y36(s.qu),t.Y36(g.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["auth-sign-in"]],viewQuery:function(n,i){if(1&n&&t.Gf(U,5),2&n){let a;t.iGM(a=t.CRH())&&(i.signInNgForm=a.first)}},decls:67,vars:15,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/JUST WORK PLUS.png"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["signInNgForm","ngForm"],[1,"w-full"],["id","email","matInput","",3,"formControlName"],[4,"ngIf"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-6",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"flex","items-center","mt-8"],[1,"flex-auto","mt-px","border-t"],[1,"mx-2","text-secondary"],[1,"flex","items-center","mt-8","space-x-4"],["type","button","mat-stroked-button","",1,"flex-auto"],[1,"icon-size-5",3,"svgIcon"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[3,"diameter","mode"]],template:function(n,i){if(1&n){const a=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5),t._uU(6,"Sign in"),t.qZA(),t.YNc(7,b,2,5,"fuse-alert",6),t.TgZ(8,"form",7,8),t.TgZ(10,"mat-form-field",9),t.TgZ(11,"mat-label"),t._uU(12,"Email address"),t.qZA(),t._UZ(13,"input",10),t.YNc(14,C,2,0,"mat-error",11),t.YNc(15,S,2,0,"mat-error",11),t.qZA(),t.TgZ(16,"mat-form-field",9),t.TgZ(17,"mat-label"),t._uU(18,"Password"),t.qZA(),t._UZ(19,"input",12,13),t.TgZ(21,"button",14),t.NdJ("click",function(){t.CHM(a);const c=t.MAs(20);return c.type="password"===c.type?"text":"password"}),t.YNc(22,q,1,1,"mat-icon",15),t.YNc(23,J,1,1,"mat-icon",15),t.qZA(),t.TgZ(24,"mat-error"),t._uU(25," Password is required "),t.qZA(),t.qZA(),t.TgZ(26,"button",16),t.NdJ("click",function(){return i.signIn()}),t.YNc(27,F,2,0,"span",11),t.YNc(28,Q,1,2,"mat-progress-spinner",17),t.qZA(),t.TgZ(29,"div",18),t._UZ(30,"div",19),t.TgZ(31,"div",20),t._uU(32,"Or continue with"),t.qZA(),t._UZ(33,"div",19),t.qZA(),t.TgZ(34,"div",21),t.TgZ(35,"button",22),t._UZ(36,"mat-icon",23),t.qZA(),t.TgZ(37,"button",22),t._UZ(38,"mat-icon",23),t.qZA(),t.TgZ(39,"button",22),t._UZ(40,"mat-icon",23),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(41,"div",24),t.O4$(),t.TgZ(42,"svg",25),t.TgZ(43,"g",26),t._UZ(44,"circle",27),t._UZ(45,"circle",28),t.qZA(),t.qZA(),t.TgZ(46,"svg",29),t.TgZ(47,"defs"),t.TgZ(48,"pattern",30),t._UZ(49,"rect",31),t.qZA(),t.qZA(),t._UZ(50,"rect",32),t.qZA(),t.kcU(),t.TgZ(51,"div",33),t.TgZ(52,"div",34),t.TgZ(53,"div"),t._uU(54,"Welcome to"),t.qZA(),t.TgZ(55,"div"),t._uU(56,"our community"),t.qZA(),t.qZA(),t.TgZ(57,"div",35),t._uU(58," The Community Of Freelancer "),t.qZA(),t.TgZ(59,"div",18),t.TgZ(60,"div",36),t._UZ(61,"img",37),t._UZ(62,"img",38),t._UZ(63,"img",39),t._UZ(64,"img",40),t.qZA(),t.TgZ(65,"div",41),t._uU(66,"More than 17k people joined us, it's your turn"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const a=t.MAs(20);t.xp6(7),t.Q6J("ngIf",i.showAlert),t.xp6(1),t.Q6J("formGroup",i.signInForm),t.xp6(5),t.Q6J("formControlName","email"),t.xp6(1),t.Q6J("ngIf",i.signInForm.get("email").hasError("required")),t.xp6(1),t.Q6J("ngIf",i.signInForm.get("email").hasError("email")),t.xp6(4),t.Q6J("formControlName","password"),t.xp6(3),t.Q6J("ngIf","password"===a.type),t.xp6(1),t.Q6J("ngIf","text"===a.type),t.xp6(3),t.Q6J("color","primary")("disabled",i.signInForm.disabled),t.xp6(1),t.Q6J("ngIf",!i.signInForm.disabled),t.xp6(1),t.Q6J("ngIf",i.signInForm.disabled),t.xp6(8),t.Q6J("svgIcon","feather:facebook"),t.xp6(2),t.Q6J("svgIcon","feather:twitter"),t.xp6(2),t.Q6J("svgIcon","feather:github")}},directives:[T.O5,s._Y,s.JL,s.sg,m.KE,m.hX,p.Nt,s.Fj,s.JJ,s.u,d.lW,m.R9,m.TO,f.Hw,w.W,h.Ou],encapsulation:2,data:{animation:A.L}}),e})()}];let _=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[g.Bz.forChild(N),d.ot,Z.p9,m.lN,f.Ps,p.c,h.Cq,v.J,x.fC,I.m]]}),e})()}}]);