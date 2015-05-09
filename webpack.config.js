var webpack = require('webpack');

module.exports = {
    entry: [
      "./src/Lastfm.js"
    ],
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};
