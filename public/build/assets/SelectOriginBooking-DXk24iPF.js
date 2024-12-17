import{r as h,j as e}from"./app-2DLxi_6_.js";import{F as p}from"./ChevronLeftIcon-C7XJILlr.js";const g=({setIsSelectOrigin:x,setOrigin:o,locations:l})=>{const[r,d]=h.useState(""),a=()=>{x(!1)},i=s=>{let t=s.name;o("origin",t),a()},m=s=>{d(s.target.value)},n=l.filter(s=>s.type==="Bandara"&&s.name.toLowerCase().includes(r.toLowerCase())),c=l.filter(s=>s.type==="Hotel"&&s.name.toLowerCase().includes(r.toLowerCase()));return e.jsx(e.Fragment,{children:e.jsx("div",{className:"lg:flex lg:justify-center",children:e.jsxs("div",{className:"bg-white lg:w-[400px]",children:[e.jsxs("div",{className:"relative flex h-[108px] items-center rounded-b-md bg-primary px-3",children:[e.jsx(p,{className:"absolute size-8 cursor-pointer text-white","aria-hidden":"true",onClick:a}),e.jsx("p",{className:"w-full text-center text-2xl font-medium text-white",children:"Select origin"})]}),e.jsxs("div",{className:"min-h-[100vh] w-full bg-white px-5 pt-4",children:[e.jsx("form",{children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3",children:e.jsx("svg",{className:"h-4 w-4 text-gray-500","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})})}),e.jsx("input",{required:!0,onChange:m,value:r,type:"search",id:"default-search",className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",placeholder:"Search routes"})]})}),n.length>0&&e.jsxs("div",{className:"my-2",children:[e.jsx("h2",{className:"text-lg font-semibold",children:"Airports"}),n.map((s,t)=>e.jsxs("div",{className:"flex h-fit w-full cursor-pointer justify-between border-b px-1",onClick:()=>i(s),children:[e.jsx("img",{className:"size-[46px] self-start",src:"/airplane.svg",alt:"Airplane"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("p",{className:"text-end text-xs font-extralight",children:[s.type," - ",s.city]}),e.jsx("p",{className:"flex max-w-[240px] flex-wrap text-right text-sm font-semibold",children:s.name})]})]},t))]}),c.length>0&&e.jsxs("div",{className:"mt-5",children:[e.jsx("h2",{className:"text-lg font-semibold",children:"Hotels"}),c.map((s,t)=>e.jsxs("div",{className:"flex h-fit w-full cursor-pointer justify-between border-b px-1",onClick:()=>i(s),children:[e.jsx("img",{className:"size-[46px] self-start",src:"/bed.svg",alt:"Hotel"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("p",{className:"text-end text-xs font-extralight",children:[s.type," - ",s.city]}),e.jsx("p",{className:"flex max-w-[240px] flex-wrap text-right text-sm font-semibold",children:s.name})]})]},t))]})]})]})})})};export{g as default};
