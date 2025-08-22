const {merge} = require('webpack-merge');
const common = require('./wepack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        watchFiles: './src/index.html',
    },
    devtool: 'eval-source-map',
})