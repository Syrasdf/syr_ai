const http = require('http')

const server = http.createServer((req,res) => {
  // 允许跨域
  res.setHeader('Access-Control-Allow-Origin','http://127.0.0.0:57521')// 允许所有域名访问
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS')// 允许的请求方法

  // 预检请求
  if(req.method === 'OPTIONS'){
      res.writeHead(200);// 同意
      res.end();
      return;
  }
  
  
  if(req.url === '/api/test'){
    res.writeHead(200,{
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*'
    })
    res.end(JSON.stringify({
      message:'跨域成功！！！'
    }))
  }
})



server.listen(8080,() => {
  console.log('server is running on port 8080')
})