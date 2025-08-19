# React Fiber 机制

- 组件比较多，组件树的深度比较深
     每个组件都需要经历JSX模板编译、VDOM的创建、响应式的生命、
     生命周期、挂载等。

     怎么办？核心问题是什么？
     react 组件渲染是同步代码，更加重要的没机会做
     打断一下，让浏览器响应用户更优先的先做一下

- fiber 机制是 React 16 版本引入的一种新的协调机制，它的目标是提高 React 应用的性能和响应速度。

  - 学习过什么 api 类似fiber
      可打断可持续
      requestIdleCallback  浏览器空闲的时候执行
      requestAnimationFrame  浏览器刷新的时候执行
      
- requestAnimationFrame  浏览器刷新的时候执行
  是浏览器提供的用于在下一次重绘之前执行动画代码的API，它能确保动画流畅运行并节省资源。
  1s 执行 60次

- requestIdleCallback  浏览器空闲的时候执行
  是浏览器提供的用于在浏览器空闲时执行任务的API，它能确保在浏览器空闲时执行任务，从而提高应用的响应速度和用户体验。
  - React 组件渲染低优先级任务
      不能往死里干，需要被中断
  - 更高优先级的任务是用户的交互

  - 将我们的 React 组件树渲染任务拆分
      在一个时间切片里能执行
      在一个时间长度用requestIdleCallback  去执行


## 总结  
- 当再次idle 后。继续执行渲染任务
- 使用requestIdleCallback 时间不定，16.67ms (刷帧)
- 优先任务的耗时


