import{c as z,r as D,f as n,w as E,h as g,a1 as I,g as T,W as A}from"./index.01a4d7f9.js";import{Q as K}from"./QInput.16cb8938.js";import{u as W,a as U}from"./use-dark.7da541fb.js";import{b as G}from"./format.c860d4da.js";var Y=z({name:"QPagination",props:{...W,modelValue:{type:Number,required:!0},min:{type:Number,default:1},max:{type:Number,required:!0},color:{type:String,default:"primary"},textColor:String,activeColor:String,activeTextColor:String,inputStyle:[Array,String,Object],inputClass:[Array,String,Object],size:String,disable:Boolean,input:Boolean,iconPrev:String,iconNext:String,iconFirst:String,iconLast:String,toFn:Function,boundaryLinks:{type:Boolean,default:null},boundaryNumbers:{type:Boolean,default:null},directionLinks:{type:Boolean,default:null},ellipses:{type:Boolean,default:null},maxPages:{type:Number,default:0,validator:e=>e>=0},ripple:{type:[Boolean,Object],default:null},round:Boolean,rounded:Boolean,flat:Boolean,outline:Boolean,unelevated:Boolean,push:Boolean,glossy:Boolean,dense:Boolean,padding:{type:String,default:"3px 2px"}},emits:["update:modelValue"],setup(e,{emit:L}){const{proxy:S}=T(),{$q:m}=S,_=U(e,m),r=D(null),c=n({get:()=>e.modelValue,set:a=>{if(a=parseInt(a,10),e.disable||isNaN(a))return;const t=G(a,e.min,e.max);e.modelValue!==t&&L("update:modelValue",t)}});E(()=>e.min+e.max,()=>{c.value=e.modelValue});function v(a,t){return[!0,!1].includes(a)?a:t}const F=n(()=>"q-pagination row no-wrap items-center"+(e.disable===!0?" disabled":"")),B=n(()=>c.value+" / "+e.max),j=n(()=>v(e.boundaryLinks,e.input)),b=n(()=>v(e.boundaryNumbers,!e.input)),O=n(()=>v(e.directionLinks,e.input)),x=n(()=>v(e.ellipses,!e.input)),y=n(()=>{const a=[e.iconFirst||m.iconSet.pagination.first,e.iconPrev||m.iconSet.pagination.prev,e.iconNext||m.iconSet.pagination.next,e.iconLast||m.iconSet.pagination.last];return m.lang.rtl===!0?a.reverse():a}),Q=n(()=>e.disable===!0?{"aria-disabled":"true"}:{}),q=n(()=>({round:e.round,rounded:e.rounded,outline:e.outline,unelevated:e.unelevated,push:e.push,glossy:e.glossy,dense:e.dense,padding:e.padding,color:e.color,flat:!0,size:e.size,ripple:e.ripple!==null?e.ripple:!0})),h=n(()=>({flat:e.flat,color:e.activeColor||e.color,textColor:e.activeTextColor||e.textColor}));function k(a){c.value=a}function $(a){c.value=c.value+a}function V(){c.value=r.value,r.value=null}function u(a,t){const d={...q.value,...a};return t!==void 0&&(e.toFn!==void 0?d.to=e.toFn(t):d.onClick=()=>k(t)),g(A,d)}return Object.assign(S,{set:k,setByOffset:$}),()=>{const a=[],t=[],d=[];if(j.value&&(a.push(u({key:"bls",disable:e.disable||e.modelValue<=e.min,icon:y.value[0]},e.min)),t.unshift(u({key:"ble",disable:e.disable||e.modelValue>=e.max,icon:y.value[3]},e.max))),O.value&&(a.push(u({key:"bdp",disable:e.disable||e.modelValue<=e.min,icon:y.value[1]},e.modelValue-1)),t.unshift(u({key:"bdn",disable:e.disable||e.modelValue>=e.max,icon:y.value[2]},e.modelValue+1))),e.input===!0)d.push(g(K,{class:"inline",style:{width:`${B.value.length/1.5}em`},type:"number",dense:!0,value:r.value,disable:e.disable,dark:_.value,borderless:!0,inputClass:e.inputClass,inputStyle:e.inputStyle,placeholder:B.value,min:e.min,max:e.max,"onUpdate:modelValue"(i){r.value=i},onKeyup(i){I(i,13)===!0&&V()},onBlur:V}));else{let i=Math.max(e.maxPages,1+(x.value?2:0)+(b.value?2:0)),o=e.min,s=e.max,C=!1,P=!1,N=!1,M=!1;e.maxPages&&i<e.max-e.min+1&&(i=1+Math.floor(i/2)*2,o=Math.max(e.min,Math.min(e.max-i+1,e.modelValue-Math.floor(i/2))),s=Math.min(e.max,o+i-1),b.value&&(N=!0,o+=1),x.value&&o>e.min+(b.value?1:0)&&(C=!0,o+=1),b.value&&(M=!0,s-=1),x.value&&s<e.max-(b.value?1:0)&&(P=!0,s-=1));const f={minWidth:`${Math.max(2,String(e.max).length)}em`};if(N){const l=e.min===e.modelValue;a.push(u({key:"bns",style:f,disable:e.disable,flat:!l,label:e.min,...l?h.value:{}},e.min))}if(M){const l=e.max===e.modelValue;t.unshift(u({key:"bne",style:f,disable:e.disable,flat:!l,label:e.max,...l?h.value:{}},e.max))}C&&a.push(u({key:"bes",style:f,disable:e.disable,label:"\u2026",ripple:!1},o-1)),P&&t.unshift(u({key:"bee",style:f,disable:e.disable,label:"\u2026",ripple:!1},s+1));for(let l=o;l<=s;l++){const w={key:`bpg${l}`,style:f,disable:e.disable,label:l};l===e.modelValue&&Object.assign(w,h.value),d.push(u(w,l))}}return g("div",{class:F.value,...Q.value},[a,g("div",{class:"row justify-center"},[d]),t])}}});export{Y as Q};
