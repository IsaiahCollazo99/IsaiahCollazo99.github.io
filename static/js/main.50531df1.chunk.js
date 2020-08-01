(this["webpackJsonpisaiah-collazo"]=this["webpackJsonpisaiah-collazo"]||[]).push([[0],{21:function(e,a,t){e.exports=t.p+"static/media/image_me.6eca29ea.jpg"},25:function(e,a,t){e.exports=t.p+"static/media/Resume_Isaiah_Collazo.6321d579.pdf"},26:function(e,a,t){e.exports=t.p+"static/media/logo.8ca3e748.png"},27:function(e,a,t){e.exports=t.p+"static/media/image_contact.b79d2666.JPG"},28:function(e,a,t){e.exports=t.p+"static/media/home_background.a99e47ea.jpg"},29:function(e,a,t){e.exports=t.p+"static/media/contact_background.47780f74.jpg"},31:function(e,a,t){e.exports=t(55)},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(11),l=t.n(o),c=(t(36),t(37),t(6)),i=t(21),s=t.n(i),m=(t(38),t(4)),u=function(){return r.a.createElement("div",{className:"homePageContainer"},r.a.createElement("div",{className:"aboutMe"},r.a.createElement("a",{href:"https://www.instagram.com/theycallme_zay_/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:s.a,alt:"isaiah",className:"aboutMeImg"})),r.a.createElement("div",{className:"aboutMeText"},r.a.createElement("h1",{className:"aboutMeTitle",onClick:function(){window.open("https://twitter.com/IsaiahCollazo8")}},"This is me"),r.a.createElement("div",{className:"aboutMePgraph"},"For as long as I can remember I've been writing down ideas for apps and games that I wanted to make some day, not really knowing the path to get there. It wasn't until high school that I found the game development software, RPG Maker. That began my love for problem solving. RPG Maker was built using JavaScript and I would spend hours just doing research on what they used and how to make certain things within the program more custom using the language. The games I built were always small but ambitious, and I just used them as learning experiences.",r.a.createElement("br",null),r.a.createElement("br",null),"Using JavaScript with the program inclined me to look further into what the language could be used for, with that I found web development. By my senior year in high school it was all I could think about. The ability to think of an idea and be able to see it's creation in front of your eyes, slowly building as you go, that's my favorite part. I'm finally able to make that childhood dream a reality."))),r.a.createElement(m.b,{to:"/projects",className:"callToAction"},r.a.createElement("button",null,"View My Work")))},h=(t(44),t(24)),p=(t(50),function(e){var a=e.project,t=e.display,n=a.name,o=a.description,l=a.deploymentUrl,c=a.githubRepo,i=a.images,s=a.technologies,m=i.length?i.map((function(e,a){return r.a.createElement("div",{key:a,className:"imageWrapper",onClick:function(){return function(e){window.open(e)}(e)}},r.a.createElement("img",{src:e,alt:n}))})):r.a.createElement("p",{className:"error"},"No images found"),u=s.map((function(e,a){return r.a.createElement("li",{key:a},e)}));return r.a.createElement("div",{className:"projectItem ".concat(t)},r.a.createElement("div",{className:"projectItemImages"},i.length?r.a.createElement(h.Carousel,null,m):m),r.a.createElement("div",{className:"projectItemInfo"},r.a.createElement("header",null,r.a.createElement("p",{className:"projectItemName"},n),l?r.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},"Live"):null,r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},"Github")),r.a.createElement("p",{className:"projectItemDesc"},o),r.a.createElement("ul",{className:"projectItemTechnologies"},u)))}),d={flutter:{name:"Flutter",description:"\n            I was tasked with creating my version of a popular social media app, and with \n            that challenge, Flutter was born. Flutter is a web app that takes inspiration\n            from Twitter. On Flutter, a user can setup their own account, make new posts,\n            search all user related data, interact with other users and browse the days \n            top news stories.\n        ",deploymentUrl:"https://flutter-twitter.netlify.app/",githubRepo:"https://github.com/IsaiahCollazo99/Flutter",images:["https://i.imgur.com/qN3Q9I8.png","https://i.imgur.com/SFi8Q4p.png","https://i.imgur.com/DoseNxi.png"],technologies:["ReactJS","Express","NodeJS","Firebase","SQL"]},techTonic:{name:"Tech Tonic",description:"\n            A Twitter feed of top tech resources, opportunities, news. Tech Tonic provides\n            the user with the ability to search for any tech related tweets that fits them.\n            During the development process I was the technical lead, and was in charge of\n            implementing Twitter's API. Using express I set up a backend to make API calls,\n            and set up the structure for how the data is sent to the API, and the\n            functionality behind components that would need to interact with the API.\n        ",deploymentUrl:"",githubRepo:"https://github.com/IsaiahCollazo99/ttnn",images:[],technologies:["ReactJS","Express","NodeJS","Twitter API"]},calculator:{name:"Calculator",description:"\n            A simple recreation of the popular Calculator app for your browser. I was\n            able to create my own algorithm for order of operations including all operations\n            up to exponents.\n        ",deploymentUrl:"",githubRepo:"https://github.com/IsaiahCollazo99/Calculator",images:["https://i.imgur.com/JeSgSk5.png","https://i.imgur.com/BUOqiHF.png","https://i.imgur.com/KbHi6s4.png"],technologies:["ReactJS"]},ourCanvas:{name:"Our Canvas",description:"\n            Our Canvas is a web app that is used to link artists from all different\n            categories of art for their projects. If you are a musician, and want to\n            work on a video game you can search for a video game tag and find designers\n            looking for music for their games. At Our Canvas I contributed to the user\n            authentication, the styling, and the database queries and error handling on the\n            backend.\n        ",deploymentUrl:"",githubRepo:"https://github.com/IsaiahCollazo99/Our-Canvas",images:["https://i.imgur.com/4sR22i6.png","https://i.imgur.com/GZqIqRC.png","https://i.imgur.com/BsOFQ9b.png"],technologies:["ReactJS","NodeJS","Express","SQL","Multer"]}},g=(t(51),function(){var e=function(){var e=[],a=0;for(var t in d){var n=d[t],o=void 0;o=a%2===0?"regular":"reverse",e.push(r.a.createElement(p,{project:n,key:t,display:o})),a++}return e}();return r.a.createElement("div",{className:"projectsPageContainer"},e)}),f=t(25),E=t.n(f),b=(t(52),function(){return r.a.createElement("nav",{className:"mainNav"},r.a.createElement("div",{className:"navLinkContainer"},r.a.createElement(m.c,{exact:!0,to:"/",className:"navLink"},"ME"),r.a.createElement(m.c,{exact:!0,to:"/projects",className:"navLink"},"MY WORK"),r.a.createElement(m.c,{to:"/contact",className:"navLink"},"CONTACT"),r.a.createElement("a",{className:"navLink lastNav",href:E.a,target:"_blank",rel:"noopener noreferrer"},"RESUME")))}),w=t(26),v=t.n(w),N=(t(53),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"headerLeft"},r.a.createElement(m.b,{to:"/"},r.a.createElement("img",{src:v.a,alt:"Logo",className:"headerLogo"})),r.a.createElement("div",{className:"headerText"},r.a.createElement("a",{href:"https://www.linkedin.com/in/isaiah-collazo-aa0188151/",target:"_blank",className:"noDecoration white",rel:"noopener noreferrer"},r.a.createElement("p",{className:"headerName"},"Isaiah Collazo")),r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Web_developer",target:"_blank",className:"noDecoration grey",rel:"noopener noreferrer"},r.a.createElement("p",{className:"headerJob"},"Web Developer")))),r.a.createElement("div",{className:"headerRight"},r.a.createElement(b,null)))}),k=t(27),I=t.n(k),y=t(9),C=(t(54),t(30)),j=function(e){var a=Object(n.useState)(e),t=Object(C.a)(a,2),r=t[0],o=t[1];return{value:r,onChange:function(e){o(e.target.value)}}},x=function(){var e=j(""),a=j(""),t=j("");return r.a.createElement("form",{className:"emailForm",autoComplete:"off",action:"https://formspree.io/mjvaklbn",method:"POST",name:"emailForm"},r.a.createElement("div",{className:"userInfo"},r.a.createElement("label",{for:"name",className:"nameLabel"},"Name: "),r.a.createElement("input",Object.assign({type:"text"},e,{placeholder:"Enter Your Name",name:"name",required:!0,className:"nameInput"})),r.a.createElement("label",{for:"_replyto",className:"emailLabel"},"Email: "),r.a.createElement("input",Object.assign({type:"email"},a,{placeholder:"Enter Your Email",name:"_replyto",required:!0,className:"emailInput"}))),r.a.createElement("div",{className:"formMessage"},r.a.createElement("label",{for:"message"},"Message: "),r.a.createElement("textarea",Object.assign({},t,{placeholder:"Enter Your Message",name:"message",required:!0,rows:"10",cols:"30"}))),r.a.createElement("input",{type:"submit",value:"Send Message"}))},_=function(){return r.a.createElement("div",{className:"contactContainer"},r.a.createElement("div",{className:"contactPic"},r.a.createElement("a",{href:"https://www.linkedin.com/in/isaiah-collazo-aa0188151/",className:"contactPicAnchor",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:I.a,alt:"isaiah"})),r.a.createElement("div",{className:"contactInfo"},r.a.createElement("a",{href:"mailto:isaiahramoncollazo@gmail.com",className:"contactEmail",target:"_blank",rel:"noopener noreferrer"},"isaiahramoncollazo@gmail.com"),r.a.createElement("div",{className:"socialMedia"},r.a.createElement("a",{href:"https://www.linkedin.com/in/isaiah-collazo-aa0188151/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(y.b,{className:"icon",size:"75px",color:"#0077B5"})),r.a.createElement("a",{href:"https://github.com/IsaiahCollazo99",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(y.a,{className:"icon",size:"75px",color:"#24292E"})),r.a.createElement("a",{href:"https://twitter.com/IsaiahCollazo8",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(y.c,{className:"icon",size:"75px",color:"#1DA1F2"}))))),r.a.createElement(x,null))},z=t(28),T=t.n(z),S=t(29),M=t.n(S);var R=function(){var e=Object(c.f)(),a={backgroundImage:null,backgroundSize:"cover"};return"/"===e.pathname?a.backgroundImage="url("+T.a+")":"/contact"===e.pathname?a.backgroundImage="url("+M.a+")":"/projects"===e.pathname&&(a={"background-color":"#1b272f"}),r.a.createElement("div",{className:"App"},r.a.createElement(N,null),r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/"},r.a.createElement(u,null)),r.a.createElement(c.a,{exact:!0,path:"/projects"},r.a.createElement(g,null)),r.a.createElement(c.a,{exact:!0,path:"/contact"},r.a.createElement(_,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,null,r.a.createElement(R,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.50531df1.chunk.js.map