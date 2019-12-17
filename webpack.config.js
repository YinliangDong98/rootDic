const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
// 3.0.0版本需要进行解构
module.exports = {
  entry: {
    // 入口文件
    devpage: './devpage/index.jsx',
    querypage: './querypage/index.jsx',
  },
  output: {
    // 打包后的结果文件
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development', // 开发或生产模式
  resolve: {
    // 添加.jsx扩展名，在import时就可以解析jsx模块
    extensions: ['.wasm', '.mjs', '.js', '.jsx', '.json'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  // loader 就是负责将各种资源转换为js文件，提高效率
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // 将Babel引入webpack，在打包之前将jsx编译成html
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [],
          },
        },
      },
      // {
      //   // 将ESlint引入webpack在编译前先检查react语法
      //   enforce: "pre",
      //   test: /\.jsx$/,
      //   exclude: /node_modules/,
      //   loader: "eslint-loader",
      //   options: {
      //     // eslint options (if necessary)
      //   }
      // }
    ],
  },
  // 插件能力更灵活
  plugins: [
    // 这个用来清理旧的index.js和bundle.js文件，目前的版本不需要传参数，否则会报错
    new CleanWebpackPlugin(),
    // 这个是负责动态规划依赖路径,他会用一个新的HTML文件替换原有的
    new HtmlWebpackPlugin({
      title: 'Rootdictionary',
      filename: 'rootDic.html',
      template: 'querypage/template.html',
      hash: true,
      chunks: ['querypage', 'commons'],
    }),
    new HtmlWebpackPlugin({
      title: 'devPage',
      filename: 'devPage.html',
      template: 'devpage/template.html',
      hash: true,
      chunks: ['devpage', 'commons'], // 表明了引入的js文件名。终于把打包给搞完了，居然搞了一下午
    }),
    new webpack.NamedModulesPlugin(), // 这两个插件都是为热模块替换服务的
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    // 这个选项用来提取公有依赖，提高效率
    splitChunks: {
      chunks: 'all',
      minSize: 30,
      name: 'commons',
    },
  },
  // 这个工具用来在打包后追踪错误代码到底在哪个源文件里
  devtool: 'inline-source-map',
  devServer: {
    // 最后还是不得不用这个开发服务器
    hot: true, // 在配置文件中打开热模块替换
    contentBase: path.resolve(__dirname, 'dist'), // 本地服务器所加载的页面所在的目录——以此作为客户端根目录
    progress: true,
    inline: true,
    publicPath: '/dist/',
  },
};
// npx webpack --config webpack.config.js
// npm run watch 观察模式下进行打包
// 默认使用此文件，不过也可以如上进行配置
