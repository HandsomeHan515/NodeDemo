const fs = require('fs');

module.exports = {
  readfile: (path, recall) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        recall(data);
      }
    });
  },
  readImg: (path, res) => {
    fs.readFile(path, 'binary', (err, file) => {
      if (err) {
        console.log(err);
        return
      } else {
        res.write(file, 'binary');
        res.end('');
      }
    })
  }
}