import{a as n,c as d,h as o,e as k,j as q,a4 as I,a5 as K,r as b,a6 as $,u as j,k as w}from"./index.12c21531.js";const y={dark:{type:Boolean,default:null}};function g(e,a){return n(()=>e.dark===null?a.dark.isActive:e.dark)}var P=d({name:"QList",props:{...y,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean},setup(e,{slots:a}){const u=q(),i=g(e,u.proxy.$q),c=n(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>o("div",{class:c.value},k(a.default))}}),A=d({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:a}){const u=n(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>o("div",{class:u.value},k(a.default))}}),T=d({name:"QItem",props:{...y,...I,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:a,emit:u}){const{proxy:{$q:i}}=q(),c=g(e,i),{hasRouterLink:h,hasLink:v,linkProps:B,linkClass:_,linkTag:L,navigateToRouterLink:C}=K(),s=b(null),r=b(null),m=n(()=>e.clickable===!0||v.value===!0||e.tag==="label"),l=n(()=>e.disable!==!0&&m.value===!0),x=n(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(c.value===!0?" q-item--dark":"")+(v.value===!0&&e.active===null?_.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(l.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),E=n(()=>{if(e.insetLevel===void 0)return null;const t=i.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function Q(t){l.value===!0&&(r.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===s.value?r.value.focus():document.activeElement===r.value&&s.value.focus()),h.value===!0&&C(t),u("click",t))}function R(t){if(l.value===!0&&$(t,13)===!0){j(t),t.qKeyEvent=!0;const f=new MouseEvent("click",t);f.qKeyEvent=!0,s.value.dispatchEvent(f)}u("keyup",t)}function S(){const t=w(a.default,[]);return l.value===!0&&t.unshift(o("div",{class:"q-focus-helper",tabindex:-1,ref:r})),t}return()=>{const t={ref:s,class:x.value,style:E.value,onClick:Q,onKeyup:R};return l.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,B.value)):m.value===!0&&(t["aria-disabled"]="true"),o(L.value,t,S())}}});export{A as Q,g as a,T as b,P as c,y as u};
