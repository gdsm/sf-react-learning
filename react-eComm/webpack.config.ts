const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const distFolder = 'loginAppDist';
const bundleName = 'loginAppBundle.js';

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    devtool: 'inline-source-map',
    // output: {
    //     path: path.join(__dirname, distFolder),
    //     filename: bundleName
    // },
    devServer: {
        static: './' + distFolder,
        port: 8080
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }, {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }, {
            test: /\.ts?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }]
    },
    resolve: {
        extensions: ['.jsx', '.ts', '.tsx', '.js'],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'LoginApp',
            
            filename: bundleName,
            exposes: {
                './AccessManagementRoot':'./src/AccessManagementPages/AccessManagementRoot',
            }
        })
    ]
}