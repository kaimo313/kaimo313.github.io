(window.webpackJsonp=window.webpackJsonp||[]).push([[401],{650:function(s,t,n){"use strict";n.r(t);var a=n(4),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("这是所有自定义包实现者应该遵守的最佳实践：")]),s._v(" "),n("p",[s._v("1）"),n("em",[s._v("在包内部，总是应该从 panic 中 recover")]),s._v("：不允许显式的超出包范围的 panic()")]),s._v(" "),n("p",[s._v("2）"),n("em",[s._v("向包的调用者返回错误值（而不是 panic）。")])]),s._v(" "),n("p",[s._v("在包内部，特别是在非导出函数中有很深层次的嵌套调用时，将 panic 转换成 error 来告诉调用方为何出错，是很实用的（且提高了代码可读性）。")]),s._v(" "),n("p",[s._v("下面的代码则很好地阐述了这一点。我们有一个简单的 parse 包（示例 13.4）用来把输入的字符串解析为整数切片；这个包有自己特殊的 "),n("code",[s._v("ParseError")]),s._v("。")]),s._v(" "),n("p",[s._v("当没有东西需要转换或者转换成整数失败时，这个包会 panic（在函数 fields2numbers 中）。但是可导出的 Parse 函数会从 panic 中 recover 并用所有这些信息返回一个错误给调用者。为了演示这个过程，在 "),n("a",{attrs:{href:"examples/chapter_13/panic_recover.go"}},[s._v("panic_recover.go")]),s._v(" 中 调用了 parse 包（示例 13.5）；不可解析的字符串会导致错误并被打印出来。")]),s._v(" "),n("p",[s._v("示例 13.4 "),n("a",{attrs:{href:"examples/chapter_13/parse/parse.go"}},[s._v("parse.go")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// parse.go")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" parse\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"strings"')]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"strconv"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// A ParseError indicates an error in converting a word into an integer.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" ParseError "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    Index "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// The index into the space-separated list of words.")]),s._v("\n    Word  "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// The word that generated the parse error.")]),s._v("\n    Err "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("error")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// The raw error that precipitated this error, if any.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// String returns a human-readable error message.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("ParseError"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Sprintf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pkg parse: error parsing %q as int"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Word"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Parse parses the space-separated words in in put as integers.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Parse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("input "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("numbers "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" err "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("defer")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" r "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("recover")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" r "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" ok "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),s._v("\n            err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ok "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("ok "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                err "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Errorf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pkg: %v"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    fields "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" strings"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Fields")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    numbers "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fields2numbers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fields"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fields2numbers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fields "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("numbers "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fields"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("panic")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"no words to parse"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" idx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" field "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("range")]),s._v(" fields "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" strconv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Atoi")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("field"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("panic")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("ParseError"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("idx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" field"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        numbers "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("append")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("numbers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br")])]),n("p",[s._v("示例 13.5 "),n("a",{attrs:{href:"examples/chapter_13/panic_package.go"}},[s._v("panic_package.go")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// panic_package.go")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./parse/parse"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" examples "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1 2 3 4 5"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"100 50 25 12.5 6.25"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2 + 2 = 4"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1st class"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("_")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ex "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("range")]),s._v(" examples "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Parsing %q:\\n  "')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" parse"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Parse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// here String() method from ParseError is used")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("continue")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("p",[s._v("输出：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('Parsing "1 2 3 4 5":\n  [1 2 3 4 5]\nParsing "100 50 25 12.5 6.25":\n  pkg: pkg parse: error parsing "12.5" as int\nParsing "2 + 2 = 4":\n  pkg: pkg parse: error parsing "+" as int\nParsing "1st class":\n  pkg: pkg parse: error parsing "1st" as int\nParsing "":\n  pkg: no words to parse\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);