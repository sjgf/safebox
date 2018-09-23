/*
*
*
* Old WebPack Config File
* Currently unused
*
* */
const path = require('path');

module.exports = {
    entry: './src/application.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                exclude: /(node_modules|bower_components)/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            { test: /\.ts$/, use: 'ts-loader' }
        ]
    }
};