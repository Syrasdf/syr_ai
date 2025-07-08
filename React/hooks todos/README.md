## hooks todos

- 安排一个CSS亮点  HTMl5 模块化
  - stylus
    css 超集
  - 拥有 vite 脚手架
    stylus 预编译  安装 stylus vite 直接编译
    vite 来自 vue 社区
  - react 组件设计
    - 开发的任务单元
    - 设计组件
      界面功能 状态 响应式 
      - 新建 todo  表单
      - 修改 列表
      - 删除   
    - 按功能划分 粒度
      - form  表单
      - list  列表
        - item  列表项  利于维护和**性能**

- 字体
  - 设置多个，设备的支持（包含）
  - 苹果设备 -apple-system  前端负责用户体验，字体也是体验的一部分
  - 微软设备  sans-serif  
   font-family -apple-system , Arial , sans-serif 
  - rem
    - 相对单位
    - 移动端的重要单位 px 不要用  像素是绝对单位
      移动端 宽高不定的 rem（html font-size） vw/vh（viewport）, em 相对单位 
      使用相对单位 可以在所以设备适配
      em 相对自身的font-size等比例
            







     npm init vite
     为这个取名
     选取React
     JS
  cd "hooks todos"
  npm install
  npm run dev
  执行之后看到
  npm install -D stylus