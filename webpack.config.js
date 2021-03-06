var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'source-map',
    debug: true,
    entry: {
        'app': ['./app/app.js'],
        'vendor': ['./app/vendor.js'],
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    output: {
        path: './app/dist',
        filename: '[name].bundle.js',
        chunkFilename: '[name]_[chunkhash].js',
    },
    module: {
        preLoaders: [
            { test: /\.js$/, loader: 'source-map-loader' }
        ],
        loaders: [ 
            //{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", include: path.join(__dirname, 'app') },
            //{ test: /\.ts$/, loader: 'awesome-typescript-loader', exclude: [/\.(spec|e2e)\.ts$/] },
            { test: /\.(html)$/, loader: 'raw-loader' },
            //{ test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("css-loader!sass-loader")},
            { test: /\.(jpg|png)$/, loader: 'url?limit=25000'}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            mangle: false,
            sourcemap: true,
            minimize: true,
            comments: false
        }),
        new OpenBrowserPlugin(),
        new ExtractTextPlugin("styles.bundle.css"),
        new webpack.ProvidePlugin({
          '$': 'jquery',
           'jQuery': 'jquery',
           'window.jQuery': 'jquery'
        })
    ],
    // configures webpack-dev-server
    devServer: {
        historyApiFallback: true,
        // redirectts to api server on api calls
        proxy: {
            "/api/*": {
                target: "http://localhost:9000"
            }
        }
    }
};
