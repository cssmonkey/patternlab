
var webpackConfig = require('./webpack.config.test');

module.exports = function (config) {
    config.set({
        frameworks: ["mocha", "chai-jquery", "chai", "jquery-3.2.1"],
        files: [
            './spec/**/*.spec.js',
        ],
        preprocessors: {
            './spec/**/*.js': ['webpack', 'babel']
        },
        colors: true,
        reporters: ['mocha'],
        logLevel: config.LOG_INFO,
        autoWatch: true,
        jsonFixturesPreprocessor: {
            variableName: '__json__'
        },
        webpack: webpackConfig
    });
};