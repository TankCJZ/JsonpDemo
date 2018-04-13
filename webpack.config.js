const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: "./src/main.js", //已多次提及的唯一入口文件
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "build.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                include: [
                    path.resolve(__dirname, "/src")
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/test.html" //new 一个这个插件的实例，并传入相关的参数
        }),
    ]
};