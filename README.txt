DB���û��˺���
1625367890@qq.com
www1998329
sandbox's name rootDic
User
rootDic-dev
www1998329

mongodb+srv://rootDic-dev:www1998329@rootdic-atyvj.azure.mongodb.net/test?retryWrites=true&w=majority

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://rootDic-dev:www1998329@rootdic-atyvj.azure.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

在这个项目中我要全面的使用前端的各种技术，为微信商城搭一个框架
webpack用来管理模块和进行编译，方便浏览器运行，还有其他的一些功能
npm install webpack webpack-cli（命令行工具） --save-dev
不过这玩意真是大
合着到最后我自己搭了一个CreateReactApp?我傻了，我现在也不考虑这么多了，只要我自己能用就行
babel加载了es5和react的编译模块

const presets = [
  [
    '@babel/env',
    {
      targets: {
        edge: '17',
        firefox: '60',
        chrome: '67',
        safari: '11.1',
      },
      useBuiltIns: 'usage',
    },
  ],
  '@babel/preset-react',
];

module.exports = { presets };