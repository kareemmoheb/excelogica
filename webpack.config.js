var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './src/js/index.js'
    },
    output: {
        path: path.resolve(__dirname , './dist'),
        filename: 'js/bundle.js',
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
            filename: 'css/bundle.css'
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