if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,l)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const t=e=>i(e,n),o={module:{uri:n},exports:a,require:t};s[n]=Promise.all(r.map((e=>o[e]||t(e)))).then((e=>(l(...e),a)))}}define(["./workbox-ab24e45d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"about.html",revision:"ddeda528acfc43d307c68eeddcfaa8e6"},{url:"assets/_...all_.fdbb3dcb.js",revision:null},{url:"assets/_name_.f2711d0b.js",revision:null},{url:"assets/404.5f1fd9a4.js",revision:null},{url:"assets/about.9ae48f89.js",revision:null},{url:"assets/app.7b497200.js",revision:null},{url:"assets/figures.00bcff37.js",revision:null},{url:"assets/home.c6e68768.js",revision:null},{url:"assets/index.432ba189.css",revision:null},{url:"assets/README.5d0bd483.js",revision:null},{url:"assets/tables.3460018b.js",revision:null},{url:"assets/toc.408a7eef.js",revision:null},{url:"assets/toc.7a855d94.js",revision:null},{url:"assets/toc.ea3cdea2.js",revision:null},{url:"assets/virtual_pwa-register.e7ed1604.js",revision:null},{url:"assets/workbox-window.prod.es5.6954f450.js",revision:null},{url:"entromancy/toc.html",revision:"52464c9b19648781f5fdf766a9dda3de"},{url:"index.html",revision:"ec231cec368b25d7a1af481edf14577f"},{url:"readme.html",revision:"0f54fde09acbc22c78b87ec87b2d62e7"},{url:"tresspasser/toc.html",revision:"7108fe7985bd69c1e64e5b9829c11347"},{url:"whitehack/figures.html",revision:"c666198ff2c23aec3f57831ecc1c18ee"},{url:"whitehack/tables.html",revision:"a4c7dd33a567545a95a3285d935dff90"},{url:"whitehack/toc.html",revision:"9940f828f0be058361e3b0d3c36d4fd0"},{url:"favicon.svg",revision:"a795ab195c26601ea433babed25a7d0d"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"5576f4a57f2daa61d5a2913e24ed22a4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));