# tailwindcss 原子css
官网:https://tailwindcss.com/docs/installation/using-vite
- 非常好用
- 几乎不用写CSS
- AI 生成代码 css 用的都是 tailwindcss
- 配置流程
  - 安装 tailwindcss
      pnpm i tailwindcss @tailwindcss/vite
  - 有各种内置的CSS类名，分门别类
  - 1rem = 4 个单位

- 文字的行数限制 
    - webkit-line-clamp: 2;  2行 不能独自生效
    - webkit 浏览器内核
    - mozilla 火狐浏览器内核代号
    实验阶段的属性 新的
    display：-webkit-box
    -webkit-box-orient:vertical；
    overflow:hidden 超出部分截断