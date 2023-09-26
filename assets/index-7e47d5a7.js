import{c as l,a as z,b as M,u as R,d as m,e as d,i as g,t as p,o as v,f as x,g as b,h as $,j as y,F as A,k as N,l as B,m as D,n as G,p as I,S as k,r as H,q as _}from"./vendor-ba019798.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();const W=z({}),U=({theme:o,children:t})=>l(W.Provider,{value:o,children:t}),[X,T]=M({linkStatus:"",detail:""}),P=[X,{jumpLink(o){T(t=>({...t,linkStatus:o}))},setDetail(o){T(t=>({...t,detail:o}))}}],F=z(P),K=({children:o})=>l(F.Provider,{value:P,children:o}),j=()=>R(F),J=p("<div><div></div><div><span>ColmugX | TFD"),Y=m`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`,q=m`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Q=m`
  padding: 16px 0;
  font-size: 14px;
  font-family: "Helvetica";
  color: #999;
  font-weight: 100;
  text-align: center;
`,V={colors:{primary:"#383838"}},Z=({children:o})=>l(K,{get children(){return l(U,{theme:V,get children(){const t=J(),e=t.firstChild,i=e.nextSibling;return d(t,Y),d(e,q),g(e,o),d(i,Q),t}})}});class w{constructor(t,e){this.canvas=t;const i=Object.assign({},w.defaultOptions,e),n=t.getContext("2d");n.lineWidth=i.weight,this.ctx=n,this.options=i,this.renderList=[]}ctx;renderList;options;playTimer;createTimer;init(){if(!this.renderList.length){for(this.reset();this.renderList.length<this.options.num;){const t=this.generate();for(const e of this.renderList)if(this.renderList.length&&this.isOverlap(e,t))break;this.renderList.push(t)}this.playTimer=setTimeout(()=>{this.play()},this.options.interval)}}destroy(){clearTimeout(this.playTimer),clearTimeout(this.createTimer),this.playTimer=null,this.createTimer=null}play(){for(let t=0;t<this.renderList.length;t++)this.createTimer=setTimeout(()=>{this.create(this.renderList[t])},t*this.options.delay)}create(t){const e=this.ctx,{diameter:i,x:n,y:r,alpha:c}=t,s=i/2;e.clearRect(n-s,r-s,i+3,i+3),e.strokeStyle=`rgba(${this.options.color}, ${c})`,e.beginPath(),e.lineTo(n-s,r-s),e.lineTo(n+s,r-s),e.lineTo(n+s,r+s),e.lineTo(n-s,r+s),e.closePath(),e.stroke(),c>=1?this.melt({diameter:i,defaultdiameter:i,alpha:c,x:n,y:r}):window.requestAnimationFrame(()=>this.create({diameter:i,alpha:c+.02,x:n,y:r}))}melt(t){const e=this.ctx,{diameter:i,x:n,y:r,alpha:c,defaultdiameter:s}=t,a=i/2;e.clearRect(n-a-1,r-a-1,i+3,i+3),e.strokeStyle=`rgba(${this.options.color}, ${c})`,e.beginPath(),e.lineTo(n-a,r-a),e.lineTo(n+a,r-a),e.lineTo(n+a,r+a),e.lineTo(n-a,r+a),e.closePath(),e.stroke(),c>0?window.requestAnimationFrame(()=>this.melt({diameter:i+.5,defaultdiameter:s,alpha:c-.02,x:n,y:r})):(this.renderList.shift(),this.init())}reset(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}randomNum(t,e=0){return Math.floor(Math.random()*(t-e+1)+e)}generate(){return{alpha:0,x:this.randomNum(this.canvas.width-300),y:this.randomNum(this.canvas.height-300),diameter:this.randomNum(10,100)}}isOverlap(t,e){return t.x+t.diameter/2>=e.x-e.diameter/2||t.y+t.diameter/2>=e.y-e.diameter/2||e.x+e.diameter/2>=t.x-t.diameter/2||e.y+e.diameter/2>=t.y-t.diameter/2}static defaultOptions={num:3,weight:3,color:"235, 235, 235",delay:100,interval:3e3}}const ee=p("<canvas>"),te=m`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`,ne=()=>{let o,t;v(()=>{e(),window.onresize=()=>{e()},t=new w(o,{num:6,interval:0}),t.init()}),x(()=>{t.destroy()});const e=()=>{o.width=window.innerWidth,o.height=window.innerHeight};return(()=>{const i=ee(),n=o;return typeof n=="function"?b(n,i):o=i,d(i,te),i})()},ie=p("<p>"),oe=p("<div>"),re=p("<div>Loading..."),E=m`
  font-size: 32px;
`,se=({callback:o})=>{let t,e,i;const n=[t,e,i],c=["Hi, ","This is ColmugX.","Make yourself."].map((a,h)=>(()=>{const f=ie(),u=n[h];return typeof u=="function"?b(u,f):n[h]=f,g(f,a),$(()=>d(f,y(E,"syuanpi","syuanpi-launch","fadeInUpShort",`launch-delay${h+1}`))),f})()),s=()=>{setTimeout(()=>{n.forEach(a=>{a.className="syuanpi syuanpi-launch fadeOutUp ease",a.classList.add(E)}),setTimeout(()=>{o(!0)},1200)},1e3)};return v(()=>{n[n.length-1].addEventListener("animationend",s),n[n.length-1].addEventListener("webkitAnimationend",s),n[n.length-1].addEventListener("mozAnimationend",s)}),x(()=>{n[n.length-1].removeEventListener("animationend",s),n[n.length-1].removeEventListener("webkitAnimationend",s),n[n.length-1].removeEventListener("mozAnimationend",s)}),(()=>{const a=oe();return g(a,l(A,{each:c,get fallback(){return re()},children:h=>h})),a})()},ae=N`
  from { background-position: 100% 0;}
  to { background-position: -100% 0;}
`,le=N`
  0%, 20% { background-color: transparent; color: #383838; }
  10% { background-color: #383838; color: #fff; }
  30% { background-color: #383838; color: #fff; opacity: 0; }
  100% { background-color: #383838; color: #fff; opacity: 1; }
`,ce=p("<div><div>NOTICE</div><div><div><p>换了个风格，但是还没写好</p><p>你可以看到下面的按钮都是灰的</p><p>没错，我在摆烂</p><p><del>（还有，它很消耗性能）"),de=()=>{const o=m`
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
  `,t=m`
    z-index: 1;
    position: relative;
    text-align: center;
    font-size: 28px;
    margin-top: -30px;
    color: #666;
  `,e=m`
    box-sizing: border-box;
    padding: 16px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      margin: 0;
      line-height: 2;
    }
  `;return(()=>{const i=ce(),n=i.firstChild,r=n.nextSibling;return d(n,t),d(r,e),$(()=>d(i,y(o,"syuanpi","tvIn","back-3"))),i})()},me=p("<div><div><p>Welcome!</p></div><div><p>ColmugX Homepage"),ue=m`
  position: relative;
  background-color: #fff;
`,S=m`
  background-image: -webkit-linear-gradient(left, #fff 0%, #383838, #fff 50%, #fff);
  text-fill-color: transparent;
  background-clip: text;
  background-size: 200% 100%;
  animation: ${ae} 3.5s cubic-bezier(0.05, 0.5, 0.8, 0.4) infinite;
`,C=m`
  font-size: 42px;
  margin: 8px 0;
  font-weight: 500;
`,pe=m`
  animation-delay: 180ms;
  background-position: 100% 0;
`,he=()=>(()=>{const o=me(),t=o.firstChild,e=t.firstChild,i=t.nextSibling,n=i.firstChild;return d(o,ue),d(t,S),d(e,C),d(n,C),g(o,l(de,{}),null),$(()=>d(i,y(S,pe))),o})(),fe=p("<div>"),O=m`
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
    animation: ${le} 300ms ease forwards;
  }

  &:active {
    transform: scale(0.96) translateY(2px);
    transition: transform 260ms ease;
  }
`,ge=m`
  animation: none !important;
  border: none;
  color: #c0c0c0;
  cursor: not-allowed;
`,ye=({title:o,index:t,link:e,disabled:i=!1})=>{const[n,{jumpLink:r,setDetail:c}]=j();let s;const a=()=>{s.removeEventListener("animationend",a),s.className=y(O,i&&ge)};v(()=>{s.addEventListener("animationend",a)}),x(()=>{s.removeEventListener("animationend",a)});const h=()=>{if(e){r(e);return}c(o),f()},f=()=>{const u=s.getBoundingClientRect();console.log(u.top,u.left,u.width,u.height)};return(()=>{const u=fe();u.$$click=h;const L=s;return typeof L=="function"?b(L,u):s=u,g(u,o),$(()=>d(u,y(O,"syuanpi","fadeInLeftShort",t?`back-${t}`:null))),u})()};B(["click"]);const ve=p("<div>"),xe=m`
  display: flex;
  flex-flow: row nowrap;
`,be=()=>{const o=[{name:"BLOG",link:"/blog"},{name:"PROJECT",children:[]},{name:"DESIGN",children:[]},{name:"FRIENDLINKS",children:[]},{name:"ABOUT",children:[]}];return(()=>{const t=ve();return d(t,xe),g(t,l(A,{each:o,children:({name:e,children:i,...n},r)=>l(ye,D({title:e,get index(){return r()},get disabled(){return Array.isArray(i)&&!i.length}},n))})),t})()},$e=p("<div>"),we=({children:o})=>{let t;const[e]=j();return v(()=>{G(()=>{e.linkStatus&&(t.addEventListener("animationend",()=>{window.location.href=e.linkStatus}),t.className="syuanpi shuttleOut")})}),(()=>{const i=$e(),n=t;return typeof n=="function"?b(n,i):t=i,g(i,o),i})()},Le=()=>{const[o,t]=I(!1);return l(Z,{get children(){return[l(k,{get when(){return!o()},get children(){return l(se,{callback:t})}}),l(k,{get when(){return o()},get children(){return[l(ne,{}),l(we,{get children(){return[l(he,{}),l(be,{})]}})]}})]}})};H(()=>{const[o,t]=I(!1),e=document.getElementById("loading"),i=()=>{e.remove(),t(!0)};return v(()=>{window.onload=()=>{e.querySelector(".loading").addEventListener("animationend",i),e.querySelector(".loading").addEventListener("webkitAnimationend",i),e.querySelector(".loading").addEventListener("mozAnimationend",i),e.querySelector(".loading").classList.add("syuanpi"),e.querySelector(".loading").classList.add("melt")}}),x(()=>{e.querySelector(".loading").removeEventListener("animationend",i),e.querySelector(".loading").removeEventListener("webkitAnimationend",i),e.querySelector(".loading").removeEventListener("mozAnimationend",i)}),_((()=>{const n=_(()=>!!o());return()=>n()?l(Le,{}):null})())},document.getElementById("root"));
