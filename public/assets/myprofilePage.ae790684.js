import{_ as f,r as c,f as y,K as V,M as g,P as s,J as v,O as o,Q as r,W as P}from"./index.d6457b73.js";import{Q as n}from"./QInput.9a83388a.js";import{Q as b}from"./QPage.7224c028.js";import{post as w}from"./axios.adcd4f46.js";import{u as x}from"./master.88af1675.js";import{u as z}from"./use-quasar.9b155934.js";import"./use-dark.ad354b4e.js";import"./format.c860d4da.js";import"./lodash.e6c87188.js";const Q=x(),h={setup(){const i=z(),l=v(),u=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;c(null);const a=c(10001),t=y(()=>Q.CUSTOMER[a.value]),d=function(){return u.test(t.value.email)||"Invalid email"},e=function(){if(t.value.name!=""&&t.value.password!=""&&t.value.phone!=""&&u.test(t.value.email)&&t.value.address!=""){console.warn(t.value);let m=_.omit(t.value,["area"]);w("master","update",m),p("Your profile have updated succesfully"),l.push({name:"PROFILE"})}},p=function(m){i.notify({type:"positive",message:m,icon:"cloud_done",position:"top-right",timeout:2e3})};return{customer:t,isValidEmail:d,updateMyself:e,positivemsg:p}}};function A(i,l,u,a,t,d){return V(),g(b,{padding:"",class:"flex flex-center column q-gutter-y-sm"},{default:s(()=>[o(n,{outlined:"",label:"Name and Surname",modelValue:a.customer.name,"onUpdate:modelValue":l[0]||(l[0]=e=>a.customer.name=e),type:"text","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type Name"]},{append:s(()=>[o(r,{name:"account_box"})]),_:1},8,["modelValue","rules"]),o(n,{outlined:"",modelValue:a.customer.password,"onUpdate:modelValue":l[1]||(l[1]=e=>a.customer.password=e),type:"password",label:"Password","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type Password",e=>e.length>5||"Minimum length is 6"]},{append:s(()=>[o(r,{name:"visibility_off"})]),_:1},8,["modelValue","rules"]),o(n,{outlined:"",modelValue:a.customer.email,"onUpdate:modelValue":l[2]||(l[2]=e=>a.customer.email=e),type:"email",label:"Email","lazy-rules":"",rules:[e=>!!e||"Please type Email",a.isValidEmail]},{append:s(()=>[o(r,{name:"email"})]),_:1},8,["modelValue","rules"]),o(n,{outlined:"",modelValue:a.customer.phone,"onUpdate:modelValue":l[3]||(l[3]=e=>a.customer.phone=e),type:"tel",label:"Contact number",mask:"(###) ### - ######","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type Contact number"]},{append:s(()=>[o(r,{name:"settings_phone"})]),_:1},8,["modelValue","rules"]),o(n,{outlined:"",modelValue:a.customer.address,"onUpdate:modelValue":l[4]||(l[4]=e=>a.customer.address=e),type:"text",label:"Address",autogrow:"","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type Address"]},{append:s(()=>[o(r,{name:"home"})]),_:1},8,["modelValue","rules"]),o(P,{color:"positive",label:"Submit",onClick:a.updateMyself,icon:"camera_enhance"},null,8,["onClick"])]),_:1})}var N=f(h,[["render",A]]);export{N as default};