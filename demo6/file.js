const fs = require('fs');
module.exports = {
  writefile: (path, data, recall) => {
    fs.writeFile(path, data, err => {
      if (err) {
        throw err;
      }
      console.log('It is saved.');
      recall('写文件成功！');
    })
  },
  writefileSync: (path, data) => {
    fs.writeFileSync(paty, data);
    console.log('同步写文件完成');
  }
}