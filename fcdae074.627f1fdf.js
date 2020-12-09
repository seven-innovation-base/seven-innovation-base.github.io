(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{109:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(114)),i={slug:"StringBuilder-High-Performance-Usecase",title:"StringBuilder\u7684\u9ad8\u6027\u80fd\u4f7f\u7528\u65b9\u5f0f\u603b\u7ed3",author:"CkaiGrac",author_title:"\u5e94\u7528\u8f6f\u4ef6\u7814\u53d1\u90e8",author_url:"https://github.com/CkaiGrac",author_image_url:"https://avatars1.githubusercontent.com/u/44230699?s=460&v=4",tags:["Java"]},c={permalink:"/blog/StringBuilder-High-Performance-Usecase",editUrl:"https://github.com/seven-innovation-base/official-website/tree/master/blog/2019-08-30-StringBuilder\u7684\u9ad8\u6027\u80fd\u4f7f\u7528\u65b9\u5f0f.md",source:"@site/blog/2019-08-30-StringBuilder\u7684\u9ad8\u6027\u80fd\u4f7f\u7528\u65b9\u5f0f.md",description:"\u4e00\u3001\u8bbe\u7f6e\u5408\u7406\u7684\u521d\u59cb\u957f\u5ea6",date:"2019-08-30T00:00:00.000Z",tags:[{label:"Java",permalink:"/blog/tags/java"}],title:"StringBuilder\u7684\u9ad8\u6027\u80fd\u4f7f\u7528\u65b9\u5f0f\u603b\u7ed3",readingTime:1.205,truncated:!0,prevItem:{title:"\u7528win10\u81ea\u5e26\u865a\u62df\u673aHyper-V\u73a9\u8f6cLinux",permalink:"/blog/win10-hyper-v"}},u=[],l={rightToc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"\u4e00\u3001\u8bbe\u7f6e\u5408\u7406\u7684\u521d\u59cb\u957f\u5ea6"},"\u4e00\u3001\u8bbe\u7f6e\u5408\u7406\u7684\u521d\u59cb\u957f\u5ea6"),Object(o.b)("p",null,"\u5728StringBuilder\u7684\u6e90\u7801\u4e2d\uff0c\u6709\u4e00\u4e2achar","[ ]","\u6570\u7ec4\uff0c\u8fd9\u4e2a\u5c31\u662f\u7528\u6765\u5b58\u50a8\u5b57\u7b26\u7684\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"//AbstractStringBuilder.java\n/**\n* The value is used for character storage.\n*/\nchar[] value;\n/**\n* The count is the number of characters used.\n*/\nint count;\n")),Object(o.b)("p",null,"\u800ccount\u7edf\u8ba1\u5b57\u7b26\u6570\u91cf\u3002\u5f53\u76f4\u63a5",Object(o.b)("inlineCode",{parentName:"p"},"new StringBuilder();"),"\u65f6\uff0c\u4f20\u9012\u5230\u7236\u7c7b\u7684\u9ed8\u8ba4\u5927\u5c0f(capacity)\u4e3a16\uff0c\u4e5f\u5c31\u662f\u9ed8\u8ba4\u72b6\u6001\u4e0bchar","[ ]","\u6570\u7ec4\u7684\u957f\u5ea6\u4e3a16\u3002\n\u6765\u770b\u4e00\u4e0bappend\u65b9\u6cd5\uff1a"))}p.isMDXComponent=!0},114:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(r),f=n,m=s["".concat(i,".").concat(f)]||s[f]||b[f]||o;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);