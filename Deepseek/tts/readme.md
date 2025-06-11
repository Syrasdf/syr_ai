# tts 智能语言

## 智能前端
- wellm
  AIGC api remote call
- tts 语音
  网易音乐
- 用户体验
  音乐不用自动播放，社死
  让用户决定要不要播放


## 如果不能做 DOM 编程， react 里面怎么播放音乐（组件化，）
- 原生的 JS DOM API 低效  document.querySelector 不用
- Audio 怎么用 React 播放？

## 路径
- 相对路径
  ./ 同义级别
 ../ 上级
 ./demo/ 走
 - 绝对路径
   物理路径 C:/
   网站根路径 / index.html
- http://localhost:5173/sounds/snare.wav
 - npm run dev 本地开发环境  5173 端口
 - 本地开发环境 http://127.0.0.1:5173
 端口背后对应的是不同服务
 - index.html 首页
 - public 静态资源的
   约定所有的资源可以直接访问
## react 的事件机制
  - 不可以用addEventListener DOM Event 事件
  - onClick react的事件，和 html 原生支持的事件有点像

## 小红书的even 事件机制 ———— JavaScript 高级程序设计 1000+
***
- JS 多种事件机制
  - DOM0 级事件
    onclick  html 属性 缺点是耦合了。  不推荐
  - DOM2 级事件
    addEventListener  html 和 JS 事件上分离
  - react 
    采用了 DOM 0的方式，有利于组件 html 的表达  好读
    API 层面上看过去是这样，其实底层还有天地 

## useRef
- 可以帮助我们在 react 中拿到 DOM 对象
  - useRef(null) 空对象
  - current 属性 null
  - jsx ref = {ref}  DOM 绑定
  - ref.current 拿到 DOM 对象




 启动一个服务器
 渲染js
 挂载APP
