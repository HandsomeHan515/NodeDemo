function User(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.skill = function () {
    console.log(this.name + '是程序员！！！');
  }
}

module.exports = User;