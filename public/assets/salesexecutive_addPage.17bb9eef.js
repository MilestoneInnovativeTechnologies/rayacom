import{a8 as E,B as g,r as p,Y as w,aI as A,E as j,H as s,C as h,G as t,Q as n,M as P}from"./index.8d7e61fd.js";import{Q as i}from"./QInput.0fdaf5de.js";import{Q}from"./QSelect.a4017f62.js";import{Q as S}from"./QPage.12dd21c8.js";import{post as V}from"./axios.980293f3.js";import{u as C}from"./master.58f94054.js";import{u as x}from"./use-quasar.7d209305.js";import"./use-dark.678b0dd2.js";import"./format.c860d4da.js";import"./QItem.d2090226.js";import"./QItemLabel.4b045cb7.js";import"./QMenu.f3a6a76b.js";import"./position-engine.fd7b7ee1.js";import"./selection.4ec6e38e.js";import"./use-portal.0314865a.js";import"./scroll.25b4c155.js";import"./use-model-toggle.3fd02ce3.js";import"./QDialog.500a4fb3.js";import"./use-prevent-scroll.1269f3f5.js";import"./lodash.1b69ab06.js";const u=C(),z={props:["id"],setup(d){const o=x(),c=g(),a=p(d.id);p(u.AREA);const r=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/,f=p(Object.values(u.AREA)),e=w({id:"",name:"",password:"",email:"",phone:"",areas:""});A(()=>{if(a.value==0)e.id=e.name=e.password=e.email=e.phone=e.areas="";else{let l=u.SALES_EXECUTIVE[a.value];e.id=a.value,e.name=l.name,e.password=l.password,e.email=l.email,e.phone=l.phone,e.areas=l.areas.value}}),console.log(e);const y=function(){return r.test(e.email)||"Invalid email"};let m;const v=function(){if(e.name!=""&&e.password!=""&&e.phone!=""&&r.test(e.email)&&e.areas.value!=""){console.warn(e);let l=_.omit(e,["areas"]);l.areas=e.areas.value,a.value>0?(V("master","update",l),m="updated successfully"):(V("add","store",l),m="Added new SE successfully"),b(m),c.push({name:"ADMINSALESXECUTIVEPAGE"})}},b=function(l){o.notify({type:"positive",message:l,icon:"cloud_done",position:"top-right",timeout:2e3})};return{obj:e,save:v,positivemsg:b,isValidEmail:y,options:f}}};function I(d,o,c,a,r,f){return h(),j(S,{padding:"",class:"flex column q-gutter-y-sm"},{default:s(()=>[t(i,{outlined:"",label:"Name and Surname",modelValue:a.obj.name,"onUpdate:modelValue":o[0]||(o[0]=e=>a.obj.name=e),type:"text","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type Name"]},{append:s(()=>[t(n,{name:"account_box"})]),_:1},8,["modelValue","rules"]),t(i,{outlined:"",modelValue:a.obj.password,"onUpdate:modelValue":o[1]||(o[1]=e=>a.obj.password=e),type:"password",label:"Password","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type Password",e=>e.length>5||"Minimum length is 6"]},{append:s(()=>[t(n,{name:"visibility_off"})]),_:1},8,["modelValue","rules"]),t(i,{outlined:"",modelValue:a.obj.email,"onUpdate:modelValue":o[2]||(o[2]=e=>a.obj.email=e),type:"email",label:"Email","lazy-rules":"",rules:[e=>!!e||"Please type Email",a.isValidEmail]},{append:s(()=>[t(n,{name:"email"})]),_:1},8,["modelValue","rules"]),t(i,{outlined:"",modelValue:a.obj.phone,"onUpdate:modelValue":o[3]||(o[3]=e=>a.obj.phone=e),type:"tel",label:"Contact number",mask:"(###) ### - ######","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type Contact number"]},{append:s(()=>[t(n,{name:"settings_phone"})]),_:1},8,["modelValue","rules"]),t(Q,{modelValue:a.obj.areas,"onUpdate:modelValue":o[4]||(o[4]=e=>a.obj.areas=e),label:"Areas",multiple:"","use-chips":"","stack-label":"",outlined:"",options:a.options,"option-label":"name","option-value":"id","emit-value":"","map-options":""},null,8,["modelValue","options"]),t(P,{color:"positive",label:"Submit",onClick:a.save,icon:"camera_enhance"},null,8,["onClick"])]),_:1})}var $=E(z,[["render",I]]);export{$ as default};
