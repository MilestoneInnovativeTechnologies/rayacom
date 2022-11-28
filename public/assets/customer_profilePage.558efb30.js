import{a8 as f,B as y,r as c,k as V,E as g,H as s,C as v,G as o,Q as r,M as b}from"./index.519e6511.js";import{Q as n}from"./QInput.3be0fd5f.js";import{Q as P}from"./QPage.68727071.js";import{post as w}from"./axios.98808b05.js";import{u as z}from"./master.8d9550d1.js";import{u as A}from"./use-quasar.c19bc2e1.js";import"./use-dark.e60f4681.js";import"./format.c860d4da.js";import"./lodash.1b69ab06.js";const x=z(),Q={setup(){const i=A(),l=y(),u=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;c(null);const a=c(AUTH_DATA),t=V(()=>x.CUSTOMER[a.value]),d=function(){return u.test(t.value.email)||"Invalid email"},e=function(){if(t.value.name!=""&&t.value.password!=""&&t.value.phone!=""&&u.test(t.value.email)&&t.value.address!=""){console.warn(t.value);let m=_.omit(t.value,["area"]);w("master","update",m),p("Your profile have updated succesfully"),l.push({name:"PROFILE"})}},p=function(m){i.notify({type:"positive",message:m,icon:"cloud_done",position:"top-right",timeout:2e3})};return{customer:t,isValidEmail:d,updateMyself:e,positivemsg:p}}};function h(i,l,u,a,t,d){return v(),g(P,{padding:"",class:"flex column q-gutter-y-sm"},{default:s(()=>[o(n,{outlined:"",label:"Name and Surname",modelValue:a.customer.name,"onUpdate:modelValue":l[0]||(l[0]=e=>a.customer.name=e),type:"text","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type Name"]},{append:s(()=>[o(r,{name:"account_box"})]),_:1},8,["modelValue","rules"]),o(n,{outlined:"",modelValue:a.customer.password,"onUpdate:modelValue":l[1]||(l[1]=e=>a.customer.password=e),type:"password",label:"Password","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type Password",e=>e.length>5||"Minimum length is 6"]},{append:s(()=>[o(r,{name:"visibility_off"})]),_:1},8,["modelValue","rules"]),o(n,{outlined:"",modelValue:a.customer.email,"onUpdate:modelValue":l[2]||(l[2]=e=>a.customer.email=e),type:"email",label:"Email","lazy-rules":"",rules:[e=>!!e||"Please type Email",a.isValidEmail]},{append:s(()=>[o(r,{name:"email"})]),_:1},8,["modelValue","rules"]),o(n,{outlined:"",modelValue:a.customer.phone,"onUpdate:modelValue":l[3]||(l[3]=e=>a.customer.phone=e),type:"tel",label:"Contact number",mask:"## ##########","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type Contact number"]},{append:s(()=>[o(r,{name:"settings_phone"})]),_:1},8,["modelValue","rules"]),o(n,{outlined:"",modelValue:a.customer.address,"onUpdate:modelValue":l[4]||(l[4]=e=>a.customer.address=e),type:"text",label:"Address",autogrow:"","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type Address"]},{append:s(()=>[o(r,{name:"home"})]),_:1},8,["modelValue","rules"]),o(b,{color:"positive",label:"Submit",onClick:a.updateMyself,icon:"camera_enhance"},null,8,["onClick"])]),_:1})}var N=f(Q,[["render",h]]);export{N as default};
