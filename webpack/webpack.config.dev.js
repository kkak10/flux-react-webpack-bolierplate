// webpack.config.js
var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    OpenBrowserPlugin = require('open-browser-webpack-plugin'),
    OPEN_ADDRESS = "http://localhost:8080";

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: [
        'webpack-dev-server/client?' + OPEN_ADDRESS,
        'webpack/hot/dev-server',
        './app/main'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: './app/index.html'
        }),
        new OpenBrowserPlugin({url: OPEN_ADDRESS})
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel",
                query:
                {
                    presets:['react']
                }
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.html$/,
                loader: "raw-loader" // loaders: ['raw-loader'] is also perfectly acceptable.
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        hot: true
    }
};