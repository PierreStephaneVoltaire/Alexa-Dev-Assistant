const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/src/handler.ts'),
    output: {
        filename: 'src/handler.js',
        path: __dirname
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};