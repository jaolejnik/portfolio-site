(function(e){function t(t){for(var i,r,o=t[0],c=t[1],l=t[2],p=0,h=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&h.push(n[r][0]),n[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(h.length)h.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],i=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(i=!1)}i&&(s.splice(t--,1),e=r(r.s=a[0]))}return e}var i={},n={app:0},s=[];function r(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=i,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(a,i,function(t){return e[t]}.bind(null,i));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/portfolio-site/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0be0":function(e){e.exports=JSON.parse('{"video-game-calendar":{"name":"video-game-calendar","title":"Video Game Calendar","subtitle":"Video games from the past and the future","thumbnail":"https://pbs.twimg.com/profile_images/1348715536746741761/wzAim1k9_400x400.jpg","github":"https://github.com/jaolejnik/video-game-calendar","description":{"paragrph1":{"header":"About the project","text":"This is a Twitter bot that posts daily list of the most popular video games that were released on the same day throughout the years. I was inspired by another bot, Kartka z kalendarza, which posts daily calendar cards with extraordinary holidays anda list of famous people who were born onthis day. I thought this idea could be easily applied to video game releases and was surprised when I found out no such account existed. With time I added also a functionality of listing upcoming video game releases.","images":[]},"paragrph2":{"header":"How does it work?","text":"The Python script sends request to IGBD using official API to get a list of every game, which has been ever released on this day of the month since 1970. It is sorted by the amount of people following the game, so in other words its popularity. Then a message is crafted with the most popular titles until it exceeds Twitter\'s character limit. Afterwards everything is once more sorted, this time by release date and published to Twitter. The project is deployed on Heroku.","images":["https://i.imgur.com/ed3wO72.png","https://i.imgur.com/pyPGTct.png"]}}},"nn-line-follower":{"name":"nn-line-follower","title":"Neural Network Line Follower","subtitle":"A Line Follower that teaches itself","thumbnail":"https://raw.githubusercontent.com/jaolejnik/nn-line-follower/master/simulation/assets/robot.png","github":"https://github.com/jaolejnik/nn-line-follower","description":{"paragrph1":{"header":"About this project","text":"The topic of my bachelor thesis was: Autonomous mobile robot controlled by an artificial neural network. The robot should be able to drive through a whole course from the start to the end without losing track of the designated path and to stop in a case of possible collision. It has been achieved by building a physical robot, creating a computer simulation and implementing an artificial intelligence algorithm using reinforcement learning methods i.e. Deep Q-learning. The ability of the trained network model to make decisions on performing an optimal action for the current state provided by line sensors was tested and described for both the simulation and a real life environment.","images":["https://i.imgur.com/kzqTw7E.jpg","https://i.imgur.com/NCoYVh0.jpg","https://i.imgur.com/9AS7snE.png"]},"paragrph2":{"header":"Why I made this?","text":"Autonomous robots are something that has fascinated me for my whole life even in their simplest forms e.g. robo-vacuums. Later on, during the studies, I learned about neural networks and instantly developed a great interest in them. Hence I wanted to create a project for my thesis which would combine those two fields and would grant me a better insight of them.","images":[]}}},"nprr":{"name":"nprr","title":"NPR-Renderer","subtitle":"Implementation of non-photorealistic renderer using OpenGL","thumbnail":"https://raw.githubusercontent.com/jaolejnik/npr-renderer/main/images/lego-comic.png","github":"https://github.com/jaolejnik/npr-renderer","description":{"paragrph1":{"header":"","text":"This is the final project for Advanced Computer Graphics course at *Lund University*, on which I worked with [Trevina Litchmore](https://www.linkedin.com/in/trevinalitchmore/). At the course-wide competition it was voted as the best project by the jury consisting of representatives from _AMD_, _NVIDIA_ and _Massive Entertainment_.","images":["https://raw.githubusercontent.com/jaolejnik/npr-renderer/main/images/sofa-sketch.png","https://raw.githubusercontent.com/jaolejnik/npr-renderer/main/images/sofa-comic.png"]},"paragrph2":{"header":"About the project","text":"Realistic computer graphics were always associated with the most advanced technology and memorable experiences. Nowadays this is definitely still true, although the advancement in the field of 3D graphics is not as noticeable (especially by people outside the industry) as in early 2000s. This led to creators using unconventional ways to stylize their work, to make it more distinguishable from others. In the past, this stylization was often the consequence of hardware limitation, but today it is a conscious choice on part of the 3D graphics artist. Thus we wanted to explore this subject ourselves and came up with the idea to implement a non-physically based renderer that produces images that mimicked sketches.  Additionally, we combined some aspects of the sketch renderer with diffuse shading and dithering to create a renderer that would output images in the style of the famous Pop Art artist, Roy Lichtenstein. \\n\\n If you are interested in more in-depth explanation of the implementation I strongly encourage you to read our short raport <a href=\'https://raw.githubusercontent.com/jaolejnik/npr-renderer/main/TLitchmore_JOlejnik_NPR_Report.pdf\' target=\'_blank\'>here</a>.","images":["https://raw.githubusercontent.com/jaolejnik/npr-renderer/main/images/lego-sketch.png","https://raw.githubusercontent.com/jaolejnik/npr-renderer/main/images/lego-comic.png"]},"paragrph3":{"header":"","text":"","images":["https://raw.githubusercontent.com/jaolejnik/npr-renderer/main/images/sponza-pipeline-sketch.png","https://raw.githubusercontent.com/jaolejnik/npr-renderer/main/images/sponza-pipeline-comic.png"]}}},"vr-ship-ud":{"name":"vr-ship-ud","title":"VR Ship Corridor","subtitle":"Using VR as a way to present a high-fidelity prototype","thumbnail":"https://raw.githubusercontent.com/jaolejnik/vr-ship-ud/main/screenshots/vr-ship-ud-thumbnail.png","github":"https://github.com/jaolejnik/vr-ship-ud","description":{"paragrph1":{"header":"","text":"This is just a part of a bigger group project done for the Universal Design course at Lund University in cooperation with [Linnea Petzold](), <a href=\'https://www.linkedin.com/in/lisa-christiansson-7a4681174/\' target=\'_blank\'>Lisa Christiansson</a> and <a href=\'https://github.com/Vincent-Liu87\' target=\'_blank\'>Yiyang Liu</a>. My biggest contribution was the VR simulation created in Unity using Oculus Integration Package. All the environments and objects were modeled by me in Blender.","images":[]},"paragrph2":{"header":"About the project","text":"The goal of the project was to come up with an inclusive way to convey safety information during a cruise. Our idea was to create handrails that will inform passengers both in a tactile and visual way of the evacuation route direction. Most of the emergency exit signs are static and cannot be changed during those emergencies. We wanted to address that by designing our handrail to be able to easily adapt and change depending on the situation on the escape route, eg. if an adjacent corridor is on fire, we want to direct passengers to a different, safer route.","images":["https://raw.githubusercontent.com/jaolejnik/vr-ship-ud/main/screenshots/marker.JPG","https://raw.githubusercontent.com/jaolejnik/vr-ship-ud/main/screenshots/handrail-leds.jpeg","https://raw.githubusercontent.com/jaolejnik/vr-ship-ud/main/screenshots/handrail.JPG"]},"paragrph3":{"header":"VR simulation","text":"We imagined an inclusive environment where important information is distributed and conveyed in a more diverse yet subtle manner. We wanted to present functionality of the rails in the new environment in an easy and simple way for people to understand. Putting a person inside an interactive simulation with a VR environment allowed us to do so. They\'re placed inside a ship\'s corridor and experience what it is like to be in the middle of an emergency situation on a ship equipped with our handrail prototype.","images":["https://raw.githubusercontent.com/jaolejnik/vr-ship-ud/main/screenshots/photo2.png","https://raw.githubusercontent.com/jaolejnik/vr-ship-ud/main/screenshots/ship-handrail-active.jpg"]},"paragrph4":{"header":"","text":"","images":["https://raw.githubusercontent.com/jaolejnik/vr-ship-ud/main/screenshots/photo1.png","https://raw.githubusercontent.com/jaolejnik/vr-ship-ud/main/screenshots/ship-handrail-window.jpg"]}}},"flat-earthers-dream":{"name":"flat-earthers-dream","title":"Flat Earthers Dream","subtitle":"Physics based first person shooter","thumbnail":"https://i.imgur.com/B4H3aOH.png","description":{"paragrph1":{"header":"","text":"Dive deep into a dreaming subconscious of a flat earther.\\nProtect the (flat) Earth with your kinetic powers!\\nFight off hostile intruders by pushing them into the void!\\n_DON\'T. LET. THEM. TOUCH. YOU!_","images":["https://i.imgur.com/0VJa5jZ.gif"]},"paragrph2":{"header":"About the project","text":"This is a first person shooter game inspired by Devil Daggers written in C++ using OpenGL. In **Flat Earthers Dream** the player has to last as long as possible The game has no fixed end, it only gets harder with every passing second as amount of spawning enemies increases. Simplified physics simulation has been implemented for somehow realistic interaction between enemies and player\'s power. Player will die if they make contact with any of the enemies or falls out of the map. \\nThere are two type of enemies: *Idle* - stands almost still, keeping an eye on the player; *Chasing* - follows the player around until it catches them.","images":["https://i.imgur.com/B4H3aOH.png","https://i.imgur.com/uxEoylg.png"]},"paragrph3":{"header":"","text":"","images":["https://i.imgur.com/ANu0Qhu.png","https://i.imgur.com/pbzMdSg.png"]}}}}')},"131b":function(e,t,a){},"16a3":function(e,t,a){"use strict";a("cd8c")},"1a5a":function(e,t,a){"use strict";a("3db6")},"21bb":function(e,t,a){"use strict";a("2dad")},2967:function(e,t,a){"use strict";a("131b")},"2dad":function(e,t,a){},"325a":function(e,t,a){"use strict";a("bade")},"3b65":function(e,t,a){"use strict";a("69b1")},"3db6":function(e,t,a){},4924:function(e,t,a){"use strict";a("bc98")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[e.$utils.isMobile()?a("Navbar"):e._e(),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-offset-2 site-content",class:{mobile:e.$utils.isMobile()},staticStyle:{padding:"5em 0"}},[a("transition",{attrs:{appear:"",name:e.transitionName,mode:"out-in"}},[a("router-view")],1)],1),e.$utils.isMobile()?e._e():a("div",{staticClass:"column is-2"},[a("Menu",{staticClass:"menu"})],1)])],1)},s=[],r=(a("ac1f"),a("1276"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-navbar",{attrs:{"fixed-top":"",shadow:"",type:"is-primary"},scopedSlots:e._u([{key:"brand",fn:function(){return[a("b-navbar-item",[a("font-awesome-icon",{attrs:{icon:"grin-alt",size:"lg"}}),a("p",{staticClass:"is-capitalized",staticStyle:{margin:"0 0.3rem"}},[a("b",[e._v("Jakub Olejnik")])])],1)]},proxy:!0},{key:"start",fn:function(){return[a("b-navbar-item",{on:{click:function(t){return e.goToSection("home")}}},[a("font-awesome-icon",{attrs:{icon:"home",size:"lg"}}),e._v(" Home ")],1),a("b-navbar-item",{on:{click:function(t){return e.goToSection("about")}}},[a("font-awesome-icon",{attrs:{icon:"address-card",size:"lg"}}),e._v(" About ")],1),a("b-navbar-item",{on:{click:function(t){return e.goToSection("projects")}}},[a("font-awesome-icon",{attrs:{icon:"folder-open",size:"lg"}}),e._v(" Projects ")],1)]},proxy:!0},{key:"end",fn:function(){return[a("hr"),a("b-navbar-item",{staticClass:"contact-link",attrs:{href:"https://github.com/jaolejnik",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","github"],size:"lg"}}),e._v(" CHECK OUT MY GITHUB ")],1),a("b-navbar-item",{staticClass:"contact-link",attrs:{href:"https://www.linkedin.com/in/jakub-olejnik-85a686203/",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","linkedin"],size:"lg"}}),e._v(" LET'S CONNECT ")],1),a("b-navbar-item",{staticClass:"contact-link",attrs:{href:"mailto:"+e.mail,target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:"envelope",size:"lg"}}),e._v(" EMAIL ME AT: "),a("p",{staticStyle:{"font-family":"'Neucha', cursive"}},[e._v(" "+e._s(e.mail)+" ")])],1)]},proxy:!0}])})}),o=[],c=(a("5319"),{name:"Navbar",data:function(){return{currentHash:"home",mail:"jaolejnik@protonmail.com"}},methods:{hashToIcon:function(e){switch(e){case"home":return"home";case"about":return"address-card";case"projects":return"folder-open";default:return"folder-open"}},goToSection:function(e){this.$router.replace("/#"+e);var t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})}},watch:{$route:function(){this.currentHash=this.$route.hash.replace("#","")}}}),l=c,u=(a("16a3"),a("2877")),p=Object(u["a"])(l,r,o,!1,null,null,null),h=p.exports,m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("aside",{staticClass:"menu",attrs:{id:"menu"}},[i("img",{staticClass:"drawn-border",attrs:{src:a("9f2c"),alt:"A picture of me"}}),i("p",{staticClass:"is-size-3"},[e._v("Jakub Olejnik")]),i("br"),i("ul",{staticClass:"menu-list"},[i("p",{staticClass:"menu-label"},[e._v("BROWSE")]),i("li",{on:{click:function(t){return e.scrollToSection("home")}}},[i("router-link",{attrs:{to:"/#home",replace:""}},[i("font-awesome-icon",{attrs:{icon:"home",size:"lg"}}),e._v(" Home ")],1)],1),i("li",{on:{click:function(t){return e.scrollToSection("about")}}},[i("router-link",{attrs:{to:"/#about",replace:""}},[i("font-awesome-icon",{attrs:{icon:"address-card",size:"lg"}}),e._v(" About me ")],1)],1),i("li",{on:{click:function(t){return e.scrollToSection("projects")}}},[i("router-link",{attrs:{to:"/#projects",replace:""}},[i("font-awesome-icon",{attrs:{icon:"folder-open",size:"lg"}}),e._v(" Projects ")],1)],1),i("div",{staticClass:"footnote"},[i("p",{staticClass:"menu-label"},[e._v("Contact me")]),i("li",[i("a",{staticClass:"contact-link",attrs:{href:"https://github.com/jaolejnik",target:"_blank"}},[i("font-awesome-icon",{attrs:{icon:["fab","github"],size:"lg"}}),e._v(" CHECK OUT MY GITHUB ")],1)]),i("li",[i("a",{staticClass:"contact-link",attrs:{href:"https://www.linkedin.com/in/jakub-olejnik-85a686203/",target:"_blank"}},[i("font-awesome-icon",{attrs:{icon:["fab","linkedin"],size:"lg"}}),e._v(" LET'S CONNECT ")],1)]),i("li",[i("a",{staticClass:"contact-link",attrs:{href:"mailto:"+e.mail,target:"_blank"}},[i("font-awesome-icon",{attrs:{icon:"envelope",size:"lg"}}),e._v(" EMAIL ME AT: "),i("p",{staticClass:"has-text-centered",staticStyle:{"font-family":"'Neucha', cursive"}},[e._v(" "+e._s(e.mail)+" ")])],1)])])])])},d=[],f={name:"Navbar",data:function(){return{mail:"jaolejnik@protonmail.com"}},methods:{scrollToSection:function(e){document.getElementById(e).scrollIntoView({behavior:"smooth"})}}},g=f,b=(a("bb78"),Object(u["a"])(g,m,d,!1,null,null,null)),v=b.exports,w="fade",y={name:"App",components:{Navbar:h,Menu:v},data:function(){return{transitionName:w}},created:function(){var e=this;this.$router.beforeEach((function(t,a,i){var n=t.meta.transitionName||a.meta.transitionName;if("slide"===n){var s=t.path.split("/").length,r=a.path.split("/").length;n=s<r?"slide-right":"slide-left"}e.transitionName=n||w,i()}))}},j=y,_=(a("5c0b"),Object(u["a"])(j,n,s,!1,null,null,null)),k=_.exports,C=(a("b0c0"),a("d3b7"),a("8c4f")),x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"combined"},[a("transition",{attrs:{appear:"",name:e.transitionName,mode:"out-in"}},[e.show?a("div",[a("Home",{attrs:{id:"home"}}),a("About",{attrs:{id:"about"}}),a("Projects",{attrs:{id:"projects"}})],1):e._e()])],1)},P=[],T=(a("159b"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"home has-text-centered"},[i("p",{staticClass:"hello-there",class:{mobile:e.$utils.isMobile()}},[e._v(" HELLO THERE! ")]),e.$utils.isMobile()?i("img",{staticClass:"drawn-border",attrs:{src:a("9f2c"),alt:"A picture of me"}}):e._e(),i("div",{staticClass:"welcome",class:{mobile:e.$utils.isMobile()}},[e._m(0),i("p",[e._v("NICE OF YOU TO STOP BY!")])])])}),E=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" MY NAME IS "),a("span",{staticClass:"has-text-primary",staticStyle:{"font-family":"'Permanent Marker', cursive"}},[e._v("JAKUB")])])}],O={name:"Home"},S=O,I=(a("21bb"),Object(u["a"])(S,T,E,!1,null,null,null)),A=I.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"about"},[a("p",{staticClass:"heading is-size-1 has-text-centered"},[e._v("ABOUT ME")]),a("p",{staticClass:"is-size-5"},[e._v(" My name is Jakub Olejnik, I am "+e._s(e.$date(e.$date("29-09-1998","DD-MM-YYYY")).from(e.$date(),!0))+" old and I come from Poland. I am a "),a("span",{staticClass:"has-text-primary"},[e._v("VR developer")]),e._v(". "),a("br"),a("br"),e._v(" Video games in all forms and shapes are my biggest passion. I had always adored motion controlled games and I still do to this very day. It was only natural for me to develop immense interest in virtual and augmented reality. I believe that this technology will revolutionise not only digital entertainment, but also the way people work across a variety of fields such as architecture, 3D modelling or manufacturing. "),a("br"),a("br"),e._v(" At the moment I am learning and refining all the required skills at "),a("span",{staticClass:"has-text-primary"},[e._v("Lund University")]),e._v(", where I am doing my master's in "),a("span",{staticClass:"has-text-primary"},[e._v("Virtual and Augmented Reality")]),e._v(" as the first year of this programme ever "),e._m(0),e._v(". I am putting all this knowlegde to a good use in my professional position at "),a("span",{staticClass:"has-text-primary"},[e._v("Axis Communications")]),e._v(", where I work as a "),a("span",{staticClass:"has-text-primary"},[e._v("VR Student Worker")]),e._v(". ")]),a("p",{staticClass:"subheading is-size-4 has-text-centered"},[e._v("EXPERIENCE")]),a("edu-exp",{attrs:{name:"VR Student Worker",subname:"Axis Communications",yearRange:["2022","PRESENT"]}}),a("edu-exp",{attrs:{name:"Continuous Integration Working Student",subname:"Nokia Solutions and Networks",yearRange:["2020","2021"]}}),a("p",{staticClass:"subheading is-size-4 has-text-centered"},[e._v("EDUCATION")]),a("edu-exp",{attrs:{name:"Master’s Degree: Virtual and Augmented Reality",subname:"Lund University",yearRange:["2021","PRESENT"]}}),a("edu-exp",{attrs:{name:"Bachelor’s Degree: Control Engineering and Robotics",subname:"Wroclaw University of Science and Technology",yearRange:["2017","2021"]}}),a("edu-exp",{attrs:{name:"Deep Learning",subname:"SDU Odense International Summer School",yearRange:["2019"]}}),a("p",{staticClass:"subheading is-size-4 has-text-centered"},[e._v("PROGRAMMING SKILLS")]),a("div",{staticClass:"columns is-mobile"},[a("div",{staticClass:"column"},[a("prog-lang-prof",{attrs:{name:"Python",frameworks:["Django"],icon:["fab","python"],proficiency:4}}),a("prog-lang-prof",{attrs:{name:"C++",proficiency:3,frameworks:["OpenGL"]}}),a("prog-lang-prof",{attrs:{name:"JavaScript",frameworks:["Vue"],icon:["fab","js"],proficiency:3}}),a("prog-lang-prof",{attrs:{name:"Shell",icon:["fas","terminal"],proficiency:3}}),a("prog-lang-prof",{attrs:{name:"C#",proficiency:2}})],1),a("div",{staticClass:"column"},[a("prog-lang-prof",{attrs:{name:"Unity",icon:["fab","unity"],proficiency:2}}),a("prog-lang-prof",{attrs:{name:"SQL",icon:["fas","database"],proficiency:2}}),a("prog-lang-prof",{attrs:{name:"CSS",icon:["fab","css3"],proficiency:2}}),a("prog-lang-prof",{attrs:{name:"HTML",icon:["fab","html5"],proficiency:2}}),a("prog-lang-prof",{attrs:{name:"Docker",icon:["fab","docker"],proficiency:1}})],1)])],1)},N=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("i",[e._v("(read my impressions "),a("a",{attrs:{href:"https://www.lunduniversity.lu.se/lubas/i-uoh-lu-tavar/what-jakub-says-about-programme-virtual-reality-and-augmented-reality",target:"_blank"}},[e._v(" here")]),e._v(") ")])}],M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"prog-lang-prof"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-5 is-offset-2"},[e.icon?a("font-awesome-icon",{staticClass:"skillpoint has-text-primary",attrs:{icon:e.icon,size:"lg"}}):e._e(),a("span",{staticClass:"is-size-5"},["C++"==e.name?a("span",{staticClass:"has-text-primary"},[a("img",{staticStyle:{height:"1em"},attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"}})]):e._e(),"C#"==e.name?a("span",{staticClass:"has-text-primary"},[a("img",{staticClass:"blue-filter",staticStyle:{height:"1em"},attrs:{src:"https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png"}})]):e._e(),e._v(" "+e._s(e.name)+" ")]),e.frameworks?a("p",{staticClass:"frameworks"},[a("span",{staticClass:"has-text-primary"},[e._v("Frameworks:")]),e._l(e.frameworks,(function(t,i){return a("span",{key:e.name+"_"+t},[i?a("span",{staticClass:"has-text-primary"},[e._v(",")]):e._e(),a("span",[e._v(" "+e._s(t))])])}))],2):a("p",[a("br")])],1),a("div",{staticClass:"column is-5"},[e._l(e.proficiency,(function(t){return a("font-awesome-icon",{key:t+"_"+e.name,staticClass:"skillpoint has-text-primary",attrs:{icon:"circle"}})})),e._l(5-e.proficiency,(function(t){return a("font-awesome-icon",{key:t+e.proficiency+"_"+e.name,staticClass:"skillpoint has-text-grey-light",attrs:{icon:"circle"}})}))],2)])])},L=[],R=(a("a9e3"),{name:"ProgLangProf",props:{name:String,frameworks:Array,icon:Array,proficiency:Number}}),$=R,D=(a("325a"),Object(u["a"])($,M,L,!1,null,null,null)),H=D.exports,V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"edu-exp"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-2 is-offset-2 has-text-primary"},[a("p",{staticClass:"is-size-5"},[e._v(" "+e._s(e.yearRange.join("-"))+" ")])]),a("div",{staticClass:"column"},[a("p",{staticClass:"is-size-4"},[e._v(e._s(e.name))]),a("p",{staticClass:"is-size-6"},[e._v(e._s(e.subname))])])])])},B=[],U={name:"ProgLangProf",props:{name:String,subname:String,yearRange:Array,description:String}},G=U,J=(a("3b65"),Object(u["a"])(G,V,B,!1,null,null,null)),W=J.exports,Y={name:"About",components:{ProgLangProf:H,EduExp:W}},F=Y,q=Object(u["a"])(F,z,N,!1,null,null,null),K=q.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"projects"},[a("p",{staticClass:"heading is-size-1 has-text-centered"},[e._v("PROJECTS")]),a("div",{staticClass:"tile is-ancestor"},[a("div",{staticClass:"tile is-parent is-vertical is-7"},[a("ProjectPreview",{attrs:{project:e.projects["vr-ship-ud"]}}),a("ProjectPreview",{attrs:{project:e.projects["flat-earthers-dream"]}})],1),a("div",{staticClass:"tile is-parent is-vertical"},[a("div",{staticClass:"tile is-parent"},[a("div",{staticClass:"tile is-parent"},[a("ProjectPreview",{attrs:{project:e.projects["nn-line-follower"]}})],1),a("div",{staticClass:"tile is-parent"},[a("ProjectPreview",{attrs:{project:e.projects["video-game-calendar"]}})],1)]),a("ProjectPreview",{attrs:{project:e.projects["nprr"]}})],1)])])},X=[],Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"project-preview",on:{click:e.redirectToProjectDetails}},[a("div",{staticClass:"drawn-border tile is-parent"},[a("div",{staticClass:"tile is-child"},[a("p",{staticClass:"title"},[e._v(" "+e._s(e.project.title.toUpperCase())+" ")]),a("p",{staticClass:"subtitle"},[e._v(e._s(e.project.subtitle))]),a("figure",{staticClass:"image"},[a("img",{attrs:{src:e.project.thumbnail}})])]),a("br"),a("p",{staticClass:"has-text-primary has-text-centered is-size-4"},[a("font-awesome-icon",{attrs:{icon:"arrow-alt-circle-right",size:"lg"}})],1)])])},ee=[],te={name:"ProjectPreview",props:{project:Object},methods:{redirectToProjectDetails:function(){this.$router.push({name:"ProjectDetails",params:{project:this.project.name}})}}},ae=te,ie=(a("2967"),Object(u["a"])(ae,Z,ee,!1,null,null,null)),ne=ie.exports,se=a("0be0"),re={components:{ProjectPreview:ne},name:"Projects",data:function(){return{projects:se}}},oe=re,ce=Object(u["a"])(oe,Q,X,!1,null,null,null),le=ce.exports,ue="slide-fade",pe={name:"Combined",components:{Home:A,About:K,Projects:le},data:function(){return{transitionName:ue,show:!0}},created:function(){var e=this;window.addEventListener("load",(function(){var t=document.querySelectorAll("section");document.addEventListener("scroll",(function(){t.forEach((function(t){var a=t.getBoundingClientRect();a.top>10&&a.top<350&&window.location.hash!=="#"+t.id&&e.$router.replace({hash:"#".concat(t.id)})}))}))}))},mounted:function(){document.getElementById(window.location.hash.substring(1)).scrollIntoView({behavior:"smooth"})}},he=pe,me=(a("4924"),Object(u["a"])(he,x,P,!1,null,null,null)),de=me.exports,fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"project-details"},[a("h1",{staticClass:"title heading is-1"},[e._v(e._s(e.project.title))]),a("h3",{staticClass:"subtitle is-3"},[e._v(e._s(e.project.subtitle))]),e._l(e.project.description,(function(t,i){return a("section",{key:"paragraph"+i,staticClass:"is-size-5"},[a("h4",{staticClass:"subheading is-size-4 has-text"},[e._v(e._s(t.header))]),a("p",[a("vue-markdown",[e._v(e._s(t.text))])],1),a("br"),t.tweet?a("tweet",{staticClass:"drawn-border",attrs:{id:t.tweet}},[a("div",{staticClass:"spinner"})]):e._e(),a("div",{staticClass:"tile is-ancestor"},e._l(t.images,(function(e,t){return a("div",{key:"paragraph"+i+"image"+t,staticClass:"tile",staticStyle:{margin:"0.5em"}},[a("figure",{staticClass:"image is-fullwidth"},[a("img",{staticClass:"drawn-border",attrs:{src:e}})])])})),0)],1)})),a("br"),a("div",{staticClass:"buttons is-centered"},[a("button",{staticClass:"button is-large is-primary is-outlined",on:{click:function(t){return e.$router.go(-1)}}},[a("p",[a("font-awesome-icon",{attrs:{icon:"arrow-alt-circle-left",size:"lg"}}),e._v(" Go back ")],1)]),e.project.github?a("a",{staticClass:"button is-large is-primary",attrs:{href:e.project.github,target:"blank"}},[a("p",[a("font-awesome-icon",{attrs:{icon:["fab","github"],size:"lg"}}),e._v(" View repository ")],1)]):e._e()])],2)},ge=[],be=(a("b64b"),{name:"ProjectDetails",data:function(){return{projects:se,projectName:window.location.href.split("project-details/")[1]}},computed:{project:function(){return this.projects[this.projectName]},projectArray:function(){return Object.keys(this.projects)},projectCount:function(){return this.projectArray.length},projectID:function(){return this.projectArray.indexOf(this.projectName)}},mounted:function(){window.scrollTo(0,0)}}),ve=be,we=(a("1a5a"),Object(u["a"])(ve,fe,ge,!1,null,null,null)),ye=we.exports;i["a"].use(C["a"]);var je=[{path:"/",name:de.name,component:de},{path:"/project-details/:project",name:ye.name,component:ye,meta:{transitionName:"slide"}}],_e=new C["a"]({mode:"history",base:"/portfolio-site/",routes:je,scrollBehavior:function(e,t){if(t.name==ye.name)return new Promise((function(t){setTimeout((function(){t({el:e.hash})}),600)}))}}),ke=_e,Ce=a("289d"),xe=a("ecee"),Pe=a("c074"),Te=a("f2d1"),Ee=a("ad3d"),Oe=a("5a0c"),Se=a.n(Oe),Ie=a("0ecf"),Ae=a.n(Ie),ze=a("1953"),Ne=a.n(ze),Me=a("4208"),Le=a.n(Me),Re=a("f906"),$e=a.n(Re),De=(a("ca0f"),a("9035")),He=a("9ce6"),Ve=a.n(He),Be=(a("466d"),{isMobile:function(){var e=[/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i];return e.some((function(e){return navigator.userAgent.match(e)}))}});i["a"].use(Ce["a"]),xe["c"].add(Pe["a"],Te["a"]),i["a"].component("font-awesome-icon",Ee["a"]),Se.a.extend(Ae.a),Se.a.extend(Ne.a),Se.a.extend(Le.a),Se.a.extend($e.a),Se.a.tz.setDefault("Poland/Warsaw"),Se.a.locale("en"),i["a"].use(De["a"]),i["a"].component("vue-markdown",Ve.a),i["a"].config.productionTip=!1,i["a"].prototype.$utils=Be,new i["a"]({router:ke,render:function(e){return e(k)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"69b1":function(e,t,a){},"6fa3":function(e,t,a){},"9c0c":function(e,t,a){},"9f2c":function(e,t,a){e.exports=a.p+"img/me.486b0b76.png"},bade:function(e,t,a){},bb78:function(e,t,a){"use strict";a("6fa3")},bc98:function(e,t,a){},cd8c:function(e,t,a){}});
//# sourceMappingURL=app.bf67070a.js.map