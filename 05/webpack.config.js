const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  devServer:{
    //本地服务路径
    contentBase:"./dist",
    //实时刷新
    inline:true
  },
  module: {
    rules: [
      { test:/\.css$/, use: ['style-loader', 'css-loader'] },
      { test:/\.(jpg|png|jpeg)$/, use: 'file-loader' }
    ]
  }
};