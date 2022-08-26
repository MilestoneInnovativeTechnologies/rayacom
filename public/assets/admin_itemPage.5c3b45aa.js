import{a8 as E,B as D,k as i,r as p,E as I,H as o,C as d,N as l,G as t,Q as w,M as y,D as v,K as L,P,I as g,J as q,F as b,aA as B,aB as T}from"./index.8d7e61fd.js";import{Q as A}from"./QInput.0fdaf5de.js";import{Q as N}from"./QItemLabel.4b045cb7.js";import{a as Y,Q as k}from"./QItem.d2090226.js";import{Q as j}from"./QTooltip.4b19ba8a.js";import{Q as K}from"./QList.5e2b7bfb.js";import{Q as O}from"./QCard.9e71421a.js";import{Q as F}from"./QPagination.2286f097.js";import{Q as R}from"./QPage.12dd21c8.js";import{u as U}from"./master.58f94054.js";import"./use-dark.678b0dd2.js";import"./format.c860d4da.js";import"./position-engine.fd7b7ee1.js";import"./selection.4ec6e38e.js";import"./use-portal.0314865a.js";import"./scroll.25b4c155.js";import"./use-model-toggle.3fd02ce3.js";import"./lodash.1b69ab06.js";const z=U(),G={setup(){const s=D();let r,_;const e=i(()=>z.ITEM),m=p(""),c=i(()=>{if(m.value==="")return Object.values(e.value);{let u=m.value.toLowerCase();return Object.values(e.value).filter(Q=>Q.name.toLowerCase().indexOf(u)>-1)}}),a=i(()=>c.value.length),h=i(()=>(r=(f.value-1)*n.value,_=(f.value-1)*n.value+n.value,c.value.slice(r,_).map(C=>C))),x=function(u){s.push({name:"ITEMADD",params:{id:u}})};let f=p(1),M=p(1);const n=p(10),S=i(()=>Math.ceil(a.value/n.value));return{MYITEMS:e,search:m,searchResult:c,myitemsLength:a,page:f,currentPage:M,totalPages:n,maxVal:S,getData:h,gotoItem:x}}},V=s=>(B("data-v-bdba0e2e"),s=s(),T(),s),H={class:"q-pa-sm"},J={class:"row q-pa-md"},W={class:"col-8"},X={class:"col-4 text-center"},Z=g(" ADD ITEM "),$=V(()=>l("div",{class:"q-gutter-md",top:""},null,-1)),ee=V(()=>l("div",{class:"row justify-end side"},null,-1)),te={key:0,class:"q-pa-md row items-start q-gutter-md"},ae=g(" Edit "),oe={key:1,class:"q-pa-lg flex flex-center"};function re(s,r,_,e,m,c){return d(),I(R,{padding:"",class:"flex column q-col-gutter-y-lg"},{default:o(()=>[l("div",H,[l("div",J,[l("div",W,[t(A,{modelValue:e.search,"onUpdate:modelValue":r[0]||(r[0]=a=>e.search=a),debounce:"500",filled:"",placeholder:"Search"},{append:o(()=>[t(w,{name:"search"})]),_:1},8,["modelValue"])]),l("div",X,[t(y,{color:"positive","no-caps":"",onClick:r[1]||(r[1]=a=>e.gotoItem(0))},{default:o(()=>[t(w,{left:"",size:"xl",name:"open_in_new"}),Z]),_:1})])])]),$,ee,e.myitemsLength?(d(),v("div",te,[(d(!0),v(L,null,P(e.getData,(a,h)=>(d(),I(O,{flat:"",bordered:"",class:"my-card",key:a.id},{default:o(()=>[t(K,null,{default:o(()=>[t(Y,{class:"bg-brand text-white text-bold"},{default:o(()=>[t(k,null,{default:o(()=>[t(N,null,{default:o(()=>[g(q(a.name),1)]),_:2},1024)]),_:2},1024),t(k,{avatar:""},{default:o(()=>[t(y,{flat:"",round:"",color:"primary",icon:"mode_edit",onClick:x=>e.gotoItem(a.id)},{default:o(()=>[t(j,null,{default:o(()=>[ae]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))])):b("",!0),e.myitemsLength?(d(),v("div",oe,[t(F,{modelValue:e.page,"onUpdate:modelValue":r[2]||(r[2]=a=>e.page=a),min:e.currentPage,max:e.maxVal,"max-pages":7,"direction-links":"","boundary-links":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward","active-color":"deep-orange-10"},null,8,["modelValue","min","max"])])):b("",!0)]),_:1})}var ye=E(G,[["render",re],["__scopeId","data-v-bdba0e2e"]]);export{ye as default};