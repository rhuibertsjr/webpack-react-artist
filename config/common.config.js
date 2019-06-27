/* eslint-disable */

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, "../src", "index.js"),
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: "/"
    },
    devServer: {
        port: 8080,
        historyApiFallback: true,
        overlay: true,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: [{ 
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }]
            },
            {
                test: /.*\.(gif|png|jpe?g|svg|ico)$/i,
                exclude: /gltf/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[name].[ext]',
                        }
                    },
                ]
            },
            {
                test: /\.(gltf)$/,
                use: [
                  {
                    loader: "gltf-webpack-loader"
                  }
                ]
            },
            {
                test: /gltf.*\.(bin|png|jpe?g|gif)$/,
                loader: 'file-loader',
                options: {
                  name: 'assets/[name].[hash:7].[ext]'
                }
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, '../public', 'index.html'),
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
}