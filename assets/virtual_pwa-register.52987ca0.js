import{_ as f}from"./app.1296fd7c.js";function _(l={}){const{immediate:d=!1,onNeedRefresh:g,onOfflineReady:r,onRegistered:i,onRegisteredSW:s,onRegisterError:o}=l;let t,n;const c=async(a=!0)=>{await n};async function u(){if("serviceWorker"in navigator){const{Workbox:a,messageSW:v}=await f(()=>import("./workbox-window.prod.es5.6954f450.js"),[]);t=new a("/tyt-ruleset/sw.js",{scope:"/tyt-ruleset/",type:"classic"}),t.addEventListener("activated",e=>{e.isUpdate?window.location.reload():r==null||r()}),t.register({immediate:d}).then(e=>{s?s("/tyt-ruleset/sw.js",e):i==null||i(e)}).catch(e=>{o==null||o(e)})}}return n=u(),c}export{_ as registerSW};