var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './index.js'
    },
    output: {
        path: path.resolve(__dirname , './dist'),
        filename: 'js/bundle.[hash].js'
    },
    devServer: {
        contentBase: 'dist',
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),
        new ExtractTextPlugin({
            filename: 'css/bundle.[chunkhash].css',disable: false,allChunks: true   
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'fn': 'jquery'
        }),
    ],
    module: {
        rules:[
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(s*)css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [ 'css-loader', 'sass-loader'],
                })
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/,
                loaders: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: 'img/'
                        }, 
                    },
                ],
            },
        ]
    }
}