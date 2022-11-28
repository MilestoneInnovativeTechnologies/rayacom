import{a8 as E,B as D,k as l,r as c,E as k,H as o,C as n,N as u,G as t,Q as y,M as w,D as f,K as L,P,I as v,J as S,F as I}from"./index.519e6511.js";import{Q as q}from"./QInput.3be0fd5f.js";import{Q as B}from"./QItemLabel.95c271f7.js";import{a as T,Q as V}from"./QItem.dbe0fd3c.js";import{Q as N}from"./QTooltip.6ce96193.js";import{Q as Y}from"./QList.ee2f0220.js";import{Q as A}from"./QCard.39c5907a.js";import{Q as K}from"./QPagination.908aa05f.js";import{Q as O}from"./QPage.68727071.js";import{u as j}from"./master.8d9550d1.js";import"./use-dark.e60f4681.js";import"./format.c860d4da.js";import"./position-engine.6301699e.js";import"./selection.e65ce004.js";import"./use-portal.0839ed11.js";import"./scroll.1e188d5c.js";import"./use-model-toggle.02b9d1d7.js";import"./lodash.1b69ab06.js";const F=j(),R={setup(){const g=D();let r,_;const e=l(()=>F.ITEM),i=c(""),m=l(()=>{if(i.value==="")return Object.values(e.value);{let d=i.value.toLowerCase();return Object.values(e.value).filter(Q=>Q.name.toLowerCase().indexOf(d)>-1)}}),a=l(()=>m.value.length),x=l(()=>(r=(p.value-1)*s.value,_=(p.value-1)*s.value+s.value,m.value.slice(r,_).map(C=>C))),h=function(d){g.push({name:"ITEMADD",state:{id:d}})};let p=c(1),b=c(1);const s=c(10),M=l(()=>Math.ceil(a.value/s.value));return{MYITEMS:e,search:i,searchResult:m,myitemsLength:a,page:p,currentPage:b,totalPages:s,maxVal:M,getData:x,gotoItem:h}}},U={class:"q-pa-sm"},z={class:"row q-pa-md"},G={class:"col-8"},H={class:"col-4 text-center"},J=v(" ADD ITEM "),W={key:0,class:"q-pa-md row items-start q-gutter-md"},X=v(" Edit "),Z={key:1,class:"q-pa-lg flex flex-center"};function $(g,r,_,e,i,m){return n(),k(O,{padding:"",class:"flex column q-col-gutter-y-lg"},{default:o(()=>[u("div",U,[u("div",z,[u("div",G,[t(q,{modelValue:e.search,"onUpdate:modelValue":r[0]||(r[0]=a=>e.search=a),debounce:"500",filled:"",placeholder:"Search"},{append:o(()=>[t(y,{name:"search"})]),_:1},8,["modelValue"])]),u("div",H,[t(w,{color:"positive","no-caps":"",onClick:r[1]||(r[1]=a=>e.gotoItem(0))},{default:o(()=>[t(y,{left:"",size:"xl",name:"open_in_new"}),J]),_:1})])])]),e.myitemsLength?(n(),f("div",W,[(n(!0),f(L,null,P(e.getData,(a,x)=>(n(),k(A,{flat:"",bordered:"",class:"my-card",key:a.id},{default:o(()=>[t(Y,null,{default:o(()=>[t(T,{class:"bg-brand text-white text-bold"},{default:o(()=>[t(V,null,{default:o(()=>[t(B,null,{default:o(()=>[v(S(a.name),1)]),_:2},1024)]),_:2},1024),t(V,{avatar:""},{default:o(()=>[t(w,{flat:"",round:"",color:"primary",icon:"mode_edit",onClick:h=>e.gotoItem(a.id)},{default:o(()=>[t(N,null,{default:o(()=>[X]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))])):I("",!0),e.myitemsLength?(n(),f("div",Z,[t(K,{modelValue:e.page,"onUpdate:modelValue":r[2]||(r[2]=a=>e.page=a),min:e.currentPage,max:e.maxVal,"max-pages":7,"direction-links":"","boundary-links":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward","active-color":"deep-orange-10"},null,8,["modelValue","min","max"])])):I("",!0)]),_:1})}var xe=E(R,[["render",$],["__scopeId","data-v-1309b682"]]);export{xe as default};