import{a9 as p,M as f,P as t,K as r,Z as n,L as g,N as x,O as e,ah as b,ag as i,S as _,ak as d,al as w,X as y,am as Q}from"./index.d755ac14.js";import{Q as V}from"./QForm.312db9bb.js";import{Q as h}from"./QPage.0b6c8760.js";const C={key:0,class:"q-mb-sm text-red text-bold"},P={__name:"LoginPage",setup(k){const a=p({email:"",password:""}),m=[location.protocol,location.host].join("//"),c=location.search.includes("success");function u(l){a.email!==""&&a.password!==""&&l.target.submit()}return(l,o)=>(r(),f(h,{class:"flex flex-center column"},{default:t(()=>[n(c)?(r(),g("div",C,"Login credential entered are not matching!!")):x("",!0),e(V,{method:"post",action:n(m),onSubmit:Q(u,["prevent"])},{default:t(()=>[e(b,{style:{width:"330px"}},{default:t(()=>[e(i,{class:"bg-primary q-py-md text-white text-bold text-uppercase"},{default:t(()=>[_("Credentials")]),_:1}),e(i,{class:"q-gutter-y-sm"},{default:t(()=>[e(d,{name:"email",modelValue:a.email,"onUpdate:modelValue":o[0]||(o[0]=s=>a.email=s),outlined:"",label:"Email"},null,8,["modelValue"]),e(d,{name:"password",modelValue:a.password,"onUpdate:modelValue":o[1]||(o[1]=s=>a.password=s),outlined:"",label:"Password",type:"password"},null,8,["modelValue"])]),_:1}),e(w,{class:"bg-grey-3",align:"right"},{default:t(()=>[e(y,{label:"Login",color:"primary",padding:"sm xl",type:"submit"})]),_:1})]),_:1})]),_:1},8,["action","onSubmit"])]),_:1}))}};export{P as default};
