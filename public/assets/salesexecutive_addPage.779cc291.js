import{Q as m}from"./QInput.19c0c42c.js";import{Q as x}from"./QSelect.f089caed.js";import{B as S,k as v,Y as g,E as A,H as b,C as U,G as l,O as Q,M as C}from"./index.246a4b9a.js";import{Q as I}from"./QPage.d4defc19.js";import{post as d}from"./axios.93d508e0.js";import{u as P}from"./master.9f86e441.js";import{l as s}from"./lodash.1e9e3f94.js";import{u as k}from"./use-quasar.42c4e941.js";import"./use-dark.b88f123a.js";import"./format.c860d4da.js";import"./QItem.899e600d.js";import"./QItemLabel.e6fa0dc1.js";import"./QMenu.ceb76e5d.js";import"./position-engine.ece6e7e4.js";import"./selection.53dd3c90.js";import"./use-portal.f505e8fd.js";import"./scroll.606ee28b.js";import"./use-model-toggle.4c9c2223.js";import"./QDialog.731c9919.js";import"./use-prevent-scroll.b4d5fbe2.js";const F={__name:"salesexecutive_addPage",props:["id"],setup(c){const i=c,V=k(),r=S(),p=P(),f=v(()=>s.exports.map(p.AREA,({id:a,name:o})=>({label:o,value:a}))),u=p.SALES_EXECUTIVE,e=g(Object.assign({},s.exports.get(u,i.id),{areas:s.exports.uniq(s.exports.map(s.exports.get(u,[i.id,"areas"]),({data:a})=>String(a)))}));function E(){i.id&&i.id>0?d("master","update",e).then(()=>{n("Updated Successfully"),r.push({name:"ADMINSALESXECUTIVEPAGE"})}):d("executive","store",e).then(()=>{n("Added a new Sales Executive"),r.push({name:"ADMINSALESXECUTIVEPAGE"})})}function n(a){V.notify({type:"positive",message:a,icon:"cloud_done",position:"top-right",timeout:2e3})}return(a,o)=>(U(),A(I,{padding:"",class:"flex column q-gutter-y-sm"},{default:b(()=>[l(m,{modelValue:e.name,"onUpdate:modelValue":o[0]||(o[0]=t=>e.name=t),label:"Name",outlined:""},null,8,["modelValue"]),l(m,{modelValue:e.phone,"onUpdate:modelValue":o[1]||(o[1]=t=>e.phone=t),label:"Phone",outlined:""},null,8,["modelValue"]),l(m,{modelValue:e.email,"onUpdate:modelValue":o[2]||(o[2]=t=>e.email=t),label:"Email",outlined:""},null,8,["modelValue"]),l(m,{modelValue:e.password,"onUpdate:modelValue":o[3]||(o[3]=t=>e.password=t),label:"Password",outlined:""},null,8,["modelValue"]),l(x,{modelValue:e.areas,"onUpdate:modelValue":o[4]||(o[4]=t=>e.areas=t),label:"Areas",multiple:"","use-chips":"","stack-label":"",outlined:"",options:Q(f),"emit-value":"","map-options":""},null,8,["modelValue","options"]),l(C,{label:"Submit",onClick:E,color:"positive",icon:"camera_enhance"})]),_:1}))}};export{F as default};
