import{K as g,r as b,t as y,N as x,R as s,an as v,L as S,P as t,al as n,_ as l,S as u,Y as w}from"./index.101a966c.js";import{Q as h}from"./QPage.e63dd143.js";import{Q as A}from"./QForm.3fe424d1.js";import{u as P}from"./use-quasar.9bf5be9e.js";import{post as Q}from"./axios.74e28b8f.js";import{u as E}from"./master.027e8a10.js";import"./lodash.1e9e3f94.js";const B={__name:"salesexecutive_profile",setup(U){const f=P();g();const c=E(),V=b(AUTH_DATA),a=y(()=>c.SALES_EXECUTIVE[V.value]),m=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/,i=function(){return m.test(a.value.email)||"Invalid email"},p=function(){if(a.value.name!=""&&a.value.password!=""&&a.value.phone!=""&&m.test(a.value.email)){console.warn(a.value);let r=_.omit(a.value,["areas"]);Q("master","update",r)}},d=function(r){return f.notify({color:"green",textColor:"white",icon:"cloud_done",message:"Your Profile Successfully Updated",position:"top-right"}),{onSubmit:d,isValidEmail:i,myProfile:p,salesexecutive:a}};return(r,o)=>(S(),x(A,{onSubmit:v(d,["prevent"]),class:""},{default:s(()=>[t(h,{padding:"",class:"flex column q-gutter-y-sm"},{default:s(()=>[t(n,{outlined:"",modelValue:l(a).name,"onUpdate:modelValue":o[0]||(o[0]=e=>l(a).name=e),type:"text",label:"Full Name",rules:[e=>e&&e.length>0||"Please type your name"]},{append:s(()=>[t(u,{name:"account_box"})]),_:1},8,["modelValue","rules"]),t(n,{outlined:"",modelValue:l(a).password,"onUpdate:modelValue":o[1]||(o[1]=e=>l(a).password=e),label:"Password",type:"password",rules:[e=>e&&e.length>0||"must  fill this field",e=>e.length>5||"Minimum length is 6"]},{append:s(()=>[t(u,{name:"visibility_off"})]),_:1},8,["modelValue","rules"]),t(n,{outlined:"",modelValue:l(a).email,"onUpdate:modelValue":o[2]||(o[2]=e=>l(a).email=e),label:"E-Mail",type:"text",rules:[e=>!!e||"Email is missing",i]},{append:s(()=>[t(u,{name:"mail"})]),_:1},8,["modelValue","rules"]),t(n,{outlined:"",modelValue:l(a).phone,"onUpdate:modelValue":o[3]||(o[3]=e=>l(a).phone=e),label:"Contact Number",mask:"## ##########",type:"text",rules:[e=>e&&e.length>0||"please enter your PH no"]},{append:s(()=>[t(u,{name:"phone"})]),_:1},8,["modelValue","rules"]),t(w,{type:"submit",label:"Submit",color:"green",icon:"camera_enhance",onClick:p})]),_:1})]),_:1},8,["onSubmit"]))}};export{B as default};
