# 数据可视化

- echarts
    老板、客户，数据报表
    开源的用于绘制柱状图、饼状图等的可视化图表
- @types/echarts
    声明文件，定义了echarts的类型  单独的 
    为什么react 不需要单独安装类型声明文件？
    react 是用ts 写出来的
    echarts 原生js 和类型声明文件是分开的


- excharts 流程
    - 安装excharts ， @types/echarts
    npm i echarts @types/echarts -D
    - init 实例化
         要传给他一个图标的DOM 挂载点
         useRef<HTMLDivElement>(null)
         null | HTMLDivElement
         联合类型 useRef 可变对象
    - setOption（option） 配置项
        series 数据条目
        配置图表的类型，数据，样式

