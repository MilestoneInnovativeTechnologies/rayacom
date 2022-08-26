import{a8 as V,B as E,r as s,k as y,D as d,N as f,G as c,H as x,K as P,P as B,F as w,M as L,C as l,Q as N,E as D,J as O,aA as Y,aB as R}from"./index.8d7e61fd.js";import{Q as A}from"./QInput.0fdaf5de.js";import{Q as K}from"./QCardSection.5c6eb920.js";import{Q as T}from"./QCard.9e71421a.js";import{Q as j}from"./QPagination.2286f097.js";import{u as F}from"./use-quasar.7d209305.js";import{u as J}from"./master.58f94054.js";import"./use-dark.678b0dd2.js";import"./format.c860d4da.js";import"./lodash.1b69ab06.js";const U=J(),G=U.ITEM,H={setup(){const r=F(),a=E(),n=s([]);let e,_,u=s(G);const t=s(""),m=y(()=>{if(t.value==="")return Object.values(u.value);{let o=t.value.toLowerCase();return Object.values(u.value).filter(v=>v.name.toLowerCase().indexOf(o)>-1)}}),k=y(()=>m.value.length),Q=y(()=>(e=(g.value-1)*p.value,_=(g.value-1)*p.value+p.value,m.value.slice(e,_).map(i=>i))),b=function(o,v){var i="",M=n.value.some(function(h){return h.item===o});M?(n.value.find(h=>h.item===o).quantity+=1,i="Item quantity updated"):(n.value.push({item:o,itemname:v,quantity:1}),i="New item added"),S(i)},S=function(o){r.notify({type:"positive",icon:"cloud_done",message:o,position:"top-right",timeout:800})},q=function(){a.push({name:"ORDER",params:{myproducts:JSON.stringify(n.value)}})};let g=s(1),C=s(1),I=s(null);const p=s(10);return{MYITEMS:u,search:t,searchResult:m,myitemsLength:k,page:g,currentPage:C,nextPage:I,totalPages:p,getData:Q,positivemsg:S,myproducts:n,selectedProducts:b,order:q}}},z=r=>(Y("data-v-e67f5546"),r=r(),R(),r),W={class:"q-pa-md fullwidth"},X={class:"q-gutter-md"},Z=z(()=>f("div",null,null,-1)),$={key:0,class:"q-pa-md row items-start q-gutter-md"},ee={class:"Subtitle 2 text-weight-bolder"},te={key:1,class:"q-pa-lg flex flex-center"},ae={key:2,class:"q-pa-md q-gutter-sm"};function oe(r,a,n,e,_,u){return l(),d(P,null,[f("div",W,[f("div",X,[Z,c(A,{modelValue:e.search,"onUpdate:modelValue":a[0]||(a[0]=t=>e.search=t),debounce:"500",filled:"",placeholder:"Search"},{append:x(()=>[c(N,{name:"search"})]),_:1},8,["modelValue"])])]),e.myitemsLength?(l(),d("div",$,[(l(!0),d(P,null,B(e.getData,(t,m)=>(l(),D(T,{flat:"",bordered:"",class:"my-card",key:t.id,onClick:k=>e.selectedProducts(t.id,t.name)},{default:x(()=>[c(K,{class:"bg-brand text-white"},{default:x(()=>[f("div",ee,O(t.name),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))])):w("",!0),e.myitemsLength?(l(),d("div",te,[c(j,{modelValue:e.page,"onUpdate:modelValue":a[1]||(a[1]=t=>e.page=t),min:e.currentPage,max:Math.ceil(e.myitemsLength/e.totalPages),"max-pages":7,"direction-links":"","boundary-links":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward","active-color":"brand"},null,8,["modelValue","min","max"])])):w("",!0),e.myproducts.length?(l(),d("div",ae,[c(L,{unelevated:"",rounded:"",color:"positive",label:"Proceed","icon-right":"send",class:"full-width",onClick:a[2]||(a[2]=t=>e.order())})])):w("",!0)],64)}var ve=V(H,[["render",oe],["__scopeId","data-v-e67f5546"]]);export{ve as default};
