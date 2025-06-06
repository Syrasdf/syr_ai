// 这里可以添加 JavaScript 代码
// console.log('JS 已启动');
//js 主动的去拉去取http接口
// web 1.0 时代 html/css/js  服务器端 JAVA 返回的 JS 只做简单的交互
// web 2.0 时代  前端 后端  前后端分离 
// console.log('WebLLM 项目已启动');
// js 主动的去拉取http 接口
// web 1.0 时代 html/css/js  服务器端java 返回的 js 只做简单的交互
// web 2.0 时代 js 主动的请求后端服务器  动态页面 
// fetch('https://api.github.com/users/shunwuyu/repos')
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//     document.querySelector('#reply').innerHTML += data.map(repo =>`
//     <ul>
//       <li>${repo.name}</li>
//     </ul> 
//     `).join('')
//   })


// 当 LLM API 服务
// chat 方式 AIGC 生成/完成 返回的内容
// 由 OPENAI 制定的

// 命名
// web LLM  web 底层是 http 协议
// llm api 服务
// api.deepseek.com 二级域名 LLM 服务以 api 的方式提供
// https 加密的 http 更安全
// chat 聊天的方式 messages

// 请求行
const Deepseek_url = "https://api.deepseek.com/chat/completions"
// 请求头
const headers = {
  // 内容类型
  'Content-Type': 'application/json',
  // 授权
  Authorization: `Bearer sk-5f63cdfd04444be49993b8775a74c34c`
}
//请求体
const payload = {
  model:'deepseek-chat',
  messages:[
      // chat 三种方式
      // 1. system 系统角色 只会出现一次 设置系统角色 开始绘画时
      // 2. user 用户角色
      // 3. assistant 助手角色
      { role:'system',content:'You are a helpful assistant.'},
      { role:'user',content:'对于用AI Codeing创建一个东西 你有什么好的想法'}
  ]
}

fetch(endpoint, {
  method: 'POST',
  headers: headers,

  // http 请求传输只能是字符串 二进制流
  body: JSON.stringify(payload) // 对象 转换成 字符串（传二进制流）
  // 请求 + LLM 生成需要花时间 
  // http 请求是一个简单协议
  // 返回的也是文本或二进制流
}).then(res => res.json())
  // 解析返回的 JSON 数据 也要花时间
  .then(data => {
    console.log(data);
    document.querySelector('#reply').innerHTML 
    += data.choices[0].message.content
  })












