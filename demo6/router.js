const file = require('./file');

module.exports = {
  writefile: (req, res) => {
    const recall = data => {
      res.write(data);
      res.end('');//不写没有http请求协议尾
    }
    file.writefile('./file.txt', '写入文件', recall);
  }
}