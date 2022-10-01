import{aj as Z,K as z,r as d,t as V,N as m,R as a,L as n,Z as N,P as e,aE as k,M as q,V as G,$ as H,ai as B,T as s,U as i,O as E,as as J,Q as W,S as I,am as X,B as $,Y as ee,at as ae}from"./index.04c464b8.js";import{Q as r}from"./QItemLabel.9f7bf82c.js";import{Q as f}from"./QBadge.93a5f3cc.js";import{a as v,Q as c}from"./QItem.3f5f7acb.js";import{Q as L}from"./QList.82924bce.js";import{Q as te}from"./QPagination.1234704c.js";import{Q as le}from"./QPage.b0d4ff95.js";import{C as oe}from"./ClosePopup.b54a8cbb.js";import{u as re}from"./review.f0bc984c.js";import{d as O}from"./date.99bfb014.js";import{post as se}from"./axios.58db161c.js";import"./master.f1b7f5d6.js";import"./lodash.1e9e3f94.js";import"./order.857871bf.js";const A=re(),de={setup(){z();let Q,o,g=d("");const t=V(()=>{if(g.value==="")return Object.values(A.reviews).reverse();{let w=g.value.toLowerCase();return Object.values(A.reviews).filter(x=>x.type.toLowerCase().indexOf(w)>-1).reverse()}}),b=V(()=>t.value.length),D=V(()=>(Q=(S.value-1)*p.value,o=(S.value-1)*p.value+p.value,t.value.slice(Q,o).map(u=>({id:u.id,customer:u.customer,type:u.type,created_at:O.formatDate(u.created_at,"MMMM D, YYYY "),comment:u.comment,status:u.status,items:u.items}))));let l=d(!1),y=d(""),C=d(""),P=d(""),h=d(""),M=d(""),_=d("");const R=function(w,x,u,K,F,Y){y.value=w,C.value=x,P.value=u,h.value=O.formatDate(K,"DD-MM-YYYY"),M.value=F,_.value=Y,Y=="New"?(_.value="Viewed",U()):_.value=Y,l.value=!0},U=function(){se("review","status",{id:y.value,status:_.value}).then(console.log)};let S=d(1),T=d(1);const p=d(10),j=V(()=>Math.ceil(b.value/p.value));return{totalcount:b,page:S,currentPage:T,totalPages:p,maxVal:j,getData:D,updateStatus:U,openwindow:R,specificId:y,specificCustomer:C,specificType:P,specificcreateDate:h,specificComment:M,specificStatus:_,card:l,radio:g}}},ne={class:"q-pa-md flex flex-center"},ce={key:0,class:"q-pa-md row items-start q-gutter-md"},ie=s("Unknown"),ue={key:1,class:"q-pa-lg flex flex-center"},me={class:"q-pa-md q-gutter-sm"},fe=s("Type"),_e=s("Comment"),pe=s("Unknown");function ve(Q,o,g,t,b,D){return n(),m(le,{padding:"",class:"flex column q-col-gutter-y-lg"},{default:a(()=>[N("div",ne,[e(k,{name:"radio",modelValue:t.radio,"onUpdate:modelValue":o[0]||(o[0]=l=>t.radio=l),val:"",label:"All ",color:"secondary"},null,8,["modelValue"]),e(k,{name:"radio",modelValue:t.radio,"onUpdate:modelValue":o[1]||(o[1]=l=>t.radio=l),val:"Product",label:"Product ",color:"secondary"},null,8,["modelValue"]),e(k,{name:"radio",modelValue:t.radio,"onUpdate:modelValue":o[2]||(o[2]=l=>t.radio=l),val:"SalesExecutive",label:"SalesExecutive ",color:"secondary"},null,8,["modelValue"]),e(k,{name:"radio",modelValue:t.radio,"onUpdate:modelValue":o[3]||(o[3]=l=>t.radio=l),val:"Order",label:"Order ",color:"secondary"},null,8,["modelValue"])]),t.totalcount?(n(),q("div",ce,[(n(!0),q(G,null,H(t.getData,(l,y)=>(n(),m(B,{flat:"",bordered:"",class:"my-card",key:l.id,onClick:C=>t.openwindow(l.id,l.customer.name,l.type,l.created_at,l.comment,l.status)},{default:a(()=>[e(L,null,{default:a(()=>[e(v,{class:"bg-brand text-white text-bold"},{default:a(()=>[e(c,null,{default:a(()=>[e(r,{class:"text-overline"},{default:a(()=>[s(i(l.customer.name),1)]),_:2},1024),e(r,null,{default:a(()=>[s(i(l.created_at),1)]),_:2},1024),e(r,null,{default:a(()=>[l.status==="New"?(n(),m(f,{key:0,color:"blue"},{default:a(()=>[s(i(l.status),1)]),_:2},1024)):l.status==="Viewed"?(n(),m(f,{key:1,color:"secondary"},{default:a(()=>[s(i(l.status),1)]),_:2},1024)):(n(),m(f,{key:2,color:"primary"},{default:a(()=>[ie]),_:1}))]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128))])):E("",!0),t.totalcount?(n(),q("div",ue,[e(te,{modelValue:t.page,"onUpdate:modelValue":o[4]||(o[4]=l=>t.page=l),min:t.currentPage,max:t.maxVal,"max-pages":7,"direction-links":"","boundary-links":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward","active-color":"deep-orange-10"},null,8,["modelValue","min","max"])])):E("",!0),N("div",me,[e(ae,{modelValue:t.card,"onUpdate:modelValue":o[5]||(o[5]=l=>t.card=l)},{default:a(()=>[e(B,{class:"my-card",style:{"max-width":"400px"}},{default:a(()=>[e(L,{bordered:"",class:"rounded-borders",style:{"min-width":"350px"}},{default:a(()=>[e(v,null,{default:a(()=>[e(c,{avatar:""},{default:a(()=>[e(J,{icon:"fact_check",color:"brand","text-color":"white"})]),_:1}),e(c,{top:"",class:"col-7 gt-sm"},{default:a(()=>[e(r,{lines:"1"},{default:a(()=>[s(i(t.specificCustomer),1)]),_:1}),e(r,{lines:"2"}),e(r,{caption:"",lines:"3"},{default:a(()=>[s(i(t.specificcreateDate),1)]),_:1})]),_:1})]),_:1}),e(W),e(v,null,{default:a(()=>[e(c,{top:"",class:"col-1 gt-sm"},{default:a(()=>[e(r,{avatar:""},{default:a(()=>[e(I,{color:"primary",name:"lens"})]),_:1})]),_:1}),e(c,{top:"",class:"col-4 gt-sm"},{default:a(()=>[e(r,{class:"q-mt-sm"},{default:a(()=>[fe]),_:1})]),_:1}),e(c,{top:""},{default:a(()=>[e(r,{class:"q-mt-sm flex-center text-left"},{default:a(()=>[s(i(t.specificType),1)]),_:1})]),_:1})]),_:1}),e(v,null,{default:a(()=>[e(c,{class:"col-1 gt-sm"},{default:a(()=>[e(r,{avatar:""},{default:a(()=>[e(I,{color:"primary",name:"lens"})]),_:1})]),_:1}),e(c,{top:"",class:"col-4 gt-sm"},{default:a(()=>[e(r,{class:"q-mt-sm"},{default:a(()=>[_e]),_:1})]),_:1}),e(c,{top:""},{default:a(()=>[e(r,{class:"q-mt-sm flex-center text-left"},{default:a(()=>[s(i(t.specificComment),1)]),_:1})]),_:1})]),_:1}),e(v,null,{default:a(()=>[e(c,{top:"",class:"col-5 gt-sm"},{default:a(()=>[e(r,{class:"q-mt-sm text-weight-medium"})]),_:1}),e(c,{top:""},{default:a(()=>[e(r,null,{default:a(()=>[t.specificStatus==="New"?(n(),m(f,{key:0,color:"blue"},{default:a(()=>[s(i(t.specificStatus),1)]),_:1})):t.specificStatus==="Viewed"?(n(),m(f,{key:1,color:"secondary"},{default:a(()=>[s(i(t.specificStatus),1)]),_:1})):(n(),m(f,{key:2,color:"primary"},{default:a(()=>[pe]),_:1}))]),_:1})]),_:1})]),_:1})]),_:1}),e(X,{align:"right"},{default:a(()=>[$(e(ee,{flat:"",label:"Close",color:"negative"},null,512),[[oe]])]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1})}var he=Z(de,[["render",ve],["__scopeId","data-v-6874cbd4"]]);export{he as default};