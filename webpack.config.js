const path = require('path');

module.exports = {
    entry: [
        './src/index.js'
      ],
      output: {
        filename: './dist/bundle.js',
        publicPath: '/'
      },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.sass$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
}