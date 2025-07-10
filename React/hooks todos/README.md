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
            
- props 组件通信
  - 传递状态
  - 传递自定义事件
  - 直接解构
    const {
      todos, // 任务
      onAddTodo // 添加
    } = props 单独解构 

- 数据绑定
  - 变量 修改值
  - 数据状态
    - Data binding **数据**绑定  jsx 就是静态的
    {} 数据绑定
    - 界面和状态的统一
      - 界面由数据驱动的
      - 数据和界面状态的一致性
    - 响应式的 



- vue 和 react 区别
  - vue 好入门，api 好用
  - react 倾向于原生 JS  入门难
    - hooks？
  - <input v-model="text" /> vue 双向绑定
      <input value={text} onChange={e => setText(e.target.value)} />  必考题
      react 单向绑定
      受控组件
      非受控组件
      数据和界面的状态的统一
      数据响应式
  - 











     npm init vite
     为这个取名
     选取React
     JS
  cd "hooks todos"
  npm install
  npm run dev
  执行之后看到
  npm install -D stylus