import{J as O,r as m,a9 as P,M as u,P as S,K as s,Y as Q,O as a,aC as p,N as y,R,ak as I,X as k}from"./index.d755ac14.js";import{Q as v}from"./QSelect.f8cd7eb0.js";import{Q as w}from"./QPage.0b6c8760.js";import{post as T}from"./axios.f3978ac2.js";import{u as B}from"./use-quasar.87192af1.js";import{u as M}from"./master.05480c04.js";import{u as N}from"./order.beb5b52a.js";import"./QItem.66a42e1c.js";import"./QItemLabel.780cbcc6.js";import"./QMenu.9f2c7ca2.js";import"./position-engine.185136e8.js";import"./selection.d9f7dc9e.js";import"./format.c860d4da.js";import"./lodash.1e9e3f94.js";const X={class:"q-pa-md"},Z={__name:"review_addPage",setup(q){const b=B(),U=O(),V=M(),g=N(),n=m(V.ITEM),r=m(V.SALES_EXECUTIVE),d=m(g.all),c=[],E=[],f=[];for(let o in n.value)c.push({label:n.value[o].name,value:n.value[o].id});for(let o in r.value)E.push({label:r.value[o].name,value:r.value[o].id});let i;for(let o in d.value)i=d.value[o].id,f.push({label:i+" - "+d.value[o].date,value:i});const e=P({id:"",type:"Product",typeid:"",comment:""});function C(){if(e.typeid!=""&&e.description!=""){let o=_.omit(e,["area"]);o.typeid=e.typeid.value,T("review","store",o),x("Your review have saved successfully"),U.push({name:"REVIEWS"})}}const x=function(o){b.notify({type:"positive",message:o,icon:"cloud_done",position:"top-right",timeout:2e3})};return(o,l)=>(s(),u(w,{padding:"",class:"flex column q-gutter-y-sm"},{default:S(()=>[Q("div",X,[a(p,{name:"shape",modelValue:e.type,"onUpdate:modelValue":l[0]||(l[0]=t=>e.type=t),val:"Product",label:"PRODUCTS"},null,8,["modelValue"]),a(p,{name:"shape",modelValue:e.type,"onUpdate:modelValue":l[1]||(l[1]=t=>e.type=t),val:"SalesExecutive",label:"SALES EXECUTIVE"},null,8,["modelValue"]),a(p,{name:"shape",modelValue:e.type,"onUpdate:modelValue":l[2]||(l[2]=t=>e.type=t),val:"Order",label:"ORDERS"},null,8,["modelValue"])]),e.type==="Product"?(s(),u(v,{key:0,outlined:"",modelValue:e.typeid,"onUpdate:modelValue":l[3]||(l[3]=t=>e.typeid=t),options:c,label:"Products"},null,8,["modelValue"])):y("",!0),e.type==="SalesExecutive"?(s(),u(v,{key:1,outlined:"",modelValue:e.typeid,"onUpdate:modelValue":l[4]||(l[4]=t=>e.typeid=t),options:E,label:"Sales Executive"},null,8,["modelValue"])):y("",!0),e.type==="Order"?(s(),u(v,{key:2,outlined:"",modelValue:e.typeid,"onUpdate:modelValue":l[5]||(l[5]=t=>e.typeid=t),options:f,label:"Orders"},null,8,["modelValue"])):y("",!0),a(I,{outlined:"",label:"Comment",modelValue:e.comment,"onUpdate:modelValue":l[6]||(l[6]=t=>e.comment=t),type:"text",maxlength:"500",autogrow:"",counter:"","lazy-rules":"",rules:[t=>t&&t.length>0||"Please type Comment"]},{append:S(()=>[a(R,{name:"comment"})]),_:1},8,["modelValue","rules"]),a(k,{color:"positive",label:"Submit",onClick:C,icon:"camera_enhance"})]),_:1}))}};export{Z as default};