(window.webpackJsonp=window.webpackJsonp||[]).push([[360],{693:function(t,s,n){"use strict";n.r(s);var a=n(4),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("我们知道有些时候通过编程的方式去进行计算是不精确的。如果你使用 Go 语言中的 float64 类型进行浮点运算，返回结果将精确到 15 位，足以满足大多数的任务。当对超出 int64 或者 uint64 类型这样的大数进行计算时，如果对精度没有要求，float32 或者 float64 可以胜任，但如果对精度有严格要求的时候，我们不能使用浮点数，在内存中它们只能被近似的表示。")]),t._v(" "),n("p",[t._v("对于整数的高精度计算 Go 语言中提供了 big 包，被包含在 math 包下：有用来表示大整数的 "),n("code",[t._v("big.Int")]),t._v(" 和表示大有理数的 "),n("code",[t._v("big.Rat")]),t._v(" 类型（可以表示为 2/5 或 3.1416 这样的分数，而不是无理数或 π）。这些类型可以实现任意位类型的数字，只要内存足够大。缺点是更大的内存和处理开销使它们使用起来要比内置的数字类型慢很多。")]),t._v(" "),n("p",[t._v("大的整型数字是通过 "),n("code",[t._v("big.NewInt(n)")]),t._v(" 来构造的，其中 n 为 int64 类型整数。而大有理数是通过 "),n("code",[t._v("big.NewRat(n, d)")]),t._v(" 方法构造。n（分子）和 d（分母）都是 int64 型整数。因为 Go 语言不支持运算符重载，所以所有大数字类型都有像是 "),n("code",[t._v("Add()")]),t._v(" 和 "),n("code",[t._v("Mul()")]),t._v(" 这样的方法。它们作用于作为 receiver 的整数和有理数，大多数情况下它们修改 receiver 并以 receiver 作为返回结果。因为没有必要创建 "),n("code",[t._v("big.Int")]),t._v(" 类型的临时变量来存放中间结果，所以运算可以被链式地调用，并节省内存。")]),t._v(" "),n("p",[t._v("示例 9.2 "),n("a",{attrs:{href:"examples/chapter_9/big.go"}},[t._v("big.go")]),t._v("：")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// big.go")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"math"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"math/big"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Here are some calculations with bigInts:")]),t._v("\n\tim "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" big"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewInt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("math"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MaxInt64"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tin "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" im\n\tio "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" big"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewInt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1956")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tip "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" big"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewInt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tip"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Mul")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("im"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" in"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ip"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" im"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ip"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" io"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Big Int: %v\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ip"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Here are some calculations with bigInts:")]),t._v("\n\trm "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" big"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewRat")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("math"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MaxInt64"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1956")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\trn "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" big"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewRat")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1956")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" math"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MaxInt64"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tro "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" big"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewRat")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("56")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\trp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" big"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewRat")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1111")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2222")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\trq "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" big"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewRat")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\trq"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Mul")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rq"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ro"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Mul")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rq"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Big Rat: %v\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rq"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Output:\nBig Int: 43492122561469640008497075573153004\nBig Rat: -37/112\n*/")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br")])]),n("p",[t._v("输出结果：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("Big Int: 43492122561469640008497075573153004\nBig Rat: -37/112\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);