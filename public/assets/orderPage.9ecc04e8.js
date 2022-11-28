import{Q as c}from"./QItemLabel.95c271f7.js";import{a as v,Q as l}from"./QItem.dbe0fd3c.js";import{Q as C}from"./QInput.3be0fd5f.js";import{Q as N}from"./QBadge.a3efd72d.js";import{a8 as O,aA as A,B as P,r as Q,E as _,H as t,C as d,G as e,D as F,P as Y,I as u,J as f,F as g,Q as H,K as M,M as h,ap as U,t as V,N as z}from"./index.519e6511.js";import{Q as I}from"./QSeparator.8305d860.js";import{Q as L}from"./QList.ee2f0220.js";import{Q as R}from"./QCardSection.a10ea186.js";import{Q as E}from"./QCardActions.2803e26a.js";import{Q as G}from"./QCard.39c5907a.js";import{Q as J}from"./QDialog.4aa07f16.js";import{Q as T}from"./QPage.68727071.js";import{C as w}from"./ClosePopup.20672703.js";import{d as K}from"./date.bd456e4c.js";import{u as j}from"./use-quasar.c19bc2e1.js";import{u as W}from"./offers.70c3b81f.js";import{u as X}from"./order.3b2eb02b.js";import{post as Z}from"./axios.98808b05.js";import"./use-dark.e60f4681.js";import"./format.c860d4da.js";import"./use-prevent-scroll.d8f1a98f.js";import"./scroll.1e188d5c.js";import"./use-model-toggle.02b9d1d7.js";import"./use-portal.0839ed11.js";import"./master.8d9550d1.js";import"./lodash.1b69ab06.js";W();X();const $={setup(){const x=j();A();const i=P(),n=Q(JSON.parse(history.state.products)),o=Q(""),k=function(){var s=a.value;n.value.splice(s,1),y.value=!1},y=Q(!1),a=Q(null),m=function(s){y.value=!0,a.value=s};let r,b;console.log(n.value);const B=function(){r=Date.now(),b=K.formatDate(r,"YYYY-MM-DD HH:mm:ss");var s=n.value.some(function(p){return p.quantity===0});s||(Z("order","store",{date:b,narration:o.value,items:n.value}),n.length=0,q("Your Order have saved successfully"),i.push({name:"DASHBOARD"}))},D=function(s){console.log(n.value[s].min_qty,n.value[s].quantity);var p=n.value[s],S=parseInt(p.quantity/p.min_qty)*p.offer_qty;n.value[s].foc=S},q=function(s){x.notify({type:"positive",message:s,icon:"cloud_done",position:"top-right",timeout:1e3})};return{myproducts:n,removeItem:k,confirm:y,confirmBox:m,confirmOrder:B,notes:o,positivemsg:q,updateFoc:D}}},ee=u("#"),te=u("Item"),ae=u("Quantity"),oe=u("\xA0"),le=u("Total Items :"),re=u("Notes"),se=z("span",{class:"q-ml-sm"},"Are you sure you want to delete?",-1);function ne(x,i,n,o,k,y){return d(),_(T,{padding:"",class:"flex flex-center column q-gutter-y-xl"},{default:t(()=>[e(L,{bordered:""},{default:t(()=>[e(v,{clickable:"",class:"text-subtitle2 bg-deep-orange-10 text-white"},{default:t(()=>[e(l,{class:"text-white",avatar:""},{default:t(()=>[e(c,{lines:"1"},{default:t(()=>[ee]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(c,{lines:"1"},{default:t(()=>[te]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(c,{lines:"1"},{default:t(()=>[ae]),_:1})]),_:1}),e(l,{class:"text-white",side:""})]),_:1}),(d(!0),F(M,null,Y(o.myproducts,(a,m)=>(d(),_(v,{clickable:"",key:a.id},{default:t(()=>[e(l,{class:"text-black",avatar:""},{default:t(()=>[e(c,null,{default:t(()=>[u(f(m+1),1)]),_:2},1024)]),_:2},1024),e(l,{style:{"font-size":"small"}},{default:t(()=>[e(c,{lines:"1"},{default:t(()=>[u(f(a.itemname),1)]),_:2},1024),a.offer_qty>0?(d(),_(c,{key:0,lines:"1",style:{"font-size":"x-small"}},{default:t(()=>[u("Buy:"+f(a.min_qty)+" \xA0 Get:"+f(a.offer_qty),1)]),_:2},1024)):g("",!0)]),_:2},1024),e(l,{side:"",top:""},{default:t(()=>[e(C,{outlined:"",dense:"",maxlength:"4",style:{"max-width":"60px"},modelValue:o.myproducts[m].quantity,"onUpdate:modelValue":r=>o.myproducts[m].quantity=r,modelModifiers:{number:!0},onChange:r=>o.updateFoc(m),"text-align:":"",right:"",mask:"#","fill-mask":"0","reverse-fill-mask":"",rules:[r=>r!==null&&r!==""&&parseInt(r)!=NaN||"Please type a number",r=>r>0||"Please type a real number"]},null,8,["modelValue","onUpdate:modelValue","onChange","rules"]),a.min_qty>0?(d(),_(N,{key:0,color:"black",style:{"font-size":"xx-small"}},{default:t(()=>[u("FOC: "+f(parseInt(a.quantity/a.min_qty)*a.offer_qty),1)]),_:2},1024)):g("",!0)]),_:2},1024),e(l,{avatar:"",side:"",top:""},{default:t(()=>[e(H,{name:"cancel",onClick:r=>o.confirmBox(m),class:"cursor-pointer"},null,8,["onClick"])]),_:2},1024)]),_:2},1024))),128)),e(I),e(v,{clickable:"",class:"text-subtitle2"},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[oe]),_:1}),e(l,null,{default:t(()=>[le]),_:1}),e(l,null,{default:t(()=>[e(c,null,{default:t(()=>[u(f(o.myproducts.length),1)]),_:1})]),_:1})]),_:1}),e(I),e(v,{clickable:"",class:"text-subtitle2"},{default:t(()=>[e(l,null,{default:t(()=>[re]),_:1}),e(l,null,{default:t(()=>[e(C,{outlined:"",modelValue:o.notes,"onUpdate:modelValue":i[0]||(i[0]=a=>o.notes=a),type:"text",maxlength:"500",autogrow:"",counter:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),o.myproducts.length?(d(),_(h,{key:0,color:"positive",label:"Save",type:"submit",icon:"camera_enhance",onClick:i[1]||(i[1]=a=>o.confirmOrder())})):g("",!0),e(J,{modelValue:o.confirm,"onUpdate:modelValue":i[3]||(i[3]=a=>o.confirm=a),persistent:""},{default:t(()=>[e(G,null,{default:t(()=>[e(R,{class:"row items-center"},{default:t(()=>[e(U,{icon:"delete",color:"primary","text-color":"white"}),se]),_:1}),e(E,{align:"right"},{default:t(()=>[V(e(h,{flat:"",label:"Cancel",color:"primary"},null,512),[[w]]),V(e(h,{flat:"",label:"Delete",color:"primary",onClick:i[2]||(i[2]=a=>o.removeItem())},null,512),[[w]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var Ae=O($,[["render",ne]]);export{Ae as default};