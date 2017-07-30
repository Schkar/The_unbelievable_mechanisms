module.exports = {
  entry: {
    files: ["./js/main.js"]
  },
  output: {filename: "js/out.js"},
  watch: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015','stage-2']
        }
      },
      {
          test: /\.(jpe?g|png|gif|svg)$/i,
          exclude: /node_modules/,
          loaders: [
              'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
              'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ]
      }
    ]
  }
};
