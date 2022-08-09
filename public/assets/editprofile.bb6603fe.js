import{c as I,r as F,ai as M,aj as U,o as q,h as N,D as R,g as k,A as Q,n as z,E as Z,ab as j,f as D,K as O,O as $,N as p,aH as H,J as K,M as u,a8 as d,Q as V,X as T,W as X}from"./index.01a4d7f9.js";import{b as J,Q as S}from"./QInput.16cb8938.js";import{Q as L}from"./QPage.5a5bbeae.js";import{u as W}from"./use-quasar.6021430a.js";import{post as Y}from"./axios.055b09b4.js";import{u as G}from"./master.02c82b39.js";import"./use-dark.7da541fb.js";import"./format.c860d4da.js";import"./lodash.e6c87188.js";var ee=I({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validation-success","validation-error"],setup(l,{slots:E,emit:v}){const A=k(),o=F(null);let i=0;const r=[];function g(t){const s=[],b=typeof t=="boolean"?t:l.noErrorFocus!==!0,P=++i,x=(c,n)=>{v("validation-"+(c===!0?"success":"error"),n)};for(let c=0;c<r.length;c++){const n=r[c],h=n.validate();if(typeof h.then=="function")s.push(h.then(f=>({valid:f,comp:n}),f=>({valid:!1,comp:n,err:f})));else if(h!==!0){if(l.greedy===!1)return x(!1,n),b===!0&&typeof n.focus=="function"&&n.focus(),Promise.resolve(!1);s.push({valid:!1,comp:n})}}return s.length===0?(x(!0),Promise.resolve(!0)):Promise.all(s).then(c=>{const n=c.filter(B=>B.valid!==!0);if(n.length===0)return P===i&&x(!0),!0;const{valid:h,comp:f,err:w}=n[0];return P===i&&(w!==void 0&&console.error(w),x(!1,f),b===!0&&h!==!0&&typeof f.focus=="function"&&f.focus()),!1})}function y(){i++,r.forEach(t=>{typeof t.resetValidation=="function"&&t.resetValidation()})}function m(t){t!==void 0&&Q(t);const s=i+1;g().then(b=>{s===i&&b===!0&&(l.onSubmit!==void 0?v("submit",t):t!==void 0&&t.target!==void 0&&typeof t.target.submit=="function"&&t.target.submit())})}function a(t){t!==void 0&&Q(t),v("reset"),z(()=>{y(),l.autofocus===!0&&l.noResetFocus!==!0&&e()})}function e(){J(()=>{if(o.value===null)return;const t=o.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(o.value.querySelectorAll("[tabindex]"),s=>s.tabIndex>-1);t!=null&&t.focus({preventScroll:!0})})}Z(j,{bindComponent(t){r.push(t)},unbindComponent(t){const s=r.indexOf(t);s>-1&&r.splice(s,1)}});let C=!1;return M(()=>{C=!0}),U(()=>{C===!0&&l.autofocus===!0&&e()}),q(()=>{l.autofocus===!0&&e()}),Object.assign(A.proxy,{validate:g,resetValidation:y,submit:m,reset:a,focus:e,getValidationComponents:()=>r}),()=>N("form",{class:"q-form",ref:o,onSubmit:m,onReset:a},R(E.default))}});const te={class:"row justify-md-center"},ce={__name:"editprofile",setup(l){const E=W();K();const v=G(),A=F(100001),o=D(()=>v.SALES_EXECUTIVE[A.value]),i=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/,r=function(){return i.test(o.value.email)||"Invalid email"},g=function(){if(o.value.name!=""&&o.value.password!=""&&o.value.phone!=""&&i.test(o.value.email)){console.warn(o.value);let m=_.omit(o.value,["areas"]);Y("master","update",m)}},y=function(m){return E.notify({color:"green",textColor:"white",icon:"cloud_done",message:"Your Profile Successfully Updated",position:"top-right"}),{onSubmit:y,isValidEmail:r,myProfile:g,salesexecutive:o}};return(m,a)=>(O(),$(ee,{onSubmit:H(y,["prevent"]),class:""},{default:p(()=>[u(L,{padding:"",class:"flex flex-center column q-gutter-y-sm"},{default:p(()=>[u(S,{outlined:"",modelValue:d(o).name,"onUpdate:modelValue":a[0]||(a[0]=e=>d(o).name=e),type:"text",hint:"Full Name",rules:[e=>e&&e.length>0||"Please type your name"]},{append:p(()=>[u(V,{name:"account_box"})]),_:1},8,["modelValue","rules"]),u(S,{outlined:"",modelValue:d(o).password,"onUpdate:modelValue":a[1]||(a[1]=e=>d(o).password=e),hint:"Password",type:"password",rules:[e=>e&&e.length>0||"must  fill this field",e=>e.length>5||"Minimum length is 6"]},{append:p(()=>[u(V,{name:"visibility_off"})]),_:1},8,["modelValue","rules"]),u(S,{outlined:"",modelValue:d(o).email,"onUpdate:modelValue":a[2]||(a[2]=e=>d(o).email=e),hint:"E-Mail",type:"text",rules:[e=>!!e||"Email is missing",r]},{append:p(()=>[u(V,{name:"mail"})]),_:1},8,["modelValue","rules"]),T("div",te,[u(S,{outlined:"",modelValue:d(o).phone,"onUpdate:modelValue":a[3]||(a[3]=e=>d(o).phone=e),hint:"Contact Number",type:"text",rules:[e=>e&&e.length>0||"please enter your PH no"]},{append:p(()=>[u(V,{name:"phone"})]),_:1},8,["modelValue","rules"])]),u(X,{type:"submit",label:"Submit",color:"green",icon:"camera_enhance",onClick:g})]),_:1})]),_:1},8,["onSubmit"]))}};export{ce as default};
