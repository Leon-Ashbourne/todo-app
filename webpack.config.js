const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: "./src/application.js",
    mode: "development",
    devServer: {
        watchFiles: "./src/index.html",
    },
    devtool: "eval-source-map",

    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,    
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ]
    }
}