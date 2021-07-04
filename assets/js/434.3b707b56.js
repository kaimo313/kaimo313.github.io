(window.webpackJsonp=window.webpackJsonp||[]).push([[434],{605:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("在之前的内容中，有时候使用"),a("code",[t._v("!!...!!")]),t._v("标记警告go语言中的一些错误使用方式。当你在编程时候遇到的一个困难，可以确定本书特定的章节能找到类似的主题。为了方便起见，这里列出了一些常见陷阱，以便于你能发现更多的解释和例子：")]),t._v(" "),a("ul",[a("li",[t._v("永远不要使用形如 "),a("code",[t._v("var p*a")]),t._v(" 声明变量，这会混淆指针声明和乘法运算（参考"),a("RouterLink",{attrs:{to:"/GO01.Go入门指南/05.第四部分：实际应用/01.第16章：常见的陷阱与错误/04.9.html"}},[t._v("4.9小节")]),t._v("）")],1),t._v(" "),a("li",[t._v("永远不要在"),a("code",[t._v("for")]),t._v("循环自身中改变计数器变量（参考"),a("RouterLink",{attrs:{to:"/GO01.Go入门指南/05.第四部分：实际应用/01.第16章：常见的陷阱与错误/05.4.html"}},[t._v("5.4小节")]),t._v("）")],1),t._v(" "),a("li",[t._v("永远不要在"),a("code",[t._v("for-range")]),t._v("循环中使用一个值去改变自身的值（参考"),a("RouterLink",{attrs:{to:"/GO01.Go入门指南/05.第四部分：实际应用/01.第16章：常见的陷阱与错误/05.4.html"}},[t._v("5.4.4小节")]),t._v("）")],1),t._v(" "),a("li",[t._v("永远不要将"),a("code",[t._v("goto")]),t._v("和前置标签一起使用（参考"),a("RouterLink",{attrs:{to:"/GO01.Go入门指南/05.第四部分：实际应用/01.第16章：常见的陷阱与错误/05.6.html"}},[t._v("5.6小节")]),t._v("）")],1),t._v(" "),a("li",[t._v("永远不要忘记在函数名（参考"),a("RouterLink",{attrs:{to:"/GO01.Go入门指南/05.第四部分：实际应用/01.第16章：常见的陷阱与错误/06.0.html"}},[t._v("第6章")]),t._v("）后加括号()，尤其调用一个对象的方法或者使用匿名函数启动一个协程时")],1),t._v(" "),a("li",[t._v("永远不要使用"),a("code",[t._v("new()")]),t._v("一个map，一直使用make（参考"),a("RouterLink",{attrs:{to:"/GO01.Go入门指南/05.第四部分：实际应用/01.第16章：常见的陷阱与错误/08.0.html"}},[t._v("第8章")]),t._v("）")],1),t._v(" "),a("li",[t._v("当为一个类型定义一个String()方法时，不要使用"),a("code",[t._v("fmt.Print")]),t._v("或者类似的代码（参考"),a("RouterLink",{attrs:{to:"/GO01.Go入门指南/05.第四部分：实际应用/01.第16章：常见的陷阱与错误/10.7.html"}},[t._v("10.7小节")]),t._v("）")],1),t._v(" "),a("li",[t._v("永远不要忘记当终止缓存写入时，使用"),a("code",[t._v("Flush")]),t._v("函数（参考"),a("RouterLink",{attrs:{to:"/GO01.Go入门指南/05.第四部分：实际应用/01.第16章：常见的陷阱与错误/12.2.html"}},[t._v("12.2.3小节")]),t._v("）")],1),t._v(" "),a("li",[t._v("永远不要忽略错误提示，忽略错误会导致程序崩溃（参考"),a("RouterLink",{attrs:{to:"/GO01.Go入门指南/05.第四部分：实际应用/01.第16章：常见的陷阱与错误/13.1.html"}},[t._v("13.1小节")]),t._v("）")],1),t._v(" "),a("li",[t._v("不要使用全局变量或者共享内存，这会使并发执行的代码变得不安全（参考"),a("RouterLink",{attrs:{to:"/GO01.Go入门指南/05.第四部分：实际应用/01.第16章：常见的陷阱与错误/14.1.html"}},[t._v("14.1小节")]),t._v("）")],1),t._v(" "),a("li",[a("code",[t._v("println")]),t._v("函数仅仅是用于调试的目的")])]),t._v(" "),a("p",[t._v("最佳实践：对比以下使用方式：")]),t._v(" "),a("ul",[a("li",[t._v("使用正确的方式初始化一个元素是切片的映射，例如"),a("code",[t._v("map[type]slice")]),t._v("（参考"),a("RouterLink",{attrs:{to:"/GO01.Go入门指南/05.第四部分：实际应用/01.第16章：常见的陷阱与错误/08.1.html"}},[t._v("8.1.3小节")]),t._v("）")],1),t._v(" "),a("li",[t._v("一直使用逗号，ok或者checked形式作为类型断言（参考"),a("RouterLink",{attrs:{to:"/GO01.Go入门指南/05.第四部分：实际应用/01.第16章：常见的陷阱与错误/11.3.html"}},[t._v("11.3小节")]),t._v("）")],1),t._v(" "),a("li",[t._v("使用一个工厂函数创建并初始化自己定义类型（参考"),a("RouterLink",{attrs:{to:"/GO01.Go入门指南/05.第四部分：实际应用/01.第16章：常见的陷阱与错误/10.2.html"}},[t._v("10.2小节")]),t._v("-"),a("RouterLink",{attrs:{to:"/GO01.Go入门指南/05.第四部分：实际应用/01.第16章：常见的陷阱与错误/18.4.html"}},[t._v("18.4小节")]),t._v("）")],1),t._v(" "),a("li",[t._v("仅当一个结构体的方法想改变结构体时，使用结构体指针作为方法的接受者，否则使用一个结构体值类型"),a("RouterLink",{attrs:{to:"/GO01.Go入门指南/05.第四部分：实际应用/01.第16章：常见的陷阱与错误/10.6.html"}},[t._v("10.6.3小节")])],1)]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" remember "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" something "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    remember "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//错误")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用remember")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("在此代码段中，"),a("code",[t._v("remember")]),t._v("变量永远不会在"),a("code",[t._v("if")]),t._v("语句外面变成"),a("code",[t._v("true")]),t._v("，如果"),a("code",[t._v("something")]),t._v("为"),a("code",[t._v("true")]),t._v("，由于使用了短声明"),a("code",[t._v(":=")]),t._v("，"),a("code",[t._v("if")]),t._v("语句内部的新变量"),a("code",[t._v("remember")]),t._v("将覆盖外面的"),a("code",[t._v("remember")]),t._v("变量，并且该变量的值为"),a("code",[t._v("true")]),t._v("，但是在"),a("code",[t._v("if")]),t._v("语句外面，变量"),a("code",[t._v("remember")]),t._v("的值变成了"),a("code",[t._v("false")]),t._v("，所以正确的写法应该是：")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" something "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    remember "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("此类错误也容易在"),a("code",[t._v("for")]),t._v("循环中出现，尤其当函数返回一个具名变量时难于察觉\n，例如以下的代码段：")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shadow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("check1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// x是新创建变量，err是被赋值")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正确返回err")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("check2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// y和if语句中err被创建")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if语句中的err覆盖外面的err，所以错误的返回nil！")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);