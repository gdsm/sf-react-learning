const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFilenameHelpers } = require('webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        port:8081
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
        }]
    },
    resolve: {
        extensions: ['.jsx', '.ts', '.js'],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'MFE1',
            filename: 'bundle.js',
            remotes: {
              MFE2:
                'MFE2@http://localhost:8082/bundle.js',
            },
        })
    ]
}
