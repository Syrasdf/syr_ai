- 闭包有哪些应用场景
  - 记忆函数
  - 柯理化函数
  - 函数防抖
  - 函数节流
  - 异步函数
  - 数据缓存
  - 私有变量
  - 偏函数

- 类的封装
  -  函数里面返回的对象
  -  对象里面还有方法（public）、属性（pubilc）
  -  其他函数，变量  private 
  -  其他的函数、变量 在返回对象不可直接访问，
  但在内部可直接访问
    
- 防抖 debounce
  某段时间内只执行一次，其他都会被干掉

- 节流 throttle
  在每个单位时间之内执行一次
  onscroll  减少执行次数，一段时间间隔内一定执行一次
  没有必要Scroll频率去触发，重绘重排触发太多次，页面卡顿

- 类是对象的模板
  - 封装了属性和方法
    - 对内 private 隐私  隐藏业务的复杂性
    - 对外 public 公开的 API 完成工作
  - 抽象的概念
  - new  实例化  一批的对象

## 闭包
  - 防抖 debounce
    一段时间内只执行一次，其他都会被干掉 （高阶函数）
    频繁触发事件 > delay  要停下来，最后一次

  - 节流
    每隔单位时间内一定执行一次
    技能？FPS
    scroll
  - 绑定上下文
    3种
    - 箭头函数
    - bind
    - that = this
  - 事件监听器
  - 记忆函数
  - 柯里化
  - 立即执行函数

     
    








