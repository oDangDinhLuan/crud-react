(this["webpackJsonpcrud-react"]=this["webpackJsonpcrud-react"]||[]).push([[0],{23:function(e){e.exports=JSON.parse('{"id":1,"name":"Post 1","desc":"There is a clickable image with beautiful hover effect and active title link for each post item. Left side is a sticky menu bar. Right side is a blog content that will scroll up and down.","image":"https://pbs.twimg.com/media/C_-lDRtV0AATY1d.jpg","content":"<p style=\'color: red\'>Content 1</p>"}')},24:function(e){e.exports=JSON.parse('{"id":2,"name":"Post 12","desc":"There is a clickable image with beautiful hover effect and active title link for each post item. Left side is a sticky menu bar. Right side is a blog content that will scroll up and down.","image":"https://pbs.twimg.com/media/C_-lDRtV0AATY1d.jpg","content":"Content 12"}')},27:function(e,t,a){e.exports=a(41)},32:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),l=a.n(r),i=(a(32),a(5)),s=a(6),o=a(7),m=a(8),p=a(15),u=[a(23),a(24)],h=a(9),d=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.post;return c.a.createElement("div",{className:"col-12 col-md-6 tm-post",key:e.id},c.a.createElement("hr",{className:"tm-hr-primary"}),c.a.createElement(h.b,{to:"/posts/".concat(e.id),className:"effect-lily tm-post-link tm-pt-60"},c.a.createElement("div",{className:"tm-post-link-inner"},c.a.createElement("img",{src:e.image,alt:"",className:"img-fluid"})),c.a.createElement("h2",{className:"tm-pt-30 tm-color-primary tm-post-title"},e.name)),c.a.createElement("p",{className:"tm-pt-30"},e.desc))}}]),a}(n.Component),f=a(26),v=a.n(f),b=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handlePageClick=function(e){var t=e.selected,a=t*n.state.perPage;n.setState({currentPage:t,offset:a},(function(){n.receivedData()}))},n.state={offset:0,perPage:4,currentPage:0},n.handlePageClick=n.handlePageClick.bind(Object(p.a)(n)),n}return Object(s.a)(a,[{key:"receivedData",value:function(){var e=u,t=e.slice(this.state.offset,this.state.offset+this.state.perPage).map((function(e){return c.a.createElement(d,{post:e,key:e.id})}));this.setState({pageCount:Math.ceil(e.length/this.state.perPage),postData:t})}},{key:"componentDidMount",value:function(){this.receivedData()}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row tm-row"},this.state.postData),c.a.createElement(v.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:this.state.pageCount,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.handlePageClick,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}))}}]),a}(n.Component),g=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=u.find((function(t){return t.id==e.props.match.params.id}));return c.a.createElement("div",{className:"row tm-row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("img",{src:t.image,alt:"",width:"954",height:"535",controls:!0,className:"tm-mb-40"})),c.a.createElement("div",{className:"col-lg-12 tm-post-col"},c.a.createElement("div",{className:"tm-post-full"},c.a.createElement("div",{className:"mb-4"},c.a.createElement("h2",{className:"pt-2 tm-color-primary tm-post-title"},t.name),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.content}}),c.a.createElement("span",{className:"d-block text-right tm-color-primary"},"Created by LuanBkap Blog")))))}}]),a}(n.Component),E=a(10),k=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={curentSiteBar:"home"},e.handleClickSiteBar=function(t){e.setState({curentSiteBar:t})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state.curentSiteBar;return c.a.createElement("header",{className:"tm-header",id:"tm-header"},c.a.createElement("div",{className:"tm-header-wrapper"},c.a.createElement("button",{className:"navbar-toggler",type:"button","aria-label":"Toggle navigation"},c.a.createElement(E.a,{icon:"bars"})),c.a.createElement("div",{className:"tm-site-header"},c.a.createElement("h1",{className:"text-center"},"LuanBkap Blog")),c.a.createElement("nav",{className:"tm-nav",id:"tm-nav"},c.a.createElement("ul",null,c.a.createElement("li",{className:"tm-nav-item ".concat("home"===t?"active":""),onClick:function(){return e.handleClickSiteBar("home")}},c.a.createElement(h.b,{to:"/",className:"tm-nav-link"},"Blog Home")),c.a.createElement("li",{className:"tm-nav-item"},c.a.createElement("a",{href:"post.html",className:"tm-nav-link"},"Profile")),c.a.createElement("li",{className:"tm-nav-item ".concat("contact"===t?"active":""),onClick:function(){return e.handleClickSiteBar("contact")}},c.a.createElement(h.b,{to:"/contact",className:"tm-nav-link"},"Contact Us")))),c.a.createElement("div",{className:"tm-mb-65"},c.a.createElement("a",{rel:"nofollow",href:"https://fb.com/templatemo",className:"tm-social-link"},c.a.createElement(E.a,{icon:["fab","facebook"]})),c.a.createElement("a",{href:"https://twitter.com",className:"tm-social-link"},c.a.createElement(E.a,{icon:["fab","twitter"]})),c.a.createElement("a",{href:"https://instagram.com",className:"tm-social-link"},c.a.createElement(E.a,{icon:["fab","instagram"]})),c.a.createElement("a",{href:"https://linkedin.com",className:"tm-social-link"},c.a.createElement(E.a,{icon:["fab","linkedin"]}))),c.a.createElement("p",{className:"tm-mb-80 pr-5 text-white"},"LuanBkap Blog l\xe0 n\u01a1i chia s\u1ebb ki\u1ebfn th\u1ee9c IT. Website \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng ho\xe0n to\xe0n b\u1eb1ng reactjs v\xe0 html")))}}]),a}(n.Component),N=(a(40),a(13)),y=a(11),C=a(14),w=a(2);N.b.add(y.e,y.b,y.c,y.a,y.d,C.a,C.d,C.b,C.c);var j=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={isClickDetail:!1,currentId:null},e}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(h.a,null,c.a.createElement(k,null),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("main",{className:"tm-main"},c.a.createElement(w.a,{exact:!0,path:"/",component:b}),c.a.createElement(w.a,{path:"/posts",component:b},c.a.createElement(w.a,{path:"/posts/:id",component:g}))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.51420093.chunk.js.map