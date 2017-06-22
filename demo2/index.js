const http = require('http');
const fun2 = require('./function.js');
const hostname = '127.0.0.1';
const port = '3000';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  fun1(res);
  fun2(res);
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}`);
});

const fun1 = res => {
  res.write('Hello, I am function.\n');
}
