import{r,j as t}from"./app-uBn0CTW0.js";const m=({isModalHidden:e,setIsModalHidden:a,children:s})=>{const[l,i]=r.useState(!1);function n(){e?a(!1):(i(!0),setTimeout(()=>{i(!1),a(!0)},300))}return t.jsx(t.Fragment,{children:t.jsx("div",{id:"modal",className:`flex justify-center items-center w-full h-full bg-black fixed top-0 left-0 z-50 ${e?"hidden opacity-0":"bg-opacity-[15%]"}`,onClick:n,children:t.jsx("div",{className:`absolute z-20 bg-white rounded-lg w-fit h-fit modal  ${l?"animate-slide-out":e?"":"animate-slide-in"}`,onClick:o=>o.stopPropagation(),children:s})})})};export{m as M};
