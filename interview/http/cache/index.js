const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
        if (url === '/') {
        // index.html
        // async 异步 sync 同步
        // fs.readFileSync('./index.html', 'utf-8', (err, data) => {
            
        // });
        // 性能差点
        }
        if (request.url === '/script.js') {
            const script = fs.readFileSync('./script.js', 'utf-8');
            res.writeHead(200, {
                'Content-Type': 'text/javascript',
                'Cache-Control': 'max-age=20,public'
            });
            res.end(script);
        }
        const html = fs.readFileSync('./index.html', 'utf-8');
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(html);
        
    
})
.listen(8888)