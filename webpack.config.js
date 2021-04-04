const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './main.tsx',
  output: {
      // 找到相对路径，产生一个dist 文件夹，产生一个bundle，js文件
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [    "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript",]
          }
        }
      },{
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
    ]},
     {  // 关于sass 的设置，
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
      
            "css-loader",
            // Translates CSS into CommonJS
            "postcss-loader",  // css-loader  改成 postcss-loader  可以自动加上-webkit 增加兼容性
            // Compiles Sass to CSS
            "sass-loader"
          ],

    },
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
]},
resolve: {
  extensions: ['.tsx', '.ts', '.js'],
},
plugins:[
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html'),
    }),
    new CleanWebpackPlugin(),  // 自动清理改变budle 文件后，多余出来的老文件
  ]
}
