webpackJsonp([0],[,,,function(t,e,n){"use strict";var s=n(1),a=n(62),o=n(61),i=n(44),r=n.n(i),c=n(45),u=n.n(c),l=n(49),f=n.n(l),d=n(48),p=n.n(d),v=n(50),h=n.n(v),_=n(46),m=n.n(_),b=n(42),x=n.n(b);s.a.use(o.a),s.a.use(a.a),e.a=new a.a({mode:"history",routes:[{path:"/hello",name:"Hello",component:r.a},{path:"/",name:"Home",component:u.a},{path:"/static/posts/:id",name:"Post",component:p.a},{path:"/static/posts",name:"Posts",component:f.a},{path:"/static/resume",name:"Resume",component:h.a},{path:"/*",name:"http404",component:m.a},{path:"/test",name:"test",component:x.a}]})},function(t,e,n){n(26),n(25);var s=n(0)(n(5),n(55),"data-v-37b363c4",null);t.exports=s.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(47),a=n.n(s),o=n(43),i=n.n(o);e.default={name:"app",components:{music:a.a,myhead:i.a},data:function(){return{}},created:function(){},methods:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},props:{fixed:{type:Boolean,default:!0}},methods:{renders:function(){this.fixed?(this.$el.style.position="fixed",document.body.style.marginTop=this.$el.clientHeight+"px"):(document.body.style.marginTop="0px",this.$el.style.position="")}},mounted:function(){this.renders()},watch:{fixed:function(){this.renders()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to My Vue.js App",Ecosystem:[{name:"vue-router",a:"http://router.vuejs.org/"},{name:"vuex",a:"http://vuex.vuejs.org/"},{name:"vue-loader",a:"http://vue-loader.vuejs.org/"},{name:"awesome-vue",a:"https://github.com/vuejs/awesome-vue"}],Studyweb:[{name:"MDN",a:"https://developer.mozilla.org/zh-CN/"},{name:"W3C",a:"https://www.w3schools.com"},{name:"runjs",a:"http://runjs.cn/code"},{name:"jsfiddle",a:"https://jsfiddle.net/"},{name:"stackvoerflow",a:"https://stackoverflow.com"},{name:"github",a:"https://github.com"}]}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{todo:["看书,写代码,打游戏","迷茫中...不知道干嘛~~~","随笔在posts,简历在about,魔都找工作中...","<<effective modern c++>>二刷中..."],title:"又是一个无聊的一天"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{error:{message:"悲剧了,没有这个页面!"}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"music",components:{},data:function(){return{list:[],src:"",index:0,playOrPause:!0,musicVol:5,musicTitle:""}},methods:{volChange:function(t){this.$refs.audio.volume=this.musicVol/10},normalStart:function(){this.src=this.list[this.index]},randomStart:function(){this.index=Math.floor(Math.random()*this.list.length),this.src=this.list[this.index]},musicPlay:function(){this.playOrPause?this.$refs.audio.pause():this.$refs.audio.play(),this.playOrPause=!this.playOrPause},musicNext:function(){this.index+=1,this.index>=this.list.length&&(this.index=0),this.normalStart(),this.$refs.audio.play()}},created:function(){var t=this;this.$http.get("/static/music/list.json").then(function(e){t.list=e.body,t.randomStart()},function(t){console.log("get music list nerwork error")})},mounted:function(){var t=this;t.$refs.audio.volume=this.musicVol/10,t.$el.style.position="fixed",document.body.style.marginBottom=t.$el.clientHeight+"px"}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{post:{title:"载入失败",author:"skadi",date:"2017-01-01 00:00",tags:["c","cpp","javascript","python","csharp"],content:"<p>如果你看到了这个页面,表示载入页面失败了.</p>",iso8601Date:"2017-01-01T00:00:00+08:00",basename:"0"}}},methods:{fetchData:function(t){var e=this,n=t+".json";this.$http.get(n).then(function(t){e.post=t.body},function(t){console.log("get post nerwork error")})},linkto:function(t){this.$router.push({name:"Post",params:{id:t}})}},created:function(){this.fetchData(this.$route.path)},computed:{router:function(){return this.$route}},watch:{router:function(){this.fetchData(this.$route.path)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{list:[{title:"载入失败",author:"skadi",date:"2017-01-01 00:00",tags:["日常","无聊"],content:"如果你看到这个了,表明载入失败了",iso8601Date:"2017-01-01T00:00:00+08:00",basename:"0"}]}},methods:{fetchData:function(t){var e=this,n=t+"/list.json";this.$http.get(n).then(function(t){e.list=t.body},function(t){console.log("get posts list nerwork error")})}},created:function(){this.fetchData(this.$route.path)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{resume:{title:"载入失败",author:"skadi",date:"2017-01-01 00:00",tags:["c","cpp","javascript","python","csharp"],content:"<p>如果你看到了这个页面,表示载入页面失败了.</p>",iso8601Date:"2017-01-01T00:00:00+08:00",basename:"resume"}}},methods:{fetchData:function(t){var e=this,n=t+".json";this.$http.get(n).then(function(t){e.resume=t.body},function(t){console.log("get resume nerwork error")})}},created:function(){this.fetchData(this.$route.path)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),a=n(4),o=n.n(a),i=n(3);s.a.config.productionTip=!1,new s.a({el:"#app",router:i.a,template:"<App/>",components:{App:o.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e,n){t.exports=n.p+"static/img/http404.fe0fa15.png"},function(t,e,n){n(16),n(17);var s=n(0)(n(6),n(51),"data-v-09c6c1ee",null);t.exports=s.exports},function(t,e,n){n(24),n(23);var s=n(0)(n(7),n(54),"data-v-27705a9c",null);t.exports=s.exports},function(t,e,n){n(18),n(19);var s=n(0)(n(8),n(52),"data-v-1d998cc6",null);t.exports=s.exports},function(t,e,n){n(27),n(28),n(29);var s=n(0)(n(9),n(56),"data-v-4cf6ea1b",null);t.exports=s.exports},function(t,e,n){n(34);var s=n(0)(n(10),n(59),"data-v-7df741a4",null);t.exports=s.exports},function(t,e,n){n(21),n(20),n(22);var s=n(0)(n(11),n(53),"data-v-24f2fece",null);t.exports=s.exports},function(t,e,n){n(35),n(37),n(36);var s=n(0)(n(12),n(60),"data-v-d1de7548",null);t.exports=s.exports},function(t,e,n){n(31),n(30);var s=n(0)(n(13),n(57),"data-v-4eb38747",null);t.exports=s.exports},function(t,e,n){n(33),n(32);var s=n(0)(n(14),n(58),"data-v-5999252e",null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"buttons"},[n("div",{staticClass:"container"},[n("h1",[t._v("Button Hover Effects")]),t._v(" "),n("a",{staticClass:"btn btn-1",attrs:{href:"https://twitter.com/Dave_Conner"}},[n("svg",[n("rect",{attrs:{x:"0",y:"0",fill:"none",width:"100%",height:"100%"}})]),t._v("\n     Hover\n    ")]),t._v(" "),n("a",{staticClass:"btn btn-2",attrs:{href:"https://twitter.com/Dave_Conner"}},[t._v("Hover")]),t._v(" "),n("a",{staticClass:"btn btn-3",attrs:{href:"https://twitter.com/Dave_Conner"}},[t._v("Hover")]),t._v(" "),t._m(0),t._v(" "),n("a",{staticClass:"btn btn-5",attrs:{href:"https://twitter.com/Dave_Conner"}},[t._v("Hover")]),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"btn btn-4",attrs:{href:"https://twitter.com/Dave_Conner"}},[n("span",[t._v("Hover")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Follow on "),n("a",{attrs:{href:"https://twitter.com/Dave_Conner",target:"_blank"}},[t._v("Twitter")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Study Website")]),t._v(" "),n("ul",t._l(t.Studyweb,function(e){return n("li",[n("a",{attrs:{href:e.a,target:"_blank"}},[t._v(t._s(e.name)+"\n      ")])])})),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),n("ul",t._l(t.Ecosystem,function(e){return n("li",[n("a",{attrs:{href:e.a,target:"_blank"}},[t._v(t._s(e.name)+"\n      ")])])})),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"center btn-container"},[n("a",{staticClass:"btn-test1",attrs:{href:"javascript:void(0);"}},[t._v("\n      click me\n    ")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"musicContainer",attrs:{id:"app_bottom"}},[n("audio",{ref:"audio",staticStyle:{display:"none"},attrs:{autoplay:"",controls:"",src:t.src},on:{ended:t.randomStart}}),t._v(" "),n("div",{staticClass:"title"},[t._v("\n        "+t._s(t.src.replace("/static/music/","").replace(".mp3",""))+"\n    ")]),t._v(" "),n("div",{staticClass:"play"},[t.playOrPause?n("label",{staticClass:"btn-5",on:{click:t.musicPlay}},[t._v("\n            play\n        ")]):n("label",{staticClass:"btn-5",on:{click:t.musicPlay}},[t._v("\n            pause\n        ")])]),t._v(" "),n("div",{staticClass:"next"},[n("label",{staticClass:"btn-5",on:{click:t.musicNext}},[t._v("\n            next\n        ")])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vol"},[n("label",[t._v("\n            假装自己可以控制音量\n        ")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"fix_top",attrs:{id:"app_top"}},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("myhead",[n("div",{staticClass:"headclass"},[n("router-link",{staticClass:"button-label",attrs:{to:{name:"Home"}}},[t._v("\n        home\n      ")]),t._v(" "),n("router-link",{staticClass:"button-label",attrs:{to:{name:"Posts"}}},[t._v("\n        posts\n      ")]),t._v(" "),n("router-link",{staticClass:"button-label",attrs:{to:{name:"Resume"}}},[t._v("\n        about\n      ")])],1)]),t._v(" "),n("router-view"),t._v(" "),n("music")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("div",[n("h1",[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticStyle:{"margin-top":"10vh"}},t._l(t.todo,function(e){return n("p",[t._v(t._s(e))])})),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"max-width":"30%","min-width":"10%",display:"inline-block","margin-top":"5vh"}},[n("a",{attrs:{href:"http://fuckneusoft.com",target:"_blank"}},[n("p",{staticClass:"label"},[t._v("don't touch me")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"posts"}},t._l(this.list,function(e){return n("div",{staticClass:"post"},[n("router-link",{attrs:{to:{name:"Post",params:{id:e.basename}}}},[n("h3",[t._v(t._s(e.title))]),t._v(" "),n("h5",[t._v(t._s(e.author))]),t._v(" "),n("h5",[t._v(t._s(e.date))]),t._v(" "),n("div",{staticClass:"content",domProps:{textContent:t._s(e.content)}})])],1)}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"resume"}},[n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.resume.content)}})])},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"http404"}},[s("img",{attrs:{src:n(41)}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"post"}},[n("h1",[t._v(t._s(t.post.title))]),t._v(" "),n("h3",[t._v(t._s(t.post.author))]),t._v(" "),n("h3",[t._v(t._s(t.post.date))]),t._v(" "),n("ul",t._l(t.post.tags,function(e){return n("li",[t._v("\n      "+t._s(e)+"\n    ")])})),t._v(" "),n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.post.content)}}),t._v(" "),n("div",{staticClass:"quicklink"},[n("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){t.linkto(t.post.prev)}}},[t._v("上一篇")]),t._v(" "),n("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){t.linkto(t.post.next)}}},[t._v("下一篇")])])])},staticRenderFns:[]}},,,,function(t,e){}],[15]);