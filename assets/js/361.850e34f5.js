(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{692:function(a,t,s){"use strict";s.r(t);var n=s(4),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("包是 Go 语言中代码组织和代码编译的主要方式。关于它们的很多基本信息已经在 4.2 章节中给出，最引人注目的便是可见性。现在我们来看看具体如何来使用自己写的包。在下一节，我们将回顾一些标准库中的包，自定义的包和标准库以外的包。")]),a._v(" "),s("p",[a._v("当写自己包的时候，要使用短小的不含有 "),s("code",[a._v("_")]),a._v("(下划线)的小写单词来为文件命名。这里有个简单例子来说明包是如何相互调用以及可见性是如何实现的。")]),a._v(" "),s("p",[a._v("当前目录下（examples/chapter_9/book/）有一个名为 package_mytest.go 的程序, 它使用了自定义包 pack1 中 pack1.go 的代码。这段程序(连同编译链接生成的 pack1.a)存放在当前目录下一个名为 pack1 的文件夹下。所以链接器将包的对象和主程序对象链接在一起。")]),a._v(" "),s("p",[a._v("示例 9.4 "),s("a",{attrs:{href:"examples/chapter_9/book/pack1/pack1.go"}},[a._v("pack1.go")]),a._v("：")]),a._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" pack1\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" Pack1Int "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("42")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" pack1Float "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.14")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("func")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ReturnStr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("string")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello main!"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[a._v("它包含了一个整型变量 "),s("code",[a._v("Pack1Int")]),a._v(" 和一个返回字符串的函数 "),s("code",[a._v("ReturnStr")]),a._v("。这段程序在运行时不做任何的事情，因为它没有一个 main 函数。")]),a._v(" "),s("p",[a._v("在主程序 package_mytest.go 中这个包通过声明的方式被导入, 只到包的目录一层。")]),a._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"./pack1"')]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("import 的一般格式如下:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v('import "包的路径或 URL 地址" \n')])])]),s("p",[a._v("例如：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v('import "github.com/org1/pack1”\n')])])]),s("p",[a._v("路径是指当前目录的相对路径。")]),a._v(" "),s("p",[a._v("示例 9.5 "),s("a",{attrs:{href:"examples/chapter_9/book/package_mytest.go"}},[a._v("package_mytest.go")]),a._v("：")]),a._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"fmt"')]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"./pack1"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("func")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" test1 "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("string")]),a._v("\n\ttest1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" pack1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ReturnStr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ReturnStr from package1: %s\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" test1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Integer from package1: %d\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" pack1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Pack1Int"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('// fmt.Printf("Float from package1: %f\\n", pack1.pack1Float)')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br")])]),s("p",[a._v("输出结果：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("ReturnStr from package1: Hello main!\nInteger from package1: 42\n")])])]),s("p",[a._v("如果包 pack1 和我们的程序在同一路径下，我们可以通过 "),s("code",[a._v('"import ./pack1"')]),a._v(" 这样的方式来引入，但这不被视为一个好的方法。")]),a._v(" "),s("p",[a._v("下面的代码试图访问一个未引用的变量或者函数，甚至没有编译。将会返回一个错误：")]),a._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[a._v("fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Float from package1: %f\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" pack1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("pack1Float"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("错误：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("cannot refer to unexported name pack1.pack1Float\n")])])]),s("p",[a._v("主程序利用的包必须在主程序编写之前被编译。主程序中每个 pack1 项目都要通过包名来使用："),s("code",[a._v("pack1.Item")]),a._v("。具体使用方法请参见示例 4.6 和 4.7。")]),a._v(" "),s("p",[a._v("因此，按照惯例,子目录和包之间有着密切的联系：为了区分,不同包存放在不同的目录下，每个包(所有属于这个包中的 go 文件)都存放在和包名相同的子目录下：")]),a._v(" "),s("p",[a._v("Import with "),s("code",[a._v(".")]),a._v(" :")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v('import . "./pack1"\n')])])]),s("p",[a._v("当使用"),s("code",[a._v(".")]),a._v("来做为包的别名时，你可以不通过包名来使用其中的项目。例如："),s("code",[a._v("test := ReturnStr()")]),a._v("。")]),a._v(" "),s("p",[a._v("在当前的命名空间导入 pack1 包，一般是为了具有更好的测试效果。")]),a._v(" "),s("p",[a._v("Import with "),s("code",[a._v("_")]),a._v(" :")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v('import _ "./pack1/pack1"\n')])])]),s("p",[a._v("pack1包只导入其副作用，也就是说，只执行它的init函数并初始化其中的全局变量。")]),a._v(" "),s("p",[s("strong",[a._v("导入外部安装包:")])]),a._v(" "),s("p",[a._v("如果你要在你的应用中使用一个或多个外部包，首先你必须使用 "),s("code",[a._v("go install")]),a._v("（参见第 9.7 节）在你的本地机器上安装它们。")]),a._v(" "),s("p",[a._v("假设你想使用 "),s("code",[a._v("http://codesite.ext/author/goExample/goex")]),a._v(" 这种托管在 Google Code、GitHub 和 Launchpad 等代码网站上的包。")]),a._v(" "),s("p",[a._v("你可以通过如下命令安装：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("go install codesite.ext/author/goExample/goex\n")])])]),s("p",[a._v("将一个名为 "),s("code",[a._v("codesite.ext/author/goExample/goex")]),a._v(" 的 map 安装在 "),s("code",[a._v("$GOROOT/src/")]),a._v(" 目录下。")]),a._v(" "),s("p",[a._v("通过以下方式，一次性安装，并导入到你的代码中：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v('import goex "codesite.ext/author/goExample/goex"\n')])])]),s("p",[a._v("因此该包的 URL 将用作导入路径。")]),a._v(" "),s("p",[a._v("在 "),s("code",[a._v("http://golang.org/cmd/goinstall/")]),a._v(" 的 "),s("code",[a._v("go install")]),a._v(" 文档中列出了一些广泛被使用的托管在网络代码仓库的包的导入路径")]),a._v(" "),s("p",[s("strong",[a._v("包的初始化:")])]),a._v(" "),s("p",[a._v("程序的执行开始于导入包，初始化 main 包然后调用 main 函数。")]),a._v(" "),s("p",[a._v("一个没有导入的包将通过分配初始值给所有的包级变量和调用源码中定义的包级 init 函数来初始化。一个包可能有多个 init 函数甚至在一个源码文件中。它们的执行是无序的。这是最好的例子来测定包的值是否只依赖于相同包下的其他值或者函数。")]),a._v(" "),s("p",[a._v("init 函数是不能被调用的。")]),a._v(" "),s("p",[a._v("导入的包在包自身初始化前被初始化，而一个包在程序执行中只能初始化一次。")]),a._v(" "),s("p",[s("strong",[a._v("编译并安装一个包(参见第 9.7 节):")])]),a._v(" "),s("p",[a._v("在 Linux/OS X 下可以用类似第 3.9 节的 Makefile 脚本做到这一点：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("include $(GOROOT)/src/Make.inc\nTARG=pack1\nGOFILES=\\\n \tpack1.go\\\n \tpack1b.go\\\ninclude $(GOROOT)/src/Make.pkg\n")])])]),s("p",[a._v("通过 "),s("code",[a._v("chmod 777 ./Makefile")]),a._v("确保它的可执行性。")]),a._v(" "),s("p",[a._v("上面脚本内的include语引入了相应的功能，将自动检测机器的架构并调用正确的编译器和链接器。")]),a._v(" "),s("p",[a._v("然后终端执行 make 或 "),s("code",[a._v("gomake")]),a._v(" 工具：他们都会生成一个包含静态库 pack1.a 的 _obj 目录。")]),a._v(" "),s("p",[a._v("go install(参见第 9.7 节，从 Go1 的首选方式)同样复制 pack1.a 到本地的 $GOROOT/pkg 的目录中一个以操作系统为名的子目录下。像 "),s("code",[a._v('import "pack1"')]),a._v(" 代替 "),s("code",[a._v('import "path to pack1"')]),a._v("，这样只通过名字就可以将包在程序中导入。")]),a._v(" "),s("p",[a._v("当第 13 章我们遇到使用测试工具进行测试的时候我们将重新回到自己的包的制作和编译这个话题。")]),a._v(" "),s("p",[s("strong",[a._v("问题 9.1")])]),a._v(" "),s("p",[a._v("a）一个包能分成多个源文件么？")]),a._v(" "),s("p",[a._v("b）一个源文件是否能包含多个包？")]),a._v(" "),s("p",[s("strong",[a._v("练习 9.3")])]),a._v(" "),s("p",[a._v('创建一个程序 main_greetings.go 能够和用户说 "Good Day" 或者 "Good Night"。不同的问候应该放到单独的 greetings 包中。')]),a._v(" "),s("p",[a._v("在同一个包中创建一个 "),s("code",[a._v("IsAM")]),a._v(" 函数返回一个布尔值用来判断当前时间是 AM 还是 PM，同样创建 "),s("code",[a._v("IsAfternoon")]),a._v(" 和 "),s("code",[a._v("IsEvening")]),a._v(" 函数。")]),a._v(" "),s("p",[a._v("使用 main_greetings 作出合适的问候(提示：使用 time 包)。")]),a._v(" "),s("p",[s("strong",[a._v("练习 9.4")]),a._v(" 创建一个程序 main_oddven.go 判断前 100 个整数是不是偶数，将判断所用的函数编写在 even 包里。")]),a._v(" "),s("p",[s("strong",[a._v("练习 9.5")]),a._v(" 使用第 6.6 节的斐波那契程序：")]),a._v(" "),s("p",[a._v("1）将斐波那契功能放入自己的 fibo 包中并通过主程序调用它，存储最后输入的值在函数的全局变量。")]),a._v(" "),s("p",[a._v('2）扩展 fibo 包将通过调用斐波那契的时候，操作也作为一个参数。实验 "+" 和 “*”')]),a._v(" "),s("p",[a._v("main_fibo.go / fibonacci.go")])])}),[],!1,null,null,null);t.default=e.exports}}]);