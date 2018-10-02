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
                test: /\.(jsx|js)$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jp(e*)g|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '/img/[name].[ext]'
                    }
                }]
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1048576, // Convert images < 1MB to base64 strings
                        name: '/img/[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};