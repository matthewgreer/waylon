const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: './',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'true',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'site.webmanifest', to: 'site.webmanifest' },
                { from: 'android-chrome-192x192.png', to: 'android-chrome-192x192.png' },
                { from: 'android-chrome-512x512.png', to: 'android-chrome-512x512.png' },
                { from: 'apple-touch-icon.png', to: 'apple-touch-icon.png' },
                { from: 'favicon-16x16.png', to: 'favicon-16x16.png' },
                { from: 'favicon-32x32.png', to: 'favicon-32x32.png' },
                { from: 'src/images', to: 'images' },
                { from: '.nojekyll', to: '.nojekyll' },
            ]
        }),
        new MiniCssExtractPlugin({
            filename: 'main.[contenthash].css',
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
            }
        ],
    },
};
