(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[571],{7442:(e,t,r)=>{Promise.resolve().then(r.bind(r,973))},5353:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(2115);function o(e,t){let r=(0,n.useRef)(()=>{}),o=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),o.current()):(r.current=l(e,n),o.current=l(t,n))}:e||t,[e,t])}function l(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},973:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var n=r(5155),o=r(2115),l=r(5565),s=r(1536),a=r(1478),i=r(6046);let c=function(){let[e,t]=(0,o.useState)([]),[r,c]=(0,o.useState)(!0),[,u]=(0,o.useState)([]),d=(0,i.useRouter)();(0,o.useEffect)(()=>{(async()=>{try{let e=await fetch("/api/products"),r=await e.json();t(r),c(!1)}catch(e){console.error("Error fetching products:",e),c(!1)}})()},[]);let f=e=>{u(t=>[...t,e]),alert("".concat(e.name," has been added to your cart!"))};(0,o.useEffect)(()=>{a.os.fromTo(".card",{opacity:0,y:50},{opacity:1,y:0,duration:1,ease:"power3.out"})},[]);let p=e=>{d.push("/products/".concat(e))};return(0,n.jsx)("div",{className:"container mx-auto px-4 py-8",children:r?(0,n.jsx)("div",{className:"flex justify-center items-center ",children:(0,n.jsx)("div",{className:"animate-spin rounded-full h-10 w-10 border-t-4 border-yellow-400 border-solid"})}):(0,n.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8",children:e.map(e=>(0,n.jsxs)("div",{className:"card bg-white rounded-lg shadow-xl p-6 flex flex-col justify-between transition-all transform hover:scale-105 cursor-pointer",onClick:()=>p(e._id),children:[(0,n.jsx)("div",{className:"relative overflow-hidden h-60 w-full rounded-lg mb-4",children:(0,n.jsx)(l.default,{src:e.image,alt:e.name,width:400,height:400,className:"rounded-lg object-cover"})}),(0,n.jsx)("h3",{className:"text-xl font-semibold text-gray-800 mt-2",children:e.name}),(0,n.jsx)("p",{className:"text-gray-600 text-sm mt-2 line-clamp-3",children:e.description}),(0,n.jsxs)("div",{className:"flex items-center justify-between mt-4",children:[(0,n.jsxs)("span",{className:"text-gray-900 font-semibold text-lg",children:["$",e.price]}),(0,n.jsx)("button",{onClick:t=>{t.stopPropagation(),f(e)},className:"flex items-center bg-yellow-400 text-white py-2 px-4 rounded-full font-semibold hover:bg-yellow-300 transition duration-200 ease-in-out",children:(0,n.jsx)(s.AsH,{className:"mr-2"})})]})]},e._id))})})}},3435:(e,t,r)=>{"use strict";r.d(t,{k5:()=>u});var n=r(2115),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(o),s=["attr","size","title"];function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(d,a({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:o,size:l,title:i}=e,u=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,s),d=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==l?n.createElement(l.Consumer,null,e=>t(e)):t(o)}}},e=>{var t=t=>e(e.s=t);e.O(0,[592,711,478,738,441,517,358],()=>t(7442)),_N_E=e.O()}]);