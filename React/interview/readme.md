# react 面试基础考点

- JSX map key ? 唯一值
  - todos 响应式状态改变了，界面更新
    - map 返回新数组， 重新渲染
      - 热更新
      - 只有第一个改变了，只热更新第一项
      - 旧状态  新状态  在内存之中
      - 对比差值  让界面更新
      - 性能
        - 重绘重排
      - 默认基于索引的比较 
      - 为什么不能用index作为key
         数组item顺序发生改变，索引发生改变的适合时候，浪费更新
         数组的开始插入新元素
          所以我们用id 唯一值

