import{a as K,Q as j}from"./QToolbar.ad2635a0.js";import{aj as F,t as V,r as n,N as r,R as t,L as c,Z as P,P as e,M as x,$ as Y,B as I,as as M,T as s,U as o,V as O,O as B,ai as H,Q as N,am as Z,Y as z,at as G,au as J}from"./index.04c464b8.js";import{a as p,Q as u}from"./QItem.3f5f7acb.js";import{Q as i}from"./QItemLabel.9f7bf82c.js";import{Q as d}from"./QBadge.93a5f3cc.js";import{Q as A}from"./QList.82924bce.js";import{Q as W}from"./QPagination.1234704c.js";import{Q as X}from"./QPage.b0d4ff95.js";import{C as $}from"./ClosePopup.b54a8cbb.js";import{u as tt}from"./order.857871bf.js";import{d as et}from"./date.99bfb014.js";import"./master.f1b7f5d6.js";import"./axios.58db161c.js";import"./lodash.1e9e3f94.js";const at=tt(),lt={setup(){let g,f;const w=V(()=>at.all.reverse());let l=n(w.value),Q=Object.values(l.value).length;const S=V(()=>{g=(k.value-1)*v.value,f=(k.value-1)*v.value+v.value;let y=l.value.slice(g,f).map(m=>({id:m.id,date:et.formatDate(m.date,"MMMM D, YYYY "),customer:m.customer.name,narration:m.narration,status:m.status,items:m.items}));return console.log(y),y});let a=n(!1),_=n(""),h=n(""),b=n(""),q=n(""),C=n("");const R=function(D,y,m,U,L){h.value=D,_.value=U,b.value=y,q.value=m,C.value=L,a.value=!0};let k=n(1),T=n(1),E=n(null);const v=n(5);return{MYORDERS:l,totalcount:Q,page:k,currentPage:T,nextPage:E,totalPages:v,getOrders:S,showitems:R,specificItems:_,specificId:h,specificDate:b,specificStatus:q,specificCustomer:C,card:a}}},st={class:"q-pa-md",style:{width:"80vw","max-width":"350px"}},ot=s("Order History"),ct=s("Unknown"),rt={key:0,class:"q-pa-lg flex flex-center"},dt={class:"q-pa-md q-gutter-sm"},it=s("Unknown"),ut=s("#"),nt=s("Item"),mt=s("Quantity"),ft=s("Total Items");function _t(g,f,w,l,Q,S){return c(),r(X,{padding:"",class:"flex-center column q-col-gutter-y-lg"},{default:t(()=>[P("div",st,[e(j,{class:"bg-brand text-white shadow-2"},{default:t(()=>[e(K,null,{default:t(()=>[ot]),_:1})]),_:1}),l.totalcount?(c(),r(A,{key:0,bordered:"",padding:"",class:"rounded-borders"},{default:t(()=>[(c(!0),x(O,null,Y(l.getOrders,(a,_)=>I((c(),r(p,{clickable:"",key:a.id,onClick:h=>l.showitems(a.id,a.date,a.status,a.items,a.customer)},{default:t(()=>[e(u,{avatar:"",top:""},{default:t(()=>[e(M,{color:"brand","text-color":"white"},{default:t(()=>[s(o(a.customer.charAt(0)),1)]),_:2},1024)]),_:2},1024),e(u,null,{default:t(()=>[e(i,null,{default:t(()=>[s(o(a.customer),1)]),_:2},1024),e(i,{caption:""},{default:t(()=>[s(o(a.date),1)]),_:2},1024),e(i,{caption:""},{default:t(()=>[s(o(a.narration),1)]),_:2},1024)]),_:2},1024),e(u,{side:""},{default:t(()=>[a.status==="New"?(c(),r(d,{key:0,color:"blue"},{default:t(()=>[s(o(a.status),1)]),_:2},1024)):a.status==="Viewed"?(c(),r(d,{key:1,color:"secondary"},{default:t(()=>[s(o(a.status),1)]),_:2},1024)):a.status==="Accepted"?(c(),r(d,{key:2,color:"accent"},{default:t(()=>[s(o(a.status),1)]),_:2},1024)):a.status==="Packed"?(c(),r(d,{key:3,color:"info"},{default:t(()=>[s(o(a.status),1)]),_:2},1024)):a.status==="Dispatched"?(c(),r(d,{key:4,color:"blue-grey"},{default:t(()=>[s(o(a.status),1)]),_:2},1024)):a.status==="Delivered"?(c(),r(d,{key:5,color:"positive"},{default:t(()=>[s(o(a.status),1)]),_:2},1024)):a.status==="Cancelled"?(c(),r(d,{key:6,color:"negative"},{default:t(()=>[s(o(a.status),1)]),_:2},1024)):(c(),r(d,{key:7,color:"primary"},{default:t(()=>[ct]),_:1}))]),_:2},1024)]),_:2},1032,["onClick"])),[[J]])),128))]),_:1})):B("",!0)]),l.totalcount?(c(),x("div",rt,[e(W,{modelValue:l.page,"onUpdate:modelValue":f[0]||(f[0]=a=>l.page=a),min:l.currentPage,max:Math.ceil(l.totalcount/l.totalPages),"max-pages":7,"direction-links":"","boundary-links":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward","active-color":"brand"},null,8,["modelValue","min","max"])])):B("",!0),P("div",dt,[e(G,{modelValue:l.card,"onUpdate:modelValue":f[1]||(f[1]=a=>l.card=a)},{default:t(()=>[e(H,{class:"my-card",style:{width:"400px"}},{default:t(()=>[e(A,{bordered:"",class:"rounded-borders",style:{"min-width":"350px"}},{default:t(()=>[e(p,null,{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(M,{icon:"fact_check",color:"brand","text-color":"white"})]),_:1}),e(u,{top:"",class:"col-7 gt-sm"},{default:t(()=>[e(i,{lines:"1"},{default:t(()=>[s(o(l.specificCustomer),1)]),_:1}),e(i,{lines:"1"},{default:t(()=>[s(o(l.specificDate),1)]),_:1}),e(i,{side:""},{default:t(()=>[l.specificStatus==="New"?(c(),r(d,{key:0,color:"blue"},{default:t(()=>[s(o(l.specificStatus),1)]),_:1})):l.specificStatus==="Viewed"?(c(),r(d,{key:1,color:"secondary"},{default:t(()=>[s(o(l.specificStatus),1)]),_:1})):l.specificStatus==="Accepted"?(c(),r(d,{key:2,color:"accent"},{default:t(()=>[s(o(l.specificStatus),1)]),_:1})):l.specificStatus==="Packed"?(c(),r(d,{key:3,color:"info"},{default:t(()=>[s(o(l.specificStatus),1)]),_:1})):g.model==="Dispatched"?(c(),r(d,{key:4,color:"blue-grey"},{default:t(()=>[s(o(l.specificStatus),1)]),_:1})):l.specificStatus==="Delivered"?(c(),r(d,{key:5,color:"positive"},{default:t(()=>[s(o(l.specificStatus),1)]),_:1})):l.specificStatus==="Cancelled"?(c(),r(d,{key:6,color:"negative"},{default:t(()=>[s(o(l.specificStatus),1)]),_:1})):(c(),r(d,{key:7,color:"primary"},{default:t(()=>[it]),_:1}))]),_:1})]),_:1})]),_:1}),e(p,null,{default:t(()=>[e(u,{top:"",class:"col-1 gt-sm"},{default:t(()=>[e(i,{class:"q-mt-sm text-weight-medium"},{default:t(()=>[ut]),_:1})]),_:1}),e(u,{top:"",class:"col-7 gt-sm"},{default:t(()=>[e(i,{class:"q-mt-sm text-weight-medium"},{default:t(()=>[nt]),_:1})]),_:1}),e(u,{top:""},{default:t(()=>[e(i,{class:"q-mt-sm text-weight-medium text-center"},{default:t(()=>[mt]),_:1})]),_:1})]),_:1}),e(N),(c(!0),x(O,null,Y(l.specificItems,(a,_)=>(c(),r(p,null,{default:t(()=>[e(u,{top:"",class:"col-1 gt-sm"},{default:t(()=>[e(i,{class:"q-mt-sm"},{default:t(()=>[s(o(_+1),1)]),_:2},1024)]),_:2},1024),e(u,{top:"",class:"col-7 gt-sm"},{default:t(()=>[e(i,{class:"q-mt-sm"},{default:t(()=>[s(o(a.item.name),1)]),_:2},1024)]),_:2},1024),e(u,{top:""},{default:t(()=>[e(i,{class:"q-mt-sm flex-center text-center"},{default:t(()=>[s(o(a.quantity),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256)),e(N),e(p,null,{default:t(()=>[e(u,{top:"",class:"col-1 gt-sm"},{default:t(()=>[e(i,{class:"q-mt-sm text-weight-medium"})]),_:1}),e(u,{top:"",class:"col-7 gt-sm"},{default:t(()=>[e(i,{class:"q-mt-sm text-weight-medium"},{default:t(()=>[ft]),_:1})]),_:1}),e(u,{top:""},{default:t(()=>[e(i,{class:"q-mt-sm text-weight-medium text-center"},{default:t(()=>[s(o(l.specificItems.length),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(Z,{align:"right"},{default:t(()=>[I(e(z,{flat:"",label:"Close",color:"negative"},null,512),[[$]])]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1})}var Vt=F(lt,[["render",_t]]);export{Vt as default};