const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/main.js'
  },
  devServer:{
    //本地服务路径
    contentBase:"./dist",
    //实时刷新
    inline:true
  },
  module: {
    rules: [
      { 
        test:/\.css$/,
        use: ['style-loader', 'css-loader'] 
      },
      { 
        test:/\.(jpg|png|jpeg)$/,
        use: 'file-loader?name=./img/[name].[ext]' 
      },
      { 
        test:/\.html$/,
        use: 'html-withimg-loader' 
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        //去除引号
        removeAttributeQuotes: true,
        //去除注释
        removeComments: true,
        //去除空属性
        removeEmptyAttributes: true,
        //去除空格
        collapseWhitespace:true
      }
    })
  ]
};