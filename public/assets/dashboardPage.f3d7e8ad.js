import{_ as z,f as g,r as m,K as o,O as r,N as e,J as F,X as S,M as t,Q as J,W as P,L as b,Y as M,B as N,ar as R,R as l,S as c,T as Y,P as X,aC as G}from"./index.01a4d7f9.js";import{Q as d}from"./QItemLabel.2807a71a.js";import{a as h,Q as i,b as B}from"./QList.ea411345.js";import{Q as n}from"./QBadge.98ea94b1.js";import{Q as H}from"./QPagination.4513213a.js";import{Q as E}from"./use-prevent-scroll.6331d8db.js";import{d as Z,Q as $,a as ee,C as te}from"./ClosePopup.5f0da1f4.js";import{Q as ae}from"./QCard.c6908caf.js";import{Q as se}from"./QPage.5a5bbeae.js";import{u as le}from"./use-quasar.6021430a.js";import{u as oe}from"./order.2728bd89.js";import"./use-dark.7da541fb.js";import"./QInput.16cb8938.js";import"./format.c860d4da.js";import"./master.02c82b39.js";import"./lodash.e6c87188.js";const ce=oe(),re={setup(){const w=F();le();let f,k,a;const _=g(()=>ce.all.reverse()),v=g(()=>{let u=[];for(let x in _.value)f=_.value[x].status,f!="Delivered"&&f!="Cancelled"&&u.push(_.value[x]);return u}),s=g(()=>Object.keys(v.value).length);let p,Q;const A=g(()=>(k=(O.value-1)*y.value,a=k+y.value,p=Object.values(v.value).slice(k,a),Q=p.map(u=>(u.status,{id:u.id,date:Z.formatDate(u.date,"MMMM d, YYYY "),narration:u.narration,status:u.status,items:u.items})),Q)),L=function(){w.push({name:"ITEM"})};let q=m(!1),D=m(""),I=m(""),V=m(""),C=m("");const T=function(u,x,K,W){I.value=u,D.value=W,V.value=x,C.value=K,q.value=!0};let O=m(1),U=m(1);const y=m(5),j=g(()=>Math.ceil(s.value/y.value));return{ORDERS:_,MYORDERS:v,totalcount:s,page:O,currentPage:U,totalPages:y,maxVal:j,getOrders:A,gotoItempage:L,showitems:T,specificItems:D,specificId:I,specificDate:V,specificStatus:C,card:q}}},de={class:"row justify-end side"},ie=l(" NEW ORDER "),ne=l("No Order"),ue=l("Dashboard"),fe=l("Unknown"),me={key:0,class:"q-pa-lg flex flex-center"},_e={class:"q-pa-md q-gutter-sm"},pe={class:"text-weight-bold"},ge=l("Unknown"),he=l("#"),ke=l("Item"),ve=l("Quantity"),ye=l("Total Items");function xe(w,f,k,a,_,v){return o(),r(se,{padding:"",class:"flex flex-center column q-gutter-y-sm"},{default:e(()=>[S("div",de,[t(P,{color:"positive","no-caps":"",onClick:f[0]||(f[0]=s=>a.gotoItempage())},{default:e(()=>[t(J,{left:"",size:"2em",name:"open_in_new"}),ie]),_:1})]),t(B,{bordered:"",padding:"",class:"rounded-borders"},{default:e(()=>[a.totalcount===0?(o(),r(d,{key:0,header:""},{default:e(()=>[ne]),_:1})):(o(),r(d,{key:1,header:""},{default:e(()=>[ue]),_:1})),(o(!0),b(Y,null,M(a.getOrders,(s,p)=>N((o(),r(h,{clickable:"",key:s.id,onClick:Q=>a.showitems(s.id,s.date,s.status,s.items)},{default:e(()=>[t(i,{avatar:"",top:""},{default:e(()=>[t(R,{icon:"fact_check",color:"deep-orange-10","text-color":"white"})]),_:1}),t(i,null,{default:e(()=>[t(d,{lines:"1"},{default:e(()=>[l(c(s.id),1)]),_:2},1024),t(d,{caption:""},{default:e(()=>[l(c(s.date),1)]),_:2},1024),t(d,{caption:""},{default:e(()=>[l(c(s.narration),1)]),_:2},1024)]),_:2},1024),t(i,{side:"",top:""},{default:e(()=>[s.status==="New"?(o(),r(n,{key:0,color:"blue"},{default:e(()=>[l(c(s.status),1)]),_:2},1024)):s.status==="Viewed"?(o(),r(n,{key:1,color:"secondary"},{default:e(()=>[l(c(s.status),1)]),_:2},1024)):s.status==="Accepted"?(o(),r(n,{key:2,color:"accent"},{default:e(()=>[l(c(s.status),1)]),_:2},1024)):s.status==="Packed"?(o(),r(n,{key:3,color:"info"},{default:e(()=>[l(c(s.status),1)]),_:2},1024)):s.status==="Dispatched"?(o(),r(n,{key:4,color:"blue-grey"},{default:e(()=>[l(c(s.status),1)]),_:2},1024)):(o(),r(n,{key:5,color:"primary"},{default:e(()=>[fe]),_:1}))]),_:2},1024)]),_:2},1032,["onClick"])),[[G]])),128))]),_:1}),a.totalcount?(o(),b("div",me,[t(H,{modelValue:a.page,"onUpdate:modelValue":f[1]||(f[1]=s=>a.page=s),min:a.currentPage,max:a.maxVal,"max-pages":7,"direction-links":"","boundary-links":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward","active-color":"deep-orange-10"},null,8,["modelValue","min","max"])])):X("",!0),S("div",_e,[t(ee,{modelValue:a.card,"onUpdate:modelValue":f[2]||(f[2]=s=>a.card=s)},{default:e(()=>[t(ae,{class:"my-card",style:{width:"400px"}},{default:e(()=>[t(B,{bordered:"",class:"rounded-borders",style:{"min-width":"350px"}},{default:e(()=>[t(h,null,{default:e(()=>[t(i,{avatar:""},{default:e(()=>[t(R,{icon:"fact_check",color:"deep-orange-10","text-color":"white"})]),_:1}),t(i,{top:"",class:"col-7 gt-sm"},{default:e(()=>[t(d,{lines:"1"},{default:e(()=>[l(c(a.specificDate),1)]),_:1}),t(d,{caption:"",lines:"2"},{default:e(()=>[S("span",pe,c(a.specificId),1)]),_:1}),t(d,{caption:"",lines:"1"},{default:e(()=>[a.specificStatus==="New"?(o(),r(n,{key:0,color:"blue"},{default:e(()=>[l(c(a.specificStatus),1)]),_:1})):a.specificStatus==="Viewed"?(o(),r(n,{key:1,color:"secondary"},{default:e(()=>[l(c(a.specificStatus),1)]),_:1})):a.specificStatus==="Accepted"?(o(),r(n,{key:2,color:"accent"},{default:e(()=>[l(c(a.specificStatus),1)]),_:1})):a.specificStatus==="Packed"?(o(),r(n,{key:3,color:"info"},{default:e(()=>[l(c(a.specificStatus),1)]),_:1})):w.model==="Dispatched"?(o(),r(n,{key:4,color:"blue-grey"},{default:e(()=>[l(c(a.specificStatus),1)]),_:1})):a.specificStatus==="Delivered"?(o(),r(n,{key:5,color:"positive"},{default:e(()=>[l(c(a.specificStatus),1)]),_:1})):a.specificStatus==="Cancelled"?(o(),r(n,{key:6,color:"negative"},{default:e(()=>[l(c(a.specificStatus),1)]),_:1})):(o(),r(n,{key:7,color:"primary"},{default:e(()=>[ge]),_:1}))]),_:1})]),_:1})]),_:1}),t(h,null,{default:e(()=>[t(i,{top:"",class:"col-1 gt-sm"},{default:e(()=>[t(d,{class:"q-mt-sm text-weight-medium"},{default:e(()=>[he]),_:1})]),_:1}),t(i,{top:"",class:"col-7 gt-sm"},{default:e(()=>[t(d,{class:"q-mt-sm text-weight-medium"},{default:e(()=>[ke]),_:1})]),_:1}),t(i,{top:""},{default:e(()=>[t(d,{class:"q-mt-sm text-weight-medium text-center"},{default:e(()=>[ve]),_:1})]),_:1})]),_:1}),t(E),(o(!0),b(Y,null,M(a.specificItems,(s,p)=>(o(),r(h,null,{default:e(()=>[t(i,{top:"",class:"col-1 gt-sm"},{default:e(()=>[t(d,{class:"q-mt-sm"},{default:e(()=>[l(c(p+1),1)]),_:2},1024)]),_:2},1024),t(i,{top:"",class:"col-7 gt-sm"},{default:e(()=>[t(d,{class:"q-mt-sm"},{default:e(()=>[l(c(s.item.name),1)]),_:2},1024)]),_:2},1024),t(i,{top:""},{default:e(()=>[t(d,{class:"q-mt-sm flex-center text-center"},{default:e(()=>[l(c(s.quantity),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256)),t(E),t(h,null,{default:e(()=>[t(i,{top:"",class:"col-1 gt-sm"},{default:e(()=>[t(d,{class:"q-mt-sm text-weight-medium"})]),_:1}),t(i,{top:"",class:"col-7 gt-sm"},{default:e(()=>[t(d,{class:"q-mt-sm text-weight-medium"},{default:e(()=>[ye]),_:1})]),_:1}),t(i,{top:""},{default:e(()=>[t(d,{class:"q-mt-sm text-weight-medium text-center"},{default:e(()=>[l(c(a.specificItems.length),1)]),_:1})]),_:1})]),_:1})]),_:1}),t($,{align:"right"},{default:e(()=>[N(t(P,{flat:"",label:"Close",color:"negative"},null,512),[[te]])]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1})}var Ee=z(re,[["render",xe]]);export{Ee as default};
