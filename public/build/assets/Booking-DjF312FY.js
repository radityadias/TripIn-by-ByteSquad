import{r as s,D as F,j as e,W as T}from"./app-Ccp5CH9r.js";import{C as z}from"./CardComponent-XwubPfEM.js";import B from"./SelectOriginBooking-BPTfHxpf.js";import{F as M}from"./ChevronLeftIcon-oJOsJn-C.js";import"./format-BzRktsyD.js";const R=({setSelectedDay:o,data:l})=>(s.useEffect(()=>{const i=document.querySelector("#default-datepicker");if(i)return new F(i,{autohide:!0,minDate:new Date}),i.addEventListener("changeDate",u=>{const m=u.target.value;o("selectedDay",m)}),()=>{i.removeEventListener("changeDate",()=>{})}},[o]),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"default-datepicker",className:"mb-2 block text-sm font-medium text-gray-900",children:"Select Date"}),e.jsxs("div",{className:"relative max-w-sm",children:[e.jsx("div",{className:"pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5",children:e.jsx("svg",{className:"h-4 w-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{d:"M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"})})}),e.jsx("input",{readOnly:!0,value:l.selectedDay,onChange:i=>o("selectedDay",i.target.value),"data-datepicker":"true",id:"default-datepicker",type:"text",className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",placeholder:"Select date"})]})]})),q=({todays:o,locations:l})=>{const[i,u]=s.useState(!1),m=[...new Set(l.map(t=>t.city))],[y,p]=s.useState(!1),[w,k]=s.useState(""),[N,h]=s.useState(!1),[C,c]=s.useState(!1),[f,x]=s.useState(!1),L=m.filter(t=>t.toLowerCase().includes(w.toLowerCase())),g=s.useRef(null),{data:r,setData:d,post:S,processing:Z,errors:P}=T({cityValue:"",origin:"",selectedDay:"",seatsValue:null});s.useEffect(()=>{if(r.cityValue&&r.origin){const t=l.find(a=>a.name.toLowerCase()===r.origin.toLowerCase());!t||t.city.toLowerCase()!==r.cityValue.toLowerCase()?x(!0):x(!1)}else x(!1)},[r.cityValue,r.origin,l]);const V=t=>{if(t.preventDefault(),c(!1),!r.cityValue){c(!0);return}if(f)return;const a=document.head.querySelector('meta[name="csrf-token"]').content;try{S("/booking/store",r,{headers:{"X-CSRF-TOKEN":a}})}catch(n){console.error("Error occurred:",n),n.response&&console.error("Error response:",n.response.data)}},D=r.cityValue?l.filter(t=>t.city.toLowerCase()===r.cityValue.toLowerCase()):l;s.useEffect(()=>{u(v.length>0)},[o]),s.useEffect(()=>{const t=a=>{g.current&&!g.current.contains(a.target)&&p(!1)};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[]);const v=o.map(t=>{var a,n,b,j;return{id:t.booking_id,name:"Shuttle Bus Tripin",plateNumber:(a=t.trips[0])==null?void 0:a.schedule.vehicle.license_plate,origin:(n=t.trips[0])==null?void 0:n.origin,destination:(b=t.trips[0])==null?void 0:b.schedule.location.name,status:"On Trip",price:t.price,date:(j=t.trips[0])==null?void 0:j.selected_day}}),E=t=>{k(t.target.value),t.target.value===t.target.value.toLowerCase()&&(t.target.value=t.target.value.toUpperCase()),d("cityValue",t.target.value),c(!1)},O=t=>{t===t.toLowerCase()&&(t=t.toUpperCase()),d("cityValue",t),p(!1),c(!1)};return e.jsx(e.Fragment,{children:N?e.jsx(B,{setIsSelectOrigin:h,setOrigin:d,locations:D}):e.jsx("div",{className:"lg:flex lg:justify-center",children:e.jsxs("div",{className:"min-h-screen bg-white lg:w-[400px]",children:[e.jsxs("div",{className:"relative flex h-[108px] items-center justify-center rounded-b-lg bg-primary px-3",children:[e.jsx(M,{onClick:()=>window.location.href="/home",className:"absolute left-3 top-1/2 z-50 size-8 translate-y-[-50%] cursor-pointer font-bold text-white"}),e.jsx("p",{className:"mx-2 w-fit cursor-default select-none text-2xl font-medium text-white",children:"Booking"})]}),e.jsx("div",{className:"m-5 rounded-md border p-4 shadow-md",children:e.jsxs("form",{children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"input-group-1",className:"mb-2 block text-sm font-medium text-gray-900",children:"Departure City"}),e.jsxs("div",{className:"relative mb-6",children:[e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"pointer-events-none absolute inset-y-0 start-0 z-10 flex items-center ps-3.5",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"})})}),e.jsx("input",{type:"text",id:"input-group-1",className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",placeholder:"From",value:r.cityValue,onChange:E,onFocus:()=>p(!0)})]}),y&&e.jsx("ul",{ref:g,className:"relative mt-1 size-fit w-full rounded-lg border border-gray-300 bg-white shadow-lg",children:L.map((t,a)=>e.jsx("li",{className:"cursor-pointer px-4 py-2 hover:bg-gray-100",onClick:()=>O(t),children:t},a))})]}),e.jsx("label",{htmlFor:"input-group-1",className:"mb-2 block text-sm font-medium text-gray-900",children:"Origin"}),e.jsxs("div",{className:"relative mb-2",children:[e.jsx("div",{className:"pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-6",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"})]})}),e.jsx("input",{defaultValue:r.origin,id:"input-group-1",className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",placeholder:"From",onFocus:()=>{r.cityValue?h(!0):c(!0)}})]}),e.jsx("div",{className:"relative mb-4",children:f&&e.jsx("p",{className:"text-sm text-red-500",children:"Origin and City does not match. Please select a valid origin for the selected city."})}),e.jsx("div",{className:"relative mb-4",children:C&&e.jsx("p",{className:"text-sm text-red-500",children:"Please select a city first"})}),e.jsxs("div",{className:"grid grid-cols-2 gap-x-3",children:[e.jsx("div",{children:e.jsx(R,{setSelectedDay:d,data:r})}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"countries",className:"mb-2 block text-sm font-medium text-gray-900 dark:text-white",children:"Select Seat"}),e.jsxs("select",{onClick:t=>d("seatsValue",parseInt(t.target.value)),defaultValue:"",id:"countries",className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"",disabled:!0,children:"Choose a seat"}),e.jsx("option",{value:"1",children:"1"}),e.jsx("option",{value:"2",children:"2"}),e.jsx("option",{value:"3",children:"3"}),e.jsx("option",{value:"4",children:"4"}),e.jsx("option",{value:"5",children:"5"})]})]})]})]}),e.jsx("div",{children:e.jsx("button",{onClick:V,className:"mt-7 w-full rounded-lg bg-primary2 py-2 text-white",children:"Search"})})]})}),e.jsxs("div",{children:[e.jsx("div",{className:"px-5 font-semibold text-black",children:"Today's Trip"}),e.jsx("div",{className:"mt-2 grid gap-4 px-5",children:i?e.jsx(z,{CardProp:v}):e.jsxs("div",{className:"flex flex-col items-center justify-center pb-9",children:[e.jsx("img",{src:"/tayo-bus.svg ",loading:"lazy"}),e.jsx("p",{children:"No trip available"})]})})]})]})})})};export{q as default};
