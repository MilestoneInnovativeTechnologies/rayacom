import{Q as P,a as I}from"./QToolbar.8288db38.js";import{ai as R,t as Q,r as n,M as c,P as t,K as r,Y as S,O as e,S as l,L as b,_ as Y,B as M,as as N,T as o,U as B,N as A,ah as F,Q as O,al as H,X,at as z,au as G}from"./index.d755ac14.js";import{a as p,Q as u}from"./QItem.66a42e1c.js";import{Q as d}from"./QItemLabel.780cbcc6.js";import{Q as i}from"./QBadge.73220a47.js";import{Q as T}from"./QList.1c77fae5.js";import{Q as J}from"./QPagination.e76403d2.js";import{Q as W}from"./QPage.0b6c8760.js";import{C as Z}from"./ClosePopup.bea0ea49.js";import{u as j}from"./order.beb5b52a.js";import{d as $}from"./date.7fc66f0f.js";import"./format.c860d4da.js";import"./master.05480c04.js";import"./lodash.1e9e3f94.js";const tt=j(),et={setup(){let g,m;const y=Q(()=>tt.all.reverse()),s=Q(()=>y.value.length),q=Q(()=>{g=(w.value-1)*k.value,m=(w.value-1)*k.value+k.value;let v=y.value.slice(g,m).map(f=>({id:f.id,date:$.formatDate(f.date,"MMMM D, YYYY "),customer:f.customer.name,narration:f.narration,status:f.status,items:f.items}));return console.log(v),v});let h=n(!1),a=n(""),_=n(""),x=n(""),C=n(""),D=n("");const U=function(V,v,f,L,K){_.value=V,a.value=L,x.value=v,C.value=f,D.value=K,h.value=!0};let w=n(1),E=n(1);const k=n(5);return{MYORDERS:y,totalcount:s,page:w,currentPage:E,totalPages:k,getOrders:q,showitems:U,specificItems:a,specificId:_,specificDate:x,specificStatus:C,specificCustomer:D,card:h}}},at={class:"q-pa-md",style:{width:"80vw","max-width":"350px"}},lt={key:0,class:"q-pa-lg flex flex-center"},st={class:"q-pa-md q-gutter-sm"},ot={class:"text-weight-bold"};function rt(g,m,y,s,q,h){return r(),c(W,{padding:"",class:"flex-center column q-col-gutter-y-lg"},{default:t(()=>[S("div",at,[s.totalcount?(r(),c(P,{key:0,class:"bg-brand text-white shadow-2"},{default:t(()=>[e(I,null,{default:t(()=>[l("Order History")]),_:1})]),_:1})):(r(),c(P,{key:1,class:"bg-grey-5 text-white shadow-2"},{default:t(()=>[e(I,null,{default:t(()=>[l("No records...")]),_:1})]),_:1})),s.totalcount?(r(),c(T,{key:2,bordered:"",padding:"",class:"rounded-borders"},{default:t(()=>[(r(!0),b(B,null,Y(s.getOrders,(a,_)=>M((r(),c(p,{clickable:"",key:a.id,onClick:x=>s.showitems(a.id,a.date,a.status,a.items,a.customer)},{default:t(()=>[e(u,{avatar:"",top:""},{default:t(()=>[e(N,{color:"brand","text-color":"white"},{default:t(()=>[l(o(a.customer.charAt(0)),1)]),_:2},1024)]),_:2},1024),e(u,null,{default:t(()=>[e(d,{lines:"1"},{default:t(()=>[l(o(a.id),1)]),_:2},1024),e(d,null,{default:t(()=>[l(o(a.customer),1)]),_:2},1024),e(d,{caption:""},{default:t(()=>[l(o(a.date),1)]),_:2},1024),e(d,{caption:""},{default:t(()=>[l(o(a.narration),1)]),_:2},1024)]),_:2},1024),e(u,{side:"",top:""},{default:t(()=>[a.status==="New"?(r(),c(i,{key:0,color:"blue"},{default:t(()=>[l(o(a.status),1)]),_:2},1024)):a.status==="Viewed"?(r(),c(i,{key:1,color:"secondary"},{default:t(()=>[l(o(a.status),1)]),_:2},1024)):a.status==="Accepted"?(r(),c(i,{key:2,color:"accent"},{default:t(()=>[l(o(a.status),1)]),_:2},1024)):a.status==="Packed"?(r(),c(i,{key:3,color:"info"},{default:t(()=>[l(o(a.status),1)]),_:2},1024)):a.status==="Dispatched"?(r(),c(i,{key:4,color:"blue-grey"},{default:t(()=>[l(o(a.status),1)]),_:2},1024)):a.status==="Delivered"?(r(),c(i,{key:5,color:"positive"},{default:t(()=>[l(o(a.status),1)]),_:2},1024)):a.status==="Cancelled"?(r(),c(i,{key:6,color:"negative"},{default:t(()=>[l(o(a.status),1)]),_:2},1024)):(r(),c(i,{key:7,color:"primary"},{default:t(()=>[l("Unknown")]),_:1}))]),_:2},1024)]),_:2},1032,["onClick"])),[[G]])),128))]),_:1})):A("",!0)]),s.totalcount?(r(),b("div",lt,[e(J,{modelValue:s.page,"onUpdate:modelValue":m[0]||(m[0]=a=>s.page=a),min:s.currentPage,max:Math.ceil(s.totalcount/s.totalPages),"max-pages":7,"direction-links":"","boundary-links":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward","active-color":"brand"},null,8,["modelValue","min","max"])])):A("",!0),S("div",st,[e(z,{modelValue:s.card,"onUpdate:modelValue":m[1]||(m[1]=a=>s.card=a)},{default:t(()=>[e(F,{class:"my-card",style:{width:"400px"}},{default:t(()=>[e(T,{bordered:"",class:"rounded-borders",style:{"min-width":"350px"}},{default:t(()=>[e(p,null,{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(N,{icon:"fact_check",color:"brand","text-color":"white"})]),_:1}),e(u,{top:""},{default:t(()=>[e(d,{lines:"1"},{default:t(()=>[l(o(s.specificDate),1)]),_:1}),e(d,null,{default:t(()=>[l(o(s.specificCustomer),1)]),_:1}),e(d,{caption:""},{default:t(()=>[S("span",ot,o(s.specificId),1)]),_:1})]),_:1}),e(u,{side:""},{default:t(()=>[s.specificStatus==="New"?(r(),c(i,{key:0,color:"blue"},{default:t(()=>[l(o(s.specificStatus),1)]),_:1})):s.specificStatus==="Viewed"?(r(),c(i,{key:1,color:"secondary"},{default:t(()=>[l(o(s.specificStatus),1)]),_:1})):s.specificStatus==="Accepted"?(r(),c(i,{key:2,color:"accent"},{default:t(()=>[l(o(s.specificStatus),1)]),_:1})):s.specificStatus==="Packed"?(r(),c(i,{key:3,color:"info"},{default:t(()=>[l(o(s.specificStatus),1)]),_:1})):g.model==="Dispatched"?(r(),c(i,{key:4,color:"blue-grey"},{default:t(()=>[l(o(s.specificStatus),1)]),_:1})):s.specificStatus==="Delivered"?(r(),c(i,{key:5,color:"positive"},{default:t(()=>[l(o(s.specificStatus),1)]),_:1})):s.specificStatus==="Cancelled"?(r(),c(i,{key:6,color:"negative"},{default:t(()=>[l(o(s.specificStatus),1)]),_:1})):(r(),c(i,{key:7,color:"primary"},{default:t(()=>[l("Unknown")]),_:1}))]),_:1})]),_:1}),e(p,null,{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(d,{class:"q-mt-sm text-weight-medium"},{default:t(()=>[l("#")]),_:1})]),_:1}),e(u,{tops:""},{default:t(()=>[e(d,{class:"q-mt-sm text-weight-medium"},{default:t(()=>[l("Item")]),_:1})]),_:1}),e(u,{top:""},{default:t(()=>[e(d,{class:"q-mt-sm text-weight-medium text-center"},{default:t(()=>[l("Quantity")]),_:1})]),_:1})]),_:1}),e(O),(r(!0),b(B,null,Y(s.specificItems,(a,_)=>(r(),c(p,null,{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(d,{class:"q-mt-sm"},{default:t(()=>[l(o(_+1),1)]),_:2},1024)]),_:2},1024),e(u,{top:""},{default:t(()=>[e(d,{class:"q-mt-sm"},{default:t(()=>[l(o(a.item.name),1)]),_:2},1024)]),_:2},1024),e(u,{top:""},{default:t(()=>[e(d,{class:"q-mt-sm flex-center text-center"},{default:t(()=>[l(o(a.quantity),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256)),e(O),e(p,null,{default:t(()=>[e(u,{top:""},{default:t(()=>[e(d,{class:"q-mt-sm text-weight-medium"},{default:t(()=>[l(" \xA0")]),_:1})]),_:1}),e(u,{top:""},{default:t(()=>[e(d,{class:"q-mt-sm text-weight-medium"},{default:t(()=>[l("Total Items")]),_:1})]),_:1}),e(u,{top:""},{default:t(()=>[e(d,{class:"q-mt-sm text-weight-medium text-center"},{default:t(()=>[l(o(s.specificItems.length),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(H,{align:"right"},{default:t(()=>[M(e(X,{flat:"",label:"Close",color:"negative"},null,512),[[Z]])]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1})}var xt=R(et,[["render",rt]]);export{xt as default};
