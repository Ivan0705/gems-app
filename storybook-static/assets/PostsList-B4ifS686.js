import{j as s}from"./jsx-runtime-CfatFE5O.js";import{r as p}from"./index-ClcD9ViR.js";import{u as h}from"./useTranslation-qApjsL5e.js";const y="_postItem_1a0yp_1",x="_postItem_title_1a0yp_8",L="_postItem_line_1a0yp_12",d={postItem:y,postItem_title:x,postItem_line:L},l=p.memo(n=>{const{post:e}=n;return s.jsx("article",{className:d.postItem,"data-testid":"postitem",children:s.jsxs("div",{children:[s.jsx("i",{children:e.id}),".",s.jsxs("b",{className:d.postItem_title,children:[" ",e.title]}),s.jsx("hr",{className:d.postItem_line}),s.jsx("p",{children:e.body})]},e.id)})});l.__docgenInfo={description:"",methods:[],displayName:"PostItem"};const j="_postsList_error_y13bo_1",c={postsList_error:j},P=p.memo(n=>{const{posts:e,search:r,error:_,isLoading:u}=n,{t:I}=h("notFoundPost"),t="",m=o=>o&&o.filter(i=>r.toLowerCase()===t||i.body.toLowerCase().includes(r)||r.toLowerCase()===t?i:i.title.toLowerCase().includes(r)),a=e&&[...m(e)],f=_||a!=null&&a.length?t:s.jsx("div",{className:c.postsList_error,children:I("not_found_post")});return s.jsxs("div",{"data-testid":"postslist",className:c.postsList,children:[u===!1?f:t,e&&m(e).map(o=>s.jsx(l,{post:o},o.id))]})});P.__docgenInfo={description:"",methods:[],displayName:"PostsList",props:{posts:{required:!0,tsType:{name:"union",raw:"IPost[] | undefined",elements:[{name:"Array",elements:[{name:"IPost"}],raw:"IPost[]"},{name:"undefined"}]},description:""},search:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"union",raw:"FetchBaseQueryError | SerializedError | undefined",elements:[{name:"FetchBaseQueryError"},{name:"SerializedError"},{name:"undefined"}]},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""}}};export{l as P,P as a};
