const fs = require('fs');

module.exports = {
  readImg: (path, res) => {
    fs.readFile(path, 'binary', (err, file) => {
      if (err) {
        console.log(err);
        return
      } else {
        console.log('输出文件');
        res.write(file, 'binary');
        res.end('');
      }
    })
  }
}