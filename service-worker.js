if(!self.define){let e,r={};const i=(i,s)=>(i=new URL(i+".js",s).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,o)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(r[d])return;let c={};const a=e=>i(e,d),u={module:{uri:d},exports:c,require:a};r[d]=Promise.all(s.map((e=>u[e]||a(e)))).then((e=>(o(...e),c)))}}define(["./workbox-4ba9311d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/FortisSecured/.DS_Store",revision:"860b56471126b8283a0bde0e5199eb1f"},{url:"/FortisSecured/26.b1f9ecdae6397d8b1f5b.js",revision:null},{url:"/FortisSecured/404.html",revision:"0dd46e11051f51c7d2da9648e2be011a"},{url:"/FortisSecured/763.c64c0c4f373f99163eba.js",revision:null},{url:"/FortisSecured/763.c64c0c4f373f99163eba.js.LICENSE.txt",revision:"10f1a5e901be77c2419435aa2e4e7e11"},{url:"/FortisSecured/CNAME/CNAME",revision:"5248e8c8c86eca61f334008aa3834d12"},{url:"/FortisSecured/android-chrome-192x192.png",revision:"386ee5758b45ac67e918bdec63e775d1"},{url:"/FortisSecured/android-chrome-512x512.png",revision:"ec7c2863f40ff898d7b71148c29c7169"},{url:"/FortisSecured/apple-touch-icon.png",revision:"6b90e8ada74976704680a7e17d94705f"},{url:"/FortisSecured/css/styles.0e1e65507ad81fa4afc2.css",revision:null},{url:"/FortisSecured/event-security.jpg",revision:"f2ed088e318dfd7aedd3ba06bb47f045"},{url:"/FortisSecured/favicon-16x16.png",revision:"59f162a0ef5ff4f0914110b2e0fc8112"},{url:"/FortisSecured/favicon-32x32.png",revision:"7b9e6f220532458ae4b179ae36e89eff"},{url:"/FortisSecured/favicon.ico",revision:"52dc5c30c7d76dc68a746f28ec3b3f2c"},{url:"/FortisSecured/image-sitemap.xml",revision:"e0d5aaccdcd7e2ebebd142753b03cf2d"},{url:"/FortisSecured/images/.DS_Store",revision:"20584eb94dd62341d4274792e43b9777"},{url:"/FortisSecured/images/door-supervision.6f4d9dc152fcfe2628a8.jpg",revision:null},{url:"/FortisSecured/images/event-security.ac5dbdafe821cdffa98e.jpg",revision:null},{url:"/FortisSecured/images/hero-2.jpg",revision:"ab067f258df1e17481315b66ab64b13f"},{url:"/FortisSecured/images/hero-3.jpg",revision:"dd2a54b32595ab616d59ce68861815d0"},{url:"/FortisSecured/images/hero.jpg",revision:"510f79c516f871956ebfb064fd951f03"},{url:"/FortisSecured/images/logo.png",revision:"0dbc2e31dc808c21615f25ac49227313"},{url:"/FortisSecured/images/manned-guarding.68aaf317a997117be7b8.jpg",revision:null},{url:"/FortisSecured/images/optimized/hero-2.jpg",revision:"e9357fede3b4faf87fdbcb0e03769a0e"},{url:"/FortisSecured/images/optimized/hero-3.jpg",revision:"065174d7dd18fa36e6343c6d1961a636"},{url:"/FortisSecured/images/optimized/hero.jpg",revision:"6fc64f0633b0e36d46f27a99365388c5"},{url:"/FortisSecured/images/optimized/logo.png",revision:"7064bc0758a14dd004da698563a3bf45"},{url:"/FortisSecured/images/responsive/hero-2-desktop.avif",revision:"7d33ab995500ea5a260e7d939f41ccbf"},{url:"/FortisSecured/images/responsive/hero-2-desktop.jpg",revision:"ec2356a4c9b5717123f097266a5591f6"},{url:"/FortisSecured/images/responsive/hero-2-desktop.webp",revision:"d27135adb02190f43d9f95982a32916a"},{url:"/FortisSecured/images/responsive/hero-2-mobile.avif",revision:"98f929b416743d857ea05e672d712f9f"},{url:"/FortisSecured/images/responsive/hero-2-mobile.jpg",revision:"abd0aeb7118bab95da3006105b418979"},{url:"/FortisSecured/images/responsive/hero-2-mobile.webp",revision:"b506dd2b684b7143f9632145db0b1a3a"},{url:"/FortisSecured/images/responsive/hero-2-tablet.avif",revision:"f318f1c4d8942ef7e4c4ac1a1faec742"},{url:"/FortisSecured/images/responsive/hero-2-tablet.jpg",revision:"6b504543f3240d32e6e7365a6f970cc1"},{url:"/FortisSecured/images/responsive/hero-2-tablet.webp",revision:"f44e529544aa39cc05e20ebd7e2eb897"},{url:"/FortisSecured/images/responsive/hero-3-desktop.avif",revision:"6691aa49ea7d4deff4c0d6eeda6f5735"},{url:"/FortisSecured/images/responsive/hero-3-desktop.jpg",revision:"3cdccf3c831c5d3bcde698b0225a19bc"},{url:"/FortisSecured/images/responsive/hero-3-desktop.webp",revision:"6314e18034069774292509bd1d0d5df7"},{url:"/FortisSecured/images/responsive/hero-3-mobile.avif",revision:"5a026657af543a0feae90fda683fb3ad"},{url:"/FortisSecured/images/responsive/hero-3-mobile.jpg",revision:"70ac12425bbd590c39be36ee0103639b"},{url:"/FortisSecured/images/responsive/hero-3-mobile.webp",revision:"d229e9d1d03aa362cb244420b961b478"},{url:"/FortisSecured/images/responsive/hero-3-tablet.avif",revision:"bcebb0b6f3e587096476bbe978d50042"},{url:"/FortisSecured/images/responsive/hero-3-tablet.jpg",revision:"ad406f3c912f2523e6919f34ed3f77e6"},{url:"/FortisSecured/images/responsive/hero-3-tablet.webp",revision:"003cb41a8ee4288460ae088c449caf1c"},{url:"/FortisSecured/images/responsive/hero-desktop.avif",revision:"2dbb78f3ba88ee7fe72b374bb29e15c4"},{url:"/FortisSecured/images/responsive/hero-desktop.jpg",revision:"5db0a9f24ef0bb186b87f8e1f471ef90"},{url:"/FortisSecured/images/responsive/hero-desktop.webp",revision:"8224faa77bd70023b2cf3726d51585d0"},{url:"/FortisSecured/images/responsive/hero-mobile.avif",revision:"40bd41b298c3113817c4be9eaa4759a8"},{url:"/FortisSecured/images/responsive/hero-mobile.jpg",revision:"7a987b7e81fbf7132c78dcc03f014821"},{url:"/FortisSecured/images/responsive/hero-mobile.webp",revision:"8cdc284128869de32e3cd14206efe026"},{url:"/FortisSecured/images/responsive/hero-tablet.avif",revision:"40966e863264ede2fe2cf8953b0dfd31"},{url:"/FortisSecured/images/responsive/hero-tablet.jpg",revision:"9bd456ff4f4c9c50ce4c63e67b379a84"},{url:"/FortisSecured/images/responsive/hero-tablet.webp",revision:"79e16c0b2b880dbc801aebc71ee830eb"},{url:"/FortisSecured/images/responsive/logo-large.avif",revision:"6bb5f213d2fad8448da7baebda4eb152"},{url:"/FortisSecured/images/responsive/logo-large.jpg",revision:"334524e031d9f3c649ec9617f2bbfaad"},{url:"/FortisSecured/images/responsive/logo-large.webp",revision:"c7a524594adeb2be450ccbd7d46ab1e8"},{url:"/FortisSecured/images/responsive/logo-medium.avif",revision:"8ece64217bcdc82a775391a434faf773"},{url:"/FortisSecured/images/responsive/logo-medium.jpg",revision:"4e04a7b38c823f24728667e7dd1762af"},{url:"/FortisSecured/images/responsive/logo-medium.webp",revision:"c7a6d8c419939866c6b1e6de5b643681"},{url:"/FortisSecured/images/responsive/logo-small.avif",revision:"7238c662214740e59b01026d881eb9f3"},{url:"/FortisSecured/images/responsive/logo-small.jpg",revision:"2e0557905a579cb41f8d8b1d93227d0a"},{url:"/FortisSecured/images/responsive/logo-small.webp",revision:"a0dc7c7ab5d8dd85324937a82e276f9b"},{url:"/FortisSecured/images/risk-assessment.dc20df55ddb39cc8afa2.jpg",revision:null},{url:"/FortisSecured/index.html",revision:"c0e7330d65be2ede075c276f52d1f436"},{url:"/FortisSecured/main.e7039475d7f861ec2b3e.js",revision:null},{url:"/FortisSecured/modern/modern.e3e4f55b173fd1b5211d.js",revision:null},{url:"/FortisSecured/robots.txt",revision:"bb0e45a6939c3684c1f21b9e1b48efa0"},{url:"/FortisSecured/runtime.3bb874cdc650829a3cdf.js",revision:null},{url:"/FortisSecured/sitemap.xml",revision:"1981de2f14182113d81ecb74ff58827c"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg|gif)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"static-resources",plugins:[]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
