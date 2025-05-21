# var_let_const
tdj时间
let 不能提前访问
## JS 代码执行机制
- 有一段代码
  硬盘读入内存
- V8 引擎 把代码解析成 抽象语法树（AST）
  （解析执行JS）
  chrome 心脏，负责解析和执行代码
- 编译阶段
  - 作用域 （变量查找的规则）
    
    全局
    函数
    块级（let）
  - 变量提升 hoisting
  - 代码生成
- 执行阶段
  - 执行上下文
  - 执行栈
  - 垃圾回收
  - 事件循环
  - 异步任务

- 变量提升 hoisting


看到var放到变量环境
词法环境  tdz

调用栈：
栈：后进先出


先安排栈
全局执行上下文

变量环境
myName Undefined
showName function

词法环境
let
TDZ


局部执行上下文  载入栈
里面存在函数栈 
变量环境会声明b


函数执行不能出栈

