import{ai as J,J as X,r as d,t as V,M as m,P as a,K as n,Y as h,O as e,aC as k,L as q,U as z,_ as G,ah as B,S as r,T as i,N as I,as as H,Q as W,R as L,al as Z,B as $,X as ee,at as ae}from"./index.d755ac14.js";import{Q as s}from"./QItemLabel.780cbcc6.js";import{Q as f}from"./QBadge.73220a47.js";import{a as v,Q as u}from"./QItem.66a42e1c.js";import{Q as O}from"./QList.1c77fae5.js";import{Q as te}from"./QPagination.e76403d2.js";import{Q as le}from"./QPage.0b6c8760.js";import{C as oe}from"./ClosePopup.bea0ea49.js";import{u as re}from"./review.ec65bd8c.js";import{d as A}from"./date.7fc66f0f.js";import{post as se}from"./axios.f3978ac2.js";import"./format.c860d4da.js";import"./master.05480c04.js";import"./lodash.1e9e3f94.js";import"./order.beb5b52a.js";const E=re(),de={setup(){X();let Q,o,y=d("");const t=V(()=>{if(y.value==="")return Object.values(E.reviews).reverse();{let x=y.value.toLowerCase();return Object.values(E.reviews).filter(g=>g.type.toLowerCase().indexOf(x)>-1).reverse()}}),b=V(()=>t.value.length),D=V(()=>(Q=(S.value-1)*p.value,o=(S.value-1)*p.value+p.value,t.value.slice(Q,o).map(c=>({id:c.id,customer:c.customer,type:c.type,created_at:A.formatDate(c.created_at,"MMMM D, YYYY "),comment:c.comment,status:c.status,items:c.items}))));let l=d(!1),w=d(""),C=d(""),P=d(""),M=d(""),U=d(""),_=d("");const R=function(x,g,c,j,F,Y){w.value=x,C.value=g,P.value=c,M.value=A.formatDate(j,"DD-MM-YYYY"),U.value=F,_.value=Y,Y=="New"?(_.value="Viewed",N()):_.value=Y,l.value=!0},N=function(){se("review","status",{id:w.value,status:_.value}).then(console.log)};let S=d(1),T=d(1);const p=d(10),K=V(()=>Math.ceil(b.value/p.value));return{totalcount:b,page:S,currentPage:T,totalPages:p,maxVal:K,getData:D,updateStatus:N,openwindow:R,specificId:w,specificCustomer:C,specificType:P,specificcreateDate:M,specificComment:U,specificStatus:_,card:l,radio:y}}},ne={class:"q-pa-md flex flex-center"},ue={key:0,class:"q-pa-md row items-start q-gutter-md"},ie={key:1,class:"q-pa-lg flex flex-center"},ce={class:"q-pa-md q-gutter-sm"};function me(Q,o,y,t,b,D){return n(),m(le,{padding:"",class:"flex column q-col-gutter-y-lg"},{default:a(()=>[h("div",ne,[e(k,{name:"radio",modelValue:t.radio,"onUpdate:modelValue":o[0]||(o[0]=l=>t.radio=l),val:"",label:"All ",color:"secondary"},null,8,["modelValue"]),e(k,{name:"radio",modelValue:t.radio,"onUpdate:modelValue":o[1]||(o[1]=l=>t.radio=l),val:"Product",label:"Product ",color:"secondary"},null,8,["modelValue"]),e(k,{name:"radio",modelValue:t.radio,"onUpdate:modelValue":o[2]||(o[2]=l=>t.radio=l),val:"SalesExecutive",label:"SalesExecutive ",color:"secondary"},null,8,["modelValue"]),e(k,{name:"radio",modelValue:t.radio,"onUpdate:modelValue":o[3]||(o[3]=l=>t.radio=l),val:"Order",label:"Order ",color:"secondary"},null,8,["modelValue"])]),t.totalcount?(n(),q("div",ue,[(n(!0),q(z,null,G(t.getData,(l,w)=>(n(),m(B,{flat:"",bordered:"",class:"my-card",key:l.id,onClick:C=>t.openwindow(l.id,l.customer.name,l.type,l.created_at,l.comment,l.status)},{default:a(()=>[e(O,null,{default:a(()=>[e(v,{class:"bg-brand text-white text-bold"},{default:a(()=>[e(u,null,{default:a(()=>[e(s,{class:"text-overline"},{default:a(()=>[r(i(l.customer.name),1)]),_:2},1024),e(s,null,{default:a(()=>[r(i(l.created_at),1)]),_:2},1024),e(s,null,{default:a(()=>[l.status==="New"?(n(),m(f,{key:0,color:"blue"},{default:a(()=>[r(i(l.status),1)]),_:2},1024)):l.status==="Viewed"?(n(),m(f,{key:1,color:"secondary"},{default:a(()=>[r(i(l.status),1)]),_:2},1024)):(n(),m(f,{key:2,color:"primary"},{default:a(()=>[r("Unknown")]),_:1}))]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128))])):I("",!0),t.totalcount?(n(),q("div",ie,[e(te,{modelValue:t.page,"onUpdate:modelValue":o[4]||(o[4]=l=>t.page=l),min:t.currentPage,max:t.maxVal,"max-pages":7,"direction-links":"","boundary-links":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward","active-color":"deep-orange-10"},null,8,["modelValue","min","max"])])):I("",!0),h("div",ce,[e(ae,{modelValue:t.card,"onUpdate:modelValue":o[5]||(o[5]=l=>t.card=l)},{default:a(()=>[e(B,{class:"my-card",style:{"max-width":"400px"}},{default:a(()=>[e(O,{bordered:"",class:"rounded-borders",style:{"min-width":"350px"}},{default:a(()=>[e(v,null,{default:a(()=>[e(u,{avatar:""},{default:a(()=>[e(H,{icon:"fact_check",color:"brand","text-color":"white"})]),_:1}),e(u,{top:""},{default:a(()=>[e(s,{lines:"1"},{default:a(()=>[r(i(t.specificCustomer),1)]),_:1}),e(s,{lines:"2"}),e(s,{caption:"",lines:"3"},{default:a(()=>[r(i(t.specificcreateDate),1)]),_:1})]),_:1})]),_:1}),e(W),e(v,null,{default:a(()=>[e(u,{avatar:""},{default:a(()=>[e(s,null,{default:a(()=>[e(L,{color:"primary",name:"lens"})]),_:1})]),_:1}),e(u,{top:""},{default:a(()=>[e(s,{class:"q-mt-sm"},{default:a(()=>[r("Type")]),_:1})]),_:1}),e(u,{top:""},{default:a(()=>[e(s,{class:"q-mt-sm flex-center text-left"},{default:a(()=>[r(i(t.specificType),1)]),_:1})]),_:1})]),_:1}),e(v,null,{default:a(()=>[e(u,{avatar:""},{default:a(()=>[e(s,null,{default:a(()=>[e(L,{color:"primary",name:"lens"})]),_:1})]),_:1}),e(u,{top:""},{default:a(()=>[e(s,{class:"q-mt-sm"},{default:a(()=>[r("Comment")]),_:1})]),_:1}),e(u,{top:""},{default:a(()=>[e(s,{class:"q-mt-sm flex-center text-left"},{default:a(()=>[r(i(t.specificComment),1)]),_:1})]),_:1})]),_:1}),e(v,null,{default:a(()=>[e(u,{avatar:""},{default:a(()=>[e(s,{class:"q-mt-sm text-weight-medium"},{default:a(()=>[r("\xA0")]),_:1})]),_:1}),e(u,{top:""},{default:a(()=>[e(s,null,{default:a(()=>[t.specificStatus==="New"?(n(),m(f,{key:0,color:"blue"},{default:a(()=>[r(i(t.specificStatus),1)]),_:1})):t.specificStatus==="Viewed"?(n(),m(f,{key:1,color:"secondary"},{default:a(()=>[r(i(t.specificStatus),1)]),_:1})):(n(),m(f,{key:2,color:"primary"},{default:a(()=>[r("Unknown")]),_:1}))]),_:1})]),_:1})]),_:1})]),_:1}),e(Z,{align:"right"},{default:a(()=>[$(e(ee,{flat:"",label:"Close",color:"negative"},null,512),[[oe]])]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1})}var qe=J(de,[["render",me],["__scopeId","data-v-716e438e"]]);export{qe as default};