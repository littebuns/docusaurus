"use strict";(self.webpackChunkxxb_docusaurus=self.webpackChunkxxb_docusaurus||[]).push([[5183],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,s[1]=c;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8962:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_label:"\u5b57\u7b26\u4e32\u5f62\u5f0f\u7684 ref",sidebar_postition:1},s=void 0,c={unversionedId:"js/react/properties/refs/ref-string",id:"js/react/properties/refs/ref-string",title:"ref-string",description:"ref \u662f\u7ec4\u4ef6\u6216DOM \u6807\u8bc6\u81ea\u5df1\u7684",source:"@site/docs/js/react/properties/refs/ref-string.mdx",sourceDirName:"js/react/properties/refs",slug:"/js/react/properties/refs/ref-string",permalink:"/docusaurus/docs/js/react/properties/refs/ref-string",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/js/react/properties/refs/ref-string.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"\u5b57\u7b26\u4e32\u5f62\u5f0f\u7684 ref",sidebar_postition:1},sidebar:"javaScriptSidebar",previous:{title:"refs",permalink:"/docusaurus/docs/category/refs"}},i={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"ref \u662f\u7ec4\u4ef6\u6216DOM \u6807\u8bc6\u81ea\u5df1\u7684")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8" />\n    <title>Hello World</title>\n    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>\n    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>\n    <script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>\n  </head>\n  <body>\n    <div id="div1"></div>\n\n    <script type="text/babel">\n      class Person extends React.Component {\n        click = () => {\n          const { input1 } = this.refs;\n          alert(input1.value);\n        };\n\n        blur = () => {\n          const { input2 } = this.refs;\n          alert(input2.value);\n        };\n\n        render() {\n          return (\n            <>\n              <input ref="input1" type="text" placeholder="\u70b9\u51fb\u6309\u94ae\u663e\u793a\u6587\u672c" />\n              <button onClick={this.click}>\u663e\u793a\u5de6\u4fa7\u8f93\u5165\u6846\u6587\u672c</button>\n              <input\n                ref="input2"\n                onBlur={this.blur}\n                type="text"\n                placeholder="\u5931\u53bb\u7126\u70b9\u540e\u663e\u793a\u6587\u672c"\n              />\n            </>\n          );\n        }\n      }\n\n      const container1 = document.getElementById("div1");\n      const root1 = ReactDOM.createRoot(container1);\n\n      root1.render(<Person />);\n    <\/script>\n  </body>\n</html>\n\n')))}d.isMDXComponent=!0}}]);