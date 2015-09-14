module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'www/js/libs.min.js',
            'www/js/templates.min.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'www/js/application.min.js',
            'js/app/**/*.spec.js'
        ],
        exclude: [],
        preprocessors: {},
        reporters: ['mocha'],
        plugins: ['karma-chrome-launcher', 'karma-jasmine', 'karma-mocha-reporter'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    });
};
