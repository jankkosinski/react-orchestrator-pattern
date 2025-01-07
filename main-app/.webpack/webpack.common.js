const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = path.resolve(__dirname, '../');
const entry = {
  app: path.resolve(rootPath, 'src/index.tsx'),
};
const output = {
  filename: 'main.js',
  path: path.resolve(rootPath, 'build'),
  publicPath: "/",
  clean: true,
};
const resolve = {
  alias: {
    react: path.resolve('./node_modules/react'),
  },
  extensions: ['.tsx', '.ts', '.js', '.jsx'],
};
const commonRules = [
  {
    test: /\.(ts|tsx)$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  },
  {
    test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  },
];

const commonPlugins = [
  new HtmlWebpackPlugin({
    template: path.join(rootPath, 'public', 'index.html'),
    minify: {
      removeComments: true,
      collapseWhitespace: true,
    },
  }),
];

module.exports = {
  rootPath,
  entry,
  output,
  resolve,
  commonRules,
  commonPlugins,
};
