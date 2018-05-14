
var webpack = require('webpack'),
path = require('path'),
config = require('./patternlab-config.json'),
srcPath = path.resolve(__dirname + '/source/js');

module.exports = {
    context: srcPath,
    mode: 'development',
    watch: false,
    entry: {
        site: srcPath + '/dev/site.js'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['env']
                }
              },
            },
        ],
    }
};
