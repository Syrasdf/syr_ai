# 为什么要有变量

程序中申明变量，给程序带来了状态(程序的数据加变量)
变量是对内存中数据的抽象，它提供了可读，可写，可复用的方式来操作值
变量的本质是对一块内存地址的引用。

- js 里变量的类型由什么决定？
  弱类型

- js 的几种基本数据类型？
  String，Number，Boolean，null（值为空），undefined(未定义类型)，
  symbol，bigint（新增数据类型）

  null 和 undefined 都是空类型，但是 null 是值为空，undefined 是未定义类型，
  两者都可以被赋值，但是 null 不能被赋值给其他类型，undefined 不能被赋值给其他类型。
  就像你女朋友可以是null空,没有，但是不能是undefined未定义。
  
- js 中怎么声明变量？
  var，let，const
  var 是函数作用域，let 是块作用域，const 是常量，不能被修改。
  var 变量提升，let 变量提升，const 变量提升。  






