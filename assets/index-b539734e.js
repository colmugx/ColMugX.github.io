import{c as d,a as F,b as U,u as G,d as l,e as m,i as y,t as p,o as v,f as L,g as $,k as _,h as k,j as x,F as M,l as T,m as H,n as Y,p as K,q as S,r as X,S as z,s as J}from"./vendor-92de4334.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();const q=F({}),Q=({theme:i,children:t})=>d(q.Provider,{value:i,children:t}),[V,O]=U({linkStatus:"",detail:""}),j=[V,{jumpLink(i){O(t=>({...t,linkStatus:i}))},setDetail(i){O(t=>({...t,detail:i}))}}],B=F(j),Z=({children:i})=>d(B.Provider,{value:j,children:i}),W=()=>G(B),ee=p("<div><div></div><div><span>ColmugX | TFD"),te=l`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`,ne=l`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,oe=l`
  padding: 16px 0;
  font-size: 14px;
  font-family: "Helvetica";
  color: #999;
  font-weight: 100;
  text-align: center;
`,re={colors:{primary:"#383838"}},ie=({children:i})=>d(Z,{get children(){return d(Q,{theme:re,get children(){const t=ee(),e=t.firstChild,o=e.nextSibling;return m(t,te),m(e,ne),y(e,i),m(o,oe),t}})}});class E{constructor(t,e){this.canvas=t;const o=Object.assign({},E.defaultOptions,e),n=t.getContext("2d");n.lineWidth=o.weight,this.ctx=n,this.options=o,this.renderList=[]}ctx;renderList;options;playTimer;createTimer;init(){if(!this.renderList.length){for(this.reset();this.renderList.length<this.options.num;){const t=this.generate();for(const e of this.renderList)if(this.renderList.length&&this.isOverlap(e,t))break;this.renderList.push(t)}this.playTimer=setTimeout(()=>{this.play()},this.options.interval)}}destroy(){clearTimeout(this.playTimer),clearTimeout(this.createTimer),this.playTimer=null,this.createTimer=null}play(){for(let t=0;t<this.renderList.length;t++)this.createTimer=setTimeout(()=>{this.create(this.renderList[t])},t*this.options.delay)}create(t){const e=this.ctx,{diameter:o,x:n,y:r,alpha:c}=t,a=o/2;e.clearRect(n-a,r-a,o+3,o+3),e.strokeStyle=`rgba(${this.options.color}, ${c})`,e.beginPath(),e.lineTo(n-a,r-a),e.lineTo(n+a,r-a),e.lineTo(n+a,r+a),e.lineTo(n-a,r+a),e.closePath(),e.stroke(),c>=1?this.melt({diameter:o,defaultdiameter:o,alpha:c,x:n,y:r}):window.requestAnimationFrame(()=>this.create({diameter:o,alpha:c+.02,x:n,y:r}))}melt(t){const e=this.ctx,{diameter:o,x:n,y:r,alpha:c,defaultdiameter:a}=t,s=o/2;e.clearRect(n-s-1,r-s-1,o+3,o+3),e.strokeStyle=`rgba(${this.options.color}, ${c})`,e.beginPath(),e.lineTo(n-s,r-s),e.lineTo(n+s,r-s),e.lineTo(n+s,r+s),e.lineTo(n-s,r+s),e.closePath(),e.stroke(),c>0?window.requestAnimationFrame(()=>this.melt({diameter:o+.5,defaultdiameter:a,alpha:c-.02,x:n,y:r})):(this.renderList.shift(),this.init())}reset(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}randomNum(t,e=0){return Math.floor(Math.random()*(t-e+1)+e)}generate(){return{alpha:0,x:this.randomNum(this.canvas.width-300),y:this.randomNum(this.canvas.height-300),diameter:this.randomNum(10,100)}}isOverlap(t,e){return t.x+t.diameter/2>=e.x-e.diameter/2||t.y+t.diameter/2>=e.y-e.diameter/2||e.x+e.diameter/2>=t.x-t.diameter/2||e.y+e.diameter/2>=t.y-t.diameter/2}static defaultOptions={num:3,weight:3,color:"235, 235, 235",delay:100,interval:3e3}}const se=p("<canvas>"),ae=l`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`,le=()=>{let i,t;v(()=>{e(),window.onresize=()=>{e()},t=new E(i,{num:6,interval:0}),t.init()}),L(()=>{t?.destroy()});const e=()=>{i.width=window.innerWidth,i.height=window.innerHeight};return(()=>{const o=se(),n=i;return typeof n=="function"?$(n,o):i=o,m(o,ae),o})()},ce=p("<div><p>"),de=p("<div>"),me=p("<div>Loading..."),fe=_`
  from { transform: translate3d(-60px, 0, 0); }
  to { transform: translate3d(0, 0, 0); }
`,ue=_`
  from { transform: translate3d(0, 60px, 0); }
  to { transform: translate3d(0, 0, 0); }
`,pe=_`
  from { transform: translate3d(0, -60px, 0); }
  to { transform: translate3d(0, 0, 0); }
`,he=l`
  display: grid;
  grid-gap: 24px;
`,ge=l`
  overflow: hidden;
  margin: 0;
  font-size: 72px;
  transform: scaleY(1.6);
  height: 75%;
  transition-origin: left bottom;
`,ye=l`
  grid-column: 1 / 2;
  grid-row: 1;
  font-size: 120px;
`,xe=l`
  grid-column: 3 / 4;
  grid-row: 1;
  font-size: 120px;
`,ve=l`
  grid-column: 4 / 1;
  grid-row: 2;
  font-size: 100px;
  transform: scaleY(1.7);
`,we=[ye,xe,ve],be=[fe,pe,ue].map(i=>l`
    margin: 0;
    animation: ${i} 300ms cubic-bezier(0.76, 0.08, 0.03, 0.9);
  `),$e=({callback:i})=>{let t,e,o,n;const r=[t,e,o],a=["Hi","Welcome!","Make yourself"].map((u,h)=>(()=>{const g=ce(),f=g.firstChild,w=r[h];return typeof w=="function"?$(w,g):r[h]=g,y(f,u),k(b=>{const A=x(ge,we[h]),C=be[h];return A!==b._v$&&m(g,b._v$=A),C!==b._v$2&&m(f,b._v$2=C),b},{_v$:void 0,_v$2:void 0}),g})()),s=()=>{setTimeout(()=>{n.style.transform="scale(1.4)"},500),setTimeout(()=>{n.style.transform="scale(0)"},800),setTimeout(()=>{i(!0)},1200)};return v(()=>{r[r.length-1].addEventListener("animationend",s),r[r.length-1].addEventListener("webkitAnimationend",s),r[r.length-1].addEventListener("mozAnimationend",s)}),L(()=>{r[r.length-1].removeEventListener("animationend",s),r[r.length-1].removeEventListener("webkitAnimationend",s),r[r.length-1].removeEventListener("mozAnimationend",s)}),(()=>{const u=de(),h=n;return typeof h=="function"?$(h,u):n=u,m(u,he),y(u,d(M,{each:a,get fallback(){return me()},children:g=>g})),u})()},Le=_`
  from { background-position: 100% 0; }
  to { background-position: -100% 0; }
`,_e=_`
  0%, 20% { background-color: transparent; color: #383838; }
  10% { background-color: #383838; color: #fff; }
  30% { background-color: #383838; color: #fff; opacity: 0; }
  100% { background-color: #383838; color: #fff; opacity: 1; }
`,ke=p("<div><div>NOTICE</div><div><div><p>换了个风格，但是还没写好</p><p>你可以看到下面的按钮都是灰的</p><br><p>↑↑↓↓←→←→ BA？"),Te=()=>{const i=l`
    position: absolute;
    top: -124px;
    right: 16px;
    width: 300px;
    min-height: 200px;
    border-top: 1px solid #999;
    padding: 16px;
    background-color: #fff;

    &:before {
      content: '';
      position: absolute;
      top: 20%;
      left: 0;
      width: 100%;
      height: 60%;
      border: 1px solid transparent;
      border-left-color: #999;
      border-right-color: #999;
    }
    &:after {
      content: '';
      position: absolute;
      top: -2px;
      left: 30%;
      width: 40%;
      height: calc(100% - 2px);
      border: 1px solid transparent;
      border-top-width: 3px;
      border-top-color: #fff;
      border-bottom-color: #999;
    }

    @media (max-width: 820px) {
      display: none;
    }
  `,t=l`
    z-index: 1;
    position: relative;
    text-align: center;
    font-size: 28px;
    margin-top: -30px;
    color: #666;
  `,e=l`
    box-sizing: border-box;
    padding: 16px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      margin: 0;
      line-height: 2;
      font-family: system-ui;
    }
  `;return(()=>{const o=ke(),n=o.firstChild,r=n.nextSibling;return m(n,t),m(r,e),k(()=>m(o,x(i,"syuanpi","tvIn","back-3"))),o})()},Se=p("<div><div><p></p></div><div><p>"),Ee=l`
  position: relative;
  background-color: #fff;

  @media (max-width: 820px) {
    padding: 0 32px;
  }
`,P=l`
  transition: transform 300ms ease;
  transform: scale(1.5);
  transform-origin: left;
`,N=l`
  background-image: -webkit-linear-gradient(
    left,
    #fff 0%,
    #383838,
    #fff 50%,
    #fff
  );
  text-fill-color: transparent;
  background-clip: text;
  background-size: 200% 100%;
  animation: ${Le} 7s cubic-bezier(0.05, 0.5, 0.8, 0.4) infinite;
`,I=l`
  font-size: 42px;
  margin: 8px 0;
  font-weight: 500;
  transition: all 280ms ease;
`,Ae=l`
  animation-delay: 180ms;
  background-position: 100% 0;
`,Ce=({powerMode:i})=>{const t="ColmugX Homepage";return(()=>{const e=Se(),o=e.firstChild,n=o.firstChild,r=o.nextSibling,c=r.firstChild;return m(e,Ee),m(n,I),y(n,()=>i()?"POWER! ON!":"Welcome!"),m(c,I),y(c,(()=>{const a=T(()=>!!i());return()=>a()?t.toUpperCase():t})()),y(e,d(Te,{}),null),k(a=>{const s=x(N,i()&&P),u=x(N,Ae,i()&&P);return s!==a._v$&&m(o,a._v$=s),u!==a._v$2&&m(r,a._v$2=u),a},{_v$:void 0,_v$2:void 0}),e})()},ze=p("<div>"),R=l`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  padding: 16px;
  border-radius: 2px;
  min-width: 100px;
  min-height: 50%;
  margin: 32px 16px;
  cursor: pointer;
  user-select: none;

  &:hover {
    animation: ${_e} 300ms ease forwards;
  }

  &:active {
    transform: scale(0.96) translateY(2px);
    transition: transform 260ms ease;
  }

  @media (max-width: 820px) {
    min-width: auto;
    min-height: auto;
    margin: 0;
  }
`,D=l`
  font-size: 36px;
`,Oe=l`
  animation: none !important;
  border: none;
  color: #c0c0c0;
  cursor: not-allowed;
`,Pe=({title:i,powerMode:t,index:e,link:o,disabled:n=!1})=>{const[r,{jumpLink:c,setDetail:a}]=W();let s;const u=()=>{s.className=x(R,t()&&D,n&&Oe)};v(()=>{s.addEventListener("animationend",u)}),L(()=>{s.removeEventListener("animationend",u)});const h=()=>{if(o){c(o);return}a(i),g()},g=()=>{const f=s.getBoundingClientRect();console.log(f.top,f.left,f.width,f.height)};return(()=>{const f=ze();f.$$click=h;const w=s;return typeof w=="function"?$(w,f):s=f,y(f,i),k(()=>m(f,x(R,"syuanpi","fadeInLeftShort",e?`back-${e}`:null,t()&&D))),f})()};H(["click"]);const Ne=p("<div>"),Ie=l`
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 820px) {
    margin-top: 32px;
    flex-direction: column;
  }
`,Re=({powerMode:i})=>{const t=[{name:"BLOG",link:"/blog"},{name:"PROJECT",children:[]},{name:"DESIGN",children:[]},{name:"FRIENDLINKS",children:[]},{name:"ABOUT",link:"/blog/about"}];return(()=>{const e=Ne();return m(e,Ie),y(e,d(M,{each:t,children:({name:o,children:n,...r},c)=>d(Pe,Y({title:o,get index(){return c()},get disabled(){return Array.isArray(n)&&!n.length},powerMode:i},r))})),e})()},De=p("<div>"),Fe=({children:i})=>{let t;const[e]=W();return v(()=>{K(()=>{e.linkStatus&&(t.addEventListener("animationend",()=>{window.location.href=e.linkStatus}),t.className="syuanpi shuttleOut")})}),(()=>{const o=De(),n=t;return typeof n=="function"?$(n,o):t=o,y(o,i),o})()},Me=()=>{let i;const[t,e]=S(!1),[o,n]=S(!1);return v(()=>{i=new X({ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba:()=>{n(!0)}})}),L(()=>{i&&(i.destroy(),n(!1))}),d(ie,{get children(){return[d(z,{get when(){return!t()},get children(){return d($e,{callback:e})}}),d(z,{get when(){return t()},get children(){return[d(le,{}),d(Fe,{get children(){return[d(Ce,{powerMode:o}),d(Re,{powerMode:o})]}})]}})]}})};J(()=>{const[i,t]=S(!1),e=document.getElementById("loading"),o=()=>{e.remove(),t(!0)};return v(()=>{window.onload=()=>{e.querySelector(".loading").addEventListener("animationend",o),e.querySelector(".loading").addEventListener("webkitAnimationend",o),e.querySelector(".loading").addEventListener("mozAnimationend",o),e.querySelector(".loading").classList.add("syuanpi"),e.querySelector(".loading").classList.add("melt")}}),L(()=>{e.querySelector(".loading").removeEventListener("animationend",o),e.querySelector(".loading").removeEventListener("webkitAnimationend",o),e.querySelector(".loading").removeEventListener("mozAnimationend",o)}),T((()=>{const n=T(()=>!!i());return()=>n()?d(Me,{}):null})())},document.getElementById("root"));
