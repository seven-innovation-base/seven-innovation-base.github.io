(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{113:function(t,a,e){"use strict";e.r(a);var r=e(0),n=e.n(r),i=e(123),s=(e(161),[{name:"yww",avatar:"https://github.com/jaslli.png",description:"\u8868\u9762\u5f88\u83dc\uff0c\u5176\u5b9e\u5f88\u5f3a",githubUrl:"https://github.com/jaslli",blogUrl:"https://yww52.com/"},{name:"yeshan333",avatar:"https://github.com/yeshan333.png",description:"\u7384\u5b66\u7231\u597d\u8005&\u6478\ud83d\udc1f\u5927\u5e08\uff0c\u8d44\u6df1\u6df7\u5b50",githubUrl:"https://github.com/yeshan333",blogUrl:"https://shansan.top"},{name:"Sustart",avatar:"https://cdn.jsdelivr.net/gh/MrGo123/asset@2020-1-2-1.0/headPortrait/mybloghp.jpg",description:"\u8d76\u7d27\u5b66\u4e60",githubUrl:"https://github.com/MrGo123",blogUrl:"https://zy68.top/"},{name:"redhat",avatar:"https://avatars.githubusercontent.com/u/57751257?s=460&u=634fb3d9085fd46aead74e7d0db0ae3d1d933f3f&v=4",description:"\u9898\u4e0d\u53ef\u4e00\u65e5\u4e0d\u5237",githubUrl:"https://github.com/redhat123456",blogUrl:"https://redhat123456.github.io/"},{name:"Higgins",avatar:"https://i.loli.net/2020/07/31/QLmPF47aCS8sYGf.jpg",description:"\u9053\u751f\u4e00\uff0c\u4e00\u751f\u4e8c",githubUrl:"https://github.com/higgins995",blogUrl:"https://higgins995.top/"},{name:"lemon",avatar:"https://lvshaomei.github.io/images/banner/labia.jpeg",description:"The harder, the more fortunate",githubUrl:"https://github.com/Lvshaomei",blogUrl:"https://lvshaomei.github.io/"},{name:"suze",avatar:"https://picture.suze666.top/images/2020/02/20/22da933f1a91d0a482256d0a88440337.jpg",description:"\u4eca\u5929\u4e5f\u662f\u52aa\u529b\u5199\u4ee3\u7801\u7684\u4e00\u5929\u5462",githubUrl:"https://github.com/suze233",blogUrl:"https://suze666.top"},{name:"lei",avatar:"http://github.com/Leishen-hub.jpeg",description:"\u9c7c",githubUrl:"https://github.com/Leishen-hub",blogUrl:"https://leishen-hub.github.io/"},{name:"liang",avatar:"https://avatars.githubusercontent.com/u/67368157?s=460&v=4",description:"\u4ece\u83dc\u9e1f\u5230\u5927\u795e",githubUrl:"https://github.com/010505",blogUrl:"https://github.com/010505/official-website"},{name:"norno",avatar:"https://avatars.githubusercontent.com/u/49840142?s=400&u=fcb6055d1e1f7133dc3a363e59c62d3dfc30dac9&v=4",description:"0v0",githubUrl:"https://github.com/nornoya",blogUrl:"https://nornoya.github.io/"},{name:"ZXY39",avatar:"https://github.com/zxy39.png",description:"\u613f\u5b58\u521d\u5fc3",githubUrl:"https://github.com/ZXY39",blogUrl:"https://zxy39.gitee.io/"},{name:"WSX",avatar:"https://raw.githubusercontent.com/SS-YSY/SS-YSY.github.io/master/1614943693671.jpg",description:"\u52aa\u529b\u52aa\u529b\u518d\u52aa\u529b",githubUrl:"https://github.com/SS-YSY",blogUrl:"https://ss-ysy.github.io/"}]);function o(t){var a=t.className,e=t.name,r=t.avatar,i=t.children,s=t.githubUrl,o=t.blogUrl;return n.a.createElement("div",{className:a},n.a.createElement("div",{className:"card card--full-height shadow--md"},n.a.createElement("div",{className:"card__header"},n.a.createElement("div",{className:"avatar avatar--vertical"},n.a.createElement("img",{className:"avatar__photo avatar__photo--xl",src:r,alt:e+"'s avatar"}),n.a.createElement("div",{className:"avatar__intro"},n.a.createElement("h3",{className:"avatar__name"},e)))),n.a.createElement("div",{className:"card__body"},i),n.a.createElement("div",{className:"card__footer"},n.a.createElement("div",{className:"button-group button-group--block"},s&&n.a.createElement("a",{className:"button button--secondary",href:s,target:"_blank"},"GitHub"),o&&n.a.createElement("a",{className:"button button--secondary",href:o,target:"_blank"},"Blog")))))}function l(){return n.a.createElement("div",{className:"row"},s.map((function(t){return n.a.createElement(o,{key:t.githubUrl+t.name,className:"col col--3 margin-bottom--md",name:t.name,avatar:t.avatar,children:t.description,githubUrl:t.githubUrl,blogUrl:t.blogUrl})})))}a.default=function(){return n.a.createElement(i.a,{title:"\u56e2\u961f\u6210\u5458"},n.a.createElement("main",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"text--center margin-bottom--xs"},n.a.createElement("h1",null,"\u56e2\u961f\u6210\u5458"),n.a.createElement("p",null,"Members"))),n.a.createElement(l,null),n.a.createElement("div",{className:"text--center margin-bottom--xs"},n.a.createElement("p",null,n.a.createElement("a",{className:"button button--lg button--primary",href:"https://github.com/seven-innovation-base/official-website/edit/main/src/data/members.data.js",target:"_blank"},"\u9001\u6211\u4e0a\u5899"))))}},161:function(t,a,e){"use strict";function r(t,a){if(!Array.isArray(t))throw new Error("shuffle expect an array as parameter.");a=a||{};var e,r,n=t,i=t.length,s=a.rng||Math.random;for(!0===a.copy&&(n=t.slice());i;)e=Math.floor(s()*i),r=n[i-=1],n[i]=n[e],n[e]=r;return n}r.pick=function(t,a){if(!Array.isArray(t))throw new Error("shuffle.pick() expect an array as parameter.");var e=(a=a||{}).rng||Math.random,r=a.picks||1;if("number"==typeof r&&1!==r){for(var n,i=t.length,s=t.slice(),o=[];r&&i;)n=Math.floor(e()*i),o.push(s[n]),s.splice(n,1),i-=1,r-=1;return o}return t[Math.floor(e()*t.length)]},t.exports=r}}]);