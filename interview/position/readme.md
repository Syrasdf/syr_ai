# position 

教科书的表达

- 五种属性值 准确，简洁
    - static 默认值，不定位。回到文档流。
         让之前定位的元素，回到文档流，取消定位。

    - relative 相对定位，相对于自己原来的位置进行定位。不脱离文档流。

    - absolute 绝对定位，相对于最近的非static父元素进行定位。
        如果没有，那么相当于body定位

    - fixed 固定定位，相对于浏览器窗口（视窗）进行定位。
    
    - sticky 粘性定位，是一种css定位方式，它让元素在滚动到特定阈值前表现的像相对定位，到达阈值后固定在视窗中，实现类似吸顶或吸附的效果

    - 注意：
        - 绝对定位和固定定位，都会使元素脱离文档流。


    之后可以列举一些相关的案例
- 业务场景
    - 结合relative + absolute 消息提醒，在右上角。
    - absolute + transform 水平垂直居中 模态框
    - fixed 回到顶部 聊天客服
    - sticky 粘连导航 不管页面多长，当导航超出阈值后，一直都在。例如2.html
        table 表头粘连，距离其最近的具有滚动机制的祖先容器的
        和IntersectionObserver 有点像

- 底层
     - 定位参照系
     absolute最近position ！==static 的父元素 || body
     absolute定位会往上找父元素，找到第一个"有定位属性"的父元素就停下，以它为准来定位。如果一路找到最顶层都没找到，那就以整个页面为准。
     fixed 视窗 ？ bug
     sticky 依赖滚动容器、
     - 独立图层渲染
     absolute？ + ？ 

- 适当使用transform: translate3d(0,0,0)GPU 硬件加速
    GPU 硬件加速，有利于 css 页面性能优化。
    但也不能乱用，过多的图层会增加内存和管理开销
    比如，登录弹窗，transform/opacity 动画
    
    will-change: 可以触发独立图层
- position:fixed 如果在 transform：translateZ(0)下面，会失效
    transform 会有一个新的包含块 fixed 不再相当于视口定位，而是相当于这个transform容器

- 每道题都有惊喜 刺激
    面试是当面展示自己，可以准备的

## position 回答技巧
先干净利落回答五种特性，再列举出应用场景，提底层原理，图层和fixed失效亮点。


引子
- 页面渲染过程
- IntersectionObserver
- 重绘重排