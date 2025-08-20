const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/application.js',
    output: {
        filename: 'main',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ],
    module: {
        rules: [
            {
                type: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
}