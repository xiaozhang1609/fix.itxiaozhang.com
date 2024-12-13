import{c as L,u as z,r,j as s}from"./index-CV8Vws66.js";import{J as B}from"./jszip.min-Dx2JvIHI.js";import{D as G}from"./download-CAyZtQB9.js";import{U as T}from"./upload-B-8Tx4Ie.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=L("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]),q=[{id:"2x2",name:"2x2",rows:2,cols:2,description:"4份"},{id:"3x3",name:"3x3",rows:3,cols:3,description:"9份"},{id:"4x4",name:"4x4",rows:4,cols:4,description:"16份"}],W=i=>i>0&&i<=10;function Z(){z();const[i,$]=r.useState({file:null,preview:null}),[c,N]=r.useState(3),[o,k]=r.useState(3),[C,I]=r.useState(!1),[p,U]=r.useState("png"),[R,A]=r.useState("rgba(255, 255, 255, 0.5)"),[S,u]=r.useState(null),f=r.useRef(null),D=r.useRef(null),E=r.useCallback(e=>{const t=D.current;if(!t)return;const a=t.getContext("2d");if(!a)return;const d=Math.min(1,800/e.width);t.width=e.width*d,t.height=e.height*d,a.clearRect(0,0,t.width,t.height);const x=t.width/o,g=t.height/c;for(let m=0;m<c;m++)for(let n=0;n<o;n++){const h=n*e.width/o,b=m*e.height/c,v=e.width/o,w=e.height/c,j=n*x,y=m*g;a.drawImage(e,h,b,v,w,j,y,x,g),a.strokeStyle=R,a.lineWidth=2,a.strokeRect(j,y,x,g),a.fillStyle="rgba(255, 255, 255, 0.8)",a.font=`${14*d}px sans-serif`,a.fillText(`${m+1}-${n+1}`,j+5,y+20*d)}},[o,c,R]),M=r.useCallback(e=>{if(!e.type.startsWith("image/")){u("请上传图片文件");return}if(e.size>10*1024*1024){u("图片大小不能超过 10MB");return}u(null);const t=new FileReader;t.onload=a=>{var d;const l=new Image;l.onload=()=>{$({file:e,preview:l.src})},l.src=(d=a.target)==null?void 0:d.result},t.readAsDataURL(e)},[]),P=r.useCallback(async()=>{if(!(!i.file||!f.current)){I(!0);try{u(null);const e=new Image;e.src=i.preview,await new Promise(n=>{e.onload=n});const t=e.width/o,a=e.height/c,l=f.current,d=l.getContext("2d"),x=new B;for(let n=0;n<c;n++)for(let h=0;h<o;h++){l.width=t,l.height=a,d.drawImage(e,h*t,n*a,t,a,0,0,t,a);const b=await new Promise(v=>l.toBlob(w=>v(w),`image/${p}`));x.file(`part_${n+1}_${h+1}.${p}`,b)}const g=await x.generateAsync({type:"blob"}),m=document.createElement("a");m.href=URL.createObjectURL(g),m.download="split_images.zip",m.click()}catch(e){console.error("Error splitting image:",e),u("图片分割失败，请重试")}finally{I(!1)}}},[o,c,i,p]);return r.useEffect(()=>{if(i.preview){const e=new Image;e.onload=()=>E(e),e.src=i.preview}},[i,E]),s.jsxs("div",{className:"w-full max-w-7xl mx-auto p-4 md:p-6",children:[s.jsx("div",{className:"mb-6",children:s.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[s.jsx(_,{className:"w-6 h-6 text-blue-600 dark:text-blue-400"}),s.jsx("h1",{className:"text-2xl font-bold text-gray-900 dark:text-gray-50",children:"图片分割"})]})}),s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-5 gap-6",children:[s.jsxs("div",{className:"lg:col-span-2 space-y-4",children:[s.jsxs("div",{className:"card p-6",children:[s.jsx("h3",{className:"text-base font-medium mb-3",children:"预设"}),s.jsx("div",{className:"grid grid-cols-3 gap-2",children:q.map(e=>s.jsxs("button",{onClick:()=>{N(e.rows),k(e.cols)},className:"aspect-square flex flex-col items-center justify-center p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors",children:[s.jsx("div",{className:"font-medium",children:e.name}),s.jsx("div",{className:"text-xs text-gray-500 mt-1 text-center",children:e.description})]},e.id))})]}),s.jsxs("div",{className:"card p-6 space-y-4",children:[s.jsx("h3",{className:"text-base font-medium",children:"自定义"}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium mb-1.5",children:"行数"}),s.jsx("input",{type:"number",min:"1",max:"10",value:c,onChange:e=>{const t=parseInt(e.target.value);W(t)&&N(t)},className:"input w-full"})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium mb-1.5",children:"列数"}),s.jsx("input",{type:"number",min:"1",max:"10",value:o,onChange:e=>{const t=parseInt(e.target.value);W(t)&&k(t)},className:"input w-full"})]})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium mb-2",children:"格式"}),s.jsx("div",{className:"flex gap-4",children:["png","jpeg","webp"].map(e=>s.jsxs("label",{className:"flex items-center gap-2",children:[s.jsx("input",{type:"radio",name:"format",value:e,checked:p===e,onChange:t=>U(t.target.value),className:"text-blue-600"}),s.jsx("span",{className:"uppercase text-sm",children:e})]},e))})]}),s.jsxs("button",{onClick:P,disabled:C||!i.preview,className:"w-full h-11 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium rounded-lg disabled:opacity-50 transition-all",children:[s.jsx(G,{className:"w-5 h-5"}),C?"处理中":"下载"]})]})]}),s.jsx("div",{className:"lg:col-span-3",children:s.jsx("div",{className:"card p-6",children:i.preview?s.jsx("div",{className:"rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800",children:s.jsx("canvas",{ref:D,className:"w-full h-auto"})}):s.jsx("div",{className:"aspect-[4/3] flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 transition-colors cursor-pointer",onDragOver:e=>e.preventDefault(),onDrop:e=>{e.preventDefault();const t=e.dataTransfer.files[0];t&&t.type.startsWith("image/")&&M(t)},onClick:()=>{const e=document.createElement("input");e.type="file",e.accept="image/*",e.onchange=t=>{var l;const a=(l=t.target.files)==null?void 0:l[0];a&&M(a)},e.click()},children:s.jsxs("div",{className:"text-center",children:[s.jsx(T,{className:"w-12 h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"}),s.jsxs("p",{className:"text-gray-600 dark:text-gray-400",children:["点击或拖拽上传",s.jsx("br",{}),s.jsx("span",{className:"text-sm text-gray-500",children:"最大 10MB"})]})]})})})})]}),S&&s.jsx("div",{className:"mt-4 p-4 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg",children:S}),s.jsx("canvas",{ref:f,className:"hidden"})]})}export{Z as default};