const file = require('./file');

module.exports = {
  login: (req, res) => {
    const recall = data => {
      res.write(data);
      res.end('Hello World\n');
    }
    file.readfile('./index.html', recall);
  },
  register: (req, res) => {
    const recall = data => {
      res.write(data);
      res.end('Hello World\n');
    }
    file.readfile('./register.html', recall);
  }
}