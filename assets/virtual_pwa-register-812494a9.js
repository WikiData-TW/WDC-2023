import{_ as v}from"./index-d57fb70c.js";function _(d={}){const{immediate:l=!1,onNeedRefresh:g,onOfflineReady:t,onRegistered:r,onRegisteredSW:o,onRegisterError:s}=d;let i,n;const c=async(a=!0)=>{await n};async function f(){if("serviceWorker"in navigator){const{Workbox:a}=await v(()=>import("./workbox-window.prod.es5-295a6886.js"),[]);i=new a("/sw.js",{scope:"/",type:"classic"}),i.addEventListener("activated",e=>{(e.isUpdate||e.isExternal)&&window.location.reload()}),i.addEventListener("installed",e=>{e.isUpdate||t==null||t()}),i.register({immediate:l}).then(e=>{o?o("/sw.js",e):r==null||r(e)}).catch(e=>{s==null||s(e)})}}return n=f(),c}export{_ as registerSW};
