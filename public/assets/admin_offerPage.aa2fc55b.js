import{a8 as L,B as S,r as _,k as p,E as n,H as t,C as r,N as v,G as o,Q as b,M as V,D as x,K as q,P as E,I as l,J as i,F as C}from"./index.519e6511.js";import{Q as F}from"./QInput.3be0fd5f.js";import{Q as h}from"./QItemLabel.95c271f7.js";import{Q as c}from"./QBadge.a3efd72d.js";import{a as N,Q as P}from"./QItem.dbe0fd3c.js";import{Q as O}from"./QTooltip.6ce96193.js";import{Q as M}from"./QList.ee2f0220.js";import{Q as R}from"./QCard.39c5907a.js";import{Q as Y}from"./QPagination.908aa05f.js";import{Q as K}from"./QPage.68727071.js";import{u as U}from"./offers.70c3b81f.js";import{u as j}from"./master.8d9550d1.js";import"./use-dark.e60f4681.js";import"./format.c860d4da.js";import"./position-engine.6301699e.js";import"./selection.e65ce004.js";import"./use-portal.0839ed11.js";import"./scroll.1e188d5c.js";import"./use-model-toggle.02b9d1d7.js";import"./lodash.1b69ab06.js";const A=U();j();const T={setup(){const k=S();let s,g;const a=_(""),u=p(()=>{if(a.value==="")return Object.values(A.offers);{let f=a.value.toLowerCase();return Object.values(A.offers).filter(w=>w.item.name.toLowerCase().indexOf(f)>-1)}}),y=p(()=>u.value.length),e=p(()=>(s=(m.value-1)*d.value,g=(m.value-1)*d.value+d.value,u.value.slice(s,g).map(I=>I))),Q=function(f){k.push({name:"OFFERADD",state:{id:f}})};let m=_(1),B=_(1);const d=_(10),D=p(()=>Math.ceil(y.value/d.value));return{search:a,searchResult:u,myarrayLength:y,page:m,currentPage:B,totalPages:d,maxVal:D,getData:e,gotoAction:Q}}},z={class:"q-pa-sm"},G={class:"row q-pa-md"},H={class:"col-8"},J={class:"col-4 text-center"},W=l(" ADD OFFER "),X={key:0,class:"q-pa-sm row items-start q-gutter-md"},Z=l("Unknown"),$=l(" Edit "),ee={key:1,class:"q-pa-lg flex flex-center"};function te(k,s,g,a,u,y){return r(),n(K,{padding:"",class:"flex column q-col-gutter-y-lg"},{default:t(()=>[v("div",z,[v("div",G,[v("div",H,[o(F,{modelValue:a.search,"onUpdate:modelValue":s[0]||(s[0]=e=>a.search=e),debounce:"500",filled:"",placeholder:"Search"},{append:t(()=>[o(b,{name:"search"})]),_:1},8,["modelValue"])]),v("div",J,[o(V,{color:"positive","no-caps":"",onClick:s[1]||(s[1]=e=>a.gotoAction(0))},{default:t(()=>[o(b,{left:"",size:"xl",name:"open_in_new"}),W]),_:1})])])]),a.myarrayLength?(r(),x("div",X,[(r(!0),x(q,null,E(a.getData,(e,Q)=>(r(),n(R,{flat:"",bordered:"",class:"my-card",key:e.id},{default:t(()=>[o(M,null,{default:t(()=>[o(N,{class:"bg-brand text-white text-bold"},{default:t(()=>[o(P,null,{default:t(()=>[o(h,null,{default:t(()=>[l(i(e.item.name),1)]),_:2},1024),o(h,{class:"text-subtitle2"},{default:t(()=>[l("Buy: "+i(e.minimum_quantity),1)]),_:2},1024),o(h,null,{default:t(()=>[e.status==="New"?(r(),n(c,{key:0,color:"blue"},{default:t(()=>[l(i(e.status),1)]),_:2},1024)):e.status==="Approved"?(r(),n(c,{key:1,color:"secondary"},{default:t(()=>[l(i(e.status),1)]),_:2},1024)):e.status==="Published"?(r(),n(c,{key:2,color:"positive"},{default:t(()=>[l(i(e.status),1)]),_:2},1024)):e.status==="Inactive"?(r(),n(c,{key:3,color:"accent"},{default:t(()=>[l(i(e.status),1)]),_:2},1024)):(r(),n(c,{key:4,color:"dark"},{default:t(()=>[Z]),_:1}))]),_:2},1024)]),_:2},1024),o(P,{avatar:""},{default:t(()=>[o(V,{flat:"",round:"",color:"primary",icon:"mode_edit",onClick:m=>a.gotoAction(e.id)},{default:t(()=>[o(O,null,{default:t(()=>[$]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))])):C("",!0),a.myarrayLength?(r(),x("div",ee,[o(Y,{modelValue:a.page,"onUpdate:modelValue":s[2]||(s[2]=e=>a.page=e),min:a.currentPage,max:a.maxVal,"max-pages":7,"direction-links":"","boundary-links":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward","active-color":"deep-orange-10"},null,8,["modelValue","min","max"])])):C("",!0)]),_:1})}var Qe=L(T,[["render",te],["__scopeId","data-v-67c5ae1e"]]);export{Qe as default};
