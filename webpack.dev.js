const {merge} = require('webpack-merge');
const common = require('./wepack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        watchFiles: ['./src/index.html', './src/form.html', 'projectForm.html'],
    },
    devtool: 'eval-source-map',
})