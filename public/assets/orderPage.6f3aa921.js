import{Q as d}from"./QItemLabel.4b045cb7.js";import{a as c,Q as a}from"./QItem.d2090226.js";import{Q as h}from"./QInput.0fdaf5de.js";import{a8 as N,aC as q,B as O,r as f,E as y,H as t,C as p,G as e,D as P,P as A,I as i,J as Q,Q as H,K as M,M as v,F as U,ap as Y,t as C,N as L}from"./index.8d7e61fd.js";import{Q as V}from"./QSeparator.1fdea069.js";import{Q as R}from"./QList.5e2b7bfb.js";import{Q as E}from"./QCardSection.5c6eb920.js";import{Q as F}from"./QCardActions.dacc32d4.js";import{Q as J}from"./QCard.9e71421a.js";import{Q as T}from"./QDialog.500a4fb3.js";import{Q as G}from"./QPage.12dd21c8.js";import{C as w}from"./ClosePopup.77ae0838.js";import{d as K}from"./date.52e73b47.js";import{u as j}from"./use-quasar.7d209305.js";import{u as z}from"./order.2c304010.js";import{post as W}from"./axios.980293f3.js";import"./use-dark.678b0dd2.js";import"./format.c860d4da.js";import"./use-prevent-scroll.1269f3f5.js";import"./scroll.25b4c155.js";import"./use-model-toggle.3fd02ce3.js";import"./use-portal.0314865a.js";import"./master.58f94054.js";import"./lodash.1b69ab06.js";z();const X={setup(D){const r=j(),x=q(),o=O(),u=f(JSON.parse(x.params.myproducts)),_=f(""),s=function(){var m=l.value;u.value.splice(m,1),n.value=!1},n=f(!1),l=f(null),I=function(m){n.value=!0,l.value=m};let g,b;const S=function(){g=Date.now(),b=K.formatDate(g,"YYYY-MM-DD HH:mm:ss");var m=u.value.some(function(B){return B.quantity===0});m||(W("order","store",{date:b,narration:_.value,items:u.value}),u.length=0,k("Order saved Successfully"),o.push({name:"DASHBOARD"}))},k=function(m){r.notify({type:"positive",message:m,icon:"cloud_done",position:"top-right",timeout:1e3})};return{myproducts:u,removeItem:s,confirm:n,confirmBox:I,confirmOrder:S,notes:_,positivemsg:k}}},Z=i("#"),$=i("Item"),ee=i("Quantity"),te=i("Total Items:"),oe=i("Notes"),ae=L("span",{class:"q-ml-sm"},"Are you sure you want to delete?",-1);function le(D,r,x,o,u,_){return p(),y(G,{padding:"",class:"flex flex-center column q-gutter-y-xl"},{default:t(()=>[e(R,{bordered:""},{default:t(()=>[e(c,{clickable:"",class:"text-subtitle2 bg-deep-orange-10 text-white"},{default:t(()=>[e(a,{class:"text-white"},{default:t(()=>[e(d,{lines:"1"},{default:t(()=>[Z]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(d,{lines:"1"},{default:t(()=>[$]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(d,{lines:"1"},{default:t(()=>[ee]),_:1})]),_:1}),e(a,{class:"text-white",side:""})]),_:1}),(p(!0),P(M,null,A(o.myproducts,(s,n)=>(p(),y(c,{clickable:"",key:s.id},{default:t(()=>[e(a,{class:"text-black",side:""},{default:t(()=>[e(d,{lines:"1"},{default:t(()=>[i(Q(n+1),1)]),_:2},1024)]),_:2},1024),e(a,null,{default:t(()=>[e(d,{lines:"1"},{default:t(()=>[i(Q(s.itemname),1)]),_:2},1024)]),_:2},1024),e(a,{side:"",top:""},{default:t(()=>[e(h,{outlined:"",dense:"",maxlength:"4",style:{"max-width":"60px"},modelValue:o.myproducts[n].quantity,"onUpdate:modelValue":l=>o.myproducts[n].quantity=l,modelModifiers:{number:!0},mask:"#","fill-mask":"0","reverse-fill-mask":"",rules:[l=>l!==null&&l!==""&&parseInt(l)!=NaN||"Please type a number",l=>l>0||"Please type a real number"]},null,8,["modelValue","onUpdate:modelValue","rules"])]),_:2},1024),e(a,{avatar:"",side:"",top:""},{default:t(()=>[e(H,{name:"cancel",onClick:l=>o.confirmBox(n),class:"cursor-pointer"},null,8,["onClick"])]),_:2},1024)]),_:2},1024))),128)),e(V),e(c,{clickable:"",class:"text-subtitle2"},{default:t(()=>[e(a,null,{default:t(()=>[te]),_:1}),e(a,null,{default:t(()=>[i(Q(o.myproducts.length),1)]),_:1})]),_:1}),e(V),e(c,{clickable:"",class:"text-subtitle2"},{default:t(()=>[e(a,null,{default:t(()=>[oe]),_:1}),e(a,null,{default:t(()=>[e(h,{outlined:"",modelValue:o.notes,"onUpdate:modelValue":r[0]||(r[0]=s=>o.notes=s),type:"text",maxlength:"500",autogrow:"",counter:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),o.myproducts.length?(p(),y(v,{key:0,color:"positive",label:"Save",type:"submit",icon:"camera_enhance",onClick:r[1]||(r[1]=s=>o.confirmOrder())})):U("",!0),e(T,{modelValue:o.confirm,"onUpdate:modelValue":r[3]||(r[3]=s=>o.confirm=s),persistent:""},{default:t(()=>[e(J,null,{default:t(()=>[e(E,{class:"row items-center"},{default:t(()=>[e(Y,{icon:"delete",color:"primary","text-color":"white"}),ae]),_:1}),e(F,{align:"right"},{default:t(()=>[C(e(v,{flat:"",label:"Cancel",color:"primary"},null,512),[[w]]),C(e(v,{flat:"",label:"Delete",color:"primary",onClick:r[2]||(r[2]=s=>o.removeItem())},null,512),[[w]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var Se=N(X,[["render",le]]);export{Se as default};
