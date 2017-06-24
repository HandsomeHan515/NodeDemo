const http = require('http');
const url = require('url');
const router = require('./router');
const exception = require('./exception');
const hostname = '127.0.0.1';
const port = '8000';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  if (req.url !== '/favicon.ico') {
    let pathname = url.parse(req.url).pathname;
    pathname = pathname.replace(/\//, '');//替换掉前面的/
    try {
      router[pathname](req, res);
      data = exception.expfun(0);
      res.write(data);
      res.end('');
    } catch (err) {
      console.log('路由错误', err);
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.write(err.toString());
      res.end();
    }
    console.log('server执行完毕');
  }
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}`);
});