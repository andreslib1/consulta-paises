"use strict";(self.webpackChunkcountryApp=self.webpackChunkcountryApp||[]).push([[609],{609:(J,y,s)=>{s.r(y),s.d(y,{CountriesModule:()=>S});var i=s(895),c=s(279),t=s(256),d=s(4),l=s(262),p=s(646),Z=s(529);let h=(()=>{class e{constructor(n){this.http=n,this.apiUrl="https://restcountries.com/v3.1"}searchCountryByAlphaCode(n){return this.http.get(`${this.apiUrl}/alpha/${n}`).pipe((0,d.U)(a=>a.length>0?a[0]:null),(0,l.K)(()=>(0,p.of)(null)))}searchCapital(n){return this.http.get(`${this.apiUrl}/capital/${n}`).pipe((0,l.K)(a=>(0,p.of)([])))}searchCountry(n){return this.http.get(`${this.apiUrl}/name/${n}`).pipe((0,l.K)(a=>(0,p.of)([])))}searchRegion(n){return this.http.get(`${this.apiUrl}/region/${n}`).pipe((0,l.K)(a=>(0,p.of)([])))}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(Z.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),m=(()=>{class e{constructor(){this.searchEvent=new t.vpe,this.placeholder=""}search(n){this.searchEvent.emit(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["shered-search-box"]],inputs:{placeholder:"placeholder"},outputs:{searchEvent:"searchEvent"},decls:2,vars:1,consts:[["type","taxt",1,"form-control",3,"placeholder","keyup.enter"],["searchBox",""]],template:function(n,o){if(1&n){const a=t.EpF();t.TgZ(0,"input",0,1),t.NdJ("keyup.enter",function(){t.CHM(a);const E=t.MAs(1);return t.KtG(o.search(E.value))}),t.qZA()}2&n&&t.Q6J("placeholder",o.placeholder)},encapsulation:2}),e})();function C(e,r){1&e&&(t.TgZ(0,"div",2),t._uU(1," No hay paises "),t.qZA())}const v=function(e){return["/countries/by",e]};function f(e,r){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._UZ(6,"img",5),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.ALo(13,"number"),t.qZA(),t.TgZ(14,"td")(15,"a",6),t._uU(16," Ver mas "),t.qZA()()()),2&e){const n=r.$implicit,o=r.index;t.xp6(2),t.Oqu(o+1),t.xp6(2),t.Oqu(n.flag),t.xp6(2),t.Q6J("src",n.flags.svg,t.LSH),t.xp6(2),t.Oqu(n.name.common),t.xp6(2),t.Oqu(n.capital),t.xp6(2),t.Oqu(t.lcZ(13,7,n.population)),t.xp6(3),t.Q6J("routerLink",t.VKq(9,v,n.cca3))}}function T(e,r){if(1&e&&(t.TgZ(0,"table",3)(1,"thead")(2,"tr")(3,"th"),t._uU(4,"#"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Bandera"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Nombre"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Poblacion"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Capital"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Poblacion"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Informacion"),t.qZA()()(),t.TgZ(17,"tbody"),t.YNc(18,f,17,11,"tr",4),t.qZA()()),2&e){const n=t.oxw();t.xp6(18),t.Q6J("ngForOf",n.countries)}}let g=(()=>{class e{constructor(){this.countries=[]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],["alt","country.name.common",3,"src"],[3,"routerLink"]],template:function(n,o){if(1&n&&(t.YNc(0,C,2,0,"div",0),t.YNc(1,T,19,1,"ng-template",null,1,t.W1O)),2&n){const a=t.MAs(2);t.Q6J("ngIf",0===o.countries.length)("ngIfElse",a)}},dependencies:[i.sg,i.O5,c.rH,i.JJ],styles:["img[_ngcontent-%COMP%]{width:25px}"]}),e})(),_=(()=>{class e{constructor(n){this.countriesService=n,this.countries=[]}searchByCapital(n){this.countriesService.searchCapital(n).subscribe(o=>{this.countries=o})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(h))},e.\u0275cmp=t.Xpm({type:e,selectors:[["by-capital-page"]],decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital",3,"searchEvent"],[3,"countries"]],template:function(n,o){1&n&&(t.TgZ(0,"h2"),t._uU(1,"Por capital"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shered-search-box",2),t.NdJ("searchEvent",function(u){return o.searchByCapital(u)}),t.qZA()()(),t.TgZ(6,"div",0)(7,"div",1),t._UZ(8,"hr")(9,"countries-table",3),t.qZA()()),2&n&&(t.xp6(9),t.Q6J("countries",o.countries))},dependencies:[m,g],encapsulation:2}),e})(),A=(()=>{class e{constructor(n){this.countriesService=n,this.countries=[]}searchByCountry(n){this.countriesService.searchCountry(n).subscribe(o=>{this.countries=o})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(h))},e.\u0275cmp=t.Xpm({type:e,selectors:[["by-country-page"]],decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por pais",3,"searchEvent"],[3,"countries"]],template:function(n,o){1&n&&(t.TgZ(0,"h2"),t._uU(1,"Por Pais"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shered-search-box",2),t.NdJ("searchEvent",function(u){return o.searchByCountry(u)}),t.qZA()()(),t.TgZ(6,"div",0)(7,"div",1),t._UZ(8,"hr")(9,"countries-table",3),t.qZA()()),2&n&&(t.xp6(9),t.Q6J("countries",o.countries))},dependencies:[m,g],encapsulation:2}),e})(),U=(()=>{class e{constructor(n){this.countriesService=n,this.countries=[]}searchByRegion(n){this.countriesService.searchRegion(n).subscribe(o=>{this.countries=o})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(h))},e.\u0275cmp=t.Xpm({type:e,selectors:[["by-region-page"]],decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital",3,"searchEvent"],[3,"countries"]],template:function(n,o){1&n&&(t.TgZ(0,"h2"),t._uU(1,"Por Region"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shered-search-box",2),t.NdJ("searchEvent",function(u){return o.searchByRegion(u)}),t.qZA()()(),t.TgZ(6,"div",0)(7,"div",1),t._UZ(8,"hr")(9,"countries-table",3),t.qZA()()),2&n&&(t.xp6(9),t.Q6J("countries",o.countries))},dependencies:[m,g],encapsulation:2}),e})();var b=s(900);const q=[{path:"by-capital",component:_},{path:"by-country",component:A},{path:"by-region",component:U},{path:"by/:id",component:(()=>{class e{constructor(n,o,a){this.activatedRoute=n,this.countriesService=o,this.router=a}ngOnInit(){this.activatedRoute.params.pipe((0,b.w)(({id:n})=>this.countriesService.searchCountryByAlphaCode(n))).subscribe(n=>{if(!n)return this.router.navigateByUrl("");console.log("tenemos un pais"),this.country=n})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(c.gz),t.Y36(h),t.Y36(c.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["country-page"]],decls:36,vars:9,consts:[[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"row","col-3"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"col"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2"),t._uU(3," Pais "),t.TgZ(4,"strong"),t._uU(5),t.qZA()()()(),t.TgZ(6,"div",0)(7,"div",2)(8,"h3"),t._uU(9,"Bandera"),t.qZA(),t._UZ(10,"img",3),t.qZA(),t.TgZ(11,"div",4)(12,"ul",5)(13,"h3"),t._uU(14,"Informacion"),t.qZA(),t.TgZ(15,"li",6)(16,"strong"),t._uU(17,"Poblacion:"),t.qZA(),t._uU(18),t.qZA(),t.TgZ(19,"li",6)(20,"strong"),t._uU(21,"Codigo: "),t.qZA(),t._uU(22),t.qZA(),t.TgZ(23,"li",6)(24,"strong"),t._uU(25,"Area: "),t.qZA(),t._uU(26),t.qZA()()()(),t.TgZ(27,"div",7)(28,"div",8)(29,"div",9)(30,"span",10),t._uU(31),t.qZA(),t.TgZ(32,"span",10),t._uU(33),t.qZA(),t.TgZ(34,"span",10),t._uU(35),t.qZA()()()()),2&n&&(t.xp6(5),t.Oqu(null==o.country||null==o.country.name?null:o.country.name.common),t.xp6(5),t.Q6J("src",null==o.country||null==o.country.flags?null:o.country.flags.svg,t.LSH)("alt",null==o.country||null==o.country.name?null:o.country.name.common),t.xp6(8),t.hij(" ",null==o.country?null:o.country.population," "),t.xp6(4),t.hij(" ",null==o.country?null:o.country.cca3," "),t.xp6(4),t.hij(" ",null==o.country?null:o.country.area," "),t.xp6(5),t.Oqu(null==o.country||null==o.country.translations||null==o.country.translations.ara?null:o.country.translations.ara.common),t.xp6(2),t.Oqu(null==o.country||null==o.country.translations||null==o.country.translations.bre?null:o.country.translations.bre.common),t.xp6(2),t.Oqu(null==o.country||null==o.country.translations||null==o.country.translations.ita?null:o.country.translations.ita.common))},encapsulation:2}),e})()},{path:"**",redirectTo:"countries/by-capital"}];let B=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.Bz.forChild(q),c.Bz]}),e})();var P=s(244);let S=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[i.ez,B,P.K]}),e})()}}]);