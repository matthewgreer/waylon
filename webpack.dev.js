const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    target: 'web',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'site.webmanifest', to: 'site.webmanifest' },
                { from: 'android-chrome-192x192.png', to: 'android-chrome-192x192.png' },
                { from: 'android-chrome-512x512.png', to: 'android-chrome-512x512.png' },
                { from: 'apple-touch-icon.png', to: 'apple-touch-icon.png' },
                { from: 'favicon-16x16.png', to: 'favicon-16x16.png' },
                { from: 'favicon-32x32.png', to: 'favicon-32x32.png' }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]',
                },
            },
        ],
    },
};
