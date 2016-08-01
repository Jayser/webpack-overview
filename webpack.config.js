var CopyWebPackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './app/js/main.js',
    output: {
        path: 'builds/',
        filename: 'js/main.js'
    },
    plugins: [
        new CopyWebPackPlugin([{from: 'app/index.html'}])
    ]
};