import{Q as u}from"./QBadge.fbb9c512.js";import{a8 as ae,B as oe,k as _,r as f,E as d,H as e,C as r,N as y,M as S,G as t,I as l,J as s,F as x,D,P as T,t as U,ap as j,K as W,aq as le}from"./index.246a4b9a.js";import{a as se,Q as re}from"./QToolbar.1bf24825.js";import{a as p,Q as c}from"./QItem.899e600d.js";import{Q as n}from"./QItemLabel.e6fa0dc1.js";import{Q as de}from"./QPagination.7c56899a.js";import{Q as F}from"./QList.36addd93.js";import{Q as K}from"./QSeparator.265b03cf.js";import{Q as ie}from"./QSelect.f089caed.js";import{Q as ce}from"./QCardActions.dab7d62d.js";import{Q as ne}from"./QCard.fc586c7a.js";import{Q as ue}from"./QDialog.731c9919.js";import{Q as me}from"./QPage.d4defc19.js";import{C as fe}from"./ClosePopup.7f3f20ff.js";import{u as _e}from"./use-quasar.42c4e941.js";import{u as pe}from"./order.ffac0f74.js";import{u as ve}from"./leave.5cc094f8.js";import{u as ge}from"./review.22172862.js";import{d as we}from"./date.fd5a70cf.js";import{post as he}from"./axios.93d508e0.js";import"./use-dark.b88f123a.js";import"./QInput.19c0c42c.js";import"./format.c860d4da.js";import"./QMenu.ceb76e5d.js";import"./position-engine.ece6e7e4.js";import"./selection.53dd3c90.js";import"./use-portal.f505e8fd.js";import"./scroll.606ee28b.js";import"./use-model-toggle.4c9c2223.js";import"./use-prevent-scroll.b4d5fbe2.js";import"./master.9f86e441.js";import"./lodash.1e9e3f94.js";const ke=pe(),ye=ve(),xe=ge(),be={setup(){const b=oe(),m=_e();let v,a;const g=_(()=>Object.values(ke.all).filter(i=>i.status=="New"||i.status=="Viewed").reverse()),Q=_(()=>Object.keys(g.value).length),o=function(){b.push({name:"LEAVES"})},w=_(()=>Object.values(xe.reviews).filter(i=>i.status=="New")),C=_(()=>Object.values(ye.leaves).filter(i=>i.status=="New")),G=_(()=>w.value.length),H=_(()=>C.value.length),J=function(){b.push({name:"REVIEWS"})};let E,I,h=f(null);const z=_(()=>(v=(M.value-1)*k.value,a=v+k.value,E=Object.values(g.value).slice(v,a),I=E.map(i=>(i.status,{id:i.id,date:we.formatDate(i.date,"MMMM D, YYYY "),narration:i.narration,customer:i.customer.name,status:i.status,items:i.items})),I)),N=function(){he("order","status",{order:V.value,status:h.value}).then(console.log),L("Order status updated Successfully")};let O=f(!1),P=f(""),R=f(""),V=f(""),A=f(""),q=f("");const X=function(i,ee,te,B,Y){console.log(Y),R.value=i,V.value=ee,P.value=Y,A.value=te,B=="New"?(q.value=h.value="VIEWED",N()):q.value=h.value=B,O.value=!0},L=function(i){m.notify({type:"positive",message:i,icon:"cloud_done",position:"top-right",timeout:2e3})};let M=f(1),Z=f(1);const k=f(5),$=_(()=>Math.ceil(Q.value/k.value));return{MYORDERS:g,totalcount:Q,leavecount:H,reviewcount:G,page:M,currentPage:Z,totalPages:k,maxVal:$,getOrders:z,showitems:X,specificItems:P,specificId:V,specificCustomer:R,specificDate:A,specificStatus:q,card:O,model:h,options:["Accepted","Packed","Dispatched","Delivered","Cancelled"],updateStatus:N,positivemsg:L,gotoLeave:o,gotoReview:J}}},Qe={class:"q-pa-md q-gutter-sm"},Ve={class:"q-pa-md"},qe=l("ORDERS"),Se=l("Unknown"),De={key:0,class:"q-pa-lg flex flex-center"},Ce={class:"q-pa-md q-gutter-sm"},Ee={class:"text-weight-bold"},Ie=l("Unknown"),Ne=l("#"),Oe=l("Item"),Pe=l("Quantity"),Re=l("Total Items");function Ae(b,m,v,a,g,Q){return r(),d(me,{padding:"",class:"flex flex-center column q-gutter-y-sm"},{default:e(()=>[y("div",Qe,[a.leavecount?(r(),d(S,{key:0,color:"white","text-color":"primary","icon-right":"sick",label:"LEAVES",onClick:m[0]||(m[0]=o=>a.gotoLeave())},{default:e(()=>[t(u,{color:"positive",floating:"",transparent:""},{default:e(()=>[l(s(a.leavecount),1)]),_:1})]),_:1})):x("",!0),a.reviewcount?(r(),d(S,{key:1,color:"white","text-color":"primary","icon-right":"comment_bank",label:"REVIEWS",onClick:m[1]||(m[1]=o=>a.gotoReview())},{default:e(()=>[t(u,{color:"accent",floating:"",transparent:""},{default:e(()=>[l(s(a.reviewcount),1)]),_:1})]),_:1})):x("",!0)]),y("div",Ve,[t(re,{class:"bg-brand text-white shadow-2"},{default:e(()=>[t(se,null,{default:e(()=>[qe]),_:1})]),_:1}),a.totalcount?(r(),d(F,{key:0,bordered:"",padding:"",class:"rounded-borders",style:{width:"80vw","max-width":"350px"}},{default:e(()=>[(r(!0),D(W,null,T(a.getOrders,(o,w)=>U((r(),d(p,{clickable:"",key:o.id,onClick:C=>a.showitems(o.customer,o.id,o.date,o.status,o.items)},{default:e(()=>[t(c,{avatar:"",top:""},{default:e(()=>[t(j,{icon:"fact_check",color:"brand","text-color":"white"})]),_:1}),t(c,null,{default:e(()=>[t(n,{lines:"1"},{default:e(()=>[l(s(o.customer),1)]),_:2},1024),t(n,{caption:""},{default:e(()=>[l(s(o.date),1)]),_:2},1024),t(n,{caption:""},{default:e(()=>[l(s(o.narration),1)]),_:2},1024)]),_:2},1024),t(c,{side:"",top:""},{default:e(()=>[o.status==="New"?(r(),d(u,{key:0,color:"blue"},{default:e(()=>[l(s(o.status),1)]),_:2},1024)):o.status==="Viewed"?(r(),d(u,{key:1,color:"secondary"},{default:e(()=>[l(s(o.status),1)]),_:2},1024)):o.status==="Accepted"?(r(),d(u,{key:2,color:"accent"},{default:e(()=>[l(s(o.status),1)]),_:2},1024)):o.status==="Packed"?(r(),d(u,{key:3,color:"info"},{default:e(()=>[l(s(o.status),1)]),_:2},1024)):o.status==="Dispatched"?(r(),d(u,{key:4,color:"blue-grey"},{default:e(()=>[l(s(o.status),1)]),_:2},1024)):(r(),d(u,{key:5,color:"primary"},{default:e(()=>[Se]),_:1}))]),_:2},1024)]),_:2},1032,["onClick"])),[[le]])),128)),a.totalcount?(r(),D("div",De,[t(de,{modelValue:a.page,"onUpdate:modelValue":m[2]||(m[2]=o=>a.page=o),min:a.currentPage,max:a.maxVal,"max-pages":7,"direction-links":"","boundary-links":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward","active-color":"brand"},null,8,["modelValue","min","max"])])):x("",!0)]),_:1})):x("",!0)]),y("div",Ce,[t(ue,{modelValue:a.card,"onUpdate:modelValue":m[5]||(m[5]=o=>a.card=o)},{default:e(()=>[t(ne,{class:"my-card",style:{width:"400px"}},{default:e(()=>[t(F,{bordered:"",class:"rounded-borders",style:{"min-width":"350px"}},{default:e(()=>[t(p,null,{default:e(()=>[t(c,{avatar:""},{default:e(()=>[t(j,{icon:"fact_check",color:"brand","text-color":"white"})]),_:1}),t(c,{top:"",class:"col-7 gt-sm"},{default:e(()=>[t(n,{lines:"1"},{default:e(()=>[l(s(a.specificCustomer),1)]),_:1}),t(n,{lines:"2"},{default:e(()=>[l(s(a.specificDate),1)]),_:1}),t(n,{caption:"",lines:"3"},{default:e(()=>[y("span",Ee,s(a.specificId),1)]),_:1})]),_:1}),t(c,{side:""},{default:e(()=>[a.model==="New"?(r(),d(u,{key:0,color:"blue"},{default:e(()=>[l(s(a.model),1)]),_:1})):a.model==="Viewed"?(r(),d(u,{key:1,color:"secondary"},{default:e(()=>[l(s(a.model),1)]),_:1})):a.model==="Accepted"?(r(),d(u,{key:2,color:"accent"},{default:e(()=>[l(s(a.model),1)]),_:1})):a.model==="Packed"?(r(),d(u,{key:3,color:"info"},{default:e(()=>[l(s(a.model),1)]),_:1})):a.model==="Dispatched"?(r(),d(u,{key:4,color:"blue-grey"},{default:e(()=>[l(s(a.model),1)]),_:1})):a.model==="Delivered"?(r(),d(u,{key:5,color:"positive"},{default:e(()=>[l(s(a.model),1)]),_:1})):a.model==="Cancelled"?(r(),d(u,{key:6,color:"negative"},{default:e(()=>[l(s(a.model),1)]),_:1})):(r(),d(u,{key:7,color:"primary"},{default:e(()=>[Ie]),_:1}))]),_:1})]),_:1}),t(p,null,{default:e(()=>[t(c,{top:"",class:"col-1 gt-sm"},{default:e(()=>[t(n,{class:"q-mt-sm text-weight-medium"},{default:e(()=>[Ne]),_:1})]),_:1}),t(c,{top:"",class:"col-7 gt-sm"},{default:e(()=>[t(n,{class:"q-mt-sm text-weight-medium"},{default:e(()=>[Oe]),_:1})]),_:1}),t(c,{top:""},{default:e(()=>[t(n,{class:"q-mt-sm text-weight-medium text-center"},{default:e(()=>[Pe]),_:1})]),_:1})]),_:1}),t(K),(r(!0),D(W,null,T(a.specificItems,(o,w)=>(r(),d(p,null,{default:e(()=>[t(c,{top:"",class:"col-1 gt-sm"},{default:e(()=>[t(n,{class:"q-mt-sm"},{default:e(()=>[l(s(w+1),1)]),_:2},1024)]),_:2},1024),t(c,{top:"",class:"col-7 gt-sm"},{default:e(()=>[t(n,{class:"q-mt-sm"},{default:e(()=>[l(s(o.item.name),1)]),_:2},1024)]),_:2},1024),t(c,{top:""},{default:e(()=>[t(n,{class:"q-mt-sm flex-center text-center"},{default:e(()=>[l(s(o.quantity),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256)),t(K),t(p,null,{default:e(()=>[t(c,{top:"",class:"col-1 gt-sm"},{default:e(()=>[t(n,{class:"q-mt-sm text-weight-medium"})]),_:1}),t(c,{top:"",class:"col-7 gt-sm"},{default:e(()=>[t(n,{class:"q-mt-sm text-weight-medium"},{default:e(()=>[Re]),_:1})]),_:1}),t(c,{top:""},{default:e(()=>[t(n,{class:"q-mt-sm text-weight-medium text-center"},{default:e(()=>[l(s(a.specificItems.length),1)]),_:1})]),_:1})]),_:1}),t(p,null,{default:e(()=>[t(c,{top:"",class:"col-2 gt-sm"},{default:e(()=>[t(n,{class:"q-mt-sm text-weight-medium"})]),_:1}),t(c,{top:"",class:"col-7 gt-sm"},{default:e(()=>[t(n,{class:"q-mt-sm text-weight-medium"},{default:e(()=>[t(ie,{filled:"",modelValue:a.model,"onUpdate:modelValue":[m[3]||(m[3]=o=>a.model=o),m[4]||(m[4]=o=>a.updateStatus())],options:a.options,label:"Status"},null,8,["modelValue","options"])]),_:1})]),_:1}),t(c,{top:""},{default:e(()=>[t(n,{class:"q-mt-sm"})]),_:1})]),_:1})]),_:1}),t(ce,{align:"right"},{default:e(()=>[U(t(S,{flat:"",label:"Close",color:"negative"},null,512),[[fe]])]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1})}var pt=ae(be,[["render",Ae]]);export{pt as default};