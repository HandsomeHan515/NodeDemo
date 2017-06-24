const http = require('http');
const file = require('./file');
const hostname = '127.0.0.1';
const port = '8000';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/jpeg');
  if (req.url !== '/favicon.ico') {
    console.log('开始访问');
    file.readImg('./9.jpg', res);
    console.log('继续执行');
  }
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}`);
});