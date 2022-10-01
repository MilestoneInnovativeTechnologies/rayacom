import{aj as F,K as W,t as g,r as m,N as r,R as e,L as o,Z as S,P as t,S as Z,Y as P,M as b,$ as M,B as N,as as R,T as l,U as c,V as Y,O as G,ai as H,Q as B,am as J,at as X,au as $}from"./index.04c464b8.js";import{Q as d}from"./QItemLabel.9f7bf82c.js";import{a as h,Q as i}from"./QItem.3f5f7acb.js";import{Q as n}from"./QBadge.93a5f3cc.js";import{Q as E}from"./QList.82924bce.js";import{Q as ee}from"./QPagination.1234704c.js";import{Q as te}from"./QPage.b0d4ff95.js";import{C as ae}from"./ClosePopup.b54a8cbb.js";import{u as se}from"./use-quasar.1595dcc1.js";import{u as le}from"./order.857871bf.js";import{d as oe}from"./date.99bfb014.js";import"./master.f1b7f5d6.js";import"./lodash.1e9e3f94.js";const ce=le(),re={setup(){const w=W();se();let f,k,a;const _=g(()=>ce.all.reverse()),v=g(()=>{let u=[];for(let x in _.value)f=_.value[x].status,f!="Delivered"&&f!="Cancelled"&&u.push(_.value[x]);return u}),s=g(()=>Object.keys(v.value).length);let p,Q;const A=g(()=>(k=(O.value-1)*y.value,a=k+y.value,p=Object.values(v.value).slice(k,a),Q=p.map(u=>(u.status,{id:u.id,date:oe.formatDate(u.date,"MMMM D, YYYY "),narration:u.narration,status:u.status,items:u.items})),Q)),U=function(){w.push({name:"ITEM"})};let D=m(!1),V=m(""),q=m(""),I=m(""),C=m("");const L=function(u,x,K,z){q.value=u,V.value=z,I.value=x,C.value=K,D.value=!0};let O=m(1),T=m(1);const y=m(5),j=g(()=>Math.ceil(s.value/y.value));return{ORDERS:_,MYORDERS:v,totalcount:s,page:O,currentPage:T,totalPages:y,maxVal:j,getOrders:A,gotoItempage:U,showitems:L,specificItems:V,specificId:q,specificDate:I,specificStatus:C,card:D}}},de={class:"row justify-end side"},ie=l(" NEW ORDER "),ne=l("No Order"),ue=l("Dashboard"),fe=l("Unknown"),me={key:0,class:"q-pa-lg flex flex-center"},_e={class:"q-pa-md q-gutter-sm"},pe={class:"text-weight-bold"},ge=l("Unknown"),he=l("#"),ke=l("Item"),ve=l("Quantity"),ye=l("Total Items");function xe(w,f,k,a,_,v){return o(),r(te,{padding:"",class:"flex flex-center column q-gutter-y-sm"},{default:e(()=>[S("div",de,[t(P,{color:"positive","no-caps":"",onClick:f[0]||(f[0]=s=>a.gotoItempage())},{default:e(()=>[t(Z,{left:"",size:"xl",name:"open_in_new"}),ie]),_:1})]),t(E,{bordered:"",padding:"",class:"rounded-borders",style:{width:"80vw","max-width":"350px"}},{default:e(()=>[a.totalcount===0?(o(),r(d,{key:0,header:""},{default:e(()=>[ne]),_:1})):(o(),r(d,{key:1,header:""},{default:e(()=>[ue]),_:1})),(o(!0),b(Y,null,M(a.getOrders,(s,p)=>N((o(),r(h,{clickable:"",key:s.id,onClick:Q=>a.showitems(s.id,s.date,s.status,s.items)},{default:e(()=>[t(i,{avatar:"",top:""},{default:e(()=>[t(R,{icon:"fact_check",color:"deep-orange-10","text-color":"white"})]),_:1}),t(i,null,{default:e(()=>[t(d,{lines:"1"},{default:e(()=>[l(c(s.id),1)]),_:2},1024),t(d,{caption:""},{default:e(()=>[l(c(s.date),1)]),_:2},1024),t(d,{caption:""},{default:e(()=>[l(c(s.narration),1)]),_:2},1024)]),_:2},1024),t(i,{side:"",top:""},{default:e(()=>[s.status==="New"?(o(),r(n,{key:0,color:"blue"},{default:e(()=>[l(c(s.status),1)]),_:2},1024)):s.status==="Viewed"?(o(),r(n,{key:1,color:"secondary"},{default:e(()=>[l(c(s.status),1)]),_:2},1024)):s.status==="Accepted"?(o(),r(n,{key:2,color:"accent"},{default:e(()=>[l(c(s.status),1)]),_:2},1024)):s.status==="Packed"?(o(),r(n,{key:3,color:"info"},{default:e(()=>[l(c(s.status),1)]),_:2},1024)):s.status==="Dispatched"?(o(),r(n,{key:4,color:"blue-grey"},{default:e(()=>[l(c(s.status),1)]),_:2},1024)):(o(),r(n,{key:5,color:"primary"},{default:e(()=>[fe]),_:1}))]),_:2},1024)]),_:2},1032,["onClick"])),[[$]])),128))]),_:1}),a.totalcount?(o(),b("div",me,[t(ee,{modelValue:a.page,"onUpdate:modelValue":f[1]||(f[1]=s=>a.page=s),min:a.currentPage,max:a.maxVal,"max-pages":7,"direction-links":"","boundary-links":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward","active-color":"deep-orange-10"},null,8,["modelValue","min","max"])])):G("",!0),S("div",_e,[t(X,{modelValue:a.card,"onUpdate:modelValue":f[2]||(f[2]=s=>a.card=s)},{default:e(()=>[t(H,{class:"my-card",style:{width:"400px"}},{default:e(()=>[t(E,{bordered:"",class:"rounded-borders",style:{"min-width":"350px"}},{default:e(()=>[t(h,null,{default:e(()=>[t(i,{avatar:""},{default:e(()=>[t(R,{icon:"fact_check",color:"deep-orange-10","text-color":"white"})]),_:1}),t(i,{top:"",class:"col-7 gt-sm"},{default:e(()=>[t(d,{lines:"1"},{default:e(()=>[l(c(a.specificDate),1)]),_:1}),t(d,{caption:"",lines:"2"},{default:e(()=>[S("span",pe,c(a.specificId),1)]),_:1}),t(d,{caption:"",lines:"1"},{default:e(()=>[a.specificStatus==="New"?(o(),r(n,{key:0,color:"blue"},{default:e(()=>[l(c(a.specificStatus),1)]),_:1})):a.specificStatus==="Viewed"?(o(),r(n,{key:1,color:"secondary"},{default:e(()=>[l(c(a.specificStatus),1)]),_:1})):a.specificStatus==="Accepted"?(o(),r(n,{key:2,color:"accent"},{default:e(()=>[l(c(a.specificStatus),1)]),_:1})):a.specificStatus==="Packed"?(o(),r(n,{key:3,color:"info"},{default:e(()=>[l(c(a.specificStatus),1)]),_:1})):w.model==="Dispatched"?(o(),r(n,{key:4,color:"blue-grey"},{default:e(()=>[l(c(a.specificStatus),1)]),_:1})):a.specificStatus==="Delivered"?(o(),r(n,{key:5,color:"positive"},{default:e(()=>[l(c(a.specificStatus),1)]),_:1})):a.specificStatus==="Cancelled"?(o(),r(n,{key:6,color:"negative"},{default:e(()=>[l(c(a.specificStatus),1)]),_:1})):(o(),r(n,{key:7,color:"primary"},{default:e(()=>[ge]),_:1}))]),_:1})]),_:1})]),_:1}),t(h,null,{default:e(()=>[t(i,{top:"",class:"col-1 gt-sm"},{default:e(()=>[t(d,{class:"q-mt-sm text-weight-medium"},{default:e(()=>[he]),_:1})]),_:1}),t(i,{top:"",class:"col-7 gt-sm"},{default:e(()=>[t(d,{class:"q-mt-sm text-weight-medium"},{default:e(()=>[ke]),_:1})]),_:1}),t(i,{top:""},{default:e(()=>[t(d,{class:"q-mt-sm text-weight-medium text-center"},{default:e(()=>[ve]),_:1})]),_:1})]),_:1}),t(B),(o(!0),b(Y,null,M(a.specificItems,(s,p)=>(o(),r(h,null,{default:e(()=>[t(i,{top:"",class:"col-1 gt-sm"},{default:e(()=>[t(d,{class:"q-mt-sm"},{default:e(()=>[l(c(p+1),1)]),_:2},1024)]),_:2},1024),t(i,{top:"",class:"col-7 gt-sm"},{default:e(()=>[t(d,{class:"q-mt-sm"},{default:e(()=>[l(c(s.item.name),1)]),_:2},1024)]),_:2},1024),t(i,{top:""},{default:e(()=>[t(d,{class:"q-mt-sm flex-center text-center"},{default:e(()=>[l(c(s.quantity),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256)),t(B),t(h,null,{default:e(()=>[t(i,{top:"",class:"col-1 gt-sm"},{default:e(()=>[t(d,{class:"q-mt-sm text-weight-medium"})]),_:1}),t(i,{top:"",class:"col-7 gt-sm"},{default:e(()=>[t(d,{class:"q-mt-sm text-weight-medium"},{default:e(()=>[ye]),_:1})]),_:1}),t(i,{top:""},{default:e(()=>[t(d,{class:"q-mt-sm text-weight-medium text-center"},{default:e(()=>[l(c(a.specificItems.length),1)]),_:1})]),_:1})]),_:1})]),_:1}),t(J,{align:"right"},{default:e(()=>[N(t(P,{flat:"",label:"Close",color:"negative"},null,512),[[ae]])]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1})}var Re=F(re,[["render",xe]]);export{Re as default};