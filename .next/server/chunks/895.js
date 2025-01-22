exports.id=895,exports.ids=[895],exports.modules={16940:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,13219,23)),Promise.resolve().then(r.t.bind(r,34863,23)),Promise.resolve().then(r.t.bind(r,25155,23)),Promise.resolve().then(r.t.bind(r,40802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,48530,23)),Promise.resolve().then(r.t.bind(r,88921,23))},3788:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,66959,23)),Promise.resolve().then(r.t.bind(r,33875,23)),Promise.resolve().then(r.t.bind(r,88903,23)),Promise.resolve().then(r.t.bind(r,57174,23)),Promise.resolve().then(r.t.bind(r,84178,23)),Promise.resolve().then(r.t.bind(r,87190,23)),Promise.resolve().then(r.t.bind(r,61365,23))},48774:(e,t,r)=>{Promise.resolve().then(r.bind(r,71354))},18510:(e,t,r)=>{Promise.resolve().then(r.bind(r,39246))},81832:(e,t,r)=>{Promise.resolve().then(r.bind(r,50042))},45384:(e,t,r)=>{Promise.resolve().then(r.bind(r,39134))},39246:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(45512),o=r(85928),a=r.n(o),i=r(92286),n=r.n(i);r(99244),r(15237);var l=r(90993),d=r(19333);function c({children:e}){return(0,s.jsxs)("html",{lang:"en",children:[(0,s.jsxs)("head",{children:[(0,s.jsx)("link",{rel:"icon",href:"/logo2.png"}),(0,s.jsx)("title",{children:"Studio Sonterra"}),(0,s.jsx)("meta",{name:"description",content:"Studio Sonterra is a design and development studio."})]}),(0,s.jsx)("body",{className:`${a().variable} ${n().variable} antialiased`,children:(0,s.jsx)(l.SessionProvider,{children:(0,s.jsx)(d.O,{children:e})})})]})}},39134:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(45512);r(58009);var o=r(79334),a=r(28784),i=r(75191);function n(){let e=(0,o.useRouter)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{}),(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center min-h-screen bg-gray-100",children:[(0,s.jsx)("h1",{className:"text-6xl font-bold text-gray-800 mb-4",children:"404"}),(0,s.jsx)("p",{className:"text-2xl text-gray-600 mb-8",children:"الصفحة التي تبحث عنها غير موجودة."}),(0,s.jsx)("button",{onClick:()=>e.push("/"),className:"bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300",children:"العودة إلى الصفحة الرئيسية"})]}),(0,s.jsx)(a.A,{})]})}},28784:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var s=r(45512),o=r(45103);function a(){return(0,s.jsx)("footer",{className:"bg-gray-800 text-white py-6",children:(0,s.jsxs)("div",{className:"container mx-auto text-center",children:[(0,s.jsxs)("div",{className:"flex justify-center items-center mb-2",children:[(0,s.jsx)(o.default,{src:"/logo.png",width:50,height:50,alt:"Dev Duck Logo",className:"mr-2"}),(0,s.jsx)("p",{className:"text-sm mr-2",children:"Powered By"}),(0,s.jsx)("p",{className:"font-semibold",children:"Dev Duck co"})]}),(0,s.jsxs)("p",{className:"text-xs",children:["\xa9 ",new Date().getFullYear()," Studio Sonterra. All rights reserved."]})]})})}},75191:(e,t,r)=>{"use strict";r.d(t,{A:()=>c});var s=r(45512),o=r(58009),a=r(12138),i=r(19333),n=r(28531),l=r.n(n),d=r(44098);function c(){let e=(0,o.useRef)(null),t=(0,o.useRef)([]),[r,n]=(0,o.useState)(!1),c=(0,o.useRef)(null),u=(0,o.useRef)([]),{isLoggedIn:p}=(0,i.A)(),x=()=>{n(!1),c.current&&a.os.to(c.current,{rotation:0,scale:1,duration:.3,ease:"power2.out"})};return(0,s.jsxs)("header",{ref:e,className:"bg-white dark:bg-[#1a233d] shadow-md text-gray-800 dark:text-white sticky top-0 z-50",children:[(0,s.jsxs)("div",{className:"container mx-auto px-6 py-4 flex justify-between items-center",children:[(0,s.jsx)(l(),{href:"/",className:"text-yellow-400 text-2xl font-bold",children:"Studio Sonterra"}),(0,s.jsx)("nav",{className:"hidden md:block",children:(0,s.jsx)("ul",{className:"flex gap-4",children:["Products","About","Contact"].map((e,r)=>(0,s.jsx)("li",{ref:e=>{t.current[r]=e},children:(0,s.jsx)("a",{href:`#${e.toLowerCase()}`,className:"text-gray-600 hover:text-gray-900 dark:hover:text-gray-300 transition-colors duration-300",children:e})},e))})}),(0,s.jsxs)("div",{className:"hidden md:flex items-center gap-4",children:[(0,s.jsx)(l(),{href:"/cart",className:"text-gray-600 hover:text-gray-900 dark:hover:text-gray-300 text-2xl transition-colors duration-300",children:(0,s.jsx)(d.AsH,{})}),p?(0,s.jsx)(l(),{href:"/profile",className:"text-gray-600 hover:text-gray-900 dark:hover:text-gray-300 text-2xl transition-colors duration-300",children:(0,s.jsx)(d.x$1,{})}):(0,s.jsx)(l(),{href:"/login",className:"bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors duration-300",children:"Login"})]}),(0,s.jsxs)("div",{className:"md:hidden flex items-center gap-4",children:[(0,s.jsx)(l(),{href:"/cart",className:"text-gray-600 dark:text-white text-2xl",children:(0,s.jsx)(d.AsH,{})}),p?(0,s.jsx)(l(),{href:"/profile",className:"text-gray-600 dark:text-white text-2xl",children:(0,s.jsx)(d.x$1,{})}):(0,s.jsx)(l(),{href:"/login",className:"bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors duration-300",children:"Login"}),(0,s.jsx)("button",{onClick:()=>{n(!r),c.current&&a.os.to(c.current,{rotation:r?0:180,scale:r?1:1.2,duration:.3,ease:"power2.out"})},className:"text-gray-600 dark:text-white text-2xl",ref:c,children:(0,s.jsx)("span",{children:"☰"})})]})]}),(0,s.jsxs)("div",{className:`md:hidden ${r?"block":"hidden"} absolute top-0 left-0 w-full bg-white dark:bg-[#1a233d] shadow-md py-4`,children:[(0,s.jsx)("div",{className:"flex justify-end px-4",children:(0,s.jsx)("button",{onClick:x,className:"text-gray-600 dark:text-white text-2xl",children:"X"})}),(0,s.jsx)("ul",{className:"flex flex-col gap-4 items-center",children:["Products","About","Contact"].map((e,t)=>(0,s.jsx)("li",{ref:e=>{u.current[t]=e},children:(0,s.jsx)("a",{href:`#${e.toLowerCase()}`,className:"text-gray-600 hover:text-gray-900 dark:hover:text-gray-300 transition-colors duration-300",onClick:x,children:e})},e))})]})]})}},19333:(e,t,r)=>{"use strict";r.d(t,{A:()=>n,O:()=>i});var s=r(45512),o=r(58009);let a=(0,o.createContext)(void 0),i=({children:e})=>{let[t,r]=(0,o.useState)(!1);return(0,s.jsx)(a.Provider,{value:{isLoggedIn:t,setIsLoggedIn:r},children:e})},n=()=>{let e=(0,o.useContext)(a);if(!e)throw Error("useAuth must be used within an AuthProvider");return e}},71354:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\studio sonterra\\\\src\\\\app\\\\layout.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\studio sonterra\\src\\app\\layout.tsx","default")},50042:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\studio sonterra\\\\src\\\\app\\\\not-found.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\studio sonterra\\src\\app\\not-found.tsx","default")},99244:()=>{},22403:(e,t,r)=>{"use strict";r.d(t,{oR:()=>R});var s,o=r(58009);let a={data:""},i=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||a,n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,l=/\/\*[^]*?\*\/|  +/g,d=/\n+/g,c=(e,t)=>{let r="",s="",o="";for(let a in e){let i=e[a];"@"==a[0]?"i"==a[1]?r=a+" "+i+";":s+="f"==a[1]?c(i,a):a+"{"+c(i,"k"==a[1]?"":t)+"}":"object"==typeof i?s+=c(i,t?t.replace(/([^,])+/g,e=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):a):null!=i&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=c.p?c.p(a,i):a+":"+i+";")}return r+(t&&o?t+"{"+o+"}":o)+s},u={},p=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+p(e[r]);return t}return e},x=(e,t,r,s,o)=>{let a=p(e),i=u[a]||(u[a]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(a));if(!u[i]){let t=a!==e?e:(e=>{let t,r,s=[{}];for(;t=n.exec(e.replace(l,""));)t[4]?s.shift():t[3]?(r=t[3].replace(d," ").trim(),s.unshift(s[0][r]=s[0][r]||{})):s[0][t[1]]=t[2].replace(d," ").trim();return s[0]})(e);u[i]=c(o?{["@keyframes "+i]:t}:t,r?"":"."+i)}let x=r&&u.g?u.g:null;return r&&(u.g=u[i]),((e,t,r,s)=>{s?t.data=t.data.replace(s,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(u[i],t,s,x),i},h=(e,t,r)=>e.reduce((e,s,o)=>{let a=t[o];if(a&&a.call){let e=a(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+s+(null==a?"":a)},"");function m(e){let t=this||{},r=e.call?e(t.p):e;return x(r.unshift?r.raw?h(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,i(t.target),t.g,t.o,t.k)}m.bind({g:1});let f,g,b,v=m.bind({k:1});function y(e,t){let r=this||{};return function(){let s=arguments;function o(a,i){let n=Object.assign({},a),l=n.className||o.className;r.p=Object.assign({theme:g&&g()},n),r.o=/ *go\d+/.test(l),n.className=m.apply(r,s)+(l?" "+l:""),t&&(n.ref=i);let d=e;return e[0]&&(d=n.as||e,delete n.as),b&&d[0]&&b(n),f(d,n)}return t?t(o):o}}var j=e=>"function"==typeof e,w=(e,t)=>j(e)?e(t):e,N=(()=>{let e=0;return()=>(++e).toString()})(),k=((()=>{let e;return()=>e})(),(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return k(e,{type:e.toasts.find(e=>e.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}}),P=[],A={toasts:[],pausedAt:void 0},C=e=>{A=k(A,e),P.forEach(e=>{e(A)})},$={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},S=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||N()}),D=e=>(t,r)=>{let s=S(t,e,r);return C({type:2,toast:s}),s.id},R=(e,t)=>D("blank")(e,t);R.error=D("error"),R.success=D("success"),R.loading=D("loading"),R.custom=D("custom"),R.dismiss=e=>{C({type:3,toastId:e})},R.remove=e=>C({type:4,toastId:e}),R.promise=(e,t,r)=>{let s=R.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let o=t.success?w(t.success,e):void 0;return o?R.success(o,{id:s,...r,...null==r?void 0:r.success}):R.dismiss(s),e}).catch(e=>{let o=t.error?w(t.error,e):void 0;o?R.error(o,{id:s,...r,...null==r?void 0:r.error}):R.dismiss(s)}),e};var z=new Map,I=1e3,L=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,O=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,E=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,F=(y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${O} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${E} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`),H=(y("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${F} 1s linear infinite;
`,v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`),_=v`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,M=(y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${H} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${_} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,y("div")`
  position: absolute;
`,y("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`);y("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${M} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,y("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,y("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,s=o.createElement,c.p=void 0,f=s,g=void 0,b=void 0,m`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`}};