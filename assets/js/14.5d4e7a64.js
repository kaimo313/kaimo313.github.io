(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{534:function(s,a,t){s.exports=t.p+"assets/img/2.3.allbasherror.f9f6ee0b.png"},535:function(s,a,t){s.exports=t.p+"assets/img/2.3.allbash.f923fb1a.png"},814:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("如果你能够自己下载并编译 Go 的源代码的话,对你来说是非常有教育意义的，你可以根据这个页面找到安装指南和下载地址："),n("a",{attrs:{href:"http://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[s._v("Download the Go distribution"),n("OutboundLink")],1),s._v("。")]),s._v(" "),n("p",[s._v("我们接下来也会带你一步步地完成安装过程。")]),s._v(" "),n("h2",{attrs:{id:"_1-设置-go-环境变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-设置-go-环境变量"}},[s._v("#")]),s._v(" 1. 设置 Go 环境变量")]),s._v(" "),n("p",[s._v("我们在 Linux 系统下一般通过文件 "),n("code",[s._v("$HOME/.bashrc")]),s._v(" 配置自定义环境变量，根据不同的发行版也可能是文件 "),n("code",[s._v("$HOME/.profile")]),s._v("，然后使用 gedit 或 vi 来编辑文件内容。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOROOT")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/go\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("为了确保相关文件在文件系统的任何地方都能被调用，你还需要添加以下内容：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOROOT")]),s._v("/bin\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("在开发 Go 项目时，你还需要一个环境变量来保存你的工作目录。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPATH")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/Applications/Go\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("code",[s._v("$GOPATH")]),s._v(" 可以包含多个工作目录，取决于你的个人情况。如果你设置了多个工作目录，那么当你在之后使用 "),n("code",[s._v("go get")]),s._v("（远程包安装命令）时远程包将会被安装在第一个目录下。")]),s._v(" "),n("p",[s._v("在完成这些设置后，你需要在终端输入指令 "),n("code",[s._v("source .bashrc")]),s._v(" 以使这些环境变量生效。然后重启终端，输入 "),n("code",[s._v("go env")]),s._v(" 和 "),n("code",[s._v("env")]),s._v(" 来检查环境变量是否设置正确。")]),s._v(" "),n("h2",{attrs:{id:"_2-安装-c-工具"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装-c-工具"}},[s._v("#")]),s._v(" 2. 安装 C 工具")]),s._v(" "),n("p",[s._v("Go 的工具链是用 C 语言编写的，因此在安装 Go 之前你需要先安装相关的 C 工具。如果你使用的是 Ubuntu 的话，你可以在终端输入以下指令（ "),n("strong",[s._v("译者注：由于网络环境的特殊性，你可能需要将每个工具分开安装")]),s._v(" ）。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" bison ed "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("gawk")]),s._v(" gcc libc6-dev "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("你可以在其它发行版上使用 RPM 之类的工具。")]),s._v(" "),n("h2",{attrs:{id:"_3-获取-go-源代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-获取-go-源代码"}},[s._v("#")]),s._v(" 3. 获取 Go 源代码")]),s._v(" "),n("p",[s._v("从 "),n("a",{attrs:{href:"https://golang.org/dl/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方页面"),n("OutboundLink")],1),s._v(" 或 "),n("a",{attrs:{href:"http://www.golangtc.com/download",target:"_blank",rel:"noopener noreferrer"}},[s._v("国内镜像"),n("OutboundLink")],1),s._v(" 下载 Go 的源码包到你的计算机上，然后将解压后的目录 "),n("code",[s._v("go")]),s._v(" 通过命令移动到 "),n("code",[s._v("$GOROOT")]),s._v(" 所指向的位置。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://storage.googleapis.com/golang/go"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("VERSION"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(".src.tar.gz\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf go"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("VERSION"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(".src.tar.gz\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" go "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOROOT")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"_4-构建-go"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-构建-go"}},[s._v("#")]),s._v(" 4. 构建 Go")]),s._v(" "),n("p",[s._v("在终端使用以下指令来进行编译工作。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOROOT")]),s._v("/src\n./all.bash\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("strong",[s._v("编译注意事项")])]),s._v(" "),n("p",[s._v("编译时如果出现如下报错：")]),s._v(" "),n("p",[n("img",{attrs:{src:t(534),alt:""}})]),s._v(" "),n("p",[s._v("可能是因为 "),n("code",[s._v("$GOROOT_BOOTSTRAP")]),s._v(" 变量没有设置。这个目录在安装 Go 1.5 版本及之后的版本时需要设置。")]),s._v(" "),n("p",[s._v("由于在 1.4 版本后，Go 编译器实现了自举，即通过 1.4 版本来编译安装之后版本的编译器。如果不设置该环境变量的话，会产生这样一个错误 "),n("code",[s._v("Set $GOROOT_BOOTSTRAP to a working Go tree >= Go 1.4.")]),s._v(" 。")]),s._v(" "),n("p",[s._v("设置 "),n("code",[s._v("$GOROOT_BOOTSTRAP")]),s._v(" 变量：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOROOT_BOOTSTRAP")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/go1.4\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("设置完成后，下载 1.4 版本的源码到该目录：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/golang/go.git "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/go1.4\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b release-branch.go1.4 origin/release-branch.go1.4\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("进入 1.4 的文件夹后，进行编译：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/go1.4/src\n./make.bash\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("1.4 编译安装好之后，进入 "),n("code",[s._v("$GOROOT")]),s._v(" 文件夹，真正开始编译安装 Go：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/go/src\n./all.bash\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("在完成编译之后（通常在 1 分钟以内，如果你在 B 型树莓派上编译，一般需要 1 个小时），你会在终端看到如下信息被打印：")]),s._v(" "),n("p",[n("img",{attrs:{src:t(535),alt:""}})]),s._v(" "),n("p",[s._v("图 2.3 完成编译后在终端打印的信息")]),s._v(" "),n("p",[n("strong",[s._v("注意事项")])]),s._v(" "),n("p",[s._v("在测试 "),n("code",[s._v("net/http")]),s._v(" 包时有一个测试会尝试连接 "),n("code",[s._v("google.com")]),s._v("，你可能会看到如下所示的一个无厘头的错误报告：")]),s._v(" "),n("p",[s._v("‘make[2]: Leaving directory `/localusr/go/src/pkg/net’")]),s._v(" "),n("p",[s._v("如果你正在使用一个带有防火墙的机器，我建议你可以在编译过程中暂时关闭防火墙，以避免不必要的错误。")]),s._v(" "),n("p",[s._v("解决这个问题的另一个办法是通过设置环境变量 "),n("code",[s._v("$DISABLE_NET_TESTS")]),s._v(" 来告诉构建工具忽略 "),n("code",[s._v("net/http")]),s._v(" 包的相关测试：")]),s._v(" "),n("p",[s._v("export DISABLE_NET_TESTS=1")]),s._v(" "),n("p",[s._v("如果你完全不想运行包的测试，你可以直接运行 "),n("code",[s._v("./make.bash")]),s._v(" 来进行单纯的构建过程。")]),s._v(" "),n("h2",{attrs:{id:"_5-测试安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-测试安装"}},[s._v("#")]),s._v(" 5. 测试安装")]),s._v(" "),n("p",[s._v("使用你最喜爱的编辑器来输入以下内容，并保存为文件名 "),n("code",[s._v("hello_world1.go")]),s._v("。")]),s._v(" "),n("p",[s._v("示例 2.1 "),n("a",{attrs:{href:"examples/chapter_2/hello_world1.go"}},[s._v("hello_world1.go")])]),s._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"world"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("切换相关目录到下，然后执行指令 "),n("code",[s._v("go run hello_world1.go")]),s._v("，将会打印信息："),n("code",[s._v("Hello, world")]),s._v("。")]),s._v(" "),n("h2",{attrs:{id:"_6-验证安装版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-验证安装版本"}},[s._v("#")]),s._v(" 6. 验证安装版本")]),s._v(" "),n("p",[s._v("你可以通过在终端输入指令 "),n("code",[s._v("go version")]),s._v(" 来打印 Go 的版本信息。")]),s._v(" "),n("p",[s._v("如果你想要通过 Go 代码在运行时检测版本，可以通过以下例子实现。")]),s._v(" "),n("p",[s._v("示例 2.2 "),n("a",{attrs:{href:"examples/chapter_2/version.go"}},[s._v("version.go")])]),s._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"runtime"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%s"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" runtime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("这段代码将会输出 "),n("code",[s._v("go1.4.2")]),s._v(" 或类似字符串。")]),s._v(" "),n("h2",{attrs:{id:"_7-更新版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-更新版本"}},[s._v("#")]),s._v(" 7. 更新版本")]),s._v(" "),n("p",[s._v("你可以在 "),n("a",{attrs:{href:"http://golang.org/doc/devel/release.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("发布历史"),n("OutboundLink")],1),s._v(" 页面查看到最新的稳定版。")]),s._v(" "),n("p",[s._v("当前最新的稳定版 Go 1 系列于 2012 年 3 月 28 日发布。")]),s._v(" "),n("p",[s._v("Go 的源代码有以下三个分支：")]),s._v(" "),n("ul",[n("li",[s._v("Go release：最新稳定版，实际开发最佳选择")]),s._v(" "),n("li",[s._v("Go weekly：包含最近更新的版本，一般每周更新一次")]),s._v(" "),n("li",[s._v("Go tip：永远保持最新的版本，相当于内测版")])]),s._v(" "),n("p",[s._v("当你在使用不同的版本时，注意官方博客发布的信息，因为你所查阅的文档可能和你正在使用的版本不相符。")])])}),[],!1,null,null,null);a.default=e.exports}}]);