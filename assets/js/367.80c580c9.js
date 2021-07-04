(window.webpackJsonp=window.webpackJsonp||[]).push([[367],{688:function(t,s,n){"use strict";n.r(s);var a=n(4),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("（本节我们将创建一个 Web 应用和它的 Google App Engine 版本,在第 19 和 21 章分别说明，当你阅读到这些章节时可以再回到这个例子。)")]),t._v(" "),n("p",[t._v("当开始一个新项目或增加新的功能到现有的项目，你可以通过在应用程序中使用已经存在的库来节省开发时间。为了做到这一点，你必须理解库的 API（应用编程接口），那就是：库中有哪些方法可以调用，如何调用。你可能没有这个库的源代码，但作者肯定有记载的 API 以及详细介绍了如何使用它。")]),t._v(" "),n("p",[t._v('作为一个例子，我们将使用谷歌的 API 的 urlshortener 编写一个小程序：你可以尝试一下在 http://goo.gl/ 输入一个像 "http://www.destandaard.be" 这样的URL，你会看到一个像 "http://goo.gl/O9SUO" 这样更短的 URL 返回，也就是说，在 Twitter 之类的服务中这是非常容易嵌入的。谷歌 urlshortener 服务的文档可以在 "http://code.google.com/apis/urlshortener/" 找到。(第 19 章，我们将开发自己版本的 urlshortener)。')]),t._v(" "),n("p",[t._v("谷歌将这项技术提供给其他开发者，作为 API 我们可以在我们自己的应用程序中调用（释放到指定的限制）。他们也生成了一个 Go 语言客户端库使其变得更容易。")]),t._v(" "),n("p",[t._v("备注：谷歌让通过使用 Google API Go 客户端服务的开发者生活变得更简单，Go 客户端程序自动生成于 Google 库的 JSON 描述。更多详情在 "),n("a",{attrs:{href:"http://code.google.com/p/google-api-go-client/",target:"_blank",rel:"noopener noreferrer"}},[t._v("项目页面"),n("OutboundLink")],1),t._v(" 查看。")]),t._v(" "),n("p",[t._v("下载并安装 Go 客户端库:\n将通过 go install 实现。但是首先要验证环境变量中是否含有 "),n("code",[t._v("GOPATH")]),t._v(" 变量，因为外部源码将被下载到 "),n("code",[t._v("$GOPATH/src")]),t._v(" 目录下并被安装到 "),n("code",[t._v('$GOPATH/PKG/"machine_arch"/')]),t._v(" 目录下。")]),t._v(" "),n("p",[t._v("我们将通过在终端调用以下命令来安装 API:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("go install google.golang.org/api/urlshortener/v1\n")])])]),n("p",[t._v("go install 将下载源码，编译并安装包")]),t._v(" "),n("p",[t._v("使用 urlshortener 服务的 web 程序:\n现在我们可以通过导入并赋予别名来使用已安装的包：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('import  "google.golang.org/api/urlshortener/v1"\n')])])]),n("p",[t._v("现在我们写一个 Web 应用(参见第 15 章 4-8 节)通过表单实现短地址和长地址的相互转换。我们将使用 "),n("code",[t._v("template")]),t._v(" 包并写三个处理函数：root 函数通过执行表单模板来展示表单。short 函数将长地址转换为短地址，long 函数逆向转换。")]),t._v(" "),n("p",[t._v("要调用 urlshortener 接口必须先通过 http 包中的默认客户端创建一个服务实例 urlshortenerSvc：")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("urlshortenerSvc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" urlshortener"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DefaultClient"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("我们通过调用服务中的 "),n("code",[t._v("Url.Insert")]),t._v(" 中的 "),n("code",[t._v("Do")]),t._v(" 方法传入包含长地址的 "),n("code",[t._v("Url")]),t._v(" 数据结构从而获取短地址：")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" urlshortenerSvc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Insert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("urlshortener"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("LongUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" longUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Do")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("返回 "),n("code",[t._v("url")]),t._v(" 的 "),n("code",[t._v("Id")]),t._v(" 便是我们需要的短地址。")]),t._v(" "),n("p",[t._v("我们通过调用服务中的 "),n("code",[t._v("Url.Get")]),t._v(" 中的 "),n("code",[t._v("Do")]),t._v(" 方法传入包含短地址的Url数据结构从而获取长地址：")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" urlshortenerSvc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("shwortUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Do")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("返回的长地址便是转换前的原始地址。")]),t._v(" "),n("p",[t._v("示例\t9.9\t"),n("a",{attrs:{href:"examples/chapter_9/use_urlshortener.go"}},[t._v("urlshortener.go")])]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"net/http"')]),t._v("\n\t "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/template"')]),t._v("\n\n\t "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"google.golang.org/api/urlshortener/v1"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("HandleFunc")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("HandleFunc")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/short"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" short"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("HandleFunc")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/long"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" long"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ListenAndServe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost:8080"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the template used to show the forms and the results web page to the user")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" rootHtmlTmpl "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Must")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rootHtml"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Parse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`\n<html><body>\n<h1>URL SHORTENER</h1>\n{{if .}}{{.}}<br /><br />{{end}}\n<form action="/short" type="POST">\nShorten this: <input type="text" name="longUrl" />\n<input type="submit" value="Give me the short URL" />\n</form>\n<br />\n<form action="/long" type="POST">\nExpand this: http://goo.gl/<input type="text" name="shortUrl" />\n<input type="submit" value="Give me the long URL" />\n</form>\n</body></html>\n`')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("root")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ResponseWriter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\trootHtmlTmpl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Execute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("short")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ResponseWriter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t longUrl "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("FormValue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"longUrl"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t urlshortenerSvc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" urlshortener"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DefaultClient"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" urlshortenerSvc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Insert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("urlshortener"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("LongUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t longUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Do")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t rootHtmlTmpl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Execute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sprintf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Shortened version of %s is : %s"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t longUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("long")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ResponseWriter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t shortUrl "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://goo.gl/"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("FormValue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"shortUrl"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t urlshortenerSvc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" urlshortener"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DefaultClient"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" urlshortenerSvc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("shortUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Do")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error: %v"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\n\t "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t rootHtmlTmpl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Execute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sprintf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Longer version of %s is : %s"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t shortUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LongUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br"),n("span",{staticClass:"line-number"},[t._v("41")]),n("br"),n("span",{staticClass:"line-number"},[t._v("42")]),n("br"),n("span",{staticClass:"line-number"},[t._v("43")]),n("br"),n("span",{staticClass:"line-number"},[t._v("44")]),n("br"),n("span",{staticClass:"line-number"},[t._v("45")]),n("br"),n("span",{staticClass:"line-number"},[t._v("46")]),n("br"),n("span",{staticClass:"line-number"},[t._v("47")]),n("br"),n("span",{staticClass:"line-number"},[t._v("48")]),n("br"),n("span",{staticClass:"line-number"},[t._v("49")]),n("br"),n("span",{staticClass:"line-number"},[t._v("50")]),n("br"),n("span",{staticClass:"line-number"},[t._v("51")]),n("br"),n("span",{staticClass:"line-number"},[t._v("52")]),n("br"),n("span",{staticClass:"line-number"},[t._v("53")]),n("br"),n("span",{staticClass:"line-number"},[t._v("54")]),n("br"),n("span",{staticClass:"line-number"},[t._v("55")]),n("br"),n("span",{staticClass:"line-number"},[t._v("56")]),n("br")])]),n("p",[t._v("执行这段代码：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("go run urlshortener.go\n")])])]),n("p",[t._v("通过浏览 "),n("code",[t._v("http://localhost:8080/")]),t._v(" 的页面来测试。")]),t._v(" "),n("p",[t._v("为了代码的简洁我们并没有检测返回的错误状态，但是在真实的生产环境的应用中一定要做检测。")]),t._v(" "),n("p",[t._v("将应用放入 Google App Engine，我们只需要在之前的代码中作出如下改变：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("package main -> package urlshort\nfunc main() -> func init()\n")])])]),n("p",[t._v("创建一个和包同名的目录 "),n("code",[t._v("urlshort")]),t._v("，并将以下两个安装目录复制到这个目录：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("google.golang.org/api/urlshortener\ngoogle.golang.org/api/googleapi\n")])])]),n("p",[t._v("此外还要配置下配置文件 "),n("code",[t._v("app.yaml")]),t._v("，内容如下：")]),t._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("application")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" urlshort\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("test\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runtime")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" go\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("api_version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("handlers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /.*\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" _go_app\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("p",[t._v("现在你可以去到你的项目目录并在终端运行："),n("code",[t._v("dev_appserver.py urlshort")])]),t._v(" "),n("p",[t._v("在浏览器打开你的 Web应用：http://localhost:8080。")])])}),[],!1,null,null,null);s.default=e.exports}}]);