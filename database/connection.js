const mongoose = require('mongoose');
// 我查遍了各种文档也不知道这一行到底是干吗用的-_-||，但是反正不加就报错 --mongoose v5.7
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://rootdev:123456@localhost/rootdic', { useNewUrlParser: true });
const db = mongoose.connection; // 我得赶紧租个服务器，这ip地址三天两头的变谁受得了啊
// 连接异常
db.on('error', (err) => {
  console.error(err);
});
// 连接成功
db.on('connected', () => {
  // we're connected! 草草草草草！！！！真不容易啊
  console.log('MongoDB connected successful!.');
});
// 连接断开
db.on('disconnected', () => {
  console.log('MongoDB connected disconnected.');
});
// 导出mongoose对象
module.exports = mongoose;
