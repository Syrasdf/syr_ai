# react 事件机制
- js 事件机制
  - 异步
  - 监听一个事件
    - addEventListener()  DOM2 事件
    - DOM 0
    <a onclick="doSomething"></a>
    - DOM 1?   DOM 版本，在DOM 1 并没有对事件升级

- addEventListener(type, listener, useCapture?);
  - 回调函数 callback 异步处理的总称
  - promise then
  - async await
  listener：监听器

- 注册事件  addEventListener

- useCapture false 默认值
    页面是浏览器渲染引擎按像素点画出来的  png 
    先捕获 document -> 一层层去问
       点了谁？
       先触发父元素
    even.target
        捕获阶段结束，拿到event.target 
    冒泡
        event.target 冒泡到 html  回去到根
        事件在冒泡阶段执行
        在那个阶段执行
  
  