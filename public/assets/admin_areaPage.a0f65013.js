import{a8 as E,B as L,k as s,r as m,E as y,H as o,C as l,N as u,G as t,Q as k,M as A,D as f,K as P,P as I,I as v,J as R,F as w}from"./index.8d7e61fd.js";import{Q as q}from"./QInput.0fdaf5de.js";import{Q as B}from"./QItemLabel.4b045cb7.js";import{a as M,Q as V}from"./QItem.d2090226.js";import{Q as S}from"./QTooltip.4b19ba8a.js";import{Q as Y}from"./QList.5e2b7bfb.js";import{Q as N}from"./QCard.9e71421a.js";import{Q as K}from"./QPagination.2286f097.js";import{Q as O}from"./QPage.12dd21c8.js";import{u as j}from"./master.58f94054.js";import"./use-dark.678b0dd2.js";import"./format.c860d4da.js";import"./position-engine.fd7b7ee1.js";import"./selection.4ec6e38e.js";import"./use-portal.0314865a.js";import"./scroll.25b4c155.js";import"./use-model-toggle.3fd02ce3.js";import"./lodash.1b69ab06.js";const F=j(),T={setup(){const g=L();let r,p;const e=s(()=>F.AREA),i=m(""),d=s(()=>{if(i.value==="")return Object.values(e.value);{let c=i.value.toLowerCase();return Object.values(e.value).filter(Q=>Q.name.toLowerCase().indexOf(c)>-1)}}),a=s(()=>d.value.length),x=s(()=>(r=(_.value-1)*n.value,p=(_.value-1)*n.value+n.value,d.value.slice(r,p).map(D=>D))),h=function(c){g.push({name:"AREAADD",params:{id:c}})};let _=m(1),b=m(1);const n=m(10),C=s(()=>Math.ceil(a.value/n.value));return{MYARRAY:e,search:i,searchResult:d,myarrayLength:a,page:_,currentPage:b,totalPages:n,maxVal:C,getData:x,gotoAction:h}}},U={class:"q-pa-sm"},z={class:"row q-pa-md"},G={class:"col-8"},H={class:"col-4 text-center"},J=v(" ADD AREA "),W={key:0,class:"q-pa-sm row items-start q-gutter-md"},X=v(" Edit "),Z={key:1,class:"q-pa-lg flex flex-center"};function $(g,r,p,e,i,d){return l(),y(O,{padding:"",class:"flex column q-col-gutter-y-lg"},{default:o(()=>[u("div",U,[u("div",z,[u("div",G,[t(q,{modelValue:e.search,"onUpdate:modelValue":r[0]||(r[0]=a=>e.search=a),debounce:"500",filled:"",placeholder:"Search"},{append:o(()=>[t(k,{name:"search"})]),_:1},8,["modelValue"])]),u("div",H,[t(A,{color:"positive","no-caps":"",onClick:r[1]||(r[1]=a=>e.gotoAction(0))},{default:o(()=>[t(k,{left:"",size:"xl",name:"open_in_new"}),J]),_:1})])])]),e.myarrayLength?(l(),f("div",W,[(l(!0),f(P,null,I(e.getData,(a,x)=>(l(),y(N,{flat:"",bordered:"",class:"my-card",key:a.id},{default:o(()=>[t(Y,null,{default:o(()=>[t(M,{class:"bg-brand text-white text-bold"},{default:o(()=>[t(V,null,{default:o(()=>[t(B,null,{default:o(()=>[v(R(a.name),1)]),_:2},1024)]),_:2},1024),t(V,{avatar:""},{default:o(()=>[t(A,{flat:"",round:"",color:"primary",icon:"mode_edit",onClick:h=>e.gotoAction(a.id)},{default:o(()=>[t(S,null,{default:o(()=>[X]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))])):w("",!0),e.myarrayLength?(l(),f("div",Z,[t(K,{modelValue:e.page,"onUpdate:modelValue":r[2]||(r[2]=a=>e.page=a),min:e.currentPage,max:e.maxVal,"max-pages":7,"direction-links":"","boundary-links":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward","active-color":"deep-orange-10"},null,8,["modelValue","min","max"])])):w("",!0)]),_:1})}var xe=E(T,[["render",$],["__scopeId","data-v-37d7f102"]]);export{xe as default};
