# 性能优化

## 重绘重排

- 重绘
     当元素的样式发生改变但不影响布局时，浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。如改变颜色、背景。
- 重排
     当元素的几何属性发生改变，如改变元素的位置、大小、显示或隐藏等，浏览器需要重新计算元素的位置和大小，这个过程称为重排。如改变宽高、隐藏元素、添加或删除元素等。

 重排一定会触发重绘，重绘不一定会触发重排。

### DEMO
```js
// 不对 多次操作可能会触发多次重绘重排
// 虽然浏览器会合并修改
const el = document.getElementById('el')
el.style.width = '100px' // 重绘
el.style.height = '100px' // 重排
el.style.display = '10px' // 重排
// good
el.style.cssText = 'width: 100px; height: 100px; display: 10px;' // 合并
el.clasName = 'my-class' // 用户类名而不是一堆js代码
```

### 使用文档碎片
```
const fragment = document.createDocumentFragment()
for (let i=0; i<100; i++) {
    const el = document.createElement('div')
    fragment.appendChild(div); // 没有重绘重排
}
document.body.appendChild(fragment);
// 批量添加元素时，使用document.createDocumentFragment()创建一个文档碎片 
优化
```
## 脱离文档流进行操作 下线
```js
const el = document.getElementById('el')
el.style.position = 'absolute' // 脱离文档流
el.style.display = 'none' // 隐藏
... 进行大量DOM操作

el.style.display = 'block'; // 显示
el.style.position = 'static';
```

### 缓存布局信息
```js
// offsetTop 读取，但是每次都会触发重排以获得盒子的布局信息
for (let i=0; i<100; i++) {
    const el = document.createElement('div')
    el.style.top = el.offsetTop + 1 + 'px' // 缓存布局信息  
}

let top =  el.offsetTop // 缓存布局信息
for (let i=0; i<100; i++) {
   top++;
   el.style.top = top + 'px' // 缓存布局信息
}
```

### 使用transform 代替位置调整
```js
el.style.left = '100px' // 重排
// 只触发重绘，性能更好。
```

## 资源加载优化
   - 图片懒加载
   - 路由懒加载
         代码文件上，code spliting 代码分割
   - 资源预加载
   未来可能会用到的资源
   <link rel="prefetch" href="/next-page.js">
   dns-prefetch dns预解析
   preload 当前页面必须资源，立即加载
   - script 资源的加载
       默认没有
       async 并发  脚本谁先下载谁先完成，不确定下载顺序
       defer  多个defer 按照在文档中出现的顺序执行
       module // 功能
   - webp 格式图片0
     图片的优化，显著的减少体积，并且保证图片质量
   - 图标字体库
   减少http请求数

## JS 执行优化
   - 防抖节流
   - web workers 处理复杂的计算
   - requestAnimationFrame 优化动画
   - requestIdleCallback 空闲时间执行 react fiber 机制

## 框架层优化
   - memo,useMemo,useCallback 减少不必要的渲染
   - shadcn-ui 按需加载组件库
   - 合理使用key 优化列表渲染

## 缓存策略
   -  强缓存和协商缓存
        Expires(客户端时间不准确)/Cache-Control 强缓存
        Last-Modified/If-Modified-Since 协商缓存 时间戳 304
        ETag if-none-match 协商缓存 哈希值
   - localStorage sessionStorage cookie 缓存数据
   
## 网络优化
   - CDN 加速
       静态服务器，分流，会缓存文件
       多路复用 多域名 服务器 img1.baudu.com img2.baidu.com 
   - Gzip 压缩
   - HTTP/2 多路复用
   - DNS 预解析

## 首屏优化 【大厂最关心的性能优化】 
   - SSR 
        组件渲染在服务器端就已经完成了、编译执行，浏览器端直接显示就好
   - 骨架屏
   - http 2.0 server push 首屏数据推送


## 性能测试
   - chrome 的performance
   可以看到各项性能指标，针对性能的优化，给出优化建议

   - 减少首屏JS/css 体积 （code spliting）
   代码分割（Code Splitting）是一种将代码库拆分成更小、更易管理的块的技术，
   以便按需加载或并行加载，从而优化应用的加载性能和执行效率。
   - 使用transform 代替位置调整，加载相关资源
   juejin js = (vue + vue-router)  + APP.vue + Home.vue + Components 
   vue + vue-router  单独拆分 缓存 基本是不会变的
   App.vue + home.vue + Components 业务代码 经常改 ，单独
   做一次升级 

- lighthouse 性能测试
   是chrome 的一款性能打分插件，会在 性能、无障碍、最佳实践、SEO、PWA 等方面给出建议，
   非常细致。
   - 图片大小优化 webp
   - 字体库


*性能的关键指标*
  - FCP First Constenful Paint
      首内容绘制（First Contentful Paint, FCP）是衡量网页加载性能的指标，
      表示浏览器首次渲染出页面内容（如文本、图片等）的时间。
  - LCP Largest Contentful Paint
      最大内容绘制（Largest Contentful Paint, LCP）是衡量网页加载性能的关键指标，
      表示页面中最大可见内容元素（如图片、视频或文本块）完全渲染完成的时间。