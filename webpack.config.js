/**
 * Created by anthonypowell on 12/13/16.
 */
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-source-map" : null,
    entry: "./js/scripts.js",
    watch: true,
    module:{
        loader: [
            {
                test:/\.js?$/,
                exclude:/(node_modules|bower_components)/,
                loader:'babel-loader',
                query:{
                    preset:['react','es2015','stage-0'],
                    plugins:['react-html-attrs','transfer-class-properties','transfer-decorator-legacy']
                }
            }
        ]
    },
    output: {
        path: __dirname + "/js",
        filename: "scripts.min.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};