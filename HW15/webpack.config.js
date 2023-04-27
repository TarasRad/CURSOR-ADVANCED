const path = require('path');

module.exports = {
    entry: './src/module.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script.js',
    },
}