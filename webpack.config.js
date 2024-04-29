//webpack.config.js
const path = require('path');
const PugPlugin = require('pug-plugin');

module.exports = {
    output: {
        path: path.join(__dirname, 'dist/'),
        publicPath: '/',
    },
    plugins: [
        new PugPlugin({
            pretty: 'auto',
            //☝🏽 Format HTML (only in dev mode)
            entry: {
                // Insert your PUG templates here
                index: './src/view/index.pug',
            },
            js: {
                // JS output filename with hash for unique id
                filename: 'assets/js/[name].[contenthash:8].js'
            },
            css: {
                // CSS output filename with hash for unique id
                filename: 'assets/css/[name].[contenthash:8].css'
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/,
                use: ['css-loader', 'sass-loader']
                //☝🏽 Load Sass files
            },
            {
                // To use images on pug files:
                test: /\.(png|jpg|jpeg|ico)/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[name].[hash:8][ext]'
                }
            },
            {
                // To use fonts on pug files:
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext][query]'
                }
            }
        ]
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        watchFiles: {
            paths: ['src/**/*.*', 'assets/scss/**/*.*'],
            //☝🏽 Enables live reload in these folders
            options: {
                usePolling: true
            }
        }
    },
    stats: 'errors-only'
    //☝🏽 For a cleaner dev-server run
};