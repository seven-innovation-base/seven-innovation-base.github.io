(self.webpackChunkseven_innovation_base_website=self.webpackChunkseven_innovation_base_website||[]).push([[3426],{6415:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return c}});var r=a(7294),n=a(8913);function l(t){var e=/^github\:(.+)$/.exec(t);return e?"https://avatars.githubusercontent.com/"+e[1]+"?s=256":t}var s=[{name:"yww",avatar:"github:jaslli",description:"\u8868\u9762\u5f88\u83dc\uff0c\u5176\u5b9e\u5f88\u5f3a",githubUrl:"https://github.com/jaslli",blogUrl:"https://yww52.com/"},{name:"yeshan333",avatar:"github:yeshan333",description:"\u7384\u5b66\u7231\u597d\u8005&\u6478\ud83d\udc1f\u5927\u5e08\uff0c\u8d44\u6df1\u6df7\u5b50",githubUrl:"https://github.com/yeshan333",blogUrl:"https://shansan.top"},{name:"Sustart",avatar:"https://cdn.jsdelivr.net/gh/MrGo123/asset@2020-1-2-1.0/headPortrait/mybloghp.jpg",description:"\u8d76\u7d27\u5b66\u4e60",githubUrl:"https://github.com/MrGo123",blogUrl:"https://zy68.top/"},{name:"redhat",avatar:"github:redhat123456",description:"\u9898\u4e0d\u53ef\u4e00\u65e5\u4e0d\u5237",githubUrl:"https://github.com/redhat123456",blogUrl:"https://redhat123456.github.io/"},{name:"Higgins",avatar:"https://i.loli.net/2020/07/31/QLmPF47aCS8sYGf.jpg",description:"\u9053\u751f\u4e00\uff0c\u4e00\u751f\u4e8c",githubUrl:"https://github.com/higgins995",blogUrl:"https://higgins995.top/"},{name:"lemon",avatar:"https://lvshaomei.github.io/images/banner/labia.jpeg",description:"The harder, the more fortunate",githubUrl:"https://github.com/Lvshaomei",blogUrl:"https://lvshaomei.github.io/"},{name:"suze",avatar:"https://picture.suze666.top/images/2020/02/20/22da933f1a91d0a482256d0a88440337.jpg",description:"\u4eca\u5929\u4e5f\u662f\u52aa\u529b\u5199\u4ee3\u7801\u7684\u4e00\u5929\u5462",githubUrl:"https://github.com/suze233",blogUrl:"https://suze666.top"},{name:"lei",avatar:"github:Leishen-hub",description:"\u9c7c",githubUrl:"https://github.com/Leishen-hub",blogUrl:"https://leishen-hub.github.io/"},{name:"liang",avatar:"github:010505",description:"\u4ece\u83dc\u9e1f\u5230\u5927\u795e",githubUrl:"https://github.com/010505",blogUrl:"https://github.com/010505/official-website"},{name:"norno",avatar:"github:nornoya",description:"0v0",githubUrl:"https://github.com/nornoya",blogUrl:"https://nornoya.github.io/"},{name:"ZXY39",avatar:"github:zxy39",description:"\u613f\u5b58\u521d\u5fc3",githubUrl:"https://github.com/ZXY39",blogUrl:"https://zxy39.gitee.io/"},{name:"WSX",avatar:"github:SS-YSY",description:"\u52aa\u529b\u52aa\u529b\u518d\u52aa\u529b",githubUrl:"https://github.com/SS-YSY",blogUrl:"https://ss-ysy.github.io/"}].map((function(t){return Object.assign({},t,{avatar:l(t.avatar)})}));function o(t){var e=t.className,a=t.name,n=t.avatar,l=t.children,s=t.githubUrl,o=t.blogUrl;return r.createElement("div",{className:e},r.createElement("div",{className:"card card--full-height shadow--md"},r.createElement("div",{className:"card__header"},r.createElement("div",{className:"avatar avatar--vertical"},r.createElement("img",{className:"avatar__photo avatar__photo--xl",src:n,alt:a+"'s avatar"}),r.createElement("div",{className:"avatar__intro"},r.createElement("h3",{className:"avatar__name"},a)))),r.createElement("div",{className:"card__body"},l),r.createElement("div",{className:"card__footer"},r.createElement("div",{className:"button-group button-group--block"},s&&r.createElement("a",{className:"button button--secondary",href:s,target:"_blank"},"GitHub"),o&&r.createElement("a",{className:"button button--secondary",href:o,target:"_blank"},"Blog")))))}function i(){var t=s.sort((function(){return Math.random()-.5}));return r.createElement("div",{className:"row"},t.map((function(t){return r.createElement(o,{key:t.githubUrl+t.name,className:"col col--3 margin-bottom--md",name:t.name,avatar:t.avatar,children:t.description,githubUrl:t.githubUrl,blogUrl:t.blogUrl})})))}var c=function(){return r.createElement(n.Z,{title:"\u56e2\u961f\u6210\u5458"},r.createElement("main",{className:"container margin-vert--lg"},r.createElement("div",{className:"text--center margin-bottom--xs"},r.createElement("h1",null,"\u56e2\u961f\u6210\u5458"),r.createElement("p",null,"Members"))),r.createElement(i,null),r.createElement("div",{className:"text--center margin-bottom--xs"},r.createElement("p",null,r.createElement("a",{className:"button button--lg button--primary",href:"https://github.com/seven-innovation-base/official-website/edit/main/src/data/members.data.ts",target:"_blank"},"\u9001\u6211\u4e0a\u5899"))))}},6197:function(t,e,a){"use strict";a.d(e,{Z:function(){return b}});var r=a(2122),n=a(9756),l=a(7294),s=a(6010),o=a(6742),i=a(6700),c=a(4996),m="footerLogoLink_qW4Z",h=a(8465);function u(t){var e=t.to,a=t.href,s=t.label,i=t.prependBaseUrlToHref,m=(0,n.Z)(t,["to","href","label","prependBaseUrlToHref"]),h=(0,c.Z)(e),u=(0,c.Z)(a,{forcePrependBaseUrl:!0});return l.createElement(o.Z,(0,r.Z)({className:"footer__link-item"},a?{href:i?u:a}:{to:h},m),s)}var g=function(t){var e=t.sources,a=t.alt;return l.createElement(h.Z,{className:"footer__logo",alt:a,sources:e})};var b=function(){var t=(0,i.LU)().footer,e=t||{},a=e.copyright,r=e.links,n=void 0===r?[]:r,h=e.logo,b=void 0===h?{}:h,p={light:(0,c.Z)(b.src),dark:(0,c.Z)(b.srcDark||b.src)};return t?l.createElement("footer",{className:(0,s.Z)("footer",{"footer--dark":"dark"===t.style})},l.createElement("div",{className:"container"},n&&n.length>0&&l.createElement("div",{className:"row footer__links"},n.map((function(t,e){return l.createElement("div",{key:e,className:"col footer__col"},null!=t.title?l.createElement("h4",{className:"footer__title"},t.title):null,null!=t.items&&Array.isArray(t.items)&&t.items.length>0?l.createElement("ul",{className:"footer__items"},t.items.map((function(t,e){return t.html?l.createElement("li",{key:e,className:"footer__item",dangerouslySetInnerHTML:{__html:t.html}}):l.createElement("li",{key:t.href||t.to,className:"footer__item"},l.createElement(u,t))}))):null)}))),(b||a)&&l.createElement("div",{className:"footer__bottom text--center"},b&&(b.src||b.srcDark)&&l.createElement("div",{className:"margin-bottom--sm"},b.href?l.createElement(o.Z,{href:b.href,className:m},l.createElement(g,{alt:b.alt,sources:p})):l.createElement(g,{alt:b.alt,sources:p})),a?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null}}}]);