// 

"hello".split("")  写法
JS 并没有 len("hello")函数式写法，没有
// 可是一个简单数据类型怎么能'.'呢？
// 如果"hello"是字符串的话绝对不可能这么操作
// 那么它背后的魔法是什么呢？
// 所以"hello"是一个对象
JS 面向对象的统一写法
['h','e','l','l','o].reverse().join("")
  是一个数组对象，在数组对象上有一个reverse方法，所以可以调用reverse方法

"hello" -> new String("hello")->String.prototype->Object.prototype->null
new String("hello")这是什么  这是字符串对象

一个"="是一个引用类型的变量，指向一个对象
两个"="是值相同的两个变量
三个"="是类型相同
