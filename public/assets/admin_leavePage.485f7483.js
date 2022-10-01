import{aj as ee,K as te,r as i,t as k,N as u,R as e,L as o,P as t,al as ae,S as h,Z as D,M as p,V as K,$ as X,U as n,O as M,ai as F,T as s,as as le,Q as se,am as oe,B as re,Y as de,at as ne}from"./index.04c464b8.js";import{Q as q}from"./QList.82924bce.js";import{Q as r}from"./QItemLabel.9f7bf82c.js";import{Q as f}from"./QBadge.93a5f3cc.js";import{a as g,Q as c}from"./QItem.3f5f7acb.js";import{Q as ce}from"./QPagination.1234704c.js";import{Q as ie}from"./QSelect.4b00999f.js";import{Q as ue}from"./QPage.b0d4ff95.js";import{C as me}from"./ClosePopup.b54a8cbb.js";import{u as fe}from"./leave.0ca62774.js";import{post as _e}from"./axios.58db161c.js";import{d as S}from"./date.99bfb014.js";import{u as ve}from"./use-quasar.1595dcc1.js";import{u as pe}from"./master.f1b7f5d6.js";import"./QMenu.08106161.js";import"./position-engine.d0298df9.js";import"./selection.fd593506.js";import"./lodash.1e9e3f94.js";const ge=pe(),xe=ge.SALES_EXECUTIVE,Z=fe(),ye={setup(){te();const L=ve();let d=i(xe),w=i(!1);const a=i(""),P=k(()=>{if(a.value==="")return Object.values(d.value);{let m=a.value.toLowerCase();return Object.values(d.value).filter(v=>v.name.toLowerCase().indexOf(m)>-1)}}),b=k(()=>{if(a.value==="")return Object.values(Z.leaves).reverse();{let m=a.value.toLowerCase();return Object.values(Z.leaves).filter(v=>v.executive.name.toLowerCase().indexOf(m)>-1)}}),l=function(m,v){a.value=m,w.value=!w.value},x=k(()=>b.value.length);let Q,A;const z=k(()=>(Q=(C.value-1)*y.value,A=(C.value-1)*y.value+y.value,b.value.slice(Q,A).map(_=>({id:_.id,executive:_.executive.name,start_date:S.formatDate(_.start_date,"MMMM D, YYYY "),end_date:S.formatDate(_.end_date,"MMMM D, YYYY "),description:_.description,status:_.status}))));let I=i(!1),Y=i(""),U=i(""),j=i(""),N=i(""),E=i(""),B=i(""),V=i(null);const G=function(m,v,_,W,$,T){Y.value=m,B.value=v,U.value=S.formatDate(_,"DD-MM-YYYY"),j.value=S.formatDate(W,"DD-MM-YYYY"),N.value=$,T=="New"?(E.value=V.value="Progress",O()):E.value=V.value=T,I.value=!0},O=function(){_e("leave","status",{id:Y.value,status:V.value}).then(console.log),R("Leave status updated Successfully")},R=function(m){L.notify({type:"positive",message:m,icon:"cloud_done",position:"top-right",timeout:2e3})};let C=i(1),H=i(1);const y=i(10),J=k(()=>Math.ceil(x.value/y.value));return{totalcount:x,page:C,currentPage:H,totalPages:y,maxVal:J,getData:z,openwindow:G,specificId:Y,specificExecutive:B,specificstartDate:U,specificendDate:j,specificeDescription:N,specificStatus:E,card:I,options:["Accepted","Rejected"],model:V,updateStatus:O,positivemsg:R,MYSALESEXECUTIVES:d,search:a,searchExecutives:P,isVisible:w,selectExecutive:l}}},ke={class:"dropdown-wrapper"},we={key:0,class:"dropdown-popover"},Qe={class:"options"},Ve=["onClick"],he={key:0,class:"q-pa-md row items-start q-gutter-md"},De=s("Unknown"),Se={key:1,class:"q-pa-lg flex flex-center"},be={class:"q-pa-md q-gutter-sm"},Ye=s("Unknown"),Ee=s("Start Date"),Ce=s("End Date"),Me=s("Description");function qe(L,d,w,a,P,b){return o(),u(ue,{padding:"",class:"flex column q-col-gutter-y-lg"},{default:e(()=>[t(q,null,{default:e(()=>[t(ae,{modelValue:a.search,"onUpdate:modelValue":d[0]||(d[0]=l=>a.search=l),debounce:"500",filled:"",placeholder:"Search",onClick:d[1]||(d[1]=l=>a.isVisible=!a.isVisible)},{append:e(()=>[t(h,{name:"search"})]),_:1},8,["modelValue"]),D("section",ke,[a.isVisible?(o(),p("div",we,[D("div",Qe,[D("ul",null,[(o(!0),p(K,null,X(a.searchExecutives,(l,x)=>(o(),p("li",{onClick:Q=>a.selectExecutive(l.name,l.id),key:`user-${x}`},n(l.name),9,Ve))),128))])])])):M("",!0)])]),_:1}),a.totalcount?(o(),p("div",he,[(o(!0),p(K,null,X(a.getData,(l,x)=>(o(),u(F,{flat:"",bordered:"",class:"my-card",key:l.id,onClick:Q=>a.openwindow(l.id,l.executive,l.start_date,l.end_date,l.description,l.status)},{default:e(()=>[t(q,null,{default:e(()=>[t(g,{class:"bg-brand text-white text-bold"},{default:e(()=>[t(c,null,{default:e(()=>[t(r,{class:"text-overline"},{default:e(()=>[s(n(l.executive),1)]),_:2},1024),t(r,{class:"text-subtitle2"},{default:e(()=>[s(n(l.start_date),1)]),_:2},1024),t(r,null,{default:e(()=>[l.status==="New"?(o(),u(f,{key:0,color:"blue"},{default:e(()=>[s(n(l.status),1)]),_:2},1024)):l.status==="Progress"?(o(),u(f,{key:1,color:"secondary"},{default:e(()=>[s(n(l.status),1)]),_:2},1024)):l.status==="Accepted"?(o(),u(f,{key:2,color:"positive"},{default:e(()=>[s(n(l.status),1)]),_:2},1024)):l.status==="Rejected"?(o(),u(f,{key:3,color:"accent"},{default:e(()=>[s(n(l.status),1)]),_:2},1024)):(o(),u(f,{key:4,color:"dark"},{default:e(()=>[De]),_:1}))]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128))])):M("",!0),a.totalcount?(o(),p("div",Se,[t(ce,{modelValue:a.page,"onUpdate:modelValue":d[2]||(d[2]=l=>a.page=l),min:a.currentPage,max:a.maxVal,"max-pages":7,"direction-links":"","boundary-links":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward","active-color":"deep-orange-10"},null,8,["modelValue","min","max"])])):M("",!0),D("div",be,[t(ne,{modelValue:a.card,"onUpdate:modelValue":d[5]||(d[5]=l=>a.card=l)},{default:e(()=>[t(F,{class:"my-card",style:{"max-width":"400px"}},{default:e(()=>[t(q,{bordered:"",class:"rounded-borders",style:{"min-width":"350px"}},{default:e(()=>[t(g,null,{default:e(()=>[t(c,{avatar:""},{default:e(()=>[t(le,{icon:"fact_check",color:"brand","text-color":"white"})]),_:1}),t(c,{top:"",class:"col-7 gt-sm"},{default:e(()=>[t(r,{lines:"1"},{default:e(()=>[s(n(a.specificExecutive),1)]),_:1}),t(r,{lines:"2"}),t(r,{caption:"",lines:"3"},{default:e(()=>[s(n(a.specificId),1)]),_:1})]),_:1}),t(c,{side:""},{default:e(()=>[a.model==="New"?(o(),u(f,{key:0,color:"blue"},{default:e(()=>[s(n(a.model),1)]),_:1})):a.model==="Progress"?(o(),u(f,{key:1,color:"secondary"},{default:e(()=>[s(n(a.model),1)]),_:1})):a.model==="Accepted"?(o(),u(f,{key:2,color:"positive"},{default:e(()=>[s(n(a.model),1)]),_:1})):a.model==="Rejected"?(o(),u(f,{key:3,color:"negative"},{default:e(()=>[s(n(a.model),1)]),_:1})):(o(),u(f,{key:4,color:"primary"},{default:e(()=>[Ye]),_:1}))]),_:1})]),_:1}),t(se),t(g,null,{default:e(()=>[t(c,{top:"",class:"col-1 gt-sm"},{default:e(()=>[t(r,{avatar:""},{default:e(()=>[t(h,{color:"primary",name:"lens"})]),_:1})]),_:1}),t(c,{top:"",class:"col-3 gt-sm"},{default:e(()=>[t(r,{class:"q-mt-sm"},{default:e(()=>[Ee]),_:1})]),_:1}),t(c,{top:""},{default:e(()=>[t(r,{class:"q-mt-sm flex-center text-center"},{default:e(()=>[s(n(a.specificstartDate),1)]),_:1})]),_:1})]),_:1}),t(g,null,{default:e(()=>[t(c,{class:"col-1 gt-sm"},{default:e(()=>[t(r,{avatar:""},{default:e(()=>[t(h,{color:"primary",name:"lens"})]),_:1})]),_:1}),t(c,{top:"",class:"col-3 gt-sm"},{default:e(()=>[t(r,{class:"q-mt-sm"},{default:e(()=>[Ce]),_:1})]),_:1}),t(c,{top:""},{default:e(()=>[t(r,{class:"q-mt-sm flex-center text-center"},{default:e(()=>[s(n(a.specificendDate),1)]),_:1})]),_:1})]),_:1}),t(g,null,{default:e(()=>[t(c,{class:"col-1 gt-sm"},{default:e(()=>[t(r,{avatar:""},{default:e(()=>[t(h,{color:"primary",name:"lens"})]),_:1})]),_:1}),t(c,{top:"",class:"col-3 gt-sm"},{default:e(()=>[t(r,{class:"q-mt-sm"},{default:e(()=>[Me]),_:1})]),_:1}),t(c,{top:""},{default:e(()=>[t(r,{class:"q-mt-sm flex-center text-left"},{default:e(()=>[s(n(a.specificeDescription),1)]),_:1})]),_:1})]),_:1}),t(g,null,{default:e(()=>[t(c,{top:"",class:"col-2 gt-sm"},{default:e(()=>[t(r,{class:"q-mt-sm text-weight-medium"})]),_:1}),t(c,{top:"",class:"col-7 gt-sm"},{default:e(()=>[t(r,{class:"q-mt-sm text-weight-medium"},{default:e(()=>[t(ie,{filled:"",modelValue:a.model,"onUpdate:modelValue":[d[3]||(d[3]=l=>a.model=l),d[4]||(d[4]=l=>a.updateStatus())],options:a.options,label:"Status"},null,8,["modelValue","options"])]),_:1})]),_:1}),t(c,{top:""},{default:e(()=>[t(r,{class:"q-mt-sm"})]),_:1})]),_:1})]),_:1}),t(oe,{align:"right"},{default:e(()=>[re(t(de,{flat:"",label:"Close",color:"negative"},null,512),[[me]])]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1})}var Je=ee(ye,[["render",qe],["__scopeId","data-v-e656d510"]]);export{Je as default};