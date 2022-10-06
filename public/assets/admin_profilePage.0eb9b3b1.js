import{ai as b,J as I,r as q,t as A,M as c,P as e,K as m,O as t,R as Q,ak as S,X as v,Y as V,ah as P,as as C,S as l,T as o,Q as k,L as D,_ as N,U as z,al as B,B as M,at as U}from"./index.d755ac14.js";import{a as g,Q as i}from"./QItem.66a42e1c.js";import{Q as u}from"./QItemLabel.780cbcc6.js";import{Q as f}from"./QBadge.73220a47.js";import{Q as E}from"./QList.1c77fae5.js";import{Q as L}from"./QPage.0b6c8760.js";import{C as T}from"./ClosePopup.bea0ea49.js";import{post as Z}from"./axios.f3978ac2.js";import{u as R}from"./master.05480c04.js";import{u as F}from"./use-quasar.87192af1.js";import"./lodash.1e9e3f94.js";const O=R(),Y={setup(){const a=F(),r=I(),y=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/,d=q(AUTH_DATA),n=A(()=>O.ADMIN[d.value]),h=function(){return y.test(n.value.email)||"Invalid email"},s=function(){if(n.value.name!=""&&n.value.password!=""&&y.test(n.value.email)){console.warn(n.value);let w=_.omit(n.value,["area"]);Z("master","update",w),p("Your profile have updated succesfully"),r.push({name:"ADMINPROFILE"})}},p=function(w){a.notify({type:"positive",message:w,icon:"cloud_done",position:"top-right",timeout:2e3})};return{customer:n,isValidEmail:h,updateMyself:s,positivemsg:p}}},x={class:"q-pa-md q-gutter-sm"},H={class:"text-weight-bold"};function J(a,r,y,d,n,h){return m(),c(L,{padding:"",class:"flex column q-gutter-y-sm"},{default:e(()=>[t(S,{outlined:"",label:"Name and Surname",modelValue:d.customer.name,"onUpdate:modelValue":r[0]||(r[0]=s=>d.customer.name=s),type:"text","lazy-rules":"",rules:[s=>s&&s.length>0||"Please type Name"]},{append:e(()=>[t(Q,{name:"account_box"})]),_:1},8,["modelValue","rules"]),t(S,{outlined:"",modelValue:d.customer.password,"onUpdate:modelValue":r[1]||(r[1]=s=>d.customer.password=s),type:"password",label:"Password","lazy-rules":"",rules:[s=>s&&s.length>0||"Please type Password",s=>s.length>5||"Minimum length is 6"]},{append:e(()=>[t(Q,{name:"visibility_off"})]),_:1},8,["modelValue","rules"]),t(S,{outlined:"",modelValue:d.customer.email,"onUpdate:modelValue":r[2]||(r[2]=s=>d.customer.email=s),type:"email",label:"Email","lazy-rules":"",rules:[s=>!!s||"Please type Email",d.isValidEmail]},{append:e(()=>[t(Q,{name:"email"})]),_:1},8,["modelValue","rules"]),t(v,{color:"positive",label:"Submit",onClick:d.updateMyself,icon:"camera_enhance"},null,8,["onClick"]),V("div",x,[t(U,{modelValue:a.card,"onUpdate:modelValue":r[3]||(r[3]=s=>a.card=s)},{default:e(()=>[t(P,{class:"my-card",style:{width:"400px"}},{default:e(()=>[t(E,{bordered:"",class:"rounded-borders",style:{"min-width":"350px"}},{default:e(()=>[t(g,null,{default:e(()=>[t(i,{avatar:""},{default:e(()=>[t(C,{icon:"fact_check",color:"brand","text-color":"white"})]),_:1}),t(i,{top:"",class:"col-7 gt-sm"},{default:e(()=>[t(u,{lines:"1"},{default:e(()=>[l(o(a.specificDate),1)]),_:1}),t(u,null,{default:e(()=>[l(o(a.specificCustomer),1)]),_:1}),t(u,{caption:""},{default:e(()=>[V("span",H,o(a.specificId),1)]),_:1})]),_:1}),t(i,{side:""},{default:e(()=>[a.specificStatus==="New"?(m(),c(f,{key:0,color:"blue"},{default:e(()=>[l(o(a.specificStatus),1)]),_:1})):a.specificStatus==="Viewed"?(m(),c(f,{key:1,color:"secondary"},{default:e(()=>[l(o(a.specificStatus),1)]),_:1})):a.specificStatus==="Accepted"?(m(),c(f,{key:2,color:"accent"},{default:e(()=>[l(o(a.specificStatus),1)]),_:1})):a.specificStatus==="Packed"?(m(),c(f,{key:3,color:"info"},{default:e(()=>[l(o(a.specificStatus),1)]),_:1})):a.model==="Dispatched"?(m(),c(f,{key:4,color:"blue-grey"},{default:e(()=>[l(o(a.specificStatus),1)]),_:1})):a.specificStatus==="Delivered"?(m(),c(f,{key:5,color:"positive"},{default:e(()=>[l(o(a.specificStatus),1)]),_:1})):a.specificStatus==="Cancelled"?(m(),c(f,{key:6,color:"negative"},{default:e(()=>[l(o(a.specificStatus),1)]),_:1})):(m(),c(f,{key:7,color:"primary"},{default:e(()=>[l("Unknown")]),_:1}))]),_:1})]),_:1}),t(g,null,{default:e(()=>[t(i,{top:"",class:"col-1 gt-sm"},{default:e(()=>[t(u,{class:"q-mt-sm text-weight-medium"},{default:e(()=>[l("#")]),_:1})]),_:1}),t(i,{top:"",class:"col-7 gt-sm"},{default:e(()=>[t(u,{class:"q-mt-sm text-weight-medium"},{default:e(()=>[l("Item")]),_:1})]),_:1}),t(i,{top:""},{default:e(()=>[t(u,{class:"q-mt-sm text-weight-medium text-center"},{default:e(()=>[l("Quantity")]),_:1})]),_:1})]),_:1}),t(k),(m(!0),D(z,null,N(a.specificItems,(s,p)=>(m(),c(g,null,{default:e(()=>[t(i,{top:"",class:"col-1 gt-sm"},{default:e(()=>[t(u,{class:"q-mt-sm"},{default:e(()=>[l(o(p+1),1)]),_:2},1024)]),_:2},1024),t(i,{top:"",class:"col-7 gt-sm"},{default:e(()=>[t(u,{class:"q-mt-sm"},{default:e(()=>[l(o(s.item.name),1)]),_:2},1024)]),_:2},1024),t(i,{top:""},{default:e(()=>[t(u,{class:"q-mt-sm flex-center text-center"},{default:e(()=>[l(o(s.quantity),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256)),t(k),t(g,null,{default:e(()=>[t(i,{top:"",class:"col-1 gt-sm"},{default:e(()=>[t(u,{class:"q-mt-sm text-weight-medium"})]),_:1}),t(i,{top:"",class:"col-7 gt-sm"},{default:e(()=>[t(u,{class:"q-mt-sm text-weight-medium"},{default:e(()=>[l("Total Items")]),_:1})]),_:1}),t(i,{top:""},{default:e(()=>[t(u,{class:"q-mt-sm text-weight-medium text-center"},{default:e(()=>[l(o(a.specificItems.length),1)]),_:1})]),_:1})]),_:1})]),_:1}),t(B,{align:"right"},{default:e(()=>[M(t(v,{flat:"",label:"Close",color:"negative"},null,512),[[T]])]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1})}var oe=b(Y,[["render",J]]);export{oe as default};