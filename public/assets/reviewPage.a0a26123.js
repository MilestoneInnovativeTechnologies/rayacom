import{a8 as j,B as F,k as p,r as n,E as m,H as e,C as s,N as I,G as t,Q as k,M as P,D as h,K as O,P as z,I as l,J as i,F as N,ap as G,t as H}from"./index.519e6511.js";import{Q as r}from"./QItemLabel.95c271f7.js";import{Q as f}from"./QBadge.a3efd72d.js";import{Q as J}from"./QCardSection.a10ea186.js";import{Q as A}from"./QCard.39c5907a.js";import{Q as X}from"./QPagination.908aa05f.js";import{a as v,Q as c}from"./QItem.dbe0fd3c.js";import{Q as Z}from"./QSeparator.8305d860.js";import{Q as $}from"./QList.ee2f0220.js";import{Q as ee}from"./QCardActions.2803e26a.js";import{Q as te}from"./QDialog.4aa07f16.js";import{Q as ae}from"./QPage.68727071.js";import{C as oe}from"./ClosePopup.20672703.js";import{u as le}from"./review.04954850.js";import{d as B}from"./date.bd456e4c.js";import"./use-dark.e60f4681.js";import"./QInput.3be0fd5f.js";import"./format.c860d4da.js";import"./use-prevent-scroll.d8f1a98f.js";import"./scroll.1e188d5c.js";import"./use-model-toggle.02b9d1d7.js";import"./use-portal.0839ed11.js";import"./master.8d9550d1.js";import"./lodash.1b69ab06.js";import"./order.3b2eb02b.js";const re=le(),se={setup(){const C=F();let d,g;const a=p(()=>Object.values(re.reviews).reverse()),x=p(()=>Object.values(a.value).length),V=p(()=>(d=(Q.value-1)*_.value,g=(Q.value-1)*_.value+_.value,a.value.slice(d,g).map(u=>({id:u.id,customer:u.customer,type:u.type,created_at:B.formatDate(u.created_at,"MMMM D, YYYY "),comment:u.comment,status:u.status,items:u.items})))),o=function(){C.push({name:"REVIEWADD"})};let y=n(!1),w=n(""),b=n(""),D=n(""),S=n(""),Y=n(""),q=n("");const R=function(E,M,u,W,K,L){w.value=E,b.value=M,D.value=u,S.value=B.formatDate(W,"DD-MM-YYYY"),Y.value=K,q.value=L,y.value=!0};let Q=n(1),T=n(1);const _=n(10),U=p(()=>Math.ceil(x.value/_.value));return{MYREVIEWS:a,totalcount:x,page:Q,currentPage:T,totalPages:_,maxVal:U,getData:V,gotoAction:o,openwindow:R,specificId:w,specificCustomer:b,specificType:D,specificcreateDate:S,specificComment:Y,specificStatus:q,card:y}}},ce={class:"q-pa-md text-center"},ne=l(" NEW REVIEW "),ie={key:0,class:"q-pa-xs row items-start q-gutter-md"},de=l("Unknown"),ue={key:1,class:"q-pa-lg flex flex-center"},me={class:"q-pa-md q-gutter-sm"},fe=l("Type"),_e=l("Comment"),pe=l("\xA0"),ve=l("Unknown"),ge=l("\xA0");function xe(C,d,g,a,x,V){return s(),m(ae,{padding:"",class:"flex column q-col-gutter-y-lg"},{default:e(()=>[I("div",ce,[t(P,{color:"positive","no-caps":"",onClick:d[0]||(d[0]=o=>a.gotoAction())},{default:e(()=>[t(k,{left:"",size:"xl",name:"open_in_new"}),ne]),_:1})]),a.totalcount?(s(),h("div",ie,[(s(!0),h(O,null,z(a.getData,(o,y)=>(s(),m(A,{flat:"",bordered:"",class:"my-card",key:o.id,onClick:w=>a.openwindow(o.id,o.customer.name,o.type,o.created_at,o.comment,o.status)},{default:e(()=>[t(J,{class:"bg-brand text-white"},{default:e(()=>[t(r,{class:"Subtitle 2 text-weight-bolder"},{default:e(()=>[l(i(o.created_at),1)]),_:2},1024),t(r,null,{default:e(()=>[l(i(o.type),1)]),_:2},1024),t(r,null,{default:e(()=>[o.status==="New"?(s(),m(f,{key:0,color:"blue"},{default:e(()=>[l(i(o.status),1)]),_:2},1024)):o.status==="Viewed"?(s(),m(f,{key:1,color:"secondary"},{default:e(()=>[l(i(o.status),1)]),_:2},1024)):(s(),m(f,{key:2,color:"primary"},{default:e(()=>[de]),_:1}))]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128))])):N("",!0),a.totalcount?(s(),h("div",ue,[t(X,{modelValue:a.page,"onUpdate:modelValue":d[1]||(d[1]=o=>a.page=o),min:a.currentPage,max:a.maxVal,"max-pages":7,"direction-links":"","boundary-links":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward","active-color":"deep-orange-10"},null,8,["modelValue","min","max"])])):N("",!0),I("div",me,[t(te,{modelValue:a.card,"onUpdate:modelValue":d[2]||(d[2]=o=>a.card=o)},{default:e(()=>[t(A,{class:"my-card",style:{"max-width":"400px"}},{default:e(()=>[t($,{bordered:"",class:"rounded-borders"},{default:e(()=>[t(v,null,{default:e(()=>[t(c,{avatar:""},{default:e(()=>[t(G,{icon:"fact_check",color:"brand","text-color":"white"})]),_:1}),t(c,{top:""},{default:e(()=>[t(r,{lines:"1"},{default:e(()=>[l(i(a.specificCustomer),1)]),_:1}),t(r,{lines:"2"}),t(r,{caption:"",lines:"3"},{default:e(()=>[l(i(a.specificcreateDate),1)]),_:1})]),_:1})]),_:1}),t(Z),t(v,null,{default:e(()=>[t(c,{avatar:""},{default:e(()=>[t(r,null,{default:e(()=>[t(k,{color:"primary",name:"lens"})]),_:1})]),_:1}),t(c,{top:""},{default:e(()=>[t(r,null,{default:e(()=>[fe]),_:1})]),_:1}),t(c,{top:""},{default:e(()=>[t(r,{class:"flex-center text-left"},{default:e(()=>[l(i(a.specificType),1)]),_:1})]),_:1})]),_:1}),t(v,null,{default:e(()=>[t(c,{avatar:""},{default:e(()=>[t(r,{avatar:""},{default:e(()=>[t(k,{color:"primary",name:"lens"})]),_:1})]),_:1}),t(c,{top:""},{default:e(()=>[t(r,{class:"q-mt-sm"},{default:e(()=>[_e]),_:1})]),_:1}),t(c,{top:""},{default:e(()=>[t(r,{class:"q-mt-sm flex-center text-left"},{default:e(()=>[l(i(a.specificComment),1)]),_:1})]),_:1})]),_:1}),t(v,null,{default:e(()=>[t(c,{avatar:""},{default:e(()=>[t(r,{class:"text-weight-medium"},{default:e(()=>[pe]),_:1})]),_:1}),t(c,{class:"col-3 q-pa-md q-gutter-xl"},{default:e(()=>[a.specificStatus==="New"?(s(),m(f,{key:0,color:"blue"},{default:e(()=>[l(i(a.specificStatus),1)]),_:1})):a.specificStatus==="Viewed"?(s(),m(f,{key:1,color:"secondary"},{default:e(()=>[l(i(a.specificStatus),1)]),_:1})):(s(),m(f,{key:2,color:"primary"},{default:e(()=>[ve]),_:1}))]),_:1}),t(c,{top:""},{default:e(()=>[t(r,{class:"q-mt-sm"},{default:e(()=>[ge]),_:1})]),_:1})]),_:1})]),_:1}),t(ee,{align:"right"},{default:e(()=>[H(t(P,{flat:"",label:"Close",color:"negative"},null,512),[[oe]])]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1})}var je=j(se,[["render",xe],["__scopeId","data-v-0d56f616"]]);export{je as default};