(window.webpackJsonp=window.webpackJsonp||[]).push([[305],{832:function(s,t,a){"use strict";a.r(t);var e=a(4),_=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("HTTP 是一种允许浏览器向服务器获取资源的协议，是 Web 的基础，HTTP 也是浏览器使用最广的协议，所以要想学好浏览器，就要先深入了解 HTTP。")]),s._v(" "),a("h2",{attrs:{id:"浏览器端发起-http-请求流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器端发起-http-请求流程"}},[s._v("#")]),s._v(" 浏览器端发起 HTTP 请求流程")]),s._v(" "),a("p",[s._v("如果你在浏览器地址栏里键入极客时间网站的地址："),a("code",[s._v("http://time.geekbang.org/index.html")]),s._v("， 浏览器会完成哪些动作呢？")]),s._v(" "),a("h3",{attrs:{id:"_1-构建请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-构建请求"}},[s._v("#")]),s._v(" 1. 构建请求")]),s._v(" "),a("p",[s._v("首先，浏览器构建请求行信息（如下所示），构建好后，浏览器准备发起网络请求。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("GET /index.html HTTP1.1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-查找缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-查找缓存"}},[s._v("#")]),s._v(" 2. 查找缓存")]),s._v(" "),a("p",[s._v("在真正发起网络请求之前，浏览器会先在浏览器缓存中查询是否有要请求的文件。")]),s._v(" "),a("p",[a("strong",[s._v("浏览器缓存是一种在本地保存资源副本，以供下次请求时直接使用的技术。")])]),s._v(" "),a("h3",{attrs:{id:"_3-准备-ip-地址和端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-准备-ip-地址和端口"}},[s._v("#")]),s._v(" 3. 准备 IP 地址和端口")]),s._v(" "),a("p",[s._v("1、浏览器使用 "),a("code",[s._v("HTTP 协议作为应用层协议")]),s._v("，用来封装请求的文本信息；")]),s._v(" "),a("p",[s._v("2、并使用 "),a("code",[s._v("TCP/IP 作传输层协议")]),s._v("将它发到网络上。")]),s._v(" "),a("p",[s._v("所以在 HTTP 工作开始之前，浏览器需要通过 TCP 与服务器建立连接。也就是说 "),a("code",[s._v("HTTP 的内容是通过 TCP 的传输数据阶段来实现的")]),s._v("。")]),s._v(" "),a("p",[s._v("如图：TCP 和 HTTP 的关系示意图")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201109173200871.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2thaW1vMzEz,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("浏览器会请求 DNS 返回域名对应的 IP。")]),s._v(" "),a("p",[s._v("浏览器还提供了 DNS 数据缓存服务。")]),s._v(" "),a("h3",{attrs:{id:"_4-等待-tcp-队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-等待-tcp-队列"}},[s._v("#")]),s._v(" 4. 等待 TCP 队列")]),s._v(" "),a("p",[s._v("Chrome 有个机制，同一个域名同时最多只能建立 6 个 TCP 连接，如果在同一个域名下同时有 10 个请求发生，那么其中 4 个请求会进入排队等待状态，直至进行中的请求完成。")]),s._v(" "),a("p",[s._v("如果当前请求数量少于 6，会直接进入下一步，建立 TCP 连接。")]),s._v(" "),a("blockquote",[a("p",[s._v("引用：“Geek_870e7d\n：http/1.1 一个tcp同时只能处理一个请求，浏览器会为每个域名维护6个tcp连接！ 但是每个tcp连接是可以复用的，也就是处理完一个请求之后，不断开这个tcp连接，可以用来处理下个http请求！ 不过http2是可以并行请求资源的，所以如果使用http2，浏览器只会为每个域名维护一个tcp连接”")])]),s._v(" "),a("h3",{attrs:{id:"_5-建立-tcp-连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-建立-tcp-连接"}},[s._v("#")]),s._v(" 5. 建立 TCP 连接")]),s._v(" "),a("p",[s._v("有兴趣的：这个部分可以看第二讲")]),s._v(" "),a("h3",{attrs:{id:"_6-发送-http-请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-发送-http-请求"}},[s._v("#")]),s._v(" 6. 发送 HTTP 请求")]),s._v(" "),a("p",[s._v("首先浏览器会向服务器发送请求行，它包括了"),a("code",[s._v("请求方法")]),s._v("、"),a("code",[s._v("请求 URI（Uniform Resource Identifier）")]),s._v("和 "),a("code",[s._v("HTTP 版本协议")]),s._v("。")]),s._v(" "),a("p",[s._v("HTTP 请求数据格式：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201109173239272.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2thaW1vMzEz,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),a("h2",{attrs:{id:"服务器端处理-http-请求流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器端处理-http-请求流程"}},[s._v("#")]),s._v(" 服务器端处理 HTTP 请求流程")]),s._v(" "),a("h3",{attrs:{id:"_1-返回请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-返回请求"}},[s._v("#")]),s._v(" 1. 返回请求")]),s._v(" "),a("p",[s._v("首先服务器会返回"),a("code",[s._v("响应行")]),s._v("，包括协议版本和状态码。")]),s._v(" "),a("p",[s._v("服务器响应的数据格式:")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201109173255713.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2thaW1vMzEz,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("可以通过工具软件 "),a("code",[s._v("curl")]),s._v(" 来查看返回请求数据：（"),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2011/09/curl.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("【curl网站开发指南-阮一峰的网络日志\n】"),a("OutboundLink")],1),s._v("）")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -i https://time.geekbang.org/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("-i")]),s._v(" 是为了返回响应行、响应头和响应体的数据。")]),s._v(" "),a("h3",{attrs:{id:"_2-断开连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-断开连接"}},[s._v("#")]),s._v(" 2. 断开连接")]),s._v(" "),a("p",[s._v("通常情况下，一旦服务器向客户端返回了请求数据，它就要关闭 TCP 连接。")]),s._v(" "),a("p",[s._v("如果浏览器或者服务器在其头信息中加入了：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Connection:Keep-Alive \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("那么 TCP 连接在发送后将仍然保持打开状态。")]),s._v(" "),a("p",[a("strong",[s._v("保持 TCP 连接可以省去下次请求时需要建立连接的时间，提升资源加载速度。")])]),s._v(" "),a("h3",{attrs:{id:"_3-重定向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-重定向"}},[s._v("#")]),s._v(" 3. 重定向")]),s._v(" "),a("p",[s._v("当你在浏览器中打开 "),a("code",[s._v("geekbang.org")]),s._v(" 后，你会发现最终打开的页面地址是 "),a("code",[s._v("https://www.geekbang.org")]),s._v("。")]),s._v(" "),a("p",[s._v("这两个 URL 之所以不一样，是因为涉及到了一个"),a("code",[s._v("重定向操作")]),s._v("。")]),s._v(" "),a("p",[s._v("在控制台输入如下命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -I geekbang.org\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("-I")]),s._v(" 表示只需要获取响应头和响应行数据。")]),s._v(" "),a("p",[s._v("服务器返回响应行和响应头（含重定向格式）:")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201109173313924.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2thaW1vMzEz,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),a("ul",[a("li",[s._v("响应行返回的状态码是 301")]),s._v(" "),a("li",[s._v("状态 301 就是告诉浏览器，需要重定向到另外一个网址")]),s._v(" "),a("li",[s._v("需要重定向的网址正是包含在响应头的 Location 字段中")])]),s._v(" "),a("h2",{attrs:{id:"问题解答"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题解答"}},[s._v("#")]),s._v(" 问题解答")]),s._v(" "),a("p",[a("strong",[s._v("1. 为什么很多站点第二次打开速度会很快？")])]),s._v(" "),a("p",[s._v("解答：主要原因是这些网站把很多资源都缓存在了本地，浏览器缓存直接使用本地副本来回应请求，而不会产生真实的网络请求，从而节省了时间。同时，DNS 数据也被浏览器缓存了，这又省去了 DNS 查询环节。")]),s._v(" "),a("p",[a("strong",[s._v("DNS 缓存和页面资源缓存这两块数据是会被浏览器缓存的。")])]),s._v(" "),a("p",[s._v("1）、DNS 缓存比较简单，它主要就是在浏览器本地把对应的 IP 和域名关联起来。")]),s._v(" "),a("p",[s._v("2）、重点看下浏览器资源缓存，下面是缓存处理的过程：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201109173354181.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2thaW1vMzEz,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("浏览器是通过响应头中的 "),a("code",[s._v("Cache-Control")]),s._v(" 字段来设置是否缓存该资源。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Cache-Control:Max-age"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上面表示：缓存过期时间是 2000 秒。")]),s._v(" "),a("p",[s._v("如果缓存过期了，浏览器则会继续发起网络请求，并且在 HTTP 请求头中带上：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("If-None-Match: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"4f80f-13c-3a1xb12a"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("服务器收到请求头后，会根据 "),a("strong",[a("code",[s._v("If-None-Match")]),s._v(" 的值来判断请求的资源是否有更新")]),s._v("。")]),s._v(" "),a("ul",[a("li",[s._v("如果没有更新，就返回 304 状态码，相当于服务器告诉浏览器：“这个缓存可以继续使用，这次就不重复发送数据给你了。”")]),s._v(" "),a("li",[s._v("如果资源有更新，服务器就直接返回最新资源给浏览器。")])]),s._v(" "),a("p",[s._v("更多的HTTP 缓存参考链接："),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching_FAQ",target:"_blank",rel:"noopener noreferrer"}},[s._v("HTTP 缓存-MDN"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("strong",[s._v("2. 登录状态是如何保持的？")])]),s._v(" "),a("p",[s._v("解答：如果服务器端发送的响应头内有 "),a("code",[s._v("Set-Cookie")]),s._v(" 的字段，那么浏览器就会将该字段的内容保持到本地。当下次客户端再往该服务器发送请求时，客户端会自动在请求头中加入 Cookie 值后再发送出去。服务器端发现客户端发送过来的 Cookie 后，会去检查究竟是从哪一个客户端发来的连接请求，然后对比服务器上的记录，最后得到该用户的状态信息。")]),s._v(" "),a("p",[s._v("1）、当用户登录信息正确，会生成一段表示用户身份的字符串，并把该字符串写到响应头的 Set-Cookie 字段里，然后把响应头发送给浏览器。")]),s._v(" "),a("p",[s._v("比如下面所示：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Set-Cookie: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("UID")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("3431uad"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2）、浏览器在接收到服务器的响应头后，开始解析响应头，如果遇到响应头里含有 "),a("code",[s._v("Set-Cookie")]),s._v(" 字段的情况，浏览器就会把这个字段信息保存到本地。")]),s._v(" "),a("p",[s._v("比如把上面的 "),a("code",[s._v("UID=3431uad")]),s._v(" 保存到本地。")]),s._v(" "),a("p",[s._v("3）、当用户再次访问时，浏览器会发起 HTTP 请求，但在发起请求之前，浏览器会读取之前保存的 Cookie 数据，并把数据写进请求头里的 Cookie 字段里，然后浏览器再将请求头发送给服务器。")]),s._v(" "),a("p",[s._v("比如下面所示：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Cookie: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("UID")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("3431uad"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("4）、服务器在收到 HTTP 请求头数据之后，就会查找请求头里面的 “Cookie” 字段信息，当查找到包含 "),a("code",[s._v("UID=3431uad")]),s._v(" 的信息时，服务器查询后台，并判断该用户是已登录状态，然后生成含有该用户信息的页面数据，并把生成的数据发送给浏览器。")]),s._v(" "),a("p",[s._v("Cookie 流程图:")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201109173426119.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2thaW1vMzEz,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[s._v("HTTP 请求流程示意图:")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201109173440342.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2thaW1vMzEz,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),a("h2",{attrs:{id:"精选留言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#精选留言"}},[s._v("#")]),s._v(" 精选留言")]),s._v(" "),a("p",[s._v("1、老师，同一个域名同时最多只能建立 6 个 TCP 连接 是不是意思是统一域名同时只能发送6个AJAX请求吗， TCP连接和AJAX请求有什么关系吗？")]),s._v(" "),a("blockquote",[a("p",[s._v("作者回复: 首先回答第一个问题：\n”同一个域名同时最多只能建立 6 个 TCP 连接“ 指的不光是指Ajax，还包括页面中的资源加载，只要是一个域名下的资源，浏览器同一时刻最多只支持6个并行请求。\n不过这是HTTP/1.1的规则，HTTP/2已经不用这套规则了，而且HTTP/2也很成熟了，有条件可以考虑切换到HTTP/2.\nAjax其实就是HTTP请求，包括了XMLHttpRequest和Fetch，HTTP请求是建立在TCP协议之上的。")])]),s._v(" "),a("p",[s._v("2、老师，请问https为什么能防止网络劫持？")]),s._v(" "),a("blockquote",[a("p",[s._v("作者回复: http在传输过程中是明文的，所以数据在传输过程中是能够被截获或者修改的，比如谁在你电脑上安装了一个网络拦截软件，或者你的路由器被谁安装了监听软件，甚至在网络服务提供商都有可能修改你页面的内容，基于这些原因，我们需要在传输过程中加密数据，这就是https出现的原因，即便你拦截到了请求，获取的只是加密后的数据，拿到也没有什么用。\n这块在浏览器安全篇会系统介绍。")])]),s._v(" "),a("p",[s._v("3、老师您好~有个问题困扰我了。希望您能解答我，十分感谢。http2同个域名只能维持一个长连接。那我现在打开了一个域名下的a页面，然后又打开了这个域名的b页面，那这个b页面是新开一个tcp长连接吗？还是会用a页面的长连接？换句话说，维持一个tcp长连接，指的是一个页面维持一个？还是整个浏览器维持一个？还是同一个渲染进程维持一个？")]),s._v(" "),a("blockquote",[a("p",[s._v("作者回复: 浏览器为用同一个域名只维护一个 TCP 连接。\n你从通过 Chrome 打开 "),a("code",[s._v("chrome://net-export/")]),s._v(" 这个地址，然后记录网络过程。\n最后在使用这个 "),a("code",[s._v("https://netlog-viewer.appspot.com/")]),s._v(" 打开你日志文件，就能看到 h2 的详细信息了。")])]),s._v(" "),a("p",[s._v("4、浏览器刷新操作，ctrl+F5和F5有什么区别？")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("作者回复: 一个是强制刷新，也就是资源都走网络。\n\n一个是正常处理流程。\n\n比如通过网络面板，打开一个站点，再使用强制刷新，可以看到如下信息\n176 requests\n3.1 MB transferred\n3.5 MB resources\nFinish: 26.30 s\nDOMContentLoaded: 5.04 s\nLoad: 14.88 s\n\n如果使用正常的刷新，看到的信息如下：\n171 requests\n419 KB transferred\n3.2 MB resources\nFinish: 25.09 s\nDOMContentLoaded: 1.41 s\nLoad: 6.24 s\n\n其中的 transferred 是真正的网络传输的数据，使用强制刷新，传输的数据体积就大多了，而且请求时间也变得更长了。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[s._v("5、set cookie 会不会有安全问题，麻烦老师指导下")]),s._v(" "),a("blockquote",[a("p",[s._v("作者回复: cookie 是不安全的，比如黑客可以通过一些手段插入一些脚本到你的页面里面（具体一些途径我们浏览器安全篇再讲），通过脚本获取到你的 cookie 数据，然后就可以利用 cookie 做一些坏事了。\n当然也有一些方法规避，常用的一个是将部分 cookie 设置成 httponly 的属性，设置了 httponly 属性后 cookie，就无法通过js脚本来读取了，只是在发送 http 请求时候会被带上！\n当然还有一些其他防范的方法，这个同样咱们后面在聊！")])])])}),[],!1,null,null,null);t.default=_.exports}}]);