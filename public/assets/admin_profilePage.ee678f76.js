import{aj as b,K as I,r as q,t as A,N as c,R as e,L as m,P as t,S as w,al as Q,Y as v,Z as V,ai as P,as as C,T as l,U as o,Q as k,M as D,$ as N,V as z,am as B,B as M,at as U}from"./index.101a966c.js";import{a as g,Q as i}from"./QItem.dce1150f.js";import{Q as u}from"./QItemLabel.13a2a6fe.js";import{Q as f}from"./QBadge.edff4c29.js";import{Q as E}from"./QList.f8486a5f.js";import{Q as L}from"./QPage.e63dd143.js";import{C as T}from"./ClosePopup.319aeed0.js";import{post as Z}from"./axios.74e28b8f.js";import{u as R}from"./master.027e8a10.js";import{u as F}from"./use-quasar.9bf5be9e.js";import"./lodash.1e9e3f94.js";const Y=R(),x={setup(){const a=F(),d=I(),y=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/,r=q(AUTH_DATA),n=A(()=>Y.ADMIN[r.value]),S=function(){return y.test(n.value.email)||"Invalid email"},s=function(){if(n.value.name!=""&&n.value.password!=""&&y.test(n.value.email)){console.warn(n.value);let h=_.omit(n.value,["area"]);Z("master","update",h),p("Your profile have updated succesfully"),d.push({name:"ADMINPROFILE"})}},p=function(h){a.notify({type:"positive",message:h,icon:"cloud_done",position:"top-right",timeout:2e3})};return{customer:n,isValidEmail:S,updateMyself:s,positivemsg:p}}},H={class:"q-pa-md q-gutter-sm"},K={class:"text-weight-bold"},O=l("Unknown"),j=l("#"),G=l("Item"),J=l("Quantity"),W=l("Total Items");function X(a,d,y,r,n,S){return m(),c(L,{padding:"",class:"flex column q-gutter-y-sm"},{default:e(()=>[t(Q,{outlined:"",label:"Name and Surname",modelValue:r.customer.name,"onUpdate:modelValue":d[0]||(d[0]=s=>r.customer.name=s),type:"text","lazy-rules":"",rules:[s=>s&&s.length>0||"Please type Name"]},{append:e(()=>[t(w,{name:"account_box"})]),_:1},8,["modelValue","rules"]),t(Q,{outlined:"",modelValue:r.customer.password,"onUpdate:modelValue":d[1]||(d[1]=s=>r.customer.password=s),type:"password",label:"Password","lazy-rules":"",rules:[s=>s&&s.length>0||"Please type Password",s=>s.length>5||"Minimum length is 6"]},{append:e(()=>[t(w,{name:"visibility_off"})]),_:1},8,["modelValue","rules"]),t(Q,{outlined:"",modelValue:r.customer.email,"onUpdate:modelValue":d[2]||(d[2]=s=>r.customer.email=s),type:"email",label:"Email","lazy-rules":"",rules:[s=>!!s||"Please type Email",r.isValidEmail]},{append:e(()=>[t(w,{name:"email"})]),_:1},8,["modelValue","rules"]),t(v,{color:"positive",label:"Submit",onClick:r.updateMyself,icon:"camera_enhance"},null,8,["onClick"]),V("div",H,[t(U,{modelValue:a.card,"onUpdate:modelValue":d[3]||(d[3]=s=>a.card=s)},{default:e(()=>[t(P,{class:"my-card",style:{width:"400px"}},{default:e(()=>[t(E,{bordered:"",class:"rounded-borders",style:{"min-width":"350px"}},{default:e(()=>[t(g,null,{default:e(()=>[t(i,{avatar:""},{default:e(()=>[t(C,{icon:"fact_check",color:"brand","text-color":"white"})]),_:1}),t(i,{top:"",class:"col-7 gt-sm"},{default:e(()=>[t(u,{lines:"1"},{default:e(()=>[l(o(a.specificDate),1)]),_:1}),t(u,null,{default:e(()=>[l(o(a.specificCustomer),1)]),_:1}),t(u,{caption:""},{default:e(()=>[V("span",K,o(a.specificId),1)]),_:1})]),_:1}),t(i,{side:""},{default:e(()=>[a.specificStatus==="New"?(m(),c(f,{key:0,color:"blue"},{default:e(()=>[l(o(a.specificStatus),1)]),_:1})):a.specificStatus==="Viewed"?(m(),c(f,{key:1,color:"secondary"},{default:e(()=>[l(o(a.specificStatus),1)]),_:1})):a.specificStatus==="Accepted"?(m(),c(f,{key:2,color:"accent"},{default:e(()=>[l(o(a.specificStatus),1)]),_:1})):a.specificStatus==="Packed"?(m(),c(f,{key:3,color:"info"},{default:e(()=>[l(o(a.specificStatus),1)]),_:1})):a.model==="Dispatched"?(m(),c(f,{key:4,color:"blue-grey"},{default:e(()=>[l(o(a.specificStatus),1)]),_:1})):a.specificStatus==="Delivered"?(m(),c(f,{key:5,color:"positive"},{default:e(()=>[l(o(a.specificStatus),1)]),_:1})):a.specificStatus==="Cancelled"?(m(),c(f,{key:6,color:"negative"},{default:e(()=>[l(o(a.specificStatus),1)]),_:1})):(m(),c(f,{key:7,color:"primary"},{default:e(()=>[O]),_:1}))]),_:1})]),_:1}),t(g,null,{default:e(()=>[t(i,{top:"",class:"col-1 gt-sm"},{default:e(()=>[t(u,{class:"q-mt-sm text-weight-medium"},{default:e(()=>[j]),_:1})]),_:1}),t(i,{top:"",class:"col-7 gt-sm"},{default:e(()=>[t(u,{class:"q-mt-sm text-weight-medium"},{default:e(()=>[G]),_:1})]),_:1}),t(i,{top:""},{default:e(()=>[t(u,{class:"q-mt-sm text-weight-medium text-center"},{default:e(()=>[J]),_:1})]),_:1})]),_:1}),t(k),(m(!0),D(z,null,N(a.specificItems,(s,p)=>(m(),c(g,null,{default:e(()=>[t(i,{top:"",class:"col-1 gt-sm"},{default:e(()=>[t(u,{class:"q-mt-sm"},{default:e(()=>[l(o(p+1),1)]),_:2},1024)]),_:2},1024),t(i,{top:"",class:"col-7 gt-sm"},{default:e(()=>[t(u,{class:"q-mt-sm"},{default:e(()=>[l(o(s.item.name),1)]),_:2},1024)]),_:2},1024),t(i,{top:""},{default:e(()=>[t(u,{class:"q-mt-sm flex-center text-center"},{default:e(()=>[l(o(s.quantity),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256)),t(k),t(g,null,{default:e(()=>[t(i,{top:"",class:"col-1 gt-sm"},{default:e(()=>[t(u,{class:"q-mt-sm text-weight-medium"})]),_:1}),t(i,{top:"",class:"col-7 gt-sm"},{default:e(()=>[t(u,{class:"q-mt-sm text-weight-medium"},{default:e(()=>[W]),_:1})]),_:1}),t(i,{top:""},{default:e(()=>[t(u,{class:"q-mt-sm text-weight-medium text-center"},{default:e(()=>[l(o(a.specificItems.length),1)]),_:1})]),_:1})]),_:1})]),_:1}),t(B,{align:"right"},{default:e(()=>[M(t(v,{flat:"",label:"Close",color:"negative"},null,512),[[T]])]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1})}var re=b(x,[["render",X]]);export{re as default};
