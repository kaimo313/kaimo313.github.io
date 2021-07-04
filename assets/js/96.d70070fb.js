(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{816:function(s,t,e){"use strict";e.r(t);var a=e(4),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),e("p",[s._v("在 vue 里面使用 "),e("code",[s._v("js-base64")]),s._v(" 这个插件时，打包报错：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201202115226369.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2thaW1vMzEz,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),s._v(" "),e("h2",{attrs:{id:"解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),e("p",[s._v("在 "),e("code",[s._v("vue.config.js")]),s._v(" 文件里添加 "),e("code",[s._v("transpiledependencies")]),s._v(" 的配置 "),e("a",{attrs:{href:"https://cli.vuejs.org/zh/config/#transpiledependencies",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://cli.vuejs.org/zh/config/#transpiledependencies"),e("OutboundLink")],1)]),s._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020120211524460.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2thaW1vMzEz,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),s._v(" "),e("p",[s._v("我们看一下 "),e("code",[s._v("js-base64")]),s._v(" 的源码，"),e("code",[s._v("js-base64")]),s._v(" 需要 Babel 显示转译")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201202115302509.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2thaW1vMzEz,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  transpileDependencies"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'js-base64'")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[e("strong",[s._v("注意：不能使用 cnpm，不然 transpileDependencies 配置不会生效。")])]),s._v(" "),e("p",[s._v("如果在 Linux 下执行 "),e("code",[s._v("npm install")]),s._v("，出现权限问题")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201202115320168.png",alt:"在这里插入图片描述"}})]),s._v(" "),e("p",[s._v("可以执行 "),e("code",[s._v("npm install --unsafe -perm")])]),s._v(" "),e("p",[s._v("最后，运行 "),e("code",[s._v("npm run build")]),s._v("，发现没有报错，搞定下班。")])])}),[],!1,null,null,null);t.default=n.exports}}]);