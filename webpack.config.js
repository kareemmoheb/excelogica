const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.html',
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
    ],
    module: {
        rules:[
            {
                test: /\.html$/,
                use: ['html-loader']
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
                    'img-loader'  
                ],

 
            },
        ]
    }
}