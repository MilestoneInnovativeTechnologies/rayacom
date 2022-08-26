import{Q as s}from"./QItemLabel.4b045cb7.js";import{Q as m}from"./QBadge.68cbc97a.js";import{a as f,Q as r}from"./QItem.d2090226.js";import{Q as N}from"./QList.5e2b7bfb.js";import{Q as B}from"./QCard.9e71421a.js";import{Q as G}from"./QPagination.2286f097.js";import{a8 as H,B as J,r as u,k as h,E as n,H as e,C as d,D as q,K as T,P as z,G as t,I as o,J as c,F as L,N as W,ap as X,Q as V,t as Z,M as $}from"./index.8d7e61fd.js";import{Q as ee}from"./QSeparator.1fdea069.js";import{Q as te}from"./QSelect.a4017f62.js";import{Q as ae}from"./QCardActions.dacc32d4.js";import{Q as le}from"./QDialog.500a4fb3.js";import{Q as oe}from"./QPage.12dd21c8.js";import{C as se}from"./ClosePopup.77ae0838.js";import{u as re}from"./leave.a3019c47.js";import{post as de}from"./axios.980293f3.js";import{d as j}from"./date.52e73b47.js";import{u as ce}from"./use-quasar.7d209305.js";import"./use-dark.678b0dd2.js";import"./QInput.0fdaf5de.js";import"./format.c860d4da.js";import"./QMenu.f3a6a76b.js";import"./position-engine.fd7b7ee1.js";import"./selection.4ec6e38e.js";import"./use-portal.0314865a.js";import"./scroll.25b4c155.js";import"./use-model-toggle.3fd02ce3.js";import"./use-prevent-scroll.1269f3f5.js";import"./master.58f94054.js";import"./lodash.1b69ab06.js";const ne=re(),ie={setup(){J();const S=ce();let i,x,a=u(null);const _=h(()=>Object.values(ne.leaves).reverse());let y=Object.values(_.value).length;const l=h(()=>(i=(w.value-1)*p.value,x=(w.value-1)*p.value+p.value,_.value.slice(i,x).map(D=>D)));let Q=u(!1),v=u(""),b=u(""),Y=u(""),P=u(""),k=u(""),C=u("");const U=function(g,A,D,F,O,I){v.value=g,C.value=A,b.value=j.formatDate(D,"DD-MM-YYYY"),Y.value=j.formatDate(F,"DD-MM-YYYY"),P.value=O,I=="New"?(k.value=a.value="Progress",E()):k.value=a.value=I,Q.value=!0},E=function(){de("leave","status",{id:v.value,status:a.value}).then(console.log),M("Leave status updated Successfully")},M=function(g){S.notify({type:"positive",message:g,icon:"cloud_done",position:"top-right",timeout:2e3})};let w=u(1),R=u(1);const p=u(10),K=h(()=>Math.ceil(y/p.value));return{MYLEAVES:_,totalcount:y,page:w,currentPage:R,totalPages:p,maxVal:K,getData:l,openwindow:U,specificId:v,specificExecutive:C,specificstartDate:b,specificendDate:Y,specificeDescription:P,specificStatus:k,card:Q,options:["Accepted","Rejected"],model:a,updateStatus:E,positivemsg:M}}},ue={key:0,class:"q-pa-md row items-start q-gutter-md"},me=o("Unknown"),fe={key:1,class:"q-pa-lg flex flex-center"},pe={class:"q-pa-md q-gutter-sm"},_e=o("Unknown"),ve=o("Start Date"),ge=o("End Date"),xe=o("Description");function ye(S,i,x,a,_,y){return d(),n(oe,{padding:"",class:"flex column q-col-gutter-y-lg"},{default:e(()=>[a.totalcount?(d(),q("div",ue,[(d(!0),q(T,null,z(a.getData,(l,Q)=>(d(),n(B,{flat:"",bordered:"",class:"my-card",key:l.id,onClick:v=>a.openwindow(l.id,l.executive.name,l.start_date,l.end_date,l.description,l.status)},{default:e(()=>[t(N,null,{default:e(()=>[t(f,{class:"bg-grey-2 text-bold"},{default:e(()=>[t(r,null,{default:e(()=>[t(s,null,{default:e(()=>[o(c(l.executive.name),1)]),_:2},1024),t(s,{caption:""},{default:e(()=>[o(c(l.start_date),1)]),_:2},1024),t(s,null,{default:e(()=>[l.status==="New"?(d(),n(m,{key:0,color:"blue"},{default:e(()=>[o(c(l.status),1)]),_:2},1024)):l.status==="Progress"?(d(),n(m,{key:1,color:"secondary"},{default:e(()=>[o(c(l.status),1)]),_:2},1024)):l.status==="Accepted"?(d(),n(m,{key:2,color:"positive"},{default:e(()=>[o(c(l.status),1)]),_:2},1024)):l.status==="Rejected"?(d(),n(m,{key:3,color:"negative"},{default:e(()=>[o(c(l.status),1)]),_:2},1024)):(d(),n(m,{key:4,color:"primary"},{default:e(()=>[me]),_:1}))]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128))])):L("",!0),a.totalcount?(d(),q("div",fe,[t(G,{modelValue:a.page,"onUpdate:modelValue":i[0]||(i[0]=l=>a.page=l),min:a.currentPage,max:a.maxVal,"max-pages":7,"direction-links":"","boundary-links":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward","active-color":"deep-orange-10"},null,8,["modelValue","min","max"])])):L("",!0),W("div",pe,[t(le,{modelValue:a.card,"onUpdate:modelValue":i[3]||(i[3]=l=>a.card=l)},{default:e(()=>[t(B,{class:"my-card",style:{"max-width":"400px"}},{default:e(()=>[t(N,{bordered:"",class:"rounded-borders",style:{"min-width":"350px"}},{default:e(()=>[t(f,null,{default:e(()=>[t(r,{avatar:""},{default:e(()=>[t(X,{icon:"fact_check",color:"brand","text-color":"white"})]),_:1}),t(r,{top:"",class:"col-7 gt-sm"},{default:e(()=>[t(s,{lines:"1"},{default:e(()=>[o(c(a.specificExecutive),1)]),_:1}),t(s,{lines:"2"}),t(s,{caption:"",lines:"3"},{default:e(()=>[o(c(a.specificId),1)]),_:1})]),_:1}),t(r,{side:""},{default:e(()=>[a.model==="New"?(d(),n(m,{key:0,color:"blue"},{default:e(()=>[o(c(a.model),1)]),_:1})):a.model==="Progress"?(d(),n(m,{key:1,color:"secondary"},{default:e(()=>[o(c(a.model),1)]),_:1})):a.model==="Accepted"?(d(),n(m,{key:2,color:"positive"},{default:e(()=>[o(c(a.model),1)]),_:1})):a.model==="Rejected"?(d(),n(m,{key:3,color:"negative"},{default:e(()=>[o(c(a.model),1)]),_:1})):(d(),n(m,{key:4,color:"primary"},{default:e(()=>[_e]),_:1}))]),_:1})]),_:1}),t(ee),t(f,null,{default:e(()=>[t(r,{top:"",class:"col-1 gt-sm"},{default:e(()=>[t(s,{avatar:""},{default:e(()=>[t(V,{color:"primary",name:"lens"})]),_:1})]),_:1}),t(r,{top:"",class:"col-3 gt-sm"},{default:e(()=>[t(s,{class:"q-mt-sm"},{default:e(()=>[ve]),_:1})]),_:1}),t(r,{top:""},{default:e(()=>[t(s,{class:"q-mt-sm flex-center text-center"},{default:e(()=>[o(c(a.specificstartDate),1)]),_:1})]),_:1})]),_:1}),t(f,null,{default:e(()=>[t(r,{class:"col-1 gt-sm"},{default:e(()=>[t(s,{avatar:""},{default:e(()=>[t(V,{color:"primary",name:"lens"})]),_:1})]),_:1}),t(r,{top:"",class:"col-3 gt-sm"},{default:e(()=>[t(s,{class:"q-mt-sm"},{default:e(()=>[ge]),_:1})]),_:1}),t(r,{top:""},{default:e(()=>[t(s,{class:"q-mt-sm flex-center text-center"},{default:e(()=>[o(c(a.specificendDate),1)]),_:1})]),_:1})]),_:1}),t(f,null,{default:e(()=>[t(r,{class:"col-1 gt-sm"},{default:e(()=>[t(s,{avatar:""},{default:e(()=>[t(V,{color:"primary",name:"lens"})]),_:1})]),_:1}),t(r,{top:"",class:"col-3 gt-sm"},{default:e(()=>[t(s,{class:"q-mt-sm"},{default:e(()=>[xe]),_:1})]),_:1}),t(r,{top:""},{default:e(()=>[t(s,{class:"q-mt-sm flex-center text-left"},{default:e(()=>[o(c(a.specificeDescription),1)]),_:1})]),_:1})]),_:1}),t(f,null,{default:e(()=>[t(r,{top:"",class:"col-2 gt-sm"},{default:e(()=>[t(s,{class:"q-mt-sm text-weight-medium"})]),_:1}),t(r,{top:"",class:"col-7 gt-sm"},{default:e(()=>[t(s,{class:"q-mt-sm text-weight-medium"},{default:e(()=>[t(te,{filled:"",modelValue:a.model,"onUpdate:modelValue":[i[1]||(i[1]=l=>a.model=l),i[2]||(i[2]=l=>a.updateStatus())],options:a.options,label:"Status"},null,8,["modelValue","options"])]),_:1})]),_:1}),t(r,{top:""},{default:e(()=>[t(s,{class:"q-mt-sm"})]),_:1})]),_:1})]),_:1}),t(ae,{align:"right"},{default:e(()=>[Z(t($,{flat:"",label:"Close",color:"negative"},null,512),[[se]])]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1})}var ze=H(ie,[["render",ye],["__scopeId","data-v-14868a2c"]]);export{ze as default};