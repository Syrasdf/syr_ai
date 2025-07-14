# 路由

history
hash

- 传统页面开发
  重要的用户体验缺失
  - 需要拿到后端拿到新的HTML，重新渲染
      白屏
  - a 链接切换页面
  - 相比于react-router-dom 局部热更新
  前端路由去负责

- 新的react-router-dom SPA 单页应用

## SPA 
- Single Page Application
- 只有一个页面
  - react 组件
    页面级别组件
  - Routes/Route 声明，在文档流中占位
  - Routes外面，Outlet外面 不用更新的  例如二级路由
  - url 
  - Route内部显示哪个页面组件
    热更新
  - 用一个页面完成了多个页面的显示
  - SPA 用户体验很好

## 核心
  - url 切换
      不能用a
      Link
      不去重新发送请求
      事件，js 动态加载
  - 事件 hashChange / pushState
  - 根据当前的url，取对应的组件
      替换之前的页面级别组件
  - 体验是
      URL改变了，竟然不用刷新整个页面
  - 用户不再看白屏，大大提升了用户体验
      页面很快
      About 
      Home 全是前端组件

## url 改变，但不重新渲染的解决方案
- hsah 的改变  很早就有
    原来是用来页面锚点的，长页面的电梯
    不会刷新页面
    #/
    #/about
- 事件
    hasgchange
    





