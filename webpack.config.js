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
    ]
  }
};
