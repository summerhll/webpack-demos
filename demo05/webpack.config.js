const path = require("path");

/**
 * 参考文章：
 * 
 * 如果不加载对应的css loader来解析css文件的话，则打包会报错
 * https://blog.csdn.net/TyrionJ/article/details/79288287

 1.css-loader: 加载.css文件

 2.style-loader:配合css-loader使用，将css-loader加载的文件，以<style></style>的方式插入到页面中。
 选项transform：根据给定逻辑在css插入html前选择指定样式，非响应式。

 3.style-loader/url：与file-loader配合使用， 以link标签形式向html页面中插入css代码

 4.style-loader/useable： 与css-loader配合使用，提供use()或者unuse()来加载/卸载css文件

 */
module.exports = {
  mode: "development",
  entry: {
    app: "./src/app.js"
  },
  output: {
    publicPath: __dirname + "/dist/",
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 方式一：css处理为style标签
        use: [
          {
            loader: "style-loader",
            options: {
              singleton: true,
              transform: "./css.transform.js"
            }
          },
          {
            loader: "css-loader",
            options: {
              minimize: true //开启css文件代码压缩
            }
          }
        ]
        // 方式二：css处理为link标签
        // use: [
        //   {
        //     loader: "style-loader/url"
        //   },
        //   {
        //     loader: "file-loader"
        //   }
        // ]
        //  方式三：css卸载和加载样式(use与unuse方法)
        // use: [
        //   {
        //     loader: "style-loader/useable"
        //   },
        //   {
        //     loader: "css-loader"
        //   }
        // ]
      }
    ]
  }
};
