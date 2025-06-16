# promise

- CPU 轮询
- 同步任务，异步任务
  异步任务 
  先跳到后面执行
  代码的编写顺序和执行顺序不一样
  异步任务比较花时间
- 有个需求
  111 输出放在 222 前面
  控制执行的顺序

## Promise 的底层理解
画个饼
- 异步任务需要时间，如果不管的话，跳到后面执行
  代码的可读性不好，代码的编写顺序和执行顺序不一致
- const p = new Promise(fn)
  类，专门用于解决异步问题
  prototype then 方法
- 异步任务放到fn
- fn 里面的异步任务完成，resolve
- p.then(() => {
  就可以运行
})
- 我们把任务放到then 里面就可以把执行的流程交给 resolve 来处理

## 控制执行流程的 es6 套路
  - new Promise() // 请Promise 类  控制异步流程专业
  - () => {// executor 耗时性的异步任务
    异步任务 setTimeout readFile fetch ...

  } 

  - then 原型方法
  - resolve then 函数执行

- promise .then 升级到 async await  成对出现 
  async 用于修饰函数， 函数里面有异步任务
  await 等待异步任务完成 ，异步变同步 





