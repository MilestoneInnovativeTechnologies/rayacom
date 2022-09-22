import{aj as w,K as j,r as f,aa as h,bc as A,N as P,R as n,L as z,P as t,S as r,al as d,Y as E,Z as S}from"./index.04c464b8.js";import{Q as x}from"./QSelect.4b00999f.js";import{Q as C}from"./QPage.b0d4ff95.js";import{post as V}from"./axios.58db161c.js";import{u as Q}from"./master.f1b7f5d6.js";import{u as U}from"./use-quasar.1595dcc1.js";import"./QItem.3f5f7acb.js";import"./QItemLabel.9f7bf82c.js";import"./QMenu.08106161.js";import"./position-engine.d0298df9.js";import"./selection.fd593506.js";import"./lodash.1e9e3f94.js";const y=Q(),I={props:["id"],setup(p){const s=U(),c=j(),o=f(p.id),m=f(y.AREA),i=[],e=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;for(let l in m.value)i.push({label:m.value[l].name,value:m.value[l].id});const a=h({id:"",name:"",password:"",email:"",phone:"",area:"",address:""});A(()=>{if(o.value==0)a.id=a.name=a.password=a.email=a.phone=a.area=a.address="";else{let l=y.CUSTOMER[o.value];a.id=o.value,a.name=l.name,a.password=l.password,a.email=l.email,a.phone=l.phone,a.area=l.area.value,a.address=l.address}});const v=function(){return e.test(a.email)||"Invalid email"};let u;const g=function(){if(a.name!=""&&a.password!=""&&a.phone!=""&&e.test(a.email)&&a.area.value!=""&&a.address!=""){console.warn(a);let l=_.omit(a,["area"]);l.area=a.area.value,o.value>0?(V("master","update",l),u="Your Item have updated successfully"):(V("customer","store",l),u="Your have added a new item successfully"),b(u),c.push({name:"ADMINCUSTOMERS"})}},b=function(l){s.notify({type:"positive",message:l,icon:"cloud_done",position:"top-right",timeout:2e3})};return{obj:a,save:g,positivemsg:b,isValidEmail:v,options:i}}},N=S("br",null,null,-1);function R(p,s,c,o,m,i){return z(),P(C,{padding:"",class:"flex column q-gutter-y-sm"},{default:n(()=>[t(d,{outlined:"",label:"Name and Surname",modelValue:o.obj.name,"onUpdate:modelValue":s[0]||(s[0]=e=>o.obj.name=e),type:"text","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type Name"]},{append:n(()=>[t(r,{name:"account_box"})]),_:1},8,["modelValue","rules"]),t(d,{outlined:"",modelValue:o.obj.email,"onUpdate:modelValue":s[1]||(s[1]=e=>o.obj.email=e),type:"email",label:"Email","lazy-rules":"",rules:[e=>!!e||"Please type Email",o.isValidEmail]},{append:n(()=>[t(r,{name:"email"})]),_:1},8,["modelValue","rules"]),t(d,{outlined:"",modelValue:o.obj.password,"onUpdate:modelValue":s[2]||(s[2]=e=>o.obj.password=e),type:"password",label:"Password","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type Password",e=>e.length>5||"Minimum length is 6"]},{append:n(()=>[t(r,{name:"visibility_off"})]),_:1},8,["modelValue","rules"]),t(d,{outlined:"",modelValue:o.obj.phone,"onUpdate:modelValue":s[3]||(s[3]=e=>o.obj.phone=e),type:"tel",label:"Contact number",mask:"## ##########","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type Contact number"]},{append:n(()=>[t(r,{name:"settings_phone"})]),_:1},8,["modelValue","rules"]),t(x,{outlined:"",modelValue:o.obj.area,"onUpdate:modelValue":s[4]||(s[4]=e=>o.obj.area=e),options:o.options,label:"Area"},null,8,["modelValue","options"]),N,t(d,{outlined:"",modelValue:o.obj.address,"onUpdate:modelValue":s[5]||(s[5]=e=>o.obj.address=e),type:"text",label:"Address",autogrow:"","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type Address"]},{append:n(()=>[t(r,{name:"home"})]),_:1},8,["modelValue","rules"]),t(E,{color:"positive",label:"Submit",onClick:o.save,icon:"camera_enhance"},null,8,["onClick"])]),_:1})}var G=w(I,[["render",R]]);export{G as default};
