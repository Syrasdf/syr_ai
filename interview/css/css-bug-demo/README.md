# css 模块化
- Button AnotherButton 按钮组件
  自己写的组件
  别人写的组件
  第三方组件
  冲突
- 唯一的类名
  取名  烦
  css 模块化能力
  不会影响外界
  不受外界影响
- style.module.css 模块化
  - react vite
    确保唯一哈希值加到原类名上

  - vue scoped
  - 面试官：这看上去没什么规律，可读性受影响不？
    - 读的是源码.button
    - 被模块化保护起来了
    - npm run build 
- dev/build/test/product
  开发的时候在dev 代码的可读性
  vite，react.jsx
  style.module.css
  import styles from './style.module.css';
  styles js 对象  CSS每一个类名都可以面向对象访问绑定

  npm run build
  npm run test 测试一下
  aliyun ngnix 跑起来 dist/ 