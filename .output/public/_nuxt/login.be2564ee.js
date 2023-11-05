import{H as g}from"./components.9a3462e0.js";import{_ as V}from"./uid.099413c5.js";import{z as i,_ as U,a as y}from"./index.7301d3a3.js";import{_ as k}from"./Button.876ca20d.js";import{f as C,r as p,h as F,n as f,o as S,c as A,b as e,w as n,a as t,i as B,F as D,t as H,d as I,j as N}from"./entry.abf80c1c.js";import{u as Q}from"./fetch.28144918.js";import{u as T}from"./cookie.4cd98f25.js";import{_ as j}from"./logo.ebe6e4c9.js";import{i as E}from"./tokenValidate.fee17728.js";import"./nuxt-link.4d7dd1cd.js";import"./index.344f9f74.js";const G=t("title",null,"Login - Shibaqueue Admin",-1),L={class:"w-80 mx-auto my-[10%]"},M=t("img",{src:j,alt:"",class:"mx-auto w-[100px]"},null,-1),P=t("br",null,null,-1),R=t("h1",{class:"font-bold text-center"},"ShibaQueue Administration",-1),q=t("br",null,null,-1),z=t("br",null,null,-1),J=t("br",null,null,-1),W={class:"text-red-500 text-sm text-center"},X=t("br",null,null,-1),rt=C({__name:"login",async setup($){let l,_;const c=p(""),h=N();[l,_]=F(()=>E()),l=await l,_(),l&&f("/");const b=i.object({username:i.string().min(5,"Invalid username"),password:i.string().min(5,"Must be at least 8 characters")}),s=p({username:void 0,password:void 0});async function w(u){const{data:o}=await Q(h.public.API_URL+"/auth/login/admin",{method:"post",body:{username:u.data.username,password:u.data.password}},"$4Q7McJQDXG");let a=o.value;if(a.startsWith("Error"))c.value=a.slice(7).toUpperCase();else{const r=T("token");r.value=a,f("/")}}return(u,o)=>{const a=g,r=V,d=y,x=k,v=U;return S(),A(D,null,[e(a,null,{default:n(()=>[G]),_:1}),t("div",L,[M,P,R,q,e(v,{schema:B(b),state:s.value,onSubmit:w},{default:n(()=>[e(d,{label:"Username",name:"username"},{default:n(()=>[e(r,{modelValue:s.value.username,"onUpdate:modelValue":o[0]||(o[0]=m=>s.value.username=m)},null,8,["modelValue"])]),_:1}),z,e(d,{label:"Password",name:"password"},{default:n(()=>[e(r,{modelValue:s.value.password,"onUpdate:modelValue":o[1]||(o[1]=m=>s.value.password=m),type:"password"},null,8,["modelValue"])]),_:1}),J,t("h1",W,H(c.value),1),X,e(x,{type:"submit",block:""},{default:n(()=>[I(" Submit ")]),_:1})]),_:1},8,["schema","state"])])],64)}}});export{rt as default};
