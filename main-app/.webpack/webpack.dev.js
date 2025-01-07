const {
  entry,
  output,
  resolve,
  commonRules,
  commonPlugins,
} = require('./webpack.common');

module.exports = {
  entry,
  output,
  resolve,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    hot: true,
    open: false,
    historyApiFallback: true,
  },
  module: {
    rules: [
      ...commonRules,
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [...commonPlugins],
};
