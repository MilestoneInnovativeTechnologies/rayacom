import{aj as c,K as d,r as p,aa as f,bc as v,N as _,R as g,L as y,P as u,al as h,Y as A}from"./index.04c464b8.js";import{Q as x}from"./QPage.b0d4ff95.js";import{post as I}from"./axios.58db161c.js";import{u as Q}from"./master.f1b7f5d6.js";import{u as b}from"./use-quasar.1595dcc1.js";import"./lodash.1e9e3f94.js";const k=Q(),w={props:["id"],setup(n){const o=b(),l=d(),a=p(n.id),e=f({id:"",name:""});v(()=>{if(a.value==0)e.id=e.name="";else{let r=k.AREA[a.value];e.id=a.value,e.name=r.name}});let s,t;const m=function(){e.name!=""&&(console.warn(e),a.value==0?(t="store",s="Your have added a new item successfully"):(t="update",s="Your Item have updated successfully"),I("area",t,e),i(s),l.push({name:"ADMINAREA"}))},i=function(r){o.notify({type:"positive",message:r,icon:"cloud_done",position:"top-right",timeout:2e3})};return{item:e,save:m,positivemsg:i}}};function E(n,o,l,a,e,s){return y(),_(x,{padding:"",class:"flex column q-gutter-y-sm"},{default:g(()=>[u(h,{outlined:"",label:"Area",modelValue:a.item.name,"onUpdate:modelValue":o[0]||(o[0]=t=>a.item.name=t),type:"text","lazy-rules":"",rules:[t=>t&&t.length>0||"Please type Area"]},null,8,["modelValue","rules"]),u(A,{color:"positive",label:"Submit",onClick:a.save,icon:"camera_enhance"},null,8,["onClick"])]),_:1})}var N=c(w,[["render",E]]);export{N as default};