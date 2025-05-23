# CSS animation


- html
  div（我们如何画出眉毛，嘴巴小酒窝）
    
- css
  ? 在一起？
  border-radius
  animation 世界

- html的快捷输入方式
  div#l-ball.ball  Tab自动补全
  emmet 语法 css选择器
- id 类似于索引的东西， 唯一的
- class 类名  
- container 盒子
  盒子————实现页面居中
  水平垂直居中
- .container>#l-ball.ball+#r-ball.ball
  ">" 子元素选择器
  "+" 兄弟选择器

- display 属性
  div block
  span,i a inline
  display 切换行内块级的格式化上下文能力
  inline-block 行内块级 设置宽高 在一行
  inline 行内 不可以设置宽高
  block 块级 独占一行
  
- 面向对象的css
  多态
  利于复用 多类名
- position 定位  ！！！！！
  static 没有定位功能
  relative 相对定位
   - 子元素相对它定位
   - 相对于自身的位置定位
  absolute 绝对定位
  - absolute 找到最近（管着它）的 position 不为 static 的元素定位

  absolute 找到最近的 position 不为 static 的属性定位
  直到body 为止
  .container absolute body
  
  
  
  还有没有更快点？
  .container>#l-ball.ball+#r-ball.ball 
  选择器

- 大厂考题————怎么让这个元素居中