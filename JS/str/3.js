let a = "abc";//简单数据类型
let b = new String("abc");// String
console.log(a==b) // 值相等
//js 给所以的简单数据类型提供了 相应类型的类 包装类
console.log(a===b) // 类型不同

console.log(b.split(""))

那为什么a.split("")也可以呢？
//为了统一面向对象的写法
//js 会主动的把简单数据类型 包装成对象
//a -> new String(a)
//之后会销毁对象，回归原来的简单类型
console.log(a.split(""))
//执行完后立刻销毁
//噢伟大的js