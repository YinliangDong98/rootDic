const mongoose = require('./connection');
// Schema的功能主要是定义文档结构和属性类型,从某种意义上说Schema就是documents的原型对象
const root = new mongoose.Schema({
  name: [String],
  mean: String,
  detail: String,
  belong: [{
    name: String,
    mean: String,
  }],
});
const word = new mongoose.Schema({
  name: String,
  prop: String,
  mean: String,
  combine: String,
  detail: String,
  part: [{
    name: String,
    mean: String,
  }],
});
const unexist = new mongoose.Schema({
  query: String,
});
// Models 是从 Schema 编译来的构造函数。 它们的实例就代表着可以从数据库保存和读取的 documents。
// 从数据库创建和读取 document 的所有操作都是通过 model 进行的。
// 这就是一套面向对象的流程
module.exports.Rootmo = mongoose.model('rootmo', root);
module.exports.Wordmo = mongoose.model('wordmo', word);
module.exports.Unexistmo = mongoose.model('unexistmo', unexist);
// root.methods.loaded = function() {
//         console.log(this.name + "ID:" + this.rootId + " is saved successfully!");
// 注意了， method 是给 document 用的。方法被挂在原型对象上所以才能被继承。原型方法和静态方法不得使用箭头函数
//     }
