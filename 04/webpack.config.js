const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  devServer:{
	//本地服务路径
  	contentBase:"./public",
  	//实时刷新
  	inline:true
  }
};