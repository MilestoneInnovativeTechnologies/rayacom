import{Q as t}from"./QInput.0fdaf5de.js";import{Q as v}from"./QSelect.a4017f62.js";import{r,w as V,E as f,H as b,C as x,G as a,M as E}from"./index.8d7e61fd.js";import{Q as U}from"./QPage.12dd21c8.js";import{post as g}from"./axios.980293f3.js";import{u as Q}from"./master.58f94054.js";import{l as s}from"./lodash.1b69ab06.js";import"./use-dark.678b0dd2.js";import"./format.c860d4da.js";import"./QItem.d2090226.js";import"./QItemLabel.4b045cb7.js";import"./QMenu.f3a6a76b.js";import"./position-engine.fd7b7ee1.js";import"./selection.4ec6e38e.js";import"./use-portal.0314865a.js";import"./scroll.25b4c155.js";import"./use-model-toggle.3fd02ce3.js";import"./QDialog.500a4fb3.js";import"./use-prevent-scroll.1269f3f5.js";const R={__name:"Firose",setup(S){const p=Q(),i=p.SALES_EXECUTIVE,u=r(100001),l=r({});V(u,m=>{l.value=Object.assign({},s.exports.get(i,m),{areas:s.exports.map(s.exports.get(i,[m,"areas"],[]),({data:e})=>String(e))})});const n=r(Object.values(p.AREA));function d(){g("master","update",{id:u.value,...l.value})}return(m,e)=>(x(),f(U,{padding:"",class:"flex column q-gutter-y-sm"},{default:b(()=>[a(t,{modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=o=>u.value=o),modelModifiers:{number:!0},label:"Sales Executive ID",outlined:"",type:"number"},null,8,["modelValue"]),a(t,{modelValue:l.value.name,"onUpdate:modelValue":e[1]||(e[1]=o=>l.value.name=o),label:"Name",outlined:""},null,8,["modelValue"]),a(t,{modelValue:l.value.phone,"onUpdate:modelValue":e[2]||(e[2]=o=>l.value.phone=o),label:"Phone",outlined:""},null,8,["modelValue"]),a(t,{modelValue:l.value.email,"onUpdate:modelValue":e[3]||(e[3]=o=>l.value.email=o),label:"Email",outlined:""},null,8,["modelValue"]),a(t,{modelValue:l.value.password,"onUpdate:modelValue":e[4]||(e[4]=o=>l.value.password=o),label:"Password",outlined:""},null,8,["modelValue"]),a(v,{modelValue:l.value.areas,"onUpdate:modelValue":e[5]||(e[5]=o=>l.value.areas=o),label:"Areas",multiple:"","use-chips":"","stack-label":"",outlined:"",options:n.value,"option-label":"name","option-value":"id","emit-value":"","map-options":""},null,8,["modelValue","options"]),a(E,{label:"Update",onClick:d,color:"primary"})]),_:1}))}};export{R as default};