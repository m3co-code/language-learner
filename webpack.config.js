const path = require('path');
const webpack = require('webpack');
const NgAnnotatePlugin = require('ng-annotate-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDir = path.join(__dirname, 'web');
const distDir = path.join(__dirname, 'dist');

module.exports = {
    entry: './web/js/app.js',
    output: {
        path: distDir,
        filename: 'bundle.js'
    },
    resolve: {
        root: appDir,
        extensions: ['', '.js', '.html', '.scss'],
        modulesDirectories: ['node_modules', 'web/js', 'web/scss']
    },
    devtool: 'eval-source-map',
    plugins: [
        new NgAnnotatePlugin({
            add: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: function (module, count) {
                /**
                 * if you're wondering why bootstrap or other vendor sass modules are not included in the vendor file,
                 * check out this github issue https://github.com/jtangelder/sass-loader/issues/164
                 **/
                return module.resource && module.resource.indexOf(appDir) === -1;
            }
        }),
        new HtmlWebpackPlugin({
            template: 'web/index.html', // Load a custom template
            inject: 'body' // Inject all scripts into the body
        })
    ],
    module: {
        loaders: [
            // SASS
            { test: /\.scss$/, loader: 'style!css!sass' },
            // babel/eslint
            { test: /\.js?$/, exclude: /(node_modules)/, loader: 'babel!eslint-loader' },
            // fonts/images
            { test: /\.(eot|woff|ttf$|woff2|ttf|svg|png|jpg)$/, loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]' }
        ]
    }
};
