(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{15:function(e,s,t){},18:function(e,s,t){},20:function(e,s,t){"use strict";t.r(s);var c=t(1),a=t(8),n=t.n(a),i=(t(15),t(2)),r=t(3),o=t(5),l=t(4),j=t(9),d=t(10),h=t.n(d),b=(t(18),t(0)),m=function(e){Object(o.a)(t,e);var s=Object(l.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,s=this.props.data.occupation,t=this.props.data.description,c=this.props.data.address.city,a=this.props.data.social.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:e.url,children:Object(b.jsx)("i",{className:e.className})})},e.name)}));return Object(b.jsxs)("header",{id:"home",children:[Object(b.jsxs)("nav",{id:"nav-wrap",children:[Object(b.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(b.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(b.jsxs)("ul",{id:"nav",className:"nav",children:[Object(b.jsx)("li",{className:"current",children:Object(b.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})})]})]}),Object(b.jsx)("div",{className:"row banner",children:Object(b.jsxs)("div",{className:"banner-text",children:[Object(b.jsxs)("h1",{className:"responsive-headline",children:[" ",e]}),Object(b.jsxs)("h3",{children:["I'm a ",c," based ",Object(b.jsx)("span",{children:s}),". ",t,"."]}),Object(b.jsx)("hr",{}),Object(b.jsx)("ul",{className:"social",children:a})]})}),Object(b.jsx)("p",{className:"scrolldown",children:Object(b.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(b.jsx)("i",{className:"icon-down-circle"})})})]})}}]),t}(c.Component),u=function(e){Object(o.a)(t,e);var s=Object(l.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:e.url,children:Object(b.jsx)("i",{className:e.className})})},e.name)}));return Object(b.jsx)("footer",{children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"twelve columns",children:[Object(b.jsx)("ul",{className:"social-links",children:e}),Object(b.jsx)("ul",{className:"copyright",children:Object(b.jsx)("li",{children:"\xa9 Copyright 2021 Cody Ferguson"})})]}),Object(b.jsx)("div",{id:"go-top",children:Object(b.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(b.jsx)("i",{className:"icon-up-open"})})})]})})}}]),t}(c.Component),O=function(e){Object(o.a)(t,e);var s=Object(l.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,s="images/"+this.props.data.image,t=this.props.data.bio,c=this.props.data.address.city,a=this.props.data.address.state,n=this.props.data.email,i=this.props.data.resumedownload;return Object(b.jsx)("section",{id:"about",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"three columns",children:Object(b.jsx)("img",{className:"profile-pic",src:s,alt:"Cody Ferguson Profile Pic"})}),Object(b.jsxs)("div",{className:"nine columns main-col",children:[Object(b.jsx)("h2",{children:"About Me"}),Object(b.jsx)("p",{children:t}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"columns contact-details",children:[Object(b.jsx)("h2",{children:"Contact Details"}),Object(b.jsxs)("p",{className:"address",children:[Object(b.jsx)("span",{children:e}),Object(b.jsx)("br",{}),Object(b.jsxs)("span",{children:[c," , ",a]}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:n})]})]}),Object(b.jsx)("div",{className:"columns download",children:Object(b.jsx)("p",{children:Object(b.jsxs)("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"button",children:[Object(b.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})}}]),t}(c.Component),p=function(e){Object(o.a)(t,e);var s=Object(l.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,s=this.props.data.education.map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:e.school}),Object(b.jsxs)("p",{className:"info",children:[e.degree," ",Object(b.jsx)("span",{children:"\u2022"}),Object(b.jsx)("em",{className:"date",children:e.graduated})]}),Object(b.jsx)("p",{children:e.description})]},e.school)})),t=this.props.data.work.map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:e.company}),Object(b.jsxs)("p",{className:"info",children:[e.title,Object(b.jsx)("span",{children:"\u2022"})," ",Object(b.jsx)("em",{className:"date",children:e.years})]}),Object(b.jsx)("p",{children:e.description})]},e.company)})),c=this.props.data.techs.map((function(e){var s="images/tech/"+e.image;return Object(b.jsxs)("div",{className:"columns feature-item",children:[Object(b.jsx)("img",{className:"tech",alt:e.name,src:s}),Object(b.jsx)("h5",{children:e.name}),Object(b.jsx)("p",{children:e.description})]},e.name)}));return Object(b.jsxs)("section",{id:"resume",children:[Object(b.jsxs)("div",{className:"row education",children:[Object(b.jsx)("div",{className:"three columns header-col",children:Object(b.jsx)("h1",{children:Object(b.jsx)("span",{children:"Education"})})}),Object(b.jsx)("div",{className:"nine columns main-col",children:Object(b.jsx)("div",{className:"row item",children:Object(b.jsx)("div",{className:"twelve columns",children:s})})})]}),Object(b.jsxs)("div",{className:"row work",children:[Object(b.jsx)("div",{className:"three columns header-col",children:Object(b.jsx)("h1",{children:Object(b.jsx)("span",{children:"Work"})})}),Object(b.jsx)("div",{className:"nine columns main-col",children:t})]}),Object(b.jsxs)("div",{className:"row tech",children:[Object(b.jsx)("div",{className:"three columns header-col",children:Object(b.jsx)("h1",{children:Object(b.jsx)("span",{children:"Technology"})})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"nine columns main-col",children:Object(b.jsx)("p",{className:"lead center",children:e})}),Object(b.jsx)("ul",{className:"bgrid-quarters s-bgrid-thirds cf",children:c})]})]})]})}}]),t}(c.Component),x=function(e){Object(o.a)(t,e);var s=Object(l.a)(t);function t(e){var c;return Object(i.a)(this,t),(c=s.call(this,e)).state={foo:"bar",resumeData:{}},j.a.initialize("UA-110570651-1"),j.a.pageview(window.location.pathname),c}return Object(r.a)(t,[{key:"getResumeData",value:function(){h.a.ajax({url:"resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,s,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(m,{data:this.state.resumeData.main}),Object(b.jsx)(O,{data:this.state.resumeData.main}),Object(b.jsx)(p,{data:this.state.resumeData.resume}),Object(b.jsx)(u,{data:this.state.resumeData.main})]})}}]),t}(c.Component),f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var s=e.installing;s.onstatechange=function(){"installed"===s.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n.a.render(Object(b.jsx)(x,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");f?function(e){fetch(e).then((function(s){404===s.status||-1===s.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):v(e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.57fba036.chunk.js.map