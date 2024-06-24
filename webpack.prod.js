const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'production',
    output: {
        publicPath: '/'
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'BACKEND_URL': JSON.stringify(process.env.BACKEND_URL || 'https://chef-dojo-backend-b16a71e8fca3.herokuapp.com')
            }
        })
    ]
});
