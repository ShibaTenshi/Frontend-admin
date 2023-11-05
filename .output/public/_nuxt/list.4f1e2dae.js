import{H as ae}from"./components.9a3462e0.js";import{u as le,a as ne,_ as oe}from"./uid.099413c5.js";import{_ as G,E as J,G as B,f as M,H as U,v as y,S as se,o as l,c as r,a as c,U as ue,V as ie,J as L,L as w,d as P,t as V,D as o,K as v,r as K,W as H,b as j,F as R,M as F,g as A,R as re,X as I,w as de,i as N,Y as ce,j as me,n as fe}from"./entry.abf80c1c.js";import{c as pe,u as W,t as ge,_ as X,a as Y,o as ye,b as be,g as he}from"./Button.876ca20d.js";import{u as Se}from"./fetch.28144918.js";import{u as E}from"./cookie.4cd98f25.js";import"./nuxt-link.4d7dd1cd.js";import"./index.344f9f74.js";const T=J(B.ui.strategy,B.ui.checkbox,pe),ke=M({inheritAttrs:!1,props:{id:{type:String,default:()=>le()},value:{type:[String,Number,Boolean,Object],default:null},modelValue:{type:[Boolean,Array],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},checked:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>T.default.color,validator(e){return B.ui.colors.includes(e)}},inputClass:{type:String,default:""},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue","change"],setup(e,{emit:s}){const{ui:i,attrs:g}=W("checkbox",U(e,"ui"),T,U(e,"class")),{emitFormChange:b,color:f,name:n,inputId:h}=ne(e),u=y({get(){return e.modelValue},set(d){s("update:modelValue",d)}}),a=d=>{s("change",d),b()},p=y(()=>ge(se(i.value.base,i.value.rounded,i.value.background,i.value.border,i.value.ring.replaceAll("{color}",f.value),i.value.color.replaceAll("{color}",f.value)),e.inputClass));return{ui:i,attrs:g,toggle:u,inputId:h,name:n,inputClass:p,onChange:a}}}),ve={class:"flex items-center h-5"},Ce=["id","name","required","value","disabled","checked","indeterminate"],$e={key:0,class:"ms-3 text-sm"},Ve=["for"];function we(e,s,i,g,b,f){return l(),r("div",{class:o(e.ui.wrapper)},[c("div",ve,[ue(c("input",L({id:e.inputId,"onUpdate:modelValue":s[0]||(s[0]=n=>e.toggle=n),name:e.name,required:e.required,value:e.value,disabled:e.disabled,checked:e.checked,indeterminate:e.indeterminate,type:"checkbox",class:["form-checkbox",e.inputClass]},e.attrs,{onChange:s[1]||(s[1]=(...n)=>e.onChange&&e.onChange(...n))}),null,16,Ce),[[ie,e.toggle]])]),e.label||e.$slots.label?(l(),r("div",$e,[c("label",{for:e.inputId,class:o(e.ui.label)},[w(e.$slots,"label",{},()=>[P(V(e.label),1)]),e.required?(l(),r("span",{key:0,class:o(e.ui.required)},"*",2)):v("",!0)],10,Ve),e.help?(l(),r("p",{key:0,class:o(e.ui.help)},V(e.help),3)):v("",!0)])):v("",!0)],2)}const Q=G(ke,[["render",we]]);function Ae(e){return e?e[0].toUpperCase()+e.slice(1):""}const $=J(B.ui.strategy,B.ui.table,be);function Be(e,s){return e===s}const Ie=M({components:{UButton:X,UIcon:Y,UCheckbox:Q},inheritAttrs:!1,props:{modelValue:{type:Array,default:null},by:{type:[String,Function],default:()=>Be},rows:{type:Array,default:()=>[]},columns:{type:Array,default:null},columnAttribute:{type:String,default:"label"},sort:{type:Object,default:()=>({})},sortButton:{type:Object,default:()=>$.default.sortButton},sortAscIcon:{type:String,default:()=>$.default.sortAscIcon},sortDescIcon:{type:String,default:()=>$.default.sortDescIcon},loading:{type:Boolean,default:!1},loadingState:{type:Object,default:()=>$.default.loadingState},emptyState:{type:Object,default:()=>$.default.emptyState},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue"],setup(e,{emit:s,attrs:i}){const{ui:g,attrs:b}=W("table",U(e,"ui"),$,U(e,"class")),f=y(()=>e.columns??Object.keys(ye(e.rows[0]??{},["click"])).map(t=>({key:t,label:Ae(t),sortable:!1}))),n=K(H({},e.sort,{column:null,direction:"asc"})),h=y(()=>{var k;if(!((k=n.value)!=null&&k.column))return e.rows;const{column:t,direction:m}=n.value;return e.rows.slice().sort((ee,te)=>{const O=ee[t],q=te[t];return O===q?0:m==="asc"?O<q?-1:1:O>q?-1:1})}),u=y({get(){return e.modelValue},set(t){s("update:modelValue",t)}}),a=y(()=>u.value&&u.value.length>0&&u.value.length<e.rows.length),p=y(()=>e.emptyState===null?null:{...g.value.default.emptyState,...e.emptyState}),d=y(()=>e.loadingState===null?null:{...g.value.default.loadingState,...e.loadingState});function S(t,m){if(typeof e.by=="string"){const k=e.by;return(t==null?void 0:t[k])===(m==null?void 0:m[k])}return e.by(t,m)}function C(t){return e.modelValue?u.value.some(m=>S(I(m),I(t))):!1}function D(t){if(n.value.column===t.key){const m=!t.direction||t.direction==="asc"?"desc":"asc";n.value.direction===m?n.value=H({},e.sort,{column:null,direction:"asc"}):n.value.direction=n.value.direction==="asc"?"desc":"asc"}else n.value={column:t.key,direction:t.direction||"asc"}}function Z(t){i.onSelect&&i.onSelect(t)}function z(){e.rows.forEach(t=>{u.value.some(m=>S(I(m),I(t)))||(i.onSelect?i.onSelect(t):u.value.push(t))})}function _(t){t.target.checked?z():u.value=[]}function x(t,m,k="Failed to get cell value"){return he(t,m,k)}return{ui:g,attrs:b,sort:n,columns:f,rows:h,selected:u,indeterminate:a,emptyState:p,loadingState:d,isSelected:C,onSort:D,onSelect:Z,onChange:_,getRowData:x}}}),Re={key:1},Ue={key:0},je=["colspan"],De={key:1},Oe=["colspan"],qe=["onClick"];function Fe(e,s,i,g,b,f){const n=Q,h=X,u=Y;return l(),r("div",L({class:e.ui.wrapper},e.attrs),[c("table",{class:o([e.ui.base,e.ui.divide])},[c("thead",{class:o(e.ui.thead)},[c("tr",{class:o(e.ui.tr.base)},[e.modelValue?(l(),r("th",{key:0,scope:"col",class:o(e.ui.checkbox.padding)},[j(n,{checked:e.indeterminate||e.selected.length===e.rows.length,indeterminate:e.indeterminate,"aria-label":"Select all",onChange:e.onChange},null,8,["checked","indeterminate","onChange"])],2)):v("",!0),(l(!0),r(R,null,F(e.columns,(a,p)=>(l(),r("th",{key:p,scope:"col",class:o([e.ui.th.base,e.ui.th.padding,e.ui.th.color,e.ui.th.font,e.ui.th.size,a.class])},[w(e.$slots,`${a.key}-header`,{column:a,sort:e.sort,onSort:e.onSort},()=>[a.sortable?(l(),A(h,L({key:0},{...e.ui.default.sortButton,...e.sortButton},{icon:!e.sort.column||e.sort.column!==a.key?e.sortButton.icon||e.ui.default.sortButton.icon:e.sort.direction==="asc"?e.sortAscIcon:e.sortDescIcon,label:a[e.columnAttribute],onClick:d=>e.onSort(a)}),null,16,["icon","label","onClick"])):(l(),r("span",Re,V(a[e.columnAttribute]),1))])],2))),128))],2)],2),c("tbody",{class:o(e.ui.tbody)},[e.loadingState&&e.loading?(l(),r("tr",Ue,[c("td",{colspan:e.columns.length+(e.modelValue?1:0)},[w(e.$slots,"loading-state",{},()=>[c("div",{class:o(e.ui.loadingState.wrapper)},[e.loadingState.icon?(l(),A(u,{key:0,name:e.loadingState.icon,class:o(e.ui.loadingState.icon),"aria-hidden":"true"},null,8,["name","class"])):v("",!0),c("p",{class:o(e.ui.loadingState.label)},V(e.loadingState.label),3)],2)])],8,je)])):e.emptyState&&!e.rows.length?(l(),r("tr",De,[c("td",{colspan:e.columns.length+(e.modelValue?1:0)},[w(e.$slots,"empty-state",{},()=>[c("div",{class:o(e.ui.emptyState.wrapper)},[e.emptyState.icon?(l(),A(u,{key:0,name:e.emptyState.icon,class:o(e.ui.emptyState.icon),"aria-hidden":"true"},null,8,["name","class"])):v("",!0),c("p",{class:o(e.ui.emptyState.label)},V(e.emptyState.label),3)],2)])],8,Oe)])):(l(!0),r(R,{key:2},F(e.rows,(a,p)=>(l(),r("tr",{key:p,class:o([e.ui.tr.base,e.isSelected(a)&&e.ui.tr.selected,e.$attrs.onSelect&&e.ui.tr.active,a==null?void 0:a.class]),onClick:()=>e.onSelect(a)},[e.modelValue?(l(),r("td",{key:0,class:o(e.ui.checkbox.padding)},[j(n,{modelValue:e.selected,"onUpdate:modelValue":s[0]||(s[0]=d=>e.selected=d),value:a,"aria-label":"Select row",onClick:s[1]||(s[1]=re(()=>{},["stop"]))},null,8,["modelValue","value"])],2)):v("",!0),(l(!0),r(R,null,F(e.columns,(d,S)=>{var C;return l(),r("td",{key:S,class:o([e.ui.td.base,e.ui.td.padding,e.ui.td.color,e.ui.td.font,e.ui.td.size,(C=a[d.key])==null?void 0:C.class])},[w(e.$slots,`${d.key}-data`,{column:d,row:a,index:p,getRowData:D=>e.getRowData(a,d.key,D)},()=>[P(V(e.getRowData(a,d.key)),1)])],2)}),128))],10,qe))),128))],2)],2)],16)}const Ne=G(Ie,[["render",Fe]]),Le=c("title",null,"Restaurant Request - Shibaqueue Admin",-1),Me={class:"p-20 my-10"},He=c("br",null,null,-1),Ye=M({__name:"list",setup(e){const s=me(),i=[{key:"restaurantName",label:"Restaurant Name",sortable:"true"},{key:"category",label:"Category",sortable:"true"},{key:"dateAdded",label:"Date Added",sortable:"true"}],{pending:g,data:b}=Se(s.public.API_URL+"/admin/unapproved/list",{params:{tokenId:E("token")}},"$rSMa4l1ckt"),f=K(""),n=y(()=>f.value?b.value.filter(u=>Object.values(u).some(a=>String(a).toLowerCase().includes(f.value.toLowerCase()))):b.value);function h(u){E("restaurant_ID").value=u.id,fe("/restaurant/info")}return(u,a)=>{const p=ae,d=oe,S=Ne;return l(),r(R,null,[j(p,null,{default:de(()=>[Le]),_:1}),c("div",Me,[j(d,{modelValue:N(f),"onUpdate:modelValue":a[0]||(a[0]=C=>ce(f)?f.value=C:null),placeholder:"Search"},null,8,["modelValue"]),He,N(g)?(l(),A(S,{key:0,loading:"","loading-state":{icon:"i-heroicons-arrow-path-20-solid",label:"Loading..."},class:"w-full",columns:i},null,8,["loading-state"])):(l(),A(S,{key:1,columns:i,rows:N(n),onSelect:h},null,8,["rows"]))])],64)}}});export{Ye as default};
