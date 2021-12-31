import{p as $}from"./plus.2577ccca.js";import{a as x}from"./index.d63de525.js";import{d as r,p,q as _,e as u,t as g,u as e,f as j,B as l,H as b,z as h,g as d,y as z,F as S}from"./framework.6504b2a8.js";import{J as M}from"./index.8062fad1.js";import{z as V,d as T}from"./zoom-in.e269d927.js";import{_ as O}from"./delete.fc3b7ab4.js";import{u as U}from"./upload-filled.f784a58e.js";const R=["src"],P=r({setup(m){const t=p(""),n=(a,s)=>{t.value=URL.createObjectURL(s.raw)},i=a=>{const s=a.type==="image/jpeg",o=a.size/1024/1024<2;return s||x.error("Avatar picture must be JPG format!"),o||x.error("Avatar picture size can not exceed 2MB!"),s&&o};return(a,s)=>{const o=_("el-icon"),c=_("el-upload");return u(),g(c,{class:"avatar-uploader",action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":n,"before-upload":i},{default:e(()=>[t.value?(u(),j("img",{key:0,src:t.value,class:"avatar"},null,8,R)):(u(),g(o,{key:1,class:"avatar-uploader-icon"},{default:e(()=>[l(b($))]),_:1}))]),_:1})}}});var be=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P});const q=h("Click to upload"),B=d("div",{class:"el-upload__tip"}," jpg/png files with a size less than 500kb ",-1),L=r({setup(m){const t=p([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]),n=(o,c)=>{console.log(o,c)},i=o=>{console.log(o)},a=(o,c)=>{x.warning(`The limit is 3, you selected ${o.length} files this time, add up to ${o.length+c.length} totally`)},s=(o,c)=>M.confirm(`Cancel the transfert of ${o.name} ?`);return(o,c)=>{const v=_("el-button"),f=_("el-upload");return u(),g(f,{class:"upload-demo",action:"https://jsonplaceholder.typicode.com/posts/","on-preview":i,"on-remove":n,"before-remove":s,multiple:"",limit:3,"on-exceed":a,"file-list":t.value},{tip:e(()=>[B]),default:e(()=>[l(v,{type:"primary"},{default:e(()=>[q]),_:1})]),_:1},8,["file-list"])}}});var ve=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:L});const E=["src"],A={class:"el-upload-list__item-actions"},F=["onClick"],N=["onClick"],I=["onClick"],J=["src"],D=r({setup(m){const t=p(""),n=p(!1),i=p(!1),a=c=>{console.log(c)},s=c=>{t.value=c.url,n.value=!0},o=c=>{console.log(c)};return(c,v)=>{const f=_("el-icon"),w=_("el-upload"),C=_("el-dialog");return u(),j(S,null,[l(w,{action:"#","list-type":"picture-card","auto-upload":!1},{default:e(()=>[l(f,null,{default:e(()=>[l(b($))]),_:1})]),file:e(({file:y})=>[d("div",null,[d("img",{class:"el-upload-list__item-thumbnail",src:y.url,alt:""},null,8,E),d("span",A,[d("span",{class:"el-upload-list__item-preview",onClick:k=>s(y)},[l(f,null,{default:e(()=>[l(b(V))]),_:1})],8,F),i.value?z("",!0):(u(),j("span",{key:0,class:"el-upload-list__item-delete",onClick:k=>o(y)},[l(f,null,{default:e(()=>[l(b(T))]),_:1})],8,N)),i.value?z("",!0):(u(),j("span",{key:1,class:"el-upload-list__item-delete",onClick:k=>a(y)},[l(f,null,{default:e(()=>[l(b(O))]),_:1})],8,I))])])]),_:1}),l(C,{modelValue:n.value,"onUpdate:modelValue":v[0]||(v[0]=y=>n.value=y)},{default:e(()=>[d("img",{width:"100%",src:t.value,alt:""},null,8,J)]),_:1},8,["modelValue"])],64)}}});var ye=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:D});const G=d("div",{class:"el-upload__text"},[h(" Drop file here or "),d("em",null,"click to upload")],-1),H=d("div",{class:"el-upload__tip"}," jpg/png files with a size less than 500kb ",-1),K=r({setup(m){return(t,n)=>{const i=_("el-icon"),a=_("el-upload");return u(),g(a,{class:"upload-demo",drag:"",action:"https://jsonplaceholder.typicode.com/posts/",multiple:""},{tip:e(()=>[H]),default:e(()=>[l(i,{class:"el-icon--upload"},{default:e(()=>[l(b(U))]),_:1}),G]),_:1})}}});var je=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:K});const Q=h("Click to upload"),W=d("div",{class:"el-upload__tip"}," jpg/png files with a size less than 500kb ",-1),X=r({setup(m){const t=p([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]),n=(a,s)=>{console.log(a,s)},i=a=>{console.log(a)};return(a,s)=>{const o=_("el-button"),c=_("el-upload");return u(),g(c,{class:"upload-demo",action:"https://jsonplaceholder.typicode.com/posts/","on-preview":i,"on-remove":n,"file-list":t.value,"list-type":"picture"},{tip:e(()=>[W]),default:e(()=>[l(o,{type:"primary"},{default:e(()=>[Q]),_:1})]),_:1},8,["file-list"])}}});var we=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:X});const Y=h("Click to upload"),Z=d("div",{class:"el-upload__tip"}," jpg/png files with a size less than 500kb ",-1),ee=r({setup(m){const t=p([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]),n=(i,a)=>{t.value=t.value.slice(-3)};return(i,a)=>{const s=_("el-button"),o=_("el-upload");return u(),g(o,{class:"upload-demo",action:"https://jsonplaceholder.typicode.com/posts/","on-change":n,"file-list":t.value},{tip:e(()=>[Z]),default:e(()=>[l(s,{type:"primary"},{default:e(()=>[Y]),_:1})]),_:1},8,["file-list"])}}});var $e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ee});const oe=h("select file"),te=h("upload to server"),le=d("div",{class:"el-upload__tip",style:{color:"red"}}," limit 1 file, new file will cover the old file ",-1),ae=r({setup(m){const t=p(),n=a=>{t.value.clearFiles(),t.value.handleStart(a[0])},i=()=>{t.value.submit()};return(a,s)=>{const o=_("el-button"),c=_("el-upload");return u(),g(c,{ref_key:"upload",ref:t,class:"upload-demo",action:"https://jsonplaceholder.typicode.com/posts/",limit:1,"on-exceed":n,"auto-upload":!1},{trigger:e(()=>[l(o,{type:"primary"},{default:e(()=>[oe]),_:1})]),tip:e(()=>[le]),default:e(()=>[l(o,{class:"ml-3",type:"success",onClick:i},{default:e(()=>[te]),_:1})]),_:1},512)}}});var xe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ae});const se=h("select file"),ne=h("upload to server"),ce=d("div",{class:"el-upload__tip"}," jpg/png files with a size less than 500kb ",-1),_e=r({setup(m){const t=p(),n=()=>{t.value.submit()};return(i,a)=>{const s=_("el-button"),o=_("el-upload");return u(),g(o,{ref_key:"uploadRef",ref:t,class:"upload-demo",action:"https://jsonplaceholder.typicode.com/posts/","auto-upload":!1},{trigger:e(()=>[l(s,{type:"primary"},{default:e(()=>[se]),_:1})]),tip:e(()=>[ce]),default:e(()=>[l(s,{class:"ml-3",type:"success",onClick:n},{default:e(()=>[ne]),_:1})]),_:1},512)}}});var ke=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_e});const ie=["src"],de=r({setup(m){const t=p(""),n=p(!1),i=(s,o)=>{console.log(s,o)},a=s=>{t.value=s.url,n.value=!0};return(s,o)=>{const c=_("el-icon"),v=_("el-upload"),f=_("el-dialog");return u(),j(S,null,[l(v,{action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card","on-preview":a,"on-remove":i},{default:e(()=>[l(c,null,{default:e(()=>[l(b($))]),_:1})]),_:1}),l(f,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=w=>n.value=w)},{default:e(()=>[d("img",{width:"100%",src:t.value,alt:""},null,8,ie)]),_:1},8,["modelValue"])],64)}}});var ze=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:de});export{be as _,ve as a,ye as b,je as c,we as d,$e as e,xe as f,ke as g,ze as h};