# 工程化

- 哪些问题？工程一揽子方案
    - web server 5173 端口 http 模块？ express 框架
        index.html 首页
    - tsx  -> jsx -> babel -> js
    - styl -> css 文件 
    ......
    基础，后方工作

- 怎样向面试官介绍vite
      - 兼容性问题
          IE 11一下 不支持
      <script type="module" src="/src/main.jsx"></script>
      VITE是一个基于原生ES模块（import 解析，，浏览器还不支持模块化esm）
      通过按需编译实现急速冷启动（快）与 热更新的新一代前端构建工具。

      - 为什么快？
          - 基于原生JS模块，不需要打包所有文件，按需加载
          - 热更新，只更新变化的文件，不需要重新编译所有文件

      main.jsx 入口文件,模块的依赖
      main.jsx -> App.jsx ->App.css + react + api + store
      整理这些模块之间的依赖关系的链条 

- webpack 
    由于要支持老旧浏览器，不使用esm
    a->b->c->d
    不用模块化
    d 编译js最上面
    c 编译 放到d下面
    b 编译 放到c下面
    a 编译 放到b下面
    一起打个包，成为一个文件
    webpack

## webpack 和 vite 的区别
- index.html 没有type=“module”，怕浏览器不支持esm，需要打包
    整理依赖关系，打包文件，慢
- 适合大型项目，丰富的配置
    - 配置 entry ，output 这是核心
    - plugins
        html-webpack-plugin html template 在哪？
    - devServer
        http server 细节
    web bundle 一切静态资源皆可打包
    vite 快 ，不需要打包，但是兼容性，生态、定制性不如webpack
    webpack 打包 慢一点 但是兼容性好，生态好，定制性好
    大型项目

  