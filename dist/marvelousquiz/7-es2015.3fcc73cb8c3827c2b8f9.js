(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{W2jl:function(l,n,a){"use strict";a.r(n);var e=a("8Y7J");class t{}var o=a("pMnS"),i=a("kNGD"),c=a("/HVE"),r=a("Xd0L"),u=a("omvX"),s=a("Gi4r"),b=a("IP0z"),d=a("cUpR"),m=e.pb({encapsulation:2,styles:[".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1,1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],data:{}});function f(l){return e.Hb(2,[e.Bb(null,0)],null,null)}var p=a("lzlj"),g=a("igqZ"),h=a("SVse"),C=a("bujt"),w=a("Fwaw"),k=a("5GAg");class v{constructor(l,n){this.scoreService=l,this.router=n,this.score=[],this.scorePoints=0,this.messageScore=["Looooser: none right answers!","Not bad...: 1 right answer!","Good: 2 right answers!","Marvelous: 3 right answers!"],this.feedbackMessage=""}ngOnInit(){this.score=this.scoreService.score,this.scorePoints=this.scoreService.pointsScore,this.showFeedback(),this.score.length||this.router.navigateByUrl("/play")}showFeedback(){let l=0;for(let n of this.score)n.success&&l++;this.feedbackMessage=this.messageScore[l]}onRestart(){this.scoreService.resetGame()}}var x=a("6rc2"),A=a("iInd"),_=e.pb({encapsulation:0,styles:[[".score-deck[_ngcontent-%COMP%], .score-fail[_ngcontent-%COMP%], .score-success[_ngcontent-%COMP%]{transform:translate(-50%);left:50%}.score-cardImage[_ngcontent-%COMP%]{width:100%;height:240px;margin:0}.score-success[_ngcontent-%COMP%]{background-color:#24a565!important}.score-fail[_ngcontent-%COMP%]{background-color:#d6392e!important}.score-icon[_ngcontent-%COMP%]{margin-left:8px}.score-message[_ngcontent-%COMP%]{text-align:center;width:100%;position:relative;float:left;font-family:Bangers,cursive;color:#fff;font-size:64px;margin-bottom:0}.score-deck[_ngcontent-%COMP%]{width:auto;position:relative;float:left}.score-buttonRestart[_ngcontent-%COMP%]{position:relative;float:left;padding:16px 32px;margin-bottom:24px;margin-top:16px;max-width:90%;font-size:28px;transform:translate(-50%);left:50%;border:2px solid rgba(244,67,54,.5);box-shadow:0 5px 6px rgba(0,0,0,.8)}.score-points[_ngcontent-%COMP%]{text-align:center;width:100%;font-size:32px;position:relative;float:left;color:#fff;margin:0 0 16px;background:#f44336;padding-top:8px;padding-bottom:8px}.score-card[_ngcontent-%COMP%]{width:240px;position:relative;float:left;margin:4px}@media only screen and (max-width:574px){.score-card[_ngcontent-%COMP%]{width:calc(100% - 40px)}}hr[_ngcontent-%COMP%]{position:relative;float:left;width:100%;margin:0;height:1px;background:rgba(255,255,255,.5);border:0}"]],data:{}});function y(l){return e.Hb(0,[(l()(),e.rb(0,0,null,null,8,"mat-chip",[["class","score-success mat-chip"],["role","option"],["selected",""]],[[1,"tabindex",0],[2,"mat-chip-selected",null],[2,"mat-chip-with-avatar",null],[2,"mat-chip-with-trailing-icon",null],[2,"mat-chip-disabled",null],[2,"_mat-animation-noopable",null],[1,"disabled",0],[1,"aria-disabled",0],[1,"aria-selected",0]],[[null,"click"],[null,"keydown"],[null,"focus"],[null,"blur"]],(function(l,n,a){var t=!0;return"click"===n&&(t=!1!==e.Cb(l,1)._handleClick(a)&&t),"keydown"===n&&(t=!1!==e.Cb(l,1)._handleKeydown(a)&&t),"focus"===n&&(t=!1!==e.Cb(l,1).focus()&&t),"blur"===n&&(t=!1!==e.Cb(l,1)._blur()&&t),t}),null,null)),e.qb(1,147456,null,3,i.b,[e.k,e.x,c.a,[2,r.d],[2,u.a]],{selected:[0,"selected"]},null),e.Eb(603979776,1,{avatar:0}),e.Eb(603979776,2,{trailingIcon:0}),e.Eb(603979776,3,{removeIcon:0}),(l()(),e.Gb(-1,null,[" Success "])),(l()(),e.rb(6,0,null,null,2,"mat-icon",[["class","score-icon mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f,m)),e.qb(7,9158656,null,0,s.b,[e.k,s.d,[8,null],[2,s.a]],null,null),(l()(),e.Gb(-1,0,["check_circle"]))],(function(l,n){l(n,1,0,""),l(n,7,0)}),(function(l,n){l(n,0,0,e.Cb(n,1).disabled?null:-1,e.Cb(n,1).selected,e.Cb(n,1).avatar,e.Cb(n,1).trailingIcon||e.Cb(n,1).removeIcon,e.Cb(n,1).disabled,e.Cb(n,1)._animationsDisabled,e.Cb(n,1).disabled||null,e.Cb(n,1).disabled.toString(),e.Cb(n,1).ariaSelected),l(n,6,0,e.Cb(n,7).inline,"primary"!==e.Cb(n,7).color&&"accent"!==e.Cb(n,7).color&&"warn"!==e.Cb(n,7).color)}))}function M(l){return e.Hb(0,[(l()(),e.rb(0,0,null,null,8,"mat-chip",[["class","score-fail mat-chip"],["role","option"],["selected",""]],[[1,"tabindex",0],[2,"mat-chip-selected",null],[2,"mat-chip-with-avatar",null],[2,"mat-chip-with-trailing-icon",null],[2,"mat-chip-disabled",null],[2,"_mat-animation-noopable",null],[1,"disabled",0],[1,"aria-disabled",0],[1,"aria-selected",0]],[[null,"click"],[null,"keydown"],[null,"focus"],[null,"blur"]],(function(l,n,a){var t=!0;return"click"===n&&(t=!1!==e.Cb(l,1)._handleClick(a)&&t),"keydown"===n&&(t=!1!==e.Cb(l,1)._handleKeydown(a)&&t),"focus"===n&&(t=!1!==e.Cb(l,1).focus()&&t),"blur"===n&&(t=!1!==e.Cb(l,1)._blur()&&t),t}),null,null)),e.qb(1,147456,null,3,i.b,[e.k,e.x,c.a,[2,r.d],[2,u.a]],{selected:[0,"selected"]},null),e.Eb(603979776,4,{avatar:0}),e.Eb(603979776,5,{trailingIcon:0}),e.Eb(603979776,6,{removeIcon:0}),(l()(),e.Gb(-1,null,[" Fail "])),(l()(),e.rb(6,0,null,null,2,"mat-icon",[["class","score-icon mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f,m)),e.qb(7,9158656,null,0,s.b,[e.k,s.d,[8,null],[2,s.a]],null,null),(l()(),e.Gb(-1,0,["error"]))],(function(l,n){l(n,1,0,""),l(n,7,0)}),(function(l,n){l(n,0,0,e.Cb(n,1).disabled?null:-1,e.Cb(n,1).selected,e.Cb(n,1).avatar,e.Cb(n,1).trailingIcon||e.Cb(n,1).removeIcon,e.Cb(n,1).disabled,e.Cb(n,1)._animationsDisabled,e.Cb(n,1).disabled||null,e.Cb(n,1).disabled.toString(),e.Cb(n,1).ariaSelected),l(n,6,0,e.Cb(n,7).inline,"primary"!==e.Cb(n,7).color&&"accent"!==e.Cb(n,7).color&&"warn"!==e.Cb(n,7).color)}))}function O(l){return e.Hb(0,[(l()(),e.rb(0,0,null,null,14,"mat-card",[["class","score-card mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,p.d,p.a)),e.qb(1,49152,null,0,g.a,[[2,u.a]],null,null),(l()(),e.rb(2,0,null,0,4,"mat-card-header",[["class","mat-card-header"]],null,null,null,p.c,p.b)),e.qb(3,49152,null,0,g.d,[],null,null),(l()(),e.rb(4,0,null,1,2,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),e.qb(5,16384,null,0,g.g,[],null,null),(l()(),e.Gb(6,null,["",""])),(l()(),e.rb(7,0,null,0,1,"img",[["class","score-cardImage mat-card-image"],["mat-card-image",""]],[[8,"src",4]],null,null,null,null)),e.qb(8,16384,null,0,g.e,[],null,null),(l()(),e.rb(9,0,null,0,5,"mat-card-actions",[["class","mat-card-actions"]],[[2,"mat-card-actions-align-end",null]],null,null,null,null)),e.qb(10,16384,null,0,g.b,[],null,null),(l()(),e.gb(16777216,null,null,1,null,y)),e.qb(12,16384,null,0,h.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,null,1,null,M)),e.qb(14,16384,null,0,h.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,12,0,n.context.$implicit.success),l(n,14,0,!n.context.$implicit.success)}),(function(l,n){l(n,0,0,"NoopAnimations"===e.Cb(n,1)._animationMode),l(n,6,0,n.context.$implicit.characterName),l(n,7,0,n.context.$implicit.picture),l(n,9,0,"end"===e.Cb(n,10).align)}))}function P(l){return e.Hb(0,[(l()(),e.rb(0,0,null,null,1,"h1",[["class","score-message"]],null,null,null,null,null)),(l()(),e.Gb(1,null,["",""])),(l()(),e.rb(2,0,null,null,1,"h3",[["class","score-points"]],null,null,null,null,null)),(l()(),e.Gb(3,null,["Your score: "," "])),(l()(),e.rb(4,0,null,null,2,"button",[["class","score-buttonRestart"],["color","warn"],["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,a){var e=!0;return"click"===n&&(e=!1!==l.component.onRestart()&&e),e}),C.b,C.a)),e.qb(5,180224,null,0,w.b,[e.k,k.b,[2,u.a]],{color:[0,"color"]},null),(l()(),e.Gb(-1,0,["RESTART"])),(l()(),e.rb(7,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e.rb(8,0,null,null,2,"div",[["class","score-deck"]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,O)),e.qb(10,278528,null,0,h.h,[e.N,e.K,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var a=n.component;l(n,5,0,"warn"),l(n,10,0,a.score)}),(function(l,n){var a=n.component;l(n,1,0,a.feedbackMessage),l(n,3,0,a.scorePoints),l(n,4,0,e.Cb(n,5).disabled||null,"NoopAnimations"===e.Cb(n,5)._animationMode)}))}function I(l){return e.Hb(0,[(l()(),e.rb(0,0,null,null,1,"app-score",[],null,null,null,P,_)),e.qb(1,114688,null,0,v,[x.a,A.k],null,null)],(function(l,n){l(n,1,0)}),null)}var q=e.nb("app-score",v,I,{},{},[]),S=a("POq0");class G{}var H=a("BzsH"),N=a("oapL"),z=a("HsOI"),E=a("ZwOa"),j=a("02hT"),F=a("Q+lL"),R=a("W5yJ"),K=a("8P0U"),B=a("jAig"),J=a("dvZr");a.d(n,"ScoreModuleNgFactory",(function(){return L}));var L=e.ob(t,[],(function(l){return e.zb([e.Ab(512,e.j,e.Z,[[8,[o.a,q]],[3,e.j],e.v]),e.Ab(4608,h.k,h.j,[e.s,[2,h.w]]),e.Ab(4608,r.a,r.a,[]),e.Ab(4608,S.c,S.c,[]),e.Ab(1073742336,h.b,h.b,[]),e.Ab(1073742336,A.m,A.m,[[2,A.r],[2,A.k]]),e.Ab(1073742336,G,G,[]),e.Ab(1073742336,b.a,b.a,[]),e.Ab(1073742336,r.e,r.e,[[2,r.b],[2,d.f]]),e.Ab(1073742336,c.b,c.b,[]),e.Ab(1073742336,r.i,r.i,[]),e.Ab(1073742336,w.c,w.c,[]),e.Ab(1073742336,H.b,H.b,[]),e.Ab(1073742336,s.c,s.c,[]),e.Ab(1073742336,i.d,i.d,[]),e.Ab(1073742336,g.f,g.f,[]),e.Ab(1073742336,N.c,N.c,[]),e.Ab(1073742336,S.d,S.d,[]),e.Ab(1073742336,z.e,z.e,[]),e.Ab(1073742336,E.b,E.b,[]),e.Ab(1073742336,r.f,r.f,[]),e.Ab(1073742336,r.g,r.g,[]),e.Ab(1073742336,j.a,j.a,[]),e.Ab(1073742336,F.a,F.a,[]),e.Ab(1073742336,R.c,R.c,[]),e.Ab(1073742336,K.c,K.c,[]),e.Ab(1073742336,B.a,B.a,[]),e.Ab(1073742336,t,t,[]),e.Ab(1024,A.i,(function(){return[[{path:"",component:v}]]}),[]),e.Ab(256,i.a,{separatorKeyCodes:[J.f]},[])])}))}}]);