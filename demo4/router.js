module.exports = {
  login: (req, res) => {
    res.write('我是Login方法。');
  },
  register: (req, res) => {
    res.write('我是Register方法。');
  }
}