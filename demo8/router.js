const file = require('./file');

module.exports = {
  login: (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    const recall = data => {
      res.write(data);
      res.end();
    }
    file.readfile('./index.html', recall);
  },
  showimg: (req, res) => {
    res.setHeader('Content-Type', 'image/jpeg');
    file.readImg('./9.jpg', res);
  }
}