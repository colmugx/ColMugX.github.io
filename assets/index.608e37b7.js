import{c as e,a as t,b as n,u as i,t as r,d as o,i as a,o as s,e as l,f as d,g as c,F as h,k as m,h as u,m as p,j as f,l as g,S as v,r as x,n as y}from"./vendor.6622df2e.js";const b=t({}),w=({theme:t,children:n})=>e(b.Provider,{value:t,children:n}),[k,N]=n({linkStatus:"",detail:""}),L=[k,{jumpLink(e){N((t=>({...t,linkStatus:e})))},setDetail(e){N((t=>({...t,detail:e})))}}],T=t(L),E=({children:t})=>e(T.Provider,{value:L,children:t}),S=()=>i(T),z=r("<div><div></div><div><span>ColmugX | TFD</span></div></div>"),A=o`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`,C=o`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,O=o`
  padding: 16px 0;
  font-size: 14px;
  font-family: "Helvetica";
  color: #999;
  font-weight: 100;
  text-align: center;
`,q={colors:{primary:"#383838"}},$=({children:t})=>e(E,{get children(){return e(w,{theme:q,get children(){const e=z.cloneNode(!0),n=e.firstChild,i=n.nextSibling;return e.className=A,n.className=C,a(n,t),i.className=O,e}})}}),j=class{constructor(e,t){this.canvas=e;const n=Object.assign({},j.defaultOptions,t),i=e.getContext("2d");i.lineWidth=n.weight,this.ctx=i,this.options=n,this.renderList=[]}init(){if(!this.renderList.length){for(this.reset();this.renderList.length<this.options.num;){const e=this.generate();for(const t of this.renderList)if(this.renderList.length&&this.isOverlap(t,e))break;this.renderList.push(e)}this.playTimer=setTimeout((()=>{this.play()}),this.options.interval)}}destroy(){clearTimeout(this.playTimer),clearTimeout(this.createTimer),this.playTimer=null,this.createTimer=null}play(){for(let e=0;e<this.renderList.length;e++)this.createTimer=setTimeout((()=>{this.create(this.renderList[e])}),e*this.options.delay)}create(e){const t=this.ctx,{diameter:n,x:i,y:r,alpha:o}=e,a=n/2;t.clearRect(i-a,r-a,n+3,n+3),t.strokeStyle=`rgba(${this.options.color}, ${o})`,t.beginPath(),t.lineTo(i-a,r-a),t.lineTo(i+a,r-a),t.lineTo(i+a,r+a),t.lineTo(i-a,r+a),t.closePath(),t.stroke(),o>=1?this.melt({diameter:n,defaultdiameter:n,alpha:o,x:i,y:r}):window.requestAnimationFrame((()=>this.create({diameter:n,alpha:o+.02,x:i,y:r})))}melt(e){const t=this.ctx,{diameter:n,x:i,y:r,alpha:o,defaultdiameter:a}=e,s=n/2;t.clearRect(i-s-1,r-s-1,n+3,n+3),t.strokeStyle=`rgba(${this.options.color}, ${o})`,t.beginPath(),t.lineTo(i-s,r-s),t.lineTo(i+s,r-s),t.lineTo(i+s,r+s),t.lineTo(i-s,r+s),t.closePath(),t.stroke(),o>0?window.requestAnimationFrame((()=>this.melt({diameter:n+.5,defaultdiameter:a,alpha:o-.02,x:i,y:r}))):(this.renderList.shift(),this.init())}reset(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}randomNum(e,t=0){return Math.floor(Math.random()*(e-t+1)+t)}generate(){return{alpha:0,x:this.randomNum(this.canvas.width-300),y:this.randomNum(this.canvas.height-300),diameter:this.randomNum(10,100)}}isOverlap(e,t){return e.x+e.diameter/2>=t.x-t.diameter/2||e.y+e.diameter/2>=t.y-t.diameter/2||t.x+t.diameter/2>=e.x-e.diameter/2||t.y+t.diameter/2>=e.y-e.diameter/2}};let I=j;I.defaultOptions={num:3,weight:3,color:"230, 230, 230",delay:100,interval:3e3};const P=r("<canvas></canvas>"),F=o`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`,R=()=>{let e,t;s((()=>{n(),window.onresize=()=>{n()},t=new I(e,{num:12,interval:0}),t.init()})),l((()=>{t.destroy()}));const n=()=>{e.width=window.innerWidth,e.height=window.innerHeight};return(()=>{const t=P.cloneNode(!0);return"function"==typeof e?e(t):e=t,t.className=F,t})()},B=r("<p></p>"),D=r("<div></div>"),H=r("<div>Loading...</div>"),M=o`
  font-size: 32px;
`,U=({callback:t})=>{const n=[undefined,undefined,undefined],i=["Hi, ","This is ColmugX.","Make yourself."].map(((e,t)=>(()=>{const i=B.cloneNode(!0),r=n[t];return"function"==typeof r?r(i):n[t]=i,a(i,e),d((()=>i.className=c(M,"syuanpi","syuanpi-launch","fadeInUpShort",`launch-delay${t+1}`))),i})())),r=()=>{setTimeout((()=>{n.forEach((e=>{e.className="syuanpi syuanpi-launch fadeOutUp ease",e.classList.add(M)})),setTimeout((()=>{t(!0)}),1200)}),1e3)};return s((()=>{n[n.length-1].addEventListener("animationend",r),n[n.length-1].addEventListener("webkitAnimationend",r),n[n.length-1].addEventListener("mozAnimationend",r)})),l((()=>{n[n.length-1].removeEventListener("animationend",r),n[n.length-1].removeEventListener("webkitAnimationend",r),n[n.length-1].removeEventListener("mozAnimationend",r)})),(()=>{const t=D.cloneNode(!0);return a(t,e(h,{each:i,get fallback(){return H.cloneNode(!0)},children:e=>e})),t})()},W=m`
  from { background-position: 100% 0;}
  to { background-position: -100% 0;}
`,X=m`
  0%, 20% { background-color: transparent; color: #383838; }
  10% { background-color: #383838; color: #fff; }
  30% { background-color: #383838; color: #fff; opacity: 0; }
  100% { background-color: #383838; color: #fff; opacity: 1; }
`,G=r("<div><div>NOTIF</div><div><div><p>换了个风格，但是还没写好</p><p>你可以看到下面的按钮都是灰的</p><p>没错，我在摆烂</p><p><del>（还有，它很消耗性能）</del></p></div></div></div>"),J=()=>{const e=o`
    position: absolute;
    top: -58px;
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
  `,t=o`
    z-index: 1;
    position: relative;
    text-align: center;
    font-size: 28px;
    margin-top: -30px;
    color: #666;
  `,n=o`
    box-sizing: border-box;
    padding: 16px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;return(()=>{const i=G.cloneNode(!0),r=i.firstChild,o=r.nextSibling;return r.className=t,o.className=n,d((()=>i.className=c(e,"syuanpi","tvIn","back-3"))),i})()},K=r("<div><div><div><p>Welcome!</p></div><div><p>ColmugX Homepage</p></div></div></div>"),Y=o`
  position: relative;
`,Q=o`
  background-image: -webkit-linear-gradient(left, #fff 0%, #383838, #fff 50%, #fff);
  text-fill-color: transparent;
  background-clip: text;
  background-size: 200% 100%;
  animation: ${W} 3.5s cubic-bezier(0.05, 0.5, 0.8, 0.4) infinite;
`,V=o`
  font-size: 42px;
  margin: 8px 0;
  font-weight: 500;
`,Z=o`
  animation-delay: 180ms;
  background-position: 100% 0;
`,_=()=>(()=>{const t=K.cloneNode(!0),n=t.firstChild.firstChild,i=n.firstChild,r=n.nextSibling,o=r.firstChild;return t.className=Y,n.className=Q,i.className=V,o.className=V,a(t,e(J,{}),null),d((()=>r.className=c(Q,Z))),t})(),ee=r("<div></div>"),te=o`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  padding: 16px;
  border: 1px solid #383838;
  border-radius: 2px;
  min-width: 100px;
  min-height: 50%;
  margin: 32px 16px;
  background-color: #fff;

  cursor: pointer;
  user-select: none;

  &:hover {
    animation: ${X} 300ms ease forwards;
  }

  &:active {
    transform: scale(0.96) translateY(2px);
    transition: transform 260ms ease;
  }
`,ne=o`
  animation: none !important;
  border: none;
  color: #c0c0c0;
  cursor: not-allowed;
`,ie=({title:e,index:t,link:n,disabled:i=!1})=>{const[r,{jumpLink:o,setDetail:h}]=S();let m;const u=()=>{m.removeEventListener("animationend",u),m.className=c(te,i&&ne)};s((()=>{m.addEventListener("animationend",u)})),l((()=>{m.removeEventListener("animationend",u)}));const p=()=>{n?o(n):(h(e),f())},f=()=>{const e=m.getBoundingClientRect();console.log(e.top,e.left,e.width,e.height)};return(()=>{const n=ee.cloneNode(!0);n.$$click=p;return"function"==typeof m?m(n):m=n,a(n,e),d((()=>n.className=c(te,"syuanpi","fadeInLeftShort",t?`back-${t}`:null))),n})()};u(["click"]);const re=r("<div></div>"),oe=o`
  display: flex;
  flex-flow: row nowrap;
`,ae=()=>{const t=[{name:"BLOG",link:"/blog"},{name:"PROJECT",children:[]},{name:"DESIGN",children:[]},{name:"FRIENDLINKS",children:[]},{name:"ABOUT",children:[]}];return(()=>{const n=re.cloneNode(!0);return n.className=oe,a(n,e(h,{each:t,children:({name:t,children:n,...i},r)=>e(ie,p({title:t,get index(){return r()},get disabled(){return Array.isArray(n)&&!n.length}},i,{}))})),n})()},se=r("<div></div>"),le=({children:e})=>{let t;const[n]=S();return s((()=>{f((()=>{n.linkStatus&&(t.addEventListener("animationend",(()=>{window.location.href=n.linkStatus})),t.className="syuanpi shuttleOut")}))})),(()=>{const n=se.cloneNode(!0);return"function"==typeof t?t(n):t=n,a(n,e),n})()},de=()=>{const[t,n]=g(!1);return e($,{get children(){return[e(v,{get when(){return!t()},get children(){return e(U,{callback:n})}}),e(v,{get when(){return t()},get children(){return[e(R,{}),e(le,{get children(){return[e(_,{}),e(ae,{})]}})]}})]}})};x((()=>{const[t,n]=g(!1),i=document.getElementById("loading"),r=()=>{i.remove(),n(!0)};return s((()=>{window.onload=()=>{i.querySelector(".loading").addEventListener("animationend",r),i.querySelector(".loading").addEventListener("webkitAnimationend",r),i.querySelector(".loading").addEventListener("mozAnimationend",r),i.querySelector(".loading").classList.add("syuanpi"),i.querySelector(".loading").classList.add("melt")}})),l((()=>{i.querySelector(".loading").removeEventListener("animationend",r),i.querySelector(".loading").removeEventListener("webkitAnimationend",r),i.querySelector(".loading").removeEventListener("mozAnimationend",r)})),(()=>{const n=y((()=>!!t()),!0);return()=>n()?e(de,{}):null})()}),document.getElementById("root"));
