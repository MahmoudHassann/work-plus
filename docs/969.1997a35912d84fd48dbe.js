"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[969],{1969:(Mt,w,a)=>{a.r(w),a.d(w,{NotesModule:()=>It});var I=a(3423),b=a(1095),Q=a(7539),m=a(2238),u=a(8295),C=a(6627),v=a(9983),Z=a(3935),N=a(2458),T=a(3017),B=a(8288),t=a(7716),J=a(1812),l=a(8583);function q(n,s){1&n&&t.GkF(0)}const $=function(n){return{$implicit:n}};let O=(()=>{class n{constructor(e){this._fuseMediaWatcherService=e,this.items=[],this.distributedColumns=[]}ngOnChanges(e){"columns"in e&&this._distributeItems(),"items"in e&&this._distributeItems()}ngAfterViewInit(){this._distributeItems()}_distributeItems(){if(0!==this.items.length){this.distributedColumns=Array.from(Array(this.columns),e=>({items:[]}));for(let e=0;e<this.items.length;e++)this.distributedColumns[e%this.columns].items.push(this.items[e])}else this.distributedColumns=[]}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(J.T))},n.\u0275cmp=t.Xpm({type:n,selectors:[["fuse-masonry"]],inputs:{columnsTemplate:"columnsTemplate",columns:"columns",items:"items"},exportAs:["fuseMasonry"],features:[t.TTD],decls:2,vars:4,consts:[[1,"flex"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,q,1,0,"ng-container",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngTemplateOutlet",o.columnsTemplate)("ngTemplateOutletContext",t.VKq(2,$,o.distributedColumns)))},directives:[l.tP],styles:[""],encapsulation:2,data:{animation:B.L}}),n})(),U=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.ez]]}),n})();var S=a(4466);let Y=(()=>{class n{constructor(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["notes"]],decls:1,vars:0,template:function(e,o){1&e&&t._UZ(0,"router-outlet")},directives:[I.lC],encapsulation:2,changeDetection:0}),n})();var f=a(6215),x=a(9765),H=a(739),R=a(7519),h=a(8002),y=a(6782),M=a(4395),g=a(3190),L=a(5917),j=a(205),d=a(3342),E=a(5257),F=a(1177),W=a(1841);let k=(()=>{class n{constructor(e){this._httpClient=e,this._labels=new f.X(null),this._note=new f.X(null),this._notes=new f.X(null)}get labels$(){return this._labels.asObservable()}get notes$(){return this._notes.asObservable()}get note$(){return this._note.asObservable()}getLabels(){return this._httpClient.get("api/apps/notes/labels").pipe((0,d.b)(e=>{this._labels.next(e)}))}addLabel(e){return this._httpClient.post("api/apps/notes/labels",{title:e}).pipe((0,d.b)(o=>{this._labels.next(o)}))}updateLabel(e){return this._httpClient.patch("api/apps/notes/labels",{label:e}).pipe((0,d.b)(o=>{this.getNotes().subscribe(),this._labels.next(o)}))}deleteLabel(e){return this._httpClient.delete("api/apps/notes/labels",{params:{id:e}}).pipe((0,d.b)(o=>{this.getNotes().subscribe(),this._labels.next(o)}))}getNotes(){return this._httpClient.get("api/apps/notes/all").pipe((0,d.b)(e=>{this._notes.next(e)}))}getNoteById(e){return this._notes.pipe((0,E.q)(1),(0,h.U)(o=>{const i=o.find(c=>c.id===e)||null;return this._note.next(i),i}),(0,g.w)(o=>o?(0,L.of)(o):(0,j._)("Could not found the note with id of "+e+"!")))}addTask(e,o){return this._httpClient.post("api/apps/notes/freelance",{note:e,task:o}).pipe((0,g.w)(()=>this.getNotes().pipe((0,g.w)(()=>this.getNoteById(e.id)))))}createNote(e){return this._httpClient.post("api/apps/notes",{note:e}).pipe((0,g.w)(o=>this.getNotes().pipe((0,g.w)(()=>this.getNoteById(o.id).pipe((0,h.U)(()=>o))))))}updateNote(e){const o=(0,F.Z)(e);return o.labels.length&&(o.labels=o.labels.map(i=>i.id)),this._httpClient.patch("api/apps/notes",{updatedNote:o}).pipe((0,d.b)(i=>{this.getNotes().subscribe()}))}deleteNote(e){return this._httpClient.delete("api/apps/notes",{params:{id:e.id}}).pipe((0,h.U)(o=>(this.getNotes().subscribe(),o)))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(W.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var p=a(3679);function z(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",6),t.TgZ(2,"div",7),t.TgZ(3,"button",8),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().ngIf;return t.oxw().removeImage(i)}),t._UZ(4,"mat-icon",9),t.qZA(),t.qZA(),t._UZ(5,"img",10),t.qZA(),t.BQk()}if(2&n){const e=t.oxw().ngIf;t.xp6(4),t.Q6J("svgIcon","heroicons_outline:trash"),t.xp6(1),t.Q6J("src",e.image,t.LSH)}}const X=function(n){return{"text-secondary line-through":n}};function K(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",17),t.TgZ(2,"mat-checkbox",18),t.NdJ("ngModelChange",function(i){return t.CHM(e).$implicit.completed=i})("change",function(){const c=t.CHM(e).$implicit,r=t.oxw(2).ngIf;return t.oxw().updateTaskOnNote(r,c)}),t.qZA(),t.TgZ(3,"input",19),t.NdJ("ngModelChange",function(i){return t.CHM(e).$implicit.content=i})("input",function(){const c=t.CHM(e).$implicit,r=t.oxw(2).ngIf;return t.oxw().updateTaskOnNote(r,c)}),t.qZA(),t.TgZ(4,"mat-icon",20),t.NdJ("click",function(){const c=t.CHM(e).$implicit,r=t.oxw(2).ngIf;return t.oxw().removeTaskFromNote(r,c)}),t.qZA(),t.qZA(),t.BQk()}if(2&n){const e=s.$implicit;t.xp6(2),t.Q6J("color","primary")("ngModel",e.completed),t.xp6(1),t.Q6J("ngClass",t.VKq(6,X,e.completed))("placeholder","Task")("ngModel",e.content),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:x")}}function P(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",11),t.YNc(2,K,5,8,"ng-container",12),t.TgZ(3,"div",13),t._UZ(4,"mat-icon",14),t.TgZ(5,"input",15,16),t.NdJ("keydown.enter",function(){t.CHM(e);const i=t.MAs(6),c=t.oxw().ngIf;return t.oxw().addTaskToNote(c,i.value),i.value=""}),t.qZA(),t.qZA(),t.qZA(),t.BQk()}if(2&n){const e=t.oxw().ngIf,o=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.freelance)("ngForTrackBy",o.trackByFn),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:plus"),t.xp6(1),t.Q6J("placeholder","Add task")}}function V(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",22),t.TgZ(2,"div"),t._uU(3),t.qZA(),t.TgZ(4,"mat-icon",23),t.NdJ("click",function(){const c=t.CHM(e).$implicit,r=t.oxw(2).ngIf;return t.oxw().toggleLabelOnNote(r,c)}),t.qZA(),t.qZA(),t.BQk()}if(2&n){const e=s.$implicit;t.xp6(3),t.hij(" ",e.title," "),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:x-circle")}}function G(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"div",21),t.YNc(2,V,5,2,"ng-container",12),t.qZA(),t.BQk()),2&n){const e=t.oxw().ngIf,o=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.labels)("ngForTrackBy",o.trackByFn)}}function tt(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",24),t.TgZ(2,"button",25),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().ngIf;return t.oxw().createNote(i)}),t._uU(3," Save "),t.qZA(),t.qZA(),t.BQk()}if(2&n){const e=t.oxw().ngIf;t.xp6(2),t.Q6J("color","primary")("disabled",!e.title&&!e.content)}}function et(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",36),t.NdJ("click",function(){const c=t.CHM(e).$implicit,r=t.oxw(3).ngIf;return t.oxw().toggleLabelOnNote(r,c)}),t.TgZ(2,"span",13),t._UZ(3,"mat-checkbox",37),t.TgZ(4,"span",38),t._uU(5),t.qZA(),t.qZA(),t.qZA(),t.BQk()}if(2&n){const e=s.$implicit,o=t.oxw(3).ngIf,i=t.oxw();t.xp6(3),t.Q6J("color","primary")("checked",i.isNoteHasLabel(o,e)),t.xp6(2),t.Oqu(e.title)}}function nt(n,s){if(1&n&&(t.ynx(0),t.YNc(1,et,6,3,"ng-container",35),t.BQk()),2&n){const e=s.ngIf;t.xp6(1),t.Q6J("ngForOf",e)}}function ot(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",26),t.TgZ(2,"div",27),t.TgZ(3,"div"),t.TgZ(4,"input",28,29),t.NdJ("change",function(){t.CHM(e);const i=t.MAs(5),c=t.oxw().ngIf;return t.oxw().uploadImage(c,i.files)}),t.qZA(),t.TgZ(6,"label",30),t._UZ(7,"mat-icon",31),t.qZA(),t.qZA(),t.TgZ(8,"button",8),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().ngIf;return t.oxw().addfreelanceToNote(i)}),t._UZ(9,"mat-icon",31),t.qZA(),t.TgZ(10,"button",32),t._UZ(11,"mat-icon",31),t.qZA(),t.TgZ(12,"mat-menu",null,33),t.YNc(14,nt,2,1,"ng-container",1),t.ALo(15,"async"),t.qZA(),t.TgZ(16,"button",8),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().ngIf;return t.oxw().toggleArchiveOnNote(i)}),t._UZ(17,"mat-icon",31),t.qZA(),t.TgZ(18,"button",8),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().ngIf;return t.oxw().deleteNote(i)}),t._UZ(19,"mat-icon",31),t.qZA(),t.qZA(),t.TgZ(20,"button",34),t._uU(21," Close "),t.qZA(),t.qZA(),t.BQk()}if(2&n){const e=t.MAs(13),o=t.oxw(2);t.xp6(4),t.Q6J("multiple",!1)("accept","image/jpeg, image/png"),t.xp6(3),t.Q6J("svgIcon","heroicons_outline:photograph"),t.xp6(2),t.Q6J("svgIcon","heroicons_outline:clipboard-list"),t.xp6(1),t.Q6J("matMenuTriggerFor",e),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:tag"),t.xp6(3),t.Q6J("ngIf",t.lcZ(15,9,o.labels$)),t.xp6(3),t.Q6J("svgIcon","heroicons_outline:archive"),t.xp6(2),t.Q6J("svgIcon","heroicons_outline:trash")}}function it(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.YNc(1,z,6,2,"ng-container",1),t.TgZ(2,"div",2),t.TgZ(3,"div"),t.TgZ(4,"input",3),t.NdJ("ngModelChange",function(i){return t.CHM(e).ngIf.title=i})("input",function(){const c=t.CHM(e).ngIf;return t.oxw().updateNoteDetails(c)}),t.qZA(),t.qZA(),t.TgZ(5,"div",4),t.TgZ(6,"textarea",5),t.NdJ("ngModelChange",function(i){return t.CHM(e).ngIf.content=i})("input",function(){const c=t.CHM(e).ngIf;return t.oxw().updateNoteDetails(c)}),t.qZA(),t.qZA(),t.YNc(7,P,7,4,"ng-container",1),t.YNc(8,G,3,2,"ng-container",1),t.YNc(9,tt,4,2,"ng-container",1),t.YNc(10,ot,22,11,"ng-container",1),t.qZA(),t.BQk()}if(2&n){const e=s.ngIf;t.xp6(1),t.Q6J("ngIf",e.image),t.xp6(3),t.Q6J("placeholder","Title")("ngModel",e.title),t.xp6(2),t.Q6J("placeholder","Note")("ngModel",e.content),t.xp6(1),t.Q6J("ngIf",e.freelance),t.xp6(1),t.Q6J("ngIf",e.labels&&e.labels.length),t.xp6(1),t.Q6J("ngIf",!e.id),t.xp6(1),t.Q6J("ngIf",e.id)}}let D=(()=>{class n{constructor(e,o,i,c){this._changeDetectorRef=e,this._data=o,this._notesService=i,this._matDialogRef=c,this.noteChanged=new x.xQ,this._unsubscribeAll=new x.xQ}ngOnInit(){this._data.note.id?(this._notesService.getNoteById(this._data.note.id).subscribe(),this.note$=this._notesService.note$):this.note$=(0,L.of)({id:null,title:"",content:"",freelance:null,image:null,reminder:null,labels:[],archived:!1,createdAt:null,updatedAt:null}),this.labels$=this._notesService.labels$,this.noteChanged.pipe((0,y.R)(this._unsubscribeAll),(0,M.b)(500),(0,g.w)(e=>this._notesService.updateNote(e))).subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}createNote(e){this._notesService.createNote(e).pipe((0,h.U)(()=>{this.note$=this._notesService.note$})).subscribe()}uploadImage(e,o){if(!o.length)return;const c=o[0];!["image/jpeg","image/png"].includes(c.type)||this._readAsDataURL(c).then(r=>{e.image=r,this.noteChanged.next(e)})}removeImage(e){e.image=null,this.noteChanged.next(e)}addfreelanceToNote(e){e.freelance||(e.freelance=[])}addTaskToNote(e,o){""!==o.trim()&&this._notesService.addTask(e,o).subscribe()}removeTaskFromNote(e,o){e.freelance=e.freelance.filter(i=>i.id!==o.id),this.noteChanged.next(e)}updateTaskOnNote(e,o){o.id&&this.noteChanged.next(e)}isNoteHasLabel(e,o){return!!e.labels.find(i=>i.id===o.id)}toggleLabelOnNote(e,o){this.isNoteHasLabel(e,o)?e.labels=e.labels.filter(i=>i.id!==o.id):e.labels.push(o),this.noteChanged.next(e)}toggleArchiveOnNote(e){e.archived=!e.archived,this.noteChanged.next(e),this._matDialogRef.close()}updateNoteDetails(e){this.noteChanged.next(e)}deleteNote(e){this._notesService.deleteNote(e).subscribe(o=>{!o||this._matDialogRef.close()})}trackByFn(e,o){return o.id||e}_readAsDataURL(e){return new Promise((o,i)=>{const c=new FileReader;c.onload=()=>{o(c.result)},c.onerror=r=>{i(r)},c.readAsDataURL(e)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO),t.Y36(m.WI),t.Y36(k),t.Y36(m.so))},n.\u0275cmp=t.Xpm({type:n,selectors:[["notes-details"]],decls:3,vars:3,consts:[[1,"flex","flex-col","flex-auto","md:w-160","md:min-w-160","-m-6"],[4,"ngIf"],[1,"m-4"],[1,"w-full","p-2","text-2xl",3,"placeholder","ngModel","ngModelChange","input"],[1,"flex","w-full","py-5","px-2"],["matTextareaAutosize","",1,"w-full",3,"placeholder","ngModel","ngModelChange","input"],[1,"relative","w-full"],[1,"absolute","right-0","bottom-0","p-4"],["mat-icon-button","",3,"click"],[1,"text-white",3,"svgIcon"],[1,"w-full","object-cover",3,"src"],[1,"mx-2","mt-4","space-y-1.5"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"flex","items-center"],[1,"-ml-0.5","icon-size-5","text-hint",3,"svgIcon"],[1,"w-full","ml-1.5","px-1","py-0.5",3,"placeholder","keydown.enter"],["newTaskInput",""],[1,"group","flex","items-center"],[1,"flex","items-center",3,"color","ngModel","ngModelChange","change"],[1,"w-full","px-1","py-0.5",3,"ngClass","placeholder","ngModel","ngModelChange","input"],[1,"hidden","group-hover:flex","ml-auto","icon-size-5","cursor-pointer",3,"svgIcon","click"],[1,"flex","flex-wrap","items-center","mx-1","mt-6"],[1,"flex","items-center","m-1","py-0.5","px-3","rounded-full","text-sm","font-medium","text-gray-500","bg-gray-100","dark:text-gray-300","dark:bg-gray-700"],[1,"ml-1","icon-size-4","cursor-pointer",3,"svgIcon","click"],[1,"flex","items-center","justify-end","mt-4"],["mat-flat-button","",3,"color","disabled","click"],[1,"flex","items-center","justify-between","mt-4"],[1,"flex","items-center","space-x-2"],["id","image-file-input","type","file",1,"absolute","h-0","w-0","opacity-0","invisible","pointer-events-none",3,"multiple","accept","change"],["imageFileInput",""],["for","image-file-input","matRipple","",1,"flex","items-center","justify-center","w-10","h-10","rounded-full","cursor-pointer","hover:bg-gray-400","hover:bg-opacity-20","dark:hover:bg-black","dark:hover:bg-opacity-5"],[3,"svgIcon"],["mat-icon-button","",3,"matMenuTriggerFor"],["labelsMenu","matMenu"],["mat-flat-button","","matDialogClose",""],[4,"ngFor","ngForOf"],["mat-menu-item","",3,"click"],["disableRipple","",1,"flex","items-center","pointer-events-none",3,"color","checked"],[1,"ml-1","leading-5"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,it,11,9,"ng-container",1),t.ALo(2,"async"),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,o.note$)))},directives:[l.O5,p.Fj,p.JJ,p.On,v.D7,b.lW,C.Hw,l.sg,Q.oG,l.mk,N.wG,Z.p6,Z.VK,m.ZT,Z.OP],pipes:[l.Ov],encapsulation:2,changeDetection:0}),n})();var st=a(5435);function ct(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"mat-form-field",13),t.TgZ(2,"button",14),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw(2).deleteLabel(c.id)}),t._UZ(3,"mat-icon",9),t.qZA(),t.TgZ(4,"input",15),t.NdJ("ngModelChange",function(i){return t.CHM(e).$implicit.title=i})("input",function(){const c=t.CHM(e).$implicit;return t.oxw(2).updateLabel(c)}),t.qZA(),t.qZA(),t.BQk()}if(2&n){const e=s.$implicit;t.xp6(3),t.Q6J("svgIcon","heroicons_solid:trash"),t.xp6(1),t.Q6J("autocomplete","off")("ngModel",e.title)}}function rt(n,s){if(1&n&&(t.ynx(0),t.YNc(1,ct,5,3,"ng-container",12),t.BQk()),2&n){const e=s.ngIf,o=t.oxw();t.xp6(1),t.Q6J("ngForOf",e)("ngForTrackBy",o.trackByFn)}}let at=(()=>{class n{constructor(e,o){this._changeDetectorRef=e,this._notesService=o,this.labelChanged=new x.xQ,this._unsubscribeAll=new x.xQ}ngOnInit(){this.labels$=this._notesService.labels$,this.labelChanged.pipe((0,y.R)(this._unsubscribeAll),(0,M.b)(500),(0,st.h)(e=>""!==e.title.trim()),(0,g.w)(e=>this._notesService.updateLabel(e))).subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}addLabel(e){this._notesService.addLabel(e).subscribe()}updateLabel(e){this.labelChanged.next(e)}deleteLabel(e){this._notesService.deleteLabel(e).subscribe(()=>{this._changeDetectorRef.markForCheck()})}trackByFn(e,o){return o.id||e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO),t.Y36(k))},n.\u0275cmp=t.Xpm({type:n,selectors:[["notes-labels"]],decls:14,vars:10,consts:[[1,"flex","flex-col","flex-auto","w-80","min-w-80","p-2","md:p-4"],[1,"flex","items-center","justify-between"],[1,"text-2xl","font-semibold"],["matDialogClose","","mat-icon-button",""],[3,"svgIcon"],[1,"fuse-mat-dense","w-full","mt-8",3,"floatLabel"],["name","new-label","matInput","",3,"autocomplete","placeholder"],["newLabelInput",""],["mat-icon-button","","matSuffix","",3,"click"],[1,"icon-size-5",3,"svgIcon"],[1,"flex","flex-col","mt-4"],[4,"ngIf"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"fuse-mat-dense","w-full"],["mat-icon-button","","matPrefix","",3,"click"],["required","","matInput","",3,"autocomplete","ngModel","ngModelChange","input"]],template:function(e,o){if(1&e){const i=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._uU(3,"Edit labels"),t.qZA(),t.TgZ(4,"button",3),t._UZ(5,"mat-icon",4),t.qZA(),t.qZA(),t.TgZ(6,"mat-form-field",5),t._UZ(7,"input",6,7),t.TgZ(9,"button",8),t.NdJ("click",function(){t.CHM(i);const r=t.MAs(8);return o.addLabel(r.value),r.value=""}),t._UZ(10,"mat-icon",9),t.qZA(),t.qZA(),t.TgZ(11,"div",10),t.YNc(12,rt,2,2,"ng-container",11),t.ALo(13,"async"),t.qZA(),t.qZA()}if(2&e){const i=t.MAs(8);t.xp6(5),t.Q6J("svgIcon","heroicons_outline:x"),t.xp6(1),t.Q6J("floatLabel","always"),t.xp6(1),t.Q6J("autocomplete","off")("placeholder","Create new label"),t.xp6(2),t.ekj("invisible",""===i.value.trim()),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(2),t.Q6J("ngIf",t.lcZ(13,8,o.labels$))}},directives:[b.lW,m.ZT,C.Hw,u.KE,v.Nt,u.R9,l.O5,l.sg,u.qo,p.Fj,p.Q7,p.JJ,p.On],pipes:[l.Ov],encapsulation:2,changeDetection:0}),n})();const A=function(n,s){return{"bg-gray-200 dark:bg-gray-700 text-primary dark:text-primary-400":n,"text-hint hover:bg-hover":s}};function lt(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",6),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw(2).filterByLabel(c.id)}),t._UZ(2,"mat-icon",7),t.TgZ(3,"div",8),t._uU(4),t.qZA(),t.qZA(),t.BQk()}if(2&n){const e=s.$implicit,o=t.oxw(2);t.xp6(1),t.Q6J("ngClass",t.WLB(4,A,"label:"+e.id===o.filterStatus,"label:"+e.id!==o.filterStatus))("matRippleDisabled","label:"+e.id===o.filterStatus),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:tag"),t.xp6(2),t.Oqu(e.title)}}function _t(n,s){if(1&n&&(t.ynx(0),t.YNc(1,lt,5,7,"ng-container",29),t.BQk()),2&n){const e=s.ngIf,o=t.oxw();t.xp6(1),t.Q6J("ngForOf",e)("ngForTrackBy",o.trackByFn)}}function gt(n,s){if(1&n&&(t.ynx(0),t._UZ(1,"img",35),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("src",e.image,t.LSH)}}function pt(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"div",36),t._uU(2),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.hij(" ",e.title," ")}}function mt(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"div"),t._uU(2),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.ekj("text-xl",e.content.length<70),t.xp6(1),t.hij(" ",e.content," ")}}function ut(n,s){1&n&&(t.ynx(0),t.TgZ(1,"div",39),t._UZ(2,"div",40),t.qZA(),t.BQk())}function dt(n,s){1&n&&(t.ynx(0),t._UZ(1,"mat-icon",41),t.BQk()),2&n&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"))}const ft=function(n){return{"text-secondary line-through":n}};function xt(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"div",15),t.YNc(2,ut,3,0,"ng-container",9),t.YNc(3,dt,2,1,"ng-container",9),t.TgZ(4,"div",38),t._uU(5),t.qZA(),t.qZA(),t.BQk()),2&n){const e=s.$implicit;t.xp6(2),t.Q6J("ngIf",!e.completed),t.xp6(1),t.Q6J("ngIf",e.completed),t.xp6(1),t.Q6J("ngClass",t.VKq(4,ft,e.completed)),t.xp6(1),t.hij(" ",e.content," ")}}function ht(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"div",37),t.YNc(2,xt,6,6,"ng-container",29),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit,o=t.oxw(5);t.xp6(2),t.Q6J("ngForOf",e.freelance)("ngForTrackBy",o.trackByFn)}}function bt(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"div",43),t._uU(2),t.qZA(),t.BQk()),2&n){const e=s.$implicit;t.xp6(2),t.hij(" ",e.title," ")}}function Ct(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"div",42),t.YNc(2,bt,3,1,"ng-container",29),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit,o=t.oxw(5);t.xp6(2),t.Q6J("ngForOf",e.labels)("ngForTrackBy",o.trackByFn)}}function vt(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",33),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw(5).openNoteDialog(c)}),t.YNc(2,gt,2,1,"ng-container",9),t.TgZ(3,"div",34),t.YNc(4,pt,3,1,"ng-container",9),t.YNc(5,mt,3,3,"ng-container",9),t.YNc(6,ht,3,2,"ng-container",9),t.YNc(7,Ct,3,2,"ng-container",9),t.qZA(),t.qZA(),t.BQk()}if(2&n){const e=s.$implicit;t.xp6(2),t.Q6J("ngIf",e.image),t.xp6(2),t.Q6J("ngIf",e.title),t.xp6(1),t.Q6J("ngIf",e.content),t.xp6(1),t.Q6J("ngIf",e.freelance),t.xp6(1),t.Q6J("ngIf",e.labels)}}function Zt(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"div",32),t.YNc(2,vt,8,5,"ng-container",29),t.qZA(),t.BQk()),2&n){const e=s.$implicit,o=t.oxw(4);t.xp6(2),t.Q6J("ngForOf",e.items)("ngForTrackBy",o.trackByFn)}}function Tt(n,s){if(1&n&&t.YNc(0,Zt,3,2,"ng-container",29),2&n){const e=s.$implicit,o=t.oxw(3);t.Q6J("ngForOf",e)("ngForTrackBy",o.trackByFn)}}function Nt(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"fuse-masonry",30),t.YNc(2,Tt,1,2,"ng-template",null,31,t.W1O),t.qZA(),t.BQk()),2&n){const e=t.MAs(3),o=t.oxw().ngIf,i=t.oxw();t.xp6(1),t.Q6J("items",o)("columns",i.masonryColumns)("columnsTemplate",e)}}function yt(n,s){if(1&n&&(t.ynx(0),t.YNc(1,Nt,4,3,"ng-container",26),t.BQk()),2&n){const e=s.ngIf;t.oxw();const o=t.MAs(39);t.xp6(1),t.Q6J("ngIf",e.length)("ngIfElse",o)}}function kt(n,s){1&n&&(t.TgZ(0,"div",44),t.TgZ(1,"div",45),t._uU(2,"Loading..."),t.qZA(),t.qZA())}function At(n,s){1&n&&(t.TgZ(0,"div",44),t._UZ(1,"mat-icon",46),t.TgZ(2,"div",45),t._uU(3,"There are no notes!"),t.qZA(),t.qZA()),2&n&&(t.xp6(1),t.Q6J("svgIcon","iconsmind:file_hide"))}const wt=[{path:"",component:Y,children:[{path:"",component:(()=>{class n{constructor(e,o,i,c){this._changeDetectorRef=e,this._fuseMediaWatcherService=o,this._matDialog=i,this._notesService=c,this.drawerMode="side",this.drawerOpened=!0,this.filter$=new f.X("notes"),this.searchQuery$=new f.X(null),this.masonryColumns=4,this._unsubscribeAll=new x.xQ}get filterStatus(){return this.filter$.value}ngOnInit(){this._notesService.getLabels().subscribe(),this._notesService.getNotes().subscribe(),this.labels$=this._notesService.labels$,this.notes$=(0,H.aj)([this._notesService.notes$,this.filter$,this.searchQuery$]).pipe((0,R.x)(),(0,h.U)(([e,o,i])=>{if(!e||!e.length)return;let c=e;i&&(i=i.trim().toLowerCase(),c=c.filter(_=>_.title.toLowerCase().includes(i)||_.content.toLowerCase().includes(i)));const r="archived"===o;if(c=c.filter(_=>_.archived===r),o.startsWith("label:")){const _=o.split(":")[1];c=c.filter(Qt=>!!Qt.labels.find(Jt=>Jt.id===_))}return c})),this._fuseMediaWatcherService.onMediaChange$.pipe((0,y.R)(this._unsubscribeAll)).subscribe(({matchingAliases:e})=>{e.includes("lg")?(this.drawerMode="side",this.drawerOpened=!0):(this.drawerMode="over",this.drawerOpened=!1),this.masonryColumns=e.includes("xl")?5:e.includes("lg")?4:e.includes("md")?3:e.includes("sm")?2:1,this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}addNewNote(){this._matDialog.open(D,{autoFocus:!1,data:{note:{}}})}openEditLabelsDialog(){this._matDialog.open(at,{autoFocus:!1})}openNoteDialog(e){this._matDialog.open(D,{autoFocus:!1,data:{note:(0,F.Z)(e)}})}filterByArchived(){this.filter$.next("archived")}filterByLabel(e){this.filter$.next(`label:${e}`)}filterByQuery(e){this.searchQuery$.next(e)}resetFilter(){this.filter$.next("notes")}trackByFn(e,o){return o.id||e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO),t.Y36(J.T),t.Y36(m.uw),t.Y36(k))},n.\u0275cmp=t.Xpm({type:n,selectors:[["notes-list"]],decls:40,vars:28,consts:[[1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-hidden"],[1,"flex-auto","h-full","bg-card","dark:bg-transparent"],[1,"w-2/3","sm:w-72","lg:w-56","border-r-0","bg-default",3,"mode","opened"],["drawer",""],[1,"p-6","lg:py-8","lg:pl-4","lg:pr-0"],[1,"space-y-2"],["matRipple","",1,"relative","flex","items-center","py-2","px-4","font-medium","rounded-full","cursor-pointer",3,"ngClass","matRippleDisabled","click"],[1,"text-current",3,"svgIcon"],[1,"ml-3","leading-5","select-none","text-default"],[4,"ngIf"],["matRipple","",1,"relative","flex","items-center","py-2","px-4","font-medium","rounded-full","cursor-pointer","hover:bg-hover",3,"click"],[1,"text-hint",3,"svgIcon"],[1,"ml-3","leading-5","select-none"],[1,"flex","flex-col","bg-gray-100","dark:bg-transparent"],[1,"flex","flex-col","flex-auto","p-6","md:p-8"],[1,"flex","items-center"],[1,"flex","items-center","flex-auto"],["mat-icon-button","",1,"flex","lg:hidden","-ml-2",3,"click"],[3,"svgIcon"],[1,"fuse-mat-rounded","fuse-mat-dense","fuse-mat-no-subscript","flex-auto","ml-4","lg:ml-0"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder","input"],["searchInput",""],["mat-flat-button","",1,"ml-4","px-1","sm:px-4","min-w-10",3,"color","click"],[1,"icon-size-5",3,"svgIcon"],[1,"hidden","sm:inline-block","ml-2"],[4,"ngIf","ngIfElse"],["loading",""],["noNotes",""],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"-mx-2","mt-8",3,"items","columns","columnsTemplate"],["columnsTemplate",""],[1,"flex-1","px-2","space-y-4"],[1,"flex","flex-col","shadow","rounded-2xl","overflow-hidden","cursor-pointer","bg-card",3,"click"],[1,"flex","flex-auto","flex-col","p-6","space-y-4"],[1,"w-full","object-cover",3,"src"],[1,"font-semibold","line-clamp-3"],[1,"space-y-1.5"],[1,"ml-1.5","leading-5",3,"ngClass"],[1,"flex","items-center","justify-center","w-5","h-5"],[1,"w-4","h-4","rounded-full","border-2"],[1,"text-hint","icon-size-5",3,"svgIcon"],[1,"flex","flex-wrap","items-center","-m-1"],[1,"m-1","py-0.5","px-3","rounded-full","text-sm","font-medium","text-gray-500","bg-gray-100","dark:text-gray-300","dark:bg-gray-700"],[1,"flex","flex-auto","flex-col","items-center","justify-center","bg-gray-100","dark:bg-transparent"],[1,"mt-4","text-2xl","font-semibold","tracking-tight","text-secondary"],[1,"icon-size-24",3,"svgIcon"]],template:function(e,o){if(1&e){const i=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"mat-drawer-container",1),t.TgZ(2,"mat-drawer",2,3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.TgZ(6,"div",6),t.NdJ("click",function(){return o.resetFilter()}),t._UZ(7,"mat-icon",7),t.TgZ(8,"div",8),t._uU(9,"Notes"),t.qZA(),t.qZA(),t.TgZ(10,"div",6),t.NdJ("click",function(){return o.filterByArchived()}),t._UZ(11,"mat-icon",7),t.TgZ(12,"div",8),t._uU(13,"Archive"),t.qZA(),t.qZA(),t.YNc(14,_t,2,2,"ng-container",9),t.ALo(15,"async"),t.TgZ(16,"div",10),t.NdJ("click",function(){return o.openEditLabelsDialog()}),t._UZ(17,"mat-icon",11),t.TgZ(18,"div",12),t._uU(19,"Edit labels"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"mat-drawer-content",13),t.TgZ(21,"div",14),t.TgZ(22,"div",15),t.TgZ(23,"div",16),t.TgZ(24,"button",17),t.NdJ("click",function(){return t.CHM(i),t.MAs(3).toggle()}),t._UZ(25,"mat-icon",18),t.qZA(),t.TgZ(26,"mat-form-field",19),t._UZ(27,"mat-icon",20),t.TgZ(28,"input",21,22),t.NdJ("input",function(){t.CHM(i);const r=t.MAs(29);return o.filterByQuery(r.value)}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"button",23),t.NdJ("click",function(){return o.addNewNote()}),t._UZ(31,"mat-icon",24),t.TgZ(32,"span",25),t._uU(33,"New note"),t.qZA(),t.qZA(),t.qZA(),t.YNc(34,yt,2,2,"ng-container",26),t.ALo(35,"async"),t.YNc(36,kt,3,0,"ng-template",null,27,t.W1O),t.YNc(38,At,4,1,"ng-template",null,28,t.W1O),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&e){const i=t.MAs(37);t.xp6(2),t.Q6J("mode",o.drawerMode)("opened",o.drawerOpened),t.xp6(4),t.Q6J("ngClass",t.WLB(22,A,"notes"===o.filterStatus,"notes"!==o.filterStatus))("matRippleDisabled","notes"===o.filterStatus),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:pencil-alt"),t.xp6(3),t.Q6J("ngClass",t.WLB(25,A,"archived"===o.filterStatus,"archived"!==o.filterStatus))("matRippleDisabled","archived"===o.filterStatus),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:archive"),t.xp6(3),t.Q6J("ngIf",t.lcZ(15,18,o.labels$)),t.xp6(3),t.Q6J("svgIcon","heroicons_outline:pencil"),t.xp6(8),t.Q6J("svgIcon","heroicons_outline:menu"),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:search"),t.xp6(1),t.Q6J("autocomplete","off")("placeholder","Search notes"),t.xp6(2),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:plus-circle"),t.xp6(3),t.Q6J("ngIf",t.lcZ(35,20,o.notes$))("ngIfElse",i)}},directives:[T.kh,T.jA,N.wG,l.mk,C.Hw,l.O5,T.LW,b.lW,u.KE,u.qo,v.Nt,l.sg,O],pipes:[l.Ov],encapsulation:2,changeDetection:0}),n})()}]}];let It=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[I.Bz.forChild(wt),b.ot,Q.p9,m.Is,u.lN,C.Ps,v.c,Z.Tx,N.si,T.SJ,U,S.m]]}),n})()}}]);