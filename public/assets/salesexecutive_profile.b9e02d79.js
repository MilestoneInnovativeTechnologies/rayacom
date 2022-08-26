import{B as g,r as y,k as h,E as x,H as l,aa as v,C as w,G as o,O as s,Q as n,N as Q,M as b}from"./index.8d7e61fd.js";import{Q as r}from"./QInput.0fdaf5de.js";import{Q as S}from"./QPage.12dd21c8.js";import{Q as A}from"./QForm.f979b3d8.js";import{u as E}from"./use-quasar.7d209305.js";import{post as P}from"./axios.980293f3.js";import{u as U}from"./master.58f94054.js";import"./use-dark.678b0dd2.js";import"./format.c860d4da.js";import"./lodash.1b69ab06.js";const C={class:"row justify-md-center"},D={__name:"salesexecutive_profile",setup(B){const c=E();g();const f=U(),V=y(AUTH_DATA),t=h(()=>f.SALES_EXECUTIVE[V.value]),u=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/,m=function(){return u.test(t.value.email)||"Invalid email"},p=function(){if(t.value.name!=""&&t.value.password!=""&&t.value.phone!=""&&u.test(t.value.email)){console.warn(t.value);let i=_.omit(t.value,["areas"]);P("master","update",i)}},d=function(i){return c.notify({color:"green",textColor:"white",icon:"cloud_done",message:"Your Profile Successfully Updated",position:"top-right"}),{onSubmit:d,isValidEmail:m,myProfile:p,salesexecutive:t}};return(i,a)=>(w(),x(A,{onSubmit:v(d,["prevent"]),class:""},{default:l(()=>[o(S,{padding:"",class:"flex flex-center column q-gutter-y-sm"},{default:l(()=>[o(r,{outlined:"",modelValue:s(t).name,"onUpdate:modelValue":a[0]||(a[0]=e=>s(t).name=e),type:"text",hint:"Full Name",rules:[e=>e&&e.length>0||"Please type your name"]},{append:l(()=>[o(n,{name:"account_box"})]),_:1},8,["modelValue","rules"]),o(r,{outlined:"",modelValue:s(t).password,"onUpdate:modelValue":a[1]||(a[1]=e=>s(t).password=e),hint:"Password",type:"password",rules:[e=>e&&e.length>0||"must  fill this field",e=>e.length>5||"Minimum length is 6"]},{append:l(()=>[o(n,{name:"visibility_off"})]),_:1},8,["modelValue","rules"]),o(r,{outlined:"",modelValue:s(t).email,"onUpdate:modelValue":a[2]||(a[2]=e=>s(t).email=e),hint:"E-Mail",type:"text",rules:[e=>!!e||"Email is missing",m]},{append:l(()=>[o(n,{name:"mail"})]),_:1},8,["modelValue","rules"]),Q("div",C,[o(r,{outlined:"",modelValue:s(t).phone,"onUpdate:modelValue":a[3]||(a[3]=e=>s(t).phone=e),hint:"Contact Number",type:"text",rules:[e=>e&&e.length>0||"please enter your PH no"]},{append:l(()=>[o(n,{name:"phone"})]),_:1},8,["modelValue","rules"])]),o(b,{type:"submit",label:"Submit",color:"green",icon:"camera_enhance",onClick:p})]),_:1})]),_:1},8,["onSubmit"]))}};export{D as default};
