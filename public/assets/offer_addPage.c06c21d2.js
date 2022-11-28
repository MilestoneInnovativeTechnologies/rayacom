import{Q as r}from"./QSelect.3a01accf.js";import{Q as n}from"./QInput.3be0fd5f.js";import{Q as p}from"./QRadio.70c4e860.js";import{k as d,B as O,r as U,Y as E,aI as F,E as f,H as c,C as y,G as s,O as b,N as I,F as B,M as V}from"./index.519e6511.js";import{Q as C}from"./QForm.38787183.js";import{Q as M}from"./QPage.68727071.js";import{post as N}from"./axios.98808b05.js";import{u as w}from"./master.8d9550d1.js";import{u as j}from"./offers.70c3b81f.js";import{l as v}from"./lodash.1b69ab06.js";import{u as z}from"./use-quasar.c19bc2e1.js";import"./use-dark.e60f4681.js";import"./QItem.dbe0fd3c.js";import"./QItemLabel.95c271f7.js";import"./QMenu.ceebb96e.js";import"./position-engine.6301699e.js";import"./selection.e65ce004.js";import"./use-portal.0839ed11.js";import"./scroll.1e188d5c.js";import"./use-model-toggle.02b9d1d7.js";import"./QDialog.4aa07f16.js";import"./use-prevent-scroll.d8f1a98f.js";import"./format.c860d4da.js";const Y={class:"q-pa-sm flex flex-left"},pe={__name:"offer_addPage",setup(h){const i=w(),q=j(),Q=d(()=>v.exports.map(i.CUSTOMER,({id:o,name:l})=>({label:l,value:o}))),P=d(()=>v.exports.map(i.ITEM,({id:o,name:l})=>({label:l,value:o}))),g=z(),S=O(),a=U(history.state.id),e=E({id:"",item:"",minimum_quantity:"",offer_quantity:"",type:"",customers:"",status:""});F(()=>{if(a.value==0)e.id=e.item=e.minimum_quantity=e.offer_quantity="",e.customers=null,e.type="Public",e.status="Approved";else{let o=q.offers[a.value];e.id=a.value,e.item={label:o.item.name,value:o.item.id},e.minimum_quantity=String(o.minimum_quantity),e.offer_quantity=String(o.offer_quantity),e.type=o.type,e.customers=o.customers,e.status=o.status}});function x(){let o=_.omit(e,["item","customers"]);if(o.item=e.item.value,e.type=="Private"){let l=",";o.customers=l.concat(e.customers.join(),",")}a.value==0?(m="store",u="Your have added a new item successfully"):(m="update",u="Your Item have updated successfully"),N("offer",m,o),k(u),S.push({name:"ADMINOFFERS"})}function R(){e.id=e.item=e.minimum_quantity=e.offer_quantity=e.customers=e.status=null,e.type="Public"}let u,m;const k=function(o){g.notify({type:"positive",message:o,icon:"cloud_done",position:"top-right",timeout:2e3})};return(o,l)=>(y(),f(M,{padding:"",class:"flex column q-gutter-y-sm"},{default:c(()=>[s(C,{onSubmit:x,onReset:R,class:"q-gutter-md"},{default:c(()=>[s(r,{outlined:"",modelValue:e.item,"onUpdate:modelValue":l[0]||(l[0]=t=>e.item=t),options:b(P),label:"Product",type:"number","lazy-rules":"",rules:[t=>t!==null&&t!==""||"Please select a Product"]},null,8,["modelValue","options","rules"]),s(n,{outlined:"",label:"Quantity",modelValue:e.minimum_quantity,"onUpdate:modelValue":l[1]||(l[1]=t=>e.minimum_quantity=t),type:"number","lazy-rules":"",mask:"##########",rules:[t=>t&&t.length>0||"Please type Quantity"]},null,8,["modelValue","rules"]),s(n,{outlined:"",label:"Offer Quantity",modelValue:e.offer_quantity,"onUpdate:modelValue":l[2]||(l[2]=t=>e.offer_quantity=t),"lazy-rules":"",mask:"##########",rules:[t=>t&&t.length>0||"Please type Quantity"]},null,8,["modelValue","rules"]),I("div",Y,[s(p,{name:"radio",modelValue:e.type,"onUpdate:modelValue":l[3]||(l[3]=t=>e.type=t),val:"Public",label:"Public",color:"secondary"},null,8,["modelValue"]),s(p,{name:"radio",modelValue:e.type,"onUpdate:modelValue":l[4]||(l[4]=t=>e.type=t),val:"Private",label:"Private",color:"secondary"},null,8,["modelValue"])]),e.type==="Private"?(y(),f(r,{key:0,modelValue:e.customers,"onUpdate:modelValue":l[5]||(l[5]=t=>e.customers=t),label:"Customers",multiple:"","use-chips":"","stack-label":"",outlined:"",options:b(Q),"emit-value":"","map-options":""},null,8,["modelValue","options"])):B("",!0),s(V,{label:"Submit",type:"submit",color:"positive",icon:"camera_enhance"}),s(V,{label:"Reset",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})]),_:1})]),_:1}))}};export{pe as default};