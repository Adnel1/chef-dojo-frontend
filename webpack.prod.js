const path = require('path'); // Import the path module
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    }
});
