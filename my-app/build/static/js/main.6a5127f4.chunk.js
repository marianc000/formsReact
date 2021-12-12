(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{172:function(e,t,r){},173:function(e,t,r){},65:function(e,t,r){"use strict";r.r(t);r(0);var c=r(59),a=r.n(c),s=r(11),n=r(10),i=r(25),l=(r(172),r(173),r(1));const o=({label:e,...t})=>{const[r,c]=Object(s.c)(t);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("label",{htmlFor:t.id||t.name,children:e}),Object(l.jsx)("input",{className:"text-input",...r,...t}),c.touched&&c.error?Object(l.jsx)("div",{className:"error",children:c.error}):null]})},d=({children:e,...t})=>{const[r,c]=Object(s.c)({...t,type:"checkbox"});return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("label",{className:"checkbox",children:[Object(l.jsx)("input",{...r,...t,type:"checkbox"}),e]}),c.touched&&c.error?Object(l.jsx)("div",{className:"error",children:c.error}):null]})},b=i.a.select`
  color: var(--blue);
`,j=i.a.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`,m=i.a.label`
  margin-top: 1rem;
`,u=({label:e,...t})=>{const[r,c]=Object(s.c)(t);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(m,{htmlFor:t.id||t.name,children:e}),Object(l.jsx)(b,{...r,...t}),c.touched&&c.error?Object(l.jsx)(j,{children:c.error}):null]})},p=()=>Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Subscribe!"}),Object(l.jsx)(s.b,{initialValues:{firstName:"",lastName:"",email:"",acceptedTerms:!1,jobType:""},validationSchema:n.b({firstName:n.c().max(15,"Must be 15 characters or less").required("Required"),lastName:n.c().max(20,"Must be 20 characters or less").required("Required"),email:n.c().email("Invalid email addresss").required("Required"),acceptedTerms:n.a().required("Required").oneOf([!0],"You must accept the terms and conditions."),jobType:n.c().oneOf(["designer","development","product","other"],"Invalid Job Type").required("Required")}),onSubmit:async(e,t)=>{console.log(">onSubmit",e),await new Promise((e=>setTimeout(e,5e3))),t.setSubmitting(!1)},children:({isSubmitting:e})=>Object(l.jsxs)(s.a,{children:[Object(l.jsx)(o,{label:"First Name",name:"firstName",type:"text",placeholder:"Jane"}),Object(l.jsx)(o,{label:"Last Name",name:"lastName",type:"text",placeholder:"Doe"}),Object(l.jsx)(o,{label:"Email Address",name:"email",type:"email",placeholder:"jane@formik.com"}),Object(l.jsxs)(u,{label:"Job Type",name:"jobType",children:[Object(l.jsx)("option",{value:"",children:"Select a job type"}),Object(l.jsx)("option",{value:"designer",children:"Designer"}),Object(l.jsx)("option",{value:"development",children:"Developer"}),Object(l.jsx)("option",{value:"product",children:"Product Manager"}),Object(l.jsx)("option",{value:"other",children:"Other"})]}),Object(l.jsx)(d,{name:"acceptedTerms",children:"I accept the terms and conditions"}),Object(l.jsx)("button",{type:"submit",disabled:e,children:"Submit"})]})})]});function h(){return Object(l.jsx)(p,{})}const x=document.getElementById("root");a.a.render(Object(l.jsx)(h,{}),x)}},[[65,1,2]]]);
//# sourceMappingURL=main.6a5127f4.chunk.js.map