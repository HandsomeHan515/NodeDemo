const http = require('http');
const url = require('url');
const router = require('./router');
const hostname = '127.0.0.1';
const port = '8000';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  if (req.url !== '/favicon.ico') {
    let pathname = url.parse(req.url).pathname;
    pathname = pathname.replace(/\//, '');//替换掉前面的/
    router[pathname](req, res);
  }
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}`);
});