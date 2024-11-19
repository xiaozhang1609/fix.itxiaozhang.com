import{u as E,r as a,j as e,m as s,T as M,A as S}from"./index-D8C4Unn2.js";import{B as v}from"./react-toastify.esm-BDD_vWTD.js";import{P as R,a as I}from"./play-CgSQRvbe.js";import{R as P}from"./rotate-ccw-CM884J6v.js";import{a as F,M as H}from"./minimize-2-C6SSg3p2.js";const $=[{value:"300",label:"5分钟"},{value:"600",label:"10分钟"},{value:"900",label:"15分钟"},{value:"1800",label:"30分钟"},{value:"3600",label:"1小时"},{value:"custom",label:"自定义"}],j=({time:l,size:n="normal"})=>e.jsx(s.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},className:`font-mono font-bold text-center ${n==="large"?"text-[12rem]":"text-7xl"}`,children:l});function D(){const{t:l}=E(),[n,o]=a.useState(300),[c,u]=a.useState(!1),[g,m]=a.useState(!1),[i,p]=a.useState("300"),[d,w]=a.useState(5),x=a.useRef(null),f=a.useCallback(t=>{const r=Math.floor(t/3600),T=Math.floor(t%3600/60),C=t%60;return[r,T,C].map(h=>h<10?"0"+h:h).join(":")},[]),y=a.useCallback(()=>u(!0),[]),N=a.useCallback(()=>u(!1),[]),k=a.useCallback(()=>{u(!1),o(i==="custom"?Math.max(d,1)*60:parseInt(i))},[i,d]),b=a.useCallback(async()=>{try{!document.fullscreenElement&&x.current?(await x.current.requestFullscreen(),m(!0)):document.fullscreenElement&&(await document.exitFullscreen(),m(!1))}catch(t){console.error(t),v.error(l("fullscreenError"))}},[l]);return a.useEffect(()=>{let t;return c&&n>0&&(t=setInterval(()=>{o(r=>r<=1?(u(!1),v.success(l("timeUp"),{position:"top-right",autoClose:3e3,theme:"dark"}),0):r-1)},1e3)),()=>clearInterval(t)},[c,l]),a.useEffect(()=>{const t=()=>{m(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",t),()=>{document.removeEventListener("fullscreenchange",t)}},[]),e.jsx("div",{ref:x,className:`relative w-full ${g?"h-screen":"min-h-screen"} bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/30 dark:to-pink-900/20`,children:g?e.jsxs("div",{className:"fixed inset-0 flex items-center justify-center",children:[e.jsx(j,{time:f(n),size:"large"}),e.jsx(s.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:b,className:"fixed top-4 right-4 p-4 bg-purple-500 rounded-xl text-white",children:e.jsx(H,{className:"w-6 h-6"})})]}):e.jsx("div",{className:"container mx-auto px-4 py-8",children:e.jsxs(s.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"max-w-2xl mx-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden",children:[e.jsxs("div",{className:"relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-10"}),e.jsxs("div",{className:"relative p-8 text-center",children:[e.jsx(s.div,{whileHover:{rotate:360},transition:{duration:.5},className:"w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center",children:e.jsx(M,{className:"w-8 h-8 text-white"})}),e.jsx("h1",{className:"text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent",children:l("basicTimer")})]})]}),e.jsxs("div",{className:"p-8",children:[e.jsx(j,{time:f(n)}),e.jsxs("div",{className:"mt-8 space-y-4",children:[e.jsx("div",{className:"grid grid-cols-3 gap-2",children:$.slice(0,-1).map(t=>e.jsx("button",{onClick:()=>{p(t.value),o(parseInt(t.value))},className:`p-3 rounded-xl transition-all ${i===t.value?"bg-gradient-to-r from-indigo-500 to-purple-500 text-white":"bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"}`,children:t.label},t.value))}),e.jsx("button",{onClick:()=>p("custom"),className:`w-full p-3 rounded-xl transition-all ${i==="custom"?"bg-gradient-to-r from-indigo-500 to-purple-500 text-white":"bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"}`,children:"自定义时间"}),e.jsx(S,{children:i==="custom"&&e.jsx(s.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},className:"overflow-hidden",children:e.jsx("input",{type:"number",value:d,onChange:t=>{const r=Math.max(1,parseInt(t.target.value)||1);w(r),o(r*60)},className:"w-full p-3 bg-gray-100 dark:bg-gray-700 rounded-xl",min:"1",placeholder:"输入分钟数"})})})]}),e.jsxs("div",{className:"mt-8 grid grid-cols-4 gap-2",children:[e.jsxs(s.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:c?N:y,className:"col-span-2 p-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white flex items-center justify-center gap-2",children:[c?e.jsx(R,{className:"w-5 h-5"}):e.jsx(I,{className:"w-5 h-5"}),e.jsx("span",{children:c?"暂停":"开始"})]}),e.jsx(s.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:k,className:"p-4 bg-pink-500 rounded-xl text-white",children:e.jsx(P,{className:"w-5 h-5 mx-auto"})}),e.jsx(s.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:b,className:"p-4 bg-purple-500 rounded-xl text-white",children:e.jsx(F,{className:"w-5 h-5 mx-auto"})})]})]})]})})})}export{D as default};
