"use strict";(self.webpackChunkseven_innovation_base_website=self.webpackChunkseven_innovation_base_website||[]).push([[7007],{51142:function(e,t,n){n.d(t,{Z:function(){return a},y:function(){return l}});var a=function(){};a.GithubIssueUrl="https://api.github.com/repositories/267360943/issues/86/comments";var l=function(){};l.AxieyunUrl="https://tanger.fit:7777"},53936:function(e,t,n){n.r(t),n.d(t,{default:function(){return Q}});var a=n(67294),l=n(24632),c=n(50894),r=n(3786),i=n(79216),s=n(71230),o=n(15746),u=n(79531),m=n(71577),f=n(95507),E=n(86871),g=n(11382),d=n(87547),p=n(29158),Z=n(38123),h=n(63606),v=n(73453),b=n(9669),y=n.n(b),N=n(51142),w=c.Z.Title;function C(){var e="",t="",n="",l=(0,a.useState)([]),c=l[0],b=l[1],C=(0,a.useState)(!1),Q=C[0],k=C[1];return(0,a.useEffect)((function(){y().get(N.y.AxieyunUrl+"/student/getQqList").then((function(e){for(var t=new Array,n=0;n<e.data.data.length;n++){var a={id:n,url:"https://api.vvhan.com/api/qt?qq="+e.data.data[n]};t.push(a)}b(t);k(!0)}))}),[]),a.createElement("div",{className:"Registration"},a.createElement(w,{level:1,className:"Section-title"},"22\u7ea7\u65b0\u751f\u62a5\u540d\u8868"),a.createElement("p",{className:"Section-p"},"\u60f3\u52a0\u5165\u57fa\u5730\u768422\u7ea7\u8bf7\u586b\u4e0b\u8868\u7136\u540e\u63d0\u4ea4\uff0c\u52a0\u5165\u300a22\u7ea7\u57fa\u5730\u65b0\u751f\u62db\u65b0\u7fa4\u300b\uff0c\u7559\u610f\u57fa\u5730\u7684\u62db\u65b0\u9762\u8bd5\u4ee5\u53ca\u57f9\u8bad"),a.createElement("div",{className:"list"},a.createElement(s.Z,{className:"liebiao"},a.createElement(o.Z,{span:2},"\u59d3\u540d\uff1a"),a.createElement(o.Z,null,a.createElement(u.Z,{size:"large",placeholder:"\u8bf7\u8f93\u5165\u59d3\u540d",prefix:a.createElement(d.Z,null),onChange:function(e){!function(e){console.log(e),t=e}(e.target.value)}}))),a.createElement(s.Z,{className:"liebiao"},a.createElement(o.Z,{span:2},"\u5b66\u53f7\uff1a"),a.createElement(o.Z,null,a.createElement(u.Z,{size:"large",placeholder:"\u8bf7\u8f93\u5165\u5b66\u53f7",prefix:a.createElement(p.Z,null),onChange:function(t){!function(t){console.log(t),e=t}(t.target.value)}}))),a.createElement(s.Z,{className:"liebiao"},a.createElement(o.Z,{span:2},"QQ\u53f7\uff1a"),a.createElement(o.Z,null,a.createElement(u.Z,{size:"large",placeholder:"\u8bf7\u8f93\u5165QQ\u53f7",prefix:a.createElement(Z.Z,null),onChange:function(e){!function(e){console.log(e),n=e}(e.target.value)}}))),a.createElement(s.Z,{className:"liebiao"},a.createElement(m.Z,{type:"primary",shape:"round",icon:a.createElement(h.Z,null),size:"large",onClick:function(){return function(){console.log(e),console.log(t),console.log(n);var l={name:t,studentId:e,qqNumber:n};y().post(N.y.AxieyunUrl+"/student/add",l).then((function(e){console.log(e),201!=e.status&&200!=e.status||(console.log("\u6dfb\u52a0\u6210\u529f"),r.Z.success({content:a.createElement("div",{className:"image"},a.createElement("h2",null," \u6dfb\u52a0\u6210\u529f"),a.createElement("p",null,"\u8bf7\u7528QQ/TIM\u626b\u63cf\u4ee5\u4e0b\u4e8c\u7ef4\u7801\u8fdb\u7fa4"),a.createElement(i.Z,{width:200,src:"https://cdn.jsdelivr.net/gh/filess/img7@main/2022/09/28/1664375620509-f45f1f87-2931-4c66-868f-3763fdc2bae1.jpg"}))}))})).catch((function(e){console.log(e)}))}()}},"\u63d0\u4ea4"))),a.createElement("div",{className:"show"},"\u5df2\u62a5\u540d\u7684\u540c\u5b66\uff1a",a.createElement("div",null,Q?a.createElement(f.ZP,null,a.createElement(v.Z,{data:c,itemHeight:47,itemKey:"id"},(function(e){return a.createElement(f.ZP.Item,{key:e.id},a.createElement(f.ZP.Item.Meta,{avatar:a.createElement(E.C,{src:e.url})}))}))):a.createElement(g.Z,{tip:"Loading...",size:"large"}))))}var Q=function(){return a.createElement(l.Z,{title:"Registration"},a.createElement(C,null))}}}]);