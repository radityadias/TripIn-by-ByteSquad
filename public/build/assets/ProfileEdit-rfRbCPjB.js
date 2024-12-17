import{r as n,W as p,j as e}from"./app-2DLxi_6_.js";import{F as b}from"./ChevronLeftIcon-C7XJILlr.js";function f({title:l,titleId:t,...d},o){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":t},d),l?n.createElement("title",{id:t},l):null,n.createElement("path",{fillRule:"evenodd",d:"M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z",clipRule:"evenodd"}))}const g=n.forwardRef(f),j=({email:l,username:t,phone_number:d,gender:o})=>{const{data:a,setData:i,post:c,processing:u,errors:s}=p({username:t,phone_number:d,gender:o}),x=r=>{r.preventDefault();const m=document.head.querySelector('meta[name="csrf-token"]').content;c(route("profile.edit.send"),a,{headers:{"X-CSRF-TOKEN":m}})},h=r=>{r.preventDefault();const m=document.head.querySelector('meta[name="csrf-token"]').content;c(route("profile.edit.otp.send"),{headers:{"X-CSRF-TOKEN":m}})};return e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"h-fit w-full lg:max-w-[400px]",children:[e.jsxs("div",{className:"relative h-[220px] w-full bg-primary",children:[e.jsx(b,{className:"lef absolute left-5 top-[66px] size-8 cursor-pointer text-white",onClick:()=>{window.location.href="/profile"}}),e.jsx("p",{className:"pt-16 text-center text-3xl font-semibold text-white",children:"Edit Profile"})]}),e.jsxs("div",{className:"relative z-10 mt-[-1.75rem] h-full min-h-[100vh] w-full rounded-t-3xl bg-white px-6",children:[e.jsx("div",{className:"flex flex-col items-center",children:e.jsx("div",{className:"relative z-40 mt-[-3.5rem] h-[120px] w-[120px] overflow-hidden rounded-full",children:e.jsx("img",{src:"https://placehold.co/120x120"})})}),e.jsx("div",{className:"h-max-[230px] w-max-[392px] py-3",children:e.jsxs("form",{onSubmit:x,children:[e.jsx("label",{className:"text-md font-medium",children:"Name"}),e.jsx("input",{type:"name",id:"name",name:"username",value:a.username||"",onChange:r=>i("username",r.target.value),className:"mb-2 w-full rounded-lg border border-gray-300 bg-white p-3 text-black",required:!0}),s.username&&e.jsx("p",{className:"text-red-500",children:s.username}),e.jsx("label",{className:"text-md font-medium",children:"Email"}),e.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Email",className:"mb-2 w-full rounded-lg border border-gray-300 bg-white p-3 text-black",value:l||"",disabled:!0,required:!0,autoComplete:"email"}),e.jsx("label",{className:"text-md font-medium",children:"Password"}),e.jsx("input",{type:"password",id:"password",name:"password",value:"********",className:"w-full rounded-lg border border-gray-300 bg-white p-3 text-black",disabled:!0,required:!0}),e.jsxs("a",{onClick:h,className:"group relative mb-8 mt-8 flex h-[48px] items-center rounded-lg border border-slate-300 bg-white px-5 hover:cursor-pointer hover:border-slate-500 hover:bg-slate-50",children:[e.jsx("p",{children:"Change password"}),e.jsx(g,{className:"absolute right-3 size-6 group-hover:right-1"})]}),e.jsx("label",{className:"text-md font-medium",children:"Phone Number"}),e.jsx("input",{type:"text",id:"phone_number",name:"phone_number",value:a.phone_number||"",onChange:r=>i("phone_number",r.target.value),placeholder:"Your phone number",className:"mb-2 w-full rounded-lg border border-gray-300 bg-white p-3 text-black",required:!0}),s.phone_number&&e.jsx("p",{className:"text-sm text-red-500",children:s.phone_number}),e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("label",{className:"text-md w-full text-start font-medium",children:"Gender"}),e.jsxs("select",{className:"w-full rounded-md border border-slate-300",onChange:r=>i("gender",r.target.value),value:a.gender||"",children:[e.jsx("option",{value:"",disabled:!0,children:"Select Gender"}),e.jsx("option",{value:"male",children:"Male"}),e.jsx("option",{value:"female",children:"Female"})]})]}),e.jsx("button",{type:"",disabled:u,className:"my-5 w-full rounded-lg bg-primary2 py-2 text-white",children:u?"Processing...":"Update Profile"})]})})]})]})})};export{j as default};
