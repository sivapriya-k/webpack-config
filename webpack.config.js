var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[hash].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};