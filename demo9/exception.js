module.exports = {
  expfun: flag => {
    if (!flag) {
      throw '我是例外';
    }
    return 'success';
  }
}