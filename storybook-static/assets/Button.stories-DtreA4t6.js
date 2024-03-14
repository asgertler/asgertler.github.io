import{j as k}from"./jsx-runtime-BnIj46N_.js";import"./index-CsdIBAqE.js";const d=({primary:y=!1,backgroundColor:g,icon:n,label:b,...f})=>{const S=y?"storybook-button--primary":"storybook-button--secondary";return k.jsxs("button",{type:"button",className:["storybook-button",S].join(" "),style:{backgroundColor:g},...f,children:[n||"",b]})};d.__docgenInfo={description:"",methods:[],displayName:"Button",props:{primary:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactElement",elements:[{name:"SVGElement"},{name:"union",raw:"string | JSXElementConstructor<unknown>",elements:[{name:"string"},{name:"JSXElementConstructor",elements:[{name:"unknown"}],raw:"JSXElementConstructor<unknown>"}]}],raw:"ReactElement<SVGElement, string | JSXElementConstructor<unknown>>"},description:""},label:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const w={title:"Components/Button",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}},e={args:{primary:!0,label:"Button"}},r={args:{label:"Button"}},t={args:{primary:!0,label:"Button"}};var o,a,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var u,m,c;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var l,i,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const C=["Primary","Secondary","Icon"];export{t as Icon,e as Primary,r as Secondary,C as __namedExportsOrder,w as default};
