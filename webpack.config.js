const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isProduction = process.argv[process.argv.indexOf('--mode') + 1] === 'production';

module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        static: {
            directory: './public/',
            watch: {
                ignored: /\.s[ac]ss$/i
            }
        },
        hot: true,
    },
    entry: {
        main: './public/src/js/main.js',
    },
    output: {
        publicPath: '/dist/',
        filename: 'js/[name].js',
        path: path.resolve('./public/dist/js/'),
        clean: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: !isProduction ? [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ] : [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            sourceMap: true
                        }
                    },
                    "sass-loader"
                ],
            },
        ],
    },
}