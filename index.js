// 配置环境变量
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { addRoot } = require('./database/assign');

const app = express();
// 之所以express的服务器可以和node的服务器套用，是因为他们的前两个参数内容相同

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json()); // 处理post方法传过来的流，否则只能读出undefined

app.post('/root/submit', (req, res) => { // 套个函数就能执行了，就是因为多了个作用域？
  addRoot(req, res);
});

app.get('/devpage', (req, res) => {
  console.log('someone log in devpage');
  res.sendFile(path.join(__dirname, 'dist', 'devPage.html'));
});
// 开始监听
app.listen(8080, () => {
  console.log('rootDic app listening on port 8080!');
});
