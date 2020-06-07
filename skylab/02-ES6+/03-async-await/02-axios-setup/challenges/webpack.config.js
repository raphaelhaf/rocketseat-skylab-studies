module.exports = {
  entry: ['@babel/polyfill','./src/04-challenge.js'],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  devServer:{
    contentBase: __dirname + '/public'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader'
        }
      }

    ],
  }
};