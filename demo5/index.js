const http = require('http');
const url = require('url');
const router = require('./router');
// const file = require('./file');
const hostname = '127.0.0.1';
const port = '8000';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  // file.readfileSync('./index.html');//同步读取
  if (req.url !== '/favicon.ico') {
    // const recall = data => {
    //   res.write(data);
    //   res.end('Hello World\n');
    // }
    // file.readfile('./index.html', recall);
    // console.log('主程序执行完毕');

    let pathname = url.parse(req.url).pathname;
    pathname = pathname.replace(/\//, '');//替换掉前面的/
    router[pathname](req, res);
  }
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}`);
});