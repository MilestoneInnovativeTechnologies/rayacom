import{u as O,a as F}from"./use-dark.7da541fb.js";import{a2 as N,a3 as $,c as Q,f as p,h as _,g as Y,a as U,a4 as M,w as W,a5 as R,o as j,n as z,q as v,l as d,A as I,a6 as K}from"./index.01a4d7f9.js";const G=[null,document,document.body,document.scrollingElement,document.documentElement];function ne(e,t){let i=N(t);if(i===void 0){if(e==null)return window;i=e.closest(".scroll,.scroll-y,.overflow-auto")}return G.includes(i)?window:i}function J(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Z(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let y;function ae(){if(y!==void 0)return y;const e=document.createElement("p"),t=document.createElement("div");$(e,{width:"100%",height:"200px"}),$(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const i=e.offsetWidth;t.style.overflow="scroll";let o=e.offsetWidth;return i===o&&(o=t.clientWidth),t.remove(),y=i-o,y}function ee(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}const te={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},L={xs:2,sm:4,md:8,lg:16,xl:24};var ue=Q({name:"QSeparator",props:{...O,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const t=Y(),i=F(e,t.proxy.$q),o=p(()=>e.vertical===!0?"vertical":"horizontal"),r=p(()=>` q-separator--${o.value}`),c=p(()=>e.inset!==!1?`${r.value}-${te[e.inset]}`:""),s=p(()=>`q-separator${r.value}${c.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(i.value===!0?" q-separator--dark":"")),n=p(()=>{const a={};if(e.size!==void 0&&(a[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const g=e.spaced===!0?`${L.md}px`:e.spaced in L?`${L[e.spaced]}px`:e.spaced,u=e.vertical===!0?["Left","Right"]:["Top","Bottom"];a[`margin${u[0]}`]=a[`margin${u[1]}`]=g}return a});return()=>_("hr",{class:s.value,style:n.value,"aria-orientation":o.value})}});function ce(e,t,i){let o;function r(){o!==void 0&&(M.remove(o),o=void 0)}return U(()=>{e.value===!0&&r()}),{removeFromHistory:r,addToHistory(){o={condition:()=>i.value===!0,handler:t},M.add(o)}}}function de(){let e;return U(()=>{clearTimeout(e)}),{registerTimeout(t,i){clearTimeout(e),e=setTimeout(t,i)},removeTimeout(){clearTimeout(e)}}}const fe={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},me=["before-show","show","before-hide","hide"];function ve({showing:e,canShow:t,hideOnRouteChange:i,handleShow:o,handleHide:r,processOnMount:c}){const s=Y(),{props:n,emit:a,proxy:g}=s;let u;function D(l){e.value===!0?T(l):V(l)}function V(l){if(n.disable===!0||l!==void 0&&l.qAnchorHandled===!0||t!==void 0&&t(l)!==!0)return;const f=n["onUpdate:modelValue"]!==void 0;f===!0&&(a("update:modelValue",!0),u=l,z(()=>{u===l&&(u=void 0)})),(n.modelValue===null||f===!1)&&q(l)}function q(l){e.value!==!0&&(e.value=!0,a("before-show",l),o!==void 0?o(l):a("show",l))}function T(l){if(n.disable===!0)return;const f=n["onUpdate:modelValue"]!==void 0;f===!0&&(a("update:modelValue",!1),u=l,z(()=>{u===l&&(u=void 0)})),(n.modelValue===null||f===!1)&&C(l)}function C(l){e.value!==!1&&(e.value=!1,a("before-hide",l),r!==void 0?r(l):a("hide",l))}function H(l){n.disable===!0&&l===!0?n["onUpdate:modelValue"]!==void 0&&a("update:modelValue",!1):l===!0!==e.value&&(l===!0?q:C)(u)}W(()=>n.modelValue,H),i!==void 0&&R(s)===!0&&W(()=>g.$route.fullPath,()=>{i.value===!0&&e.value===!0&&T()}),c===!0&&j(()=>{H(n.modelValue)});const P={show:V,hide:T,toggle:D};return Object.assign(g,P),P}let w=0,E,S,h,x=!1,k,A,m;function oe(e){le(e)&&I(e)}function le(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=K(e),i=e.shiftKey&&!e.deltaX,o=!i&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),r=i||o?e.deltaY:e.deltaX;for(let c=0;c<t.length;c++){const s=t[c];if(ee(s,o))return o?r<0&&s.scrollTop===0?!0:r>0&&s.scrollTop+s.clientHeight===s.scrollHeight:r<0&&s.scrollLeft===0?!0:r>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function B(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function b(e){x!==!0&&(x=!0,requestAnimationFrame(()=>{x=!1;const{height:t}=e.target,{clientHeight:i,scrollTop:o}=document.scrollingElement;(h===void 0||t!==window.innerHeight)&&(h=i-t,document.scrollingElement.scrollTop=o),o>h&&(document.scrollingElement.scrollTop-=Math.ceil((o-h)/8))}))}function X(e){const t=document.body,i=window.visualViewport!==void 0;if(e==="add"){const{overflowY:o,overflowX:r}=window.getComputedStyle(t);E=Z(window),S=J(window),k=t.style.left,A=t.style.top,t.style.left=`-${E}px`,t.style.top=`-${S}px`,r!=="hidden"&&(r==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),o!=="hidden"&&(o==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,v.is.ios===!0&&(i===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",b,d.passiveCapture),window.visualViewport.addEventListener("scroll",b,d.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",B,d.passiveCapture))}v.is.desktop===!0&&v.is.mac===!0&&window[`${e}EventListener`]("wheel",oe,d.notPassive),e==="remove"&&(v.is.ios===!0&&(i===!0?(window.visualViewport.removeEventListener("resize",b,d.passiveCapture),window.visualViewport.removeEventListener("scroll",b,d.passiveCapture)):window.removeEventListener("scroll",B,d.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=k,t.style.top=A,window.scrollTo(E,S),h=void 0)}function ie(e){let t="add";if(e===!0){if(w++,m!==void 0){clearTimeout(m),m=void 0;return}if(w>1)return}else{if(w===0||(w--,w>0))return;if(t="remove",v.is.ios===!0&&v.is.nativeMobile===!0){clearTimeout(m),m=setTimeout(()=>{X(t),m=void 0},100);return}}X(t)}function pe(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,ie(t))}}}export{ue as Q,me as a,de as b,ve as c,ce as d,pe as e,J as f,ne as g,Z as h,ae as i,fe as u};
