webpackJsonp([0],[,,function(t,e,n){"use strict";var s=n(1),o=n(42),a=n(41),r=n(27),i=n.n(r),c=n(28),u=n.n(c),l=n(31),d=n.n(l),p=n(30),f=n.n(p),v=n(32),h=n.n(v);s.a.use(a.a),s.a.use(o.a),e.a=new o.a({routes:[{path:"/hello",name:"Hello",component:i.a},{path:"/",name:"Home",component:u.a},{path:"/static/posts/:basename",name:"Post",component:f.a},{path:"/static/posts",name:"Posts",component:d.a},{path:"/static/resume",name:"Resume",component:h.a}]})},function(t,e,n){n(24),n(23);var s=n(0)(n(4),n(39),"data-v-c4f62c44",null);t.exports=s.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(29),o=n.n(s),a=n(26),r=n.n(a);e.default={name:"app",components:{music:o.a,myhead:r.a},data:function(){return{}},created:function(){},methods:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},props:{fixed:{type:Boolean,default:!0}},methods:{renders:function(){this.fixed?(this.$el.style.position="fixed",document.body.style.marginTop=this.$el.clientHeight+"px"):(document.body.style.marginTop="0px",this.$el.style.position="")}},mounted:function(){this.renders()},watch:{fixed:function(){this.renders()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to My Vue.js App",Ecosystem:[{name:"vue-router",a:"http://router.vuejs.org/"},{name:"vuex",a:"http://vuex.vuejs.org/"},{name:"vue-loader",a:"http://vue-loader.vuejs.org/"},{name:"awesome-vue",a:"https://github.com/vuejs/awesome-vue"}],Studyweb:[{name:"MDN",a:"https://developer.mozilla.org/zh-CN/"},{name:"W3C",a:"https://www.w3schools.com"},{name:"runjs",a:"http://runjs.cn/code"},{name:"jsfiddle",a:"https://jsfiddle.net/"},{name:"stackvoerflow",a:"https://stackoverflow.com"},{name:"github",a:"https://github.com"}]}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{todo:["下班","打游戏","写web","等待建设"],title:"又是一个无聊的一天"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"music",data:function(){return{music_list:["小时姑娘-爱殇.mp3"],src:""}},created:function(){var t="static/music/"+this.music_list[0];this.src=t,console.log(this.src)},mounted:function(){var t=this;t.$el.firstElementChild.volume=.5,t.$el.style.position="fixed",document.body.style.marginBottom=t.$el.clientHeight+"px"}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{post:{title:"载入失败",author:"skadi",date:"2017-01-01 00:00",tags:["c","cpp","javascript","python","csharp"],content:"<p>如果你看到了这个页面,表示载入页面失败了.</p>",iso8601Date:"2017-01-01T00:00:00+08:00",basename:"0"}}},methods:{fetchData:function(t){var e=this,n=t+".json";this.$http.get(n).then(function(t){e.post=t.body,console.log(e.post)},function(t){console.log("get post nerwork error")})}},created:function(){this.fetchData(this.$route.path)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{list:[{title:"载入失败",author:"skadi",date:"2017-01-01 00:00",tags:["日常","无聊"],content:"如果你看到这个了,表明载入失败了",iso8601Date:"2017-01-01T00:00:00+08:00",basename:"0"}]}},methods:{fetchData:function(t){var e=this,n=t+"/list.json";this.$http.get(n).then(function(t){e.list=t.body},function(t){console.log("get posts list nerwork error")})}},created:function(){this.fetchData(this.$route.path)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{resume:{title:"载入失败",author:"skadi",date:"2017-01-01 00:00",tags:["c","cpp","javascript","python","csharp"],content:"<p>如果你看到了这个页面,表示载入页面失败了.</p>",iso8601Date:"2017-01-01T00:00:00+08:00",basename:"resume"}}},methods:{fetchData:function(t){var e=this,n=t+".json";this.$http.get(n).then(function(t){e.resume=t.body},function(t){console.log("get resume nerwork error")})}},created:function(){this.fetchData(this.$route.path)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),o=n(3),a=n.n(o),r=n(2);s.a.config.productionTip=!1,new s.a({el:"#app",router:r.a,template:"<App/>",components:{App:a.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){n(14),n(13);var s=n(0)(n(5),n(33),"data-v-2a7789b6",null);t.exports=s.exports},function(t,e,n){n(20);var s=n(0)(n(6),n(37),"data-v-7b7840ec",null);t.exports=s.exports},function(t,e,n){n(18),n(19);var s=n(0)(n(7),n(36),"data-v-4ffe1935",null);t.exports=s.exports},function(t,e,n){n(17);var s=n(0)(n(8),n(35),null,null);t.exports=s.exports},function(t,e,n){n(25);var s=n(0)(n(9),n(40),"data-v-cbd01714",null);t.exports=s.exports},function(t,e,n){n(22),n(21);var s=n(0)(n(10),n(38),"data-v-a6db8926",null);t.exports=s.exports},function(t,e,n){n(16),n(15);var s=n(0)(n(11),n(34),"data-v-312b3e03",null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"fix_top",attrs:{id:"app_top"}},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"resume"}},[n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.resume.content)}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fix_bottom",attrs:{id:"app_bottom"}},[n("audio",{attrs:{src:t.src,autoplay:"",controls:"",loop:""}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("div",[n("h1",[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticStyle:{"margin-top":"10vh"}},t._l(t.todo,function(e){return n("p",[t._v(t._s(e))])})),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"max-width":"30%","min-width":"10%",display:"inline-block","margin-top":"5vh"}},[n("a",{attrs:{href:"http://fuckneusoft.com",target:"_blank"}},[n("p",{staticClass:"label"},[t._v("don't touch me")])]),t._v(" "),n("a",{attrs:{href:"http://sixrevisions.com/css/responsive-background-image/",target:"_blank"}},[n("p",{staticClass:"label"},[t._v("\n                study mark\n            ")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Study Website")]),t._v(" "),n("ul",t._l(t.Studyweb,function(e){return n("li",[n("a",{attrs:{href:e.a,target:"_blank"}},[t._v(t._s(e.name)+"\n      ")])])})),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),n("ul",t._l(t.Ecosystem,function(e){return n("li",[n("a",{attrs:{href:e.a,target:"_blank"}},[t._v(t._s(e.name)+"\n      ")])])}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"posts"}},t._l(this.list,function(e){return n("div",{staticClass:"post"},[n("router-link",{attrs:{to:{name:"Post",params:{basename:e.basename}}}},[n("h3",[t._v(t._s(e.title))]),t._v(" "),n("h5",[t._v(t._s(e.author))]),t._v(" "),n("h5",[t._v(t._s(e.date))]),t._v(" "),n("div",{staticClass:"content",domProps:{textContent:t._s(e.content)}})])],1)}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("myhead",[n("div",{staticClass:"headclass"},[n("router-link",{staticClass:"button-label",attrs:{to:{name:"Home"}}},[t._v("\n        home\n      ")]),t._v(" "),n("router-link",{staticClass:"button-label",attrs:{to:{name:"Posts"}}},[t._v("\n        posts\n      ")]),t._v(" "),n("router-link",{staticClass:"button-label",attrs:{to:{name:"Resume"}}},[t._v("\n        about\n      ")])],1)]),t._v(" "),n("router-view"),t._v(" "),n("music")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"post"}},[n("h1",[t._v(t._s(t.post.title))]),t._v(" "),n("h3",[t._v(t._s(t.post.author))]),t._v(" "),n("h3",[t._v(t._s(t.post.date))]),t._v(" "),n("ul",t._l(t.post.tags,function(e){return n("li",[t._v("\n      "+t._s(e)+"\n    ")])})),t._v(" "),n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.post.content)}})])},staticRenderFns:[]}},,,,,function(t,e){}],[12]);