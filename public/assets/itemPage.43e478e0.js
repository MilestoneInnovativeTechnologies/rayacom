import{_ as V,r as s,f as y,K as l,L as d,X as f,O as c,P as x,T as P,Y as L,N as w,W as E,J as N,Q as O,M as Y,S as B,an as D,ao as R}from"./index.d6457b73.js";import{Q as T}from"./QInput.9a83388a.js";import{Q as K}from"./QCardSection.2cab71a8.js";import{Q as j}from"./QCard.ad2da122.js";import{Q as A}from"./QPagination.3e247450.js";import{u as J}from"./use-quasar.9b155934.js";import{u as U}from"./master.88af1675.js";import"./use-dark.ad354b4e.js";import"./format.c860d4da.js";import"./lodash.e6c87188.js";const F=U(),W=F.ITEM,X={setup(){const r=J(),a=N(),n=s([]);let e,g,u=s(W);const t=s(""),m=y(()=>{if(t.value==="")return Object.values(u.value);{let o=t.value.toLowerCase();return Object.values(u.value).filter(v=>v.name.toLowerCase().indexOf(o)>-1)}}),k=y(()=>m.value.length),Q=y(()=>(e=(_.value-1)*p.value,g=(_.value-1)*p.value+p.value,m.value.slice(e,g).map(i=>i))),q=function(o,v){var i="",M=n.value.some(function(h){return h.item===o});M?(n.value.find(h=>h.item===o).quantity+=1,i="Item quantity updated"):(n.value.push({item:o,itemname:v,quantity:1}),i="New item added"),S(i)},S=function(o){r.notify({type:"positive",icon:"cloud_done",message:o,position:"top-right",timeout:800})},I=function(){a.push({name:"ORDER",params:{myproducts:JSON.stringify(n.value)}})};let _=s(1),b=s(1),C=s(null);const p=s(10);return{MYITEMS:u,search:t,searchResult:m,myitemsLength:k,page:_,currentPage:b,nextPage:C,totalPages:p,getData:Q,positivemsg:S,myproducts:n,selectedProducts:q,order:I}}},z=r=>(D("data-v-13741e9d"),r=r(),R(),r),G={class:"q-pa-md fullwidth"},H={class:"q-gutter-md"},Z=z(()=>f("div",null,null,-1)),$={key:0,class:"q-pa-md row items-start q-gutter-md"},ee={class:"Subtitle 2 text-weight-bolder"},te={key:1,class:"q-pa-lg flex flex-center"},ae={key:2,class:"q-pa-md q-gutter-sm"};function oe(r,a,n,e,g,u){return l(),d(P,null,[f("div",G,[f("div",H,[Z,c(T,{modelValue:e.search,"onUpdate:modelValue":a[0]||(a[0]=t=>e.search=t),debounce:"500",filled:"",placeholder:"Search"},{append:x(()=>[c(O,{name:"search"})]),_:1},8,["modelValue"])])]),e.myitemsLength?(l(),d("div",$,[(l(!0),d(P,null,L(e.getData,(t,m)=>(l(),Y(j,{flat:"",bordered:"",class:"my-card",key:t.id,onClick:k=>e.selectedProducts(t.id,t.name)},{default:x(()=>[c(K,{class:"bg-deep-orange-10 text-white"},{default:x(()=>[f("div",ee,B(t.name),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))])):w("",!0),e.myitemsLength?(l(),d("div",te,[c(A,{modelValue:e.page,"onUpdate:modelValue":a[1]||(a[1]=t=>e.page=t),min:e.currentPage,max:Math.ceil(e.myitemsLength/e.totalPages),"max-pages":7,"direction-links":"","boundary-links":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward","active-color":"deep-orange-10"},null,8,["modelValue","min","max"])])):w("",!0),e.myproducts.length?(l(),d("div",ae,[c(E,{unelevated:"",rounded:"",color:"positive",label:"Proceed","icon-right":"send",class:"full-width",onClick:a[2]||(a[2]=t=>e.order())})])):w("",!0)],64)}var ve=V(X,[["render",oe],["__scopeId","data-v-13741e9d"]]);export{ve as default};