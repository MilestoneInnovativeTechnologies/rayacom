import{aj as ie,K as me,t as i,r as p,N as n,R as e,L as u,Z as z,P as t,S as k,T as l,U as d,ai as v,M as D,V as L,$ as K,B as W,as as F,O as P,Q as H,am as fe,Y as _e,at as pe,au as ge}from"./index.04c464b8.js";import{a as f,Q as o}from"./QItem.3f5f7acb.js";import{Q as r}from"./QItemLabel.9f7bf82c.js";import{Q as g}from"./QList.82924bce.js";import{a as ve,Q as he}from"./QToolbar.ad2635a0.js";import{Q as m}from"./QBadge.93a5f3cc.js";import{Q as ye}from"./QPagination.1234704c.js";import{Q as be}from"./QSelect.4b00999f.js";import{Q as ke}from"./QPage.b0d4ff95.js";import{C as xe}from"./ClosePopup.b54a8cbb.js";import{u as we}from"./use-quasar.1595dcc1.js";import{u as Ce}from"./order.857871bf.js";import{d as Qe}from"./date.99bfb014.js";import{post as De}from"./axios.58db161c.js";import"./QMenu.08106161.js";import"./position-engine.d0298df9.js";import"./selection.fd593506.js";import"./master.f1b7f5d6.js";import"./lodash.1e9e3f94.js";const h=Ce(),Ve={setup(){const S=me(),_=we();let x,a,V;const y=i(()=>h.all),s=i(()=>{let c=[];for(let Q in y.value)x=y.value[Q].status,x!="Delivered"&&x!="Cancelled"&&c.push(y.value[Q]);return c.reverse()}),b=i(()=>Object.keys(s.value).length),I=i(()=>Object.values(h.all).filter(c=>c.status=="New").reverse()),Z=i(()=>Object.values(h.all).filter(c=>c.status=="Viewed").reverse()),G=i(()=>Object.values(h.all).filter(c=>c.status=="Accepted").reverse()),J=i(()=>Object.values(h.all).filter(c=>c.status=="Packed").reverse()),X=i(()=>Object.values(h.all).filter(c=>c.status=="Dispatched").reverse()),$=i(()=>Object.keys(I.value).length),ee=i(()=>Object.keys(Z.value).length),te=i(()=>Object.keys(G.value).length),ae=i(()=>Object.keys(J.value).length),le=i(()=>Object.keys(X.value).length);let A,j,w=p(null);const se=i(()=>(a=(R.value-1)*C.value,V=a+C.value,A=Object.values(s.value).slice(a,V),j=A.map(c=>(c.status,{id:c.id,date:Qe.formatDate(c.date,"MMMM D, YYYY "),narration:c.narration,customer:c.customer.name,status:c.status,items:c.items})),j)),oe=function(){S.push({name:"ITEM"})},E=function(){De("order","status",{order:q.value,status:w.value}).then(console.log),B("Order status updated Successfully")};let N=p(!1),M=p(""),T=p(""),q=p(""),Y=p(""),O=p("");const de=function(c,Q,ue,U,ne){T.value=c,q.value=Q,M.value=ne,Y.value=ue,U=="New"?(O.value=w.value="Viewed",E()):O.value=w.value=U,N.value=!0},B=function(c){_.notify({type:"positive",message:c,icon:"cloud_done",position:"top-right",timeout:1e3})};let R=p(1),re=p(1);const C=p(5),ce=i(()=>Math.ceil(b.value/C.value));return{ORDERS:y,MYORDERS:s,newCount:$,viewedCount:ee,acceptedCount:te,packedCount:ae,dispatchedCount:le,totalcount:b,page:R,currentPage:re,totalPages:C,maxVal:ce,getOrders:se,gotoItempage:oe,showitems:de,specificItems:M,specificId:q,specificCustomer:T,specificDate:Y,specificStatus:O,card:N,model:w,options:["Accepted","Packed","Dispatched","Delivered","Cancelled"],updateStatus:E,positivemsg:B}}},qe={class:"q-pa-md row items-start q-gutter-md"},Oe=l("New"),Pe=l("Viewed"),Se=l("Accepted"),Ie=l("Packed"),Ae=l("Dispatched"),je={key:0,class:"q-pa-md",style:{width:"80vw","max-width":"350px"}},Ee=l("Dashboard"),Ne=l("Unknown"),Me={key:1,class:"q-pa-lg flex flex-center"},Te={class:"q-pa-md q-gutter-sm"},Ye=l("Unknown"),Be=l("#"),Re=l("Item"),Ue=l("Quantity"),ze=l("Total Items");function Le(S,_,x,a,V,y){return u(),n(ke,{padding:"",class:"flex flex-center column q-gutter-y-sm"},{default:e(()=>[z("div",qe,[t(v,{class:"my-card text-white",style:{background:"radial-gradient(circle, #35a2ff 0%, #014a88 100%)",width:"80vw"}},{default:e(()=>[t(g,null,{default:e(()=>[t(f,{clickable:""},{default:e(()=>[t(o,{avatar:""},{default:e(()=>[t(k,{color:"primary",name:"local_bar",size:"md"})]),_:1}),t(o,null,{default:e(()=>[t(r,{class:"text-h5 text-bold text-white"},{default:e(()=>[l(d(a.newCount),1)]),_:1}),t(r,{caption:""},{default:e(()=>[Oe]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{class:"my-card",style:{background:"radial-gradient(circle, #f5b38b 0%, rgb(162,66,6) 100%)"}},{default:e(()=>[t(g,null,{default:e(()=>[t(f,{clickable:""},{default:e(()=>[t(o,{avatar:""},{default:e(()=>[t(k,{color:"primary",name:"travel_explore",size:"md"})]),_:1}),t(o,null,{default:e(()=>[t(r,{class:"text-h5 text-bold text-white"},{default:e(()=>[l(d(a.viewedCount),1)]),_:1}),t(r,{caption:""},{default:e(()=>[Pe]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{class:"my-card",style:{background:"radial-gradient(circle, #ee9bfa 0%, rgb(83,2,94) 100%)"}},{default:e(()=>[t(g,null,{default:e(()=>[t(f,{clickable:""},{default:e(()=>[t(o,{avatar:""},{default:e(()=>[t(k,{color:"primary",name:"done_all",size:"md"})]),_:1}),t(o,null,{default:e(()=>[t(r,{class:"text-h5 text-bold text-white"},{default:e(()=>[l(d(a.acceptedCount),1)]),_:1}),t(r,{caption:""},{default:e(()=>[Se]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{class:"my-card",style:{background:"radial-gradient(circle, rgba(250,237,118,0.93) 0%, rgb(140,129,7) 100%)"}},{default:e(()=>[t(g,null,{default:e(()=>[t(f,{clickable:""},{default:e(()=>[t(o,{avatar:""},{default:e(()=>[t(k,{color:"primary",name:"work",size:"md"})]),_:1}),t(o,null,{default:e(()=>[t(r,{class:"text-h5 text-bold text-white"},{default:e(()=>[l(d(a.packedCount),1)]),_:1}),t(r,{caption:""},{default:e(()=>[Ie]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{class:"my-card",style:{background:"radial-gradient(circle, #86f6ed 0%, #046558 100%)"}},{default:e(()=>[t(g,null,{default:e(()=>[t(f,{clickable:""},{default:e(()=>[t(o,{avatar:""},{default:e(()=>[t(k,{color:"primary",name:"local_shipping",size:"md"})]),_:1}),t(o,null,{default:e(()=>[t(r,{class:"text-h5 text-bold text-white"},{default:e(()=>[l(d(a.dispatchedCount),1)]),_:1}),t(r,{caption:""},{default:e(()=>[Ae]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),a.totalcount?(u(),D("div",je,[t(he,{class:"bg-brand text-white shadow-2"},{default:e(()=>[t(ve,null,{default:e(()=>[Ee]),_:1})]),_:1}),a.totalcount?(u(),n(g,{key:0,bordered:"",padding:"",class:"rounded-borders",style:{"max-width":"350px"}},{default:e(()=>[(u(!0),D(L,null,K(a.getOrders,(s,b)=>W((u(),n(f,{clickable:"",key:s.id,onClick:I=>a.showitems(s.customer,s.id,s.date,s.status,s.items)},{default:e(()=>[t(o,{avatar:"",top:""},{default:e(()=>[t(F,{color:"brand","text-color":"white"},{default:e(()=>[l(d(s.customer.charAt(0)),1)]),_:2},1024)]),_:2},1024),t(o,null,{default:e(()=>[t(r,null,{default:e(()=>[l(d(s.customer),1)]),_:2},1024),t(r,{caption:""},{default:e(()=>[l(d(s.date),1)]),_:2},1024),t(r,{caption:""},{default:e(()=>[l(d(s.narration),1)]),_:2},1024)]),_:2},1024),t(o,{side:"",top:""},{default:e(()=>[s.status==="New"?(u(),n(m,{key:0,color:"blue"},{default:e(()=>[l(d(s.status),1)]),_:2},1024)):s.status==="Viewed"?(u(),n(m,{key:1,color:"secondary"},{default:e(()=>[l(d(s.status),1)]),_:2},1024)):s.status==="Accepted"?(u(),n(m,{key:2,color:"accent"},{default:e(()=>[l(d(s.status),1)]),_:2},1024)):s.status==="Packed"?(u(),n(m,{key:3,color:"info"},{default:e(()=>[l(d(s.status),1)]),_:2},1024)):s.status==="Dispatched"?(u(),n(m,{key:4,color:"blue-grey"},{default:e(()=>[l(d(s.status),1)]),_:2},1024)):(u(),n(m,{key:5,color:"primary"},{default:e(()=>[Ne]),_:1}))]),_:2},1024)]),_:2},1032,["onClick"])),[[ge]])),128))]),_:1})):P("",!0)])):P("",!0),a.totalcount?(u(),D("div",Me,[t(ye,{modelValue:a.page,"onUpdate:modelValue":_[0]||(_[0]=s=>a.page=s),min:a.currentPage,max:a.maxVal,"max-pages":7,"direction-links":"","boundary-links":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward","active-color":"brand"},null,8,["modelValue","min","max"])])):P("",!0),z("div",Te,[t(pe,{modelValue:a.card,"onUpdate:modelValue":_[3]||(_[3]=s=>a.card=s)},{default:e(()=>[t(v,{style:{width:"400px"}},{default:e(()=>[t(g,{bordered:"",class:"rounded-borders",style:{"min-width":"350px"}},{default:e(()=>[t(f,null,{default:e(()=>[t(o,{avatar:""},{default:e(()=>[t(F,{icon:"fact_check",color:"brand","text-color":"white"})]),_:1}),t(o,{top:"",class:"col-7 gt-sm"},{default:e(()=>[t(r,{lines:"1"},{default:e(()=>[l(d(a.specificCustomer),1)]),_:1}),t(r,{lines:"2"},{default:e(()=>[l(d(a.specificDate),1)]),_:1})]),_:1}),t(o,{side:""},{default:e(()=>[a.model==="New"?(u(),n(m,{key:0,color:"blue"},{default:e(()=>[l(d(a.model),1)]),_:1})):a.model==="Viewed"?(u(),n(m,{key:1,color:"secondary"},{default:e(()=>[l(d(a.model),1)]),_:1})):a.model==="Accepted"?(u(),n(m,{key:2,color:"accent"},{default:e(()=>[l(d(a.model),1)]),_:1})):a.model==="Packed"?(u(),n(m,{key:3,color:"info"},{default:e(()=>[l(d(a.model),1)]),_:1})):a.model==="Dispatched"?(u(),n(m,{key:4,color:"blue-grey"},{default:e(()=>[l(d(a.model),1)]),_:1})):a.model==="Delivered"?(u(),n(m,{key:5,color:"positive"},{default:e(()=>[l(d(a.model),1)]),_:1})):a.model==="Cancelled"?(u(),n(m,{key:6,color:"negative"},{default:e(()=>[l(d(a.model),1)]),_:1})):(u(),n(m,{key:7,color:"primary"},{default:e(()=>[Ye]),_:1}))]),_:1})]),_:1}),t(f,null,{default:e(()=>[t(o,{top:"",class:"col-1 gt-sm"},{default:e(()=>[t(r,{class:"q-mt-sm text-weight-medium"},{default:e(()=>[Be]),_:1})]),_:1}),t(o,{top:"",class:"col-7 gt-sm"},{default:e(()=>[t(r,{class:"q-mt-sm text-weight-medium"},{default:e(()=>[Re]),_:1})]),_:1}),t(o,{top:""},{default:e(()=>[t(r,{class:"q-mt-sm text-weight-medium text-center"},{default:e(()=>[Ue]),_:1})]),_:1})]),_:1}),t(H),(u(!0),D(L,null,K(a.specificItems,(s,b)=>(u(),n(f,null,{default:e(()=>[t(o,{top:"",class:"col-1 gt-sm"},{default:e(()=>[t(r,{class:"q-mt-sm"},{default:e(()=>[l(d(b+1),1)]),_:2},1024)]),_:2},1024),t(o,{top:"",class:"col-7 gt-sm"},{default:e(()=>[t(r,{class:"q-mt-sm"},{default:e(()=>[l(d(s.item.name),1)]),_:2},1024)]),_:2},1024),t(o,{top:""},{default:e(()=>[t(r,{class:"q-mt-sm flex-center text-center"},{default:e(()=>[l(d(s.quantity),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256)),t(H),t(f,null,{default:e(()=>[t(o,{top:"",class:"col-1 gt-sm"},{default:e(()=>[t(r,{class:"q-mt-sm text-weight-medium"})]),_:1}),t(o,{top:"",class:"col-7 gt-sm"},{default:e(()=>[t(r,{class:"q-mt-sm text-weight-medium"},{default:e(()=>[ze]),_:1})]),_:1}),t(o,{top:""},{default:e(()=>[t(r,{class:"q-mt-sm text-weight-medium text-center"},{default:e(()=>[l(d(a.specificItems.length),1)]),_:1})]),_:1})]),_:1}),t(f,null,{default:e(()=>[t(o,{top:"",class:"col-2 gt-sm"},{default:e(()=>[t(r,{class:"q-mt-sm text-weight-medium"})]),_:1}),t(o,{top:"",class:"col-7 gt-sm"},{default:e(()=>[t(r,{class:"q-mt-sm text-weight-medium"},{default:e(()=>[t(be,{filled:"",modelValue:a.model,"onUpdate:modelValue":[_[1]||(_[1]=s=>a.model=s),_[2]||(_[2]=s=>a.updateStatus())],options:a.options,label:"Status"},null,8,["modelValue","options"])]),_:1})]),_:1}),t(o,{top:""},{default:e(()=>[t(r,{class:"q-mt-sm"})]),_:1})]),_:1})]),_:1}),t(fe,{align:"right"},{default:e(()=>[W(t(_e,{flat:"",label:"Close",color:"negative"},null,512),[[xe]])]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1})}var nt=ie(Ve,[["render",Le],["__scopeId","data-v-687e4d04"]]);export{nt as default};