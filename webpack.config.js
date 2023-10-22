const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
   entry: {
      app: "./src/assets/js/index.js",
   },
   output: {
      clean: true,
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, 'dist')
   },
   mode: 'development',
   devServer: {
      static: "./src",
      compress: true,
      port: 9000,
      open: true,
      hot: true
   },
   module: {
      rules: [
         {
            test: /\.(s[ac]ss|css)/i,
            use: ["style-loader", "css-loader", "sass-loader"]
         },
         {
            test: /\.(jpe?g|png|webp|gif|svg)$/i,
            type: 'asset/resource',
           },
      ]
   },
  plugins: [
   new HtmlWebpackPlugin({
      title: "God of War",
      template: "src/index.html"
   }),
  ],
};