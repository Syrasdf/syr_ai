# Deepseek
- 大模型在哪？
  远程
  http api 请求
- LLM 服务
  api 一样
  fetch 赋予了 JS 新生命

## WEBLLM
智能前端的战场
- 如何把 Deepseek 引入前端？

## 运行项目
直接在浏览器中打开 index.html 即可

## 服务器返回
- 输入url或者点击一个链接(死板)
- 向服务器端发送请求
- node/Java 请求，去数据库取数据，生成HTML字符串
- 返回 HTML 字符串

## fetch 请求
- 滚动到底部后，加载更多数据 web2.0 富应用体验
  看到新的内容 
- fetch url
  - 不需要刷新页面，主动去服务器端取一次，DOM 更新页面
- 点赞的时候？
  JS fetch api like

- LLM AI 时代
  fetch 取来大模型的能力

## http 请求
  - 请求行  GET http://www.baidu.com
  POST https://api.deepseek.com/chat/completions
  - 请求头
    设置各种头部信息
    {
      Content-Type: application/json 
      Authorization: `Bearer sk-5f63cdfd04444be49993b8775a74c34c` 请求凭证
    } 
  - 请求体
    GET 没有请求体
    POST 可以有请求体