# 缓存
## URL 输入到页面显示
- 知识体系
- 多进程和多线程架构是前提
- 输入网址并解析
      非结构字符串，搜索关键字
      有结构的字符串
      协议：//域名:端口/path/：params?qs#hash
      http（s）
      web 80 nginx proxy 3000
      443 https

- 浏览器解析协议、主机、端口、路径等，并**构造**一个HTTP请求
     - 发送请求前，根据请求头的expires 和 cache-control 判断是否命中强缓存策略
        https://www.baidu.com/index.jsx + 请求头
        缓存文件 + 请求头在一起（文件的属性一样）

     -  强缓存
            Expires 过期时间，在过期时间范围内，不用请求，缺点是用户时间不准 http 1.0
            响应头cache-control + 文件本地缓存，在过期时间范围内，不用请求，
            直接用本地缓存内容。
     -  协商缓存
            强缓存没有命中，这个资源在
   
      Cookie
      url 背后的 请求行、请求头、请求体 
      同一主机的不同端口 对应的是不同的程序和服务
      dns -> ip 地址 80->http 443 https 3306 mysql redis

      - 补全url 提升用户体验
      比如输入的是baidu.com 补全成为 https://www.baidu.com
      - 输入http://www.baidu.com呢 不安全
          307 跳转 Temporary Redirect
          Location:https://www.baidu.com
          再请求一次
          301 永久跳转   302 临时跳转
          308 永久重定向 Permanent Redirect 307 临时重定向
          301/302 只支持GET，哪怕你的请求不是GET，也会改成GET