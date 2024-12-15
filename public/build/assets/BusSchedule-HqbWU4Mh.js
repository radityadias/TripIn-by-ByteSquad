import{r as i,j as e,b as f}from"./app-CA6_zjF1.js";import{f as d}from"./format-Dt71a7ij.js";import{F as j}from"./ChevronLeftIcon-DSJ0Sx97.js";const N=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-black"}),e.jsx("div",{className:"w-0.5 h-24 bg-black"}),e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-black"})]})}),v=({routes:r,booking:a})=>{i.useState("");const[c,x]=i.useState("");console.log("Routes : ",r);const m=t=>{x(t.target.value)},o=r.filter(t=>t.vehicles.some(s=>s.license_plate.toLowerCase().includes(c.toLowerCase())||t.name.toLowerCase().includes(c.toLowerCase()))),u=async(t,s,n,h)=>{t.preventDefault();const p=document.head.querySelector('meta[name="csrf-token"]').content;try{(await f.post(route("route.store"),{selectedRoute:{routeId:s,plate:n,departure:h}},{headers:{"X-CSRF-TOKEN":p}})).status==200&&(window.location.href="/booking/seat")}catch(l){l.response?(console.error("Server Error:",l.response.data),alert(l.response.data.message||"An error occurred on the server.")):l.request?(console.error("Network Error:",l.request),alert("Network error. Please check your internet connection and try again.")):(console.error("Error:",l.message),alert("An unexpected error occurred. Please try again."))}};return e.jsxs(e.Fragment,{children:[e.jsx("form",{className:"max-w-md mx-auto",children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none",children:e.jsx("svg",{className:"w-4 h-4 text-gray-500 ","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})})}),e.jsx("input",{required:!0,onChange:m,value:c,type:"search",id:"default-search",className:"block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ",placeholder:"Search routes"})]})}),o.length>0?o.map(t=>t.vehicles.map(s=>e.jsxs("div",{className:"bg-white rounded-lg shadow-md p-4 relative cursor-pointer",onClick:n=>u(n,s.pivot.route_id,s.license_plate,s.pivot.departure_time),children:[e.jsxs("div",{className:"absolute top-4 right-4 text-blue-600 px-2 py-1 rounded-full text-xs",children:[s.seats," Seats Available"]}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("img",{src:"/Shuttle_Icon.svg",alt:"Bus",className:"w-16 h-16 rounded-md object-cover"}),e.jsxs("div",{className:"flex-grow",children:[e.jsx("h2",{className:"font-semibold text-sm",children:"Shuttle Bus TripIn"}),e.jsx("p",{className:"text-xs text-gray-500",children:s.license_plate})]})]}),e.jsx("div",{className:"mt-4",children:e.jsxs("div",{className:"flex items-center space-x-4 ml-20",children:[e.jsx("div",{className:"flex items-start h-full",children:e.jsx(N,{})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"items-center mt-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500",children:d(a.selectedDay,"MMMM d, yyyy")}),e.jsx("div",{className:"flex items-center space-x-2 text-sm",children:e.jsxs("span",{className:"font-semibold",children:["from: ",a.origin]})})]}),e.jsx("span",{className:"text-xs",children:s.pivot.departure_time.split(":").slice(0,2).join(":")}),e.jsxs("div",{className:"mt-4",children:[e.jsx("div",{className:"flex items-center space-x-2 text-sm",children:e.jsxs("span",{className:"font-semibold",children:["to: ",t.name]})}),e.jsx("span",{className:"text-xs",children:s.pivot.arrival_time.split(":").slice(0,2).join(":")})]})]}),e.jsxs("div",{className:"flex justify-between mt-2",children:[e.jsx("div",{className:"flex items-center space-x-2 text-xs text-gray-400"}),e.jsxs("p",{className:"text-blue-600 font-semibold",children:[new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(s.pivot.price),"/pax"]})]})]})]})})]},s.pivot.route_id))):e.jsx("div",{children:"No buses found for the search term."})]})},b=({booking:r,routes:a})=>(i.useState(null),console.log("Booking Data",r),console.log("Rute",a),!a||a.length===0?e.jsx("div",{children:"No routes available"}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"min-h-screen bg-white flex flex-col w-full lg:w-[400px]",children:[e.jsx("header",{className:"bg-primary h-[108px] text-white py-6 shadow-md rounded-b-md",children:e.jsxs("div",{className:"flex   relative justify-center",children:[e.jsx(j,{className:"size-6 text-white font-bold absolute z-50 top-1/2 translate-y-[-50%] left-3 cursor-pointer",onClick:()=>history.back()}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-xl font-bold text-center w-full",children:r.cityValue}),e.jsx("div",{className:"flex items-center space-x-2 mt-2 text-sm w-full",children:e.jsxs("span",{children:[d(r.selectedDay,"MMMM d, yyyy")," ","• ",r.seatsValue," Seat •"," ",a.length," Buses"]})})]})]})}),e.jsx("main",{className:"flex-grow p-4 space-y-4",children:e.jsx(v,{routes:a,booking:r})})]})})}));export{b as default};
