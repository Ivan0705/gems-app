import{j as i}from"./jsx-runtime-CfatFE5O.js";import{r as t}from"./index-ClcD9ViR.js";import{r as g,G as d}from"./ruby1-Boq3XGfw.js";import{I as c}from"./Icon-kQqBFIbY.js";import{B as w,a as b}from"./Button-CEQMFML8.js";import{u as h}from"./useTranslation-qApjsL5e.js";const x=""+new URL("diamond1-M2yWHK9D.jpg",import.meta.url).href,f=""+new URL("emerald1-Bf5xs-IJ.jpg",import.meta.url).href,v=""+new URL("sapphire1-Dhknx8t_.jpg",import.meta.url).href,u=[{title:"diamond_title",text:"diamond",avatar:x},{title:"emerald_title",text:"emerald",avatar:f},{title:"sapphire_title",text:"sapphire",avatar:v},{title:"ruby_title",text:"ruby",avatar:g}],I="_gems_1e40b_1",C="_gems_wrapper_1e40b_6",E="_gems_wrapper_mini_1e40b_15",j="_gems_wrapper_big_1e40b_25",y="_mini_1e40b_29",G="_big_1e40b_38",M="_btn_1e40b_42",n={gems:I,gems_wrapper:C,gems_wrapper_mini:E,gems_wrapper_big:j,mini:y,big:G,btn:M,switch:"_switch_1e40b_53"},p="size";var m=(e=>(e.BIG="big",e.MINI="mini",e))(m||{});const B=({title:e,titleId:r,...o},a)=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1280.000000pt",height:"640.000000pt",viewBox:"0 0 1280.000000 640.000000",preserveAspectRatio:"xMidYMid meet",ref:a,"aria-labelledby":r,...o},e?t.createElement("title",{id:r},e):null,t.createElement("metadata",null,`
Created by potrace 1.15, written by Peter Selinger 2001-2017
`),t.createElement("g",{transform:"translate(0.000000,640.000000) scale(0.100000,-0.100000)",fill:"--primary-color",stroke:"none"},t.createElement("path",{d:"M1335 4678 c-664 -75 -1179 -551 -1311 -1213 -28 -136 -25 -405 5 -545 97 -456 372 -823 771 -1029 129 -66 251 -110 403 -143 l102 -23 5095 0 5095 0 102 23 c152 33 274 77 403 143 399 206 674 573 771 1029 30 140 33 409 5 545 -134 670 -648 1141 -1328 1214 -123 14 -9994 13 -10113 -1z"}))),H=t.forwardRef(B),R=({title:e,titleId:r,...o},a)=>t.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:a,"aria-labelledby":r,...o},e?t.createElement("title",{id:r},e):null,t.createElement("path",{fill:"--primary-color",d:"M6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4V4ZM13 13V18H18V13H13ZM6 13V18H11V13H6ZM13 6V11H18V6H13ZM6 6V11H11V6H6Z"})),V=t.forwardRef(R),N=localStorage.getItem(p)||m.BIG,S=t.memo(()=>{const{t:e}=h(["gems"]),r=n.gems_wrapper_big,o=n.gems_wrapper_mini,[a,l]=t.useState(N),_=()=>{const s=a===m.MINI?m.BIG:m.MINI;l==null||l(s),localStorage.setItem(p,s)};return i.jsxs("section",{className:n.gems,"data-testid":"gems",children:[i.jsx("div",{className:n.switch,children:i.jsx(w,{theme:b.CLEAR,onClick:_,children:a===m.BIG?i.jsx(c,{Svg:H,className:n.btn}):i.jsx(c,{Svg:V,className:n.btn})})}),i.jsx("div",{className:n.gems_wrapper,children:u.map(s=>i.jsx(d,{className:a===m.BIG?r:o,title:e(s.title),text:e(s.text),avatar:s.avatar},s.title))})]})});S.__docgenInfo={description:"",methods:[],displayName:"Gems"};export{S as G};
