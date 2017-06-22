const http = require('http');
const hostname = '127.0.0.1';
const port = '8000';
const User = require('./user.js');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const user1 = new User();
  user1.name = 'handsomehan';
  user1.age = 23;
  user1.sex = '男';
  user1.skill();
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}`);
});