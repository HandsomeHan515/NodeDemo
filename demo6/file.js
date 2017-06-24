const fs = require('fs');
module.exports = {
  writefile: (path, data) => {
    fs.writeFile(path, data, err => {
      if (err) {
        throw err;
      }
      console.log('It is saved.');
    })
  },
  writefileSync: (path, data) => {
    fs.writeFileSync(paty, data);
    console.log('同步写文件完成');
  }
}