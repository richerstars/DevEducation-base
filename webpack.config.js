const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/app.js'),
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { test: /\.svg$/, use: 'svg-inline-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
    ]
}