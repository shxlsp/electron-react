const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { getEntryList, getModeConfig } = require('./utils');
const { electromDirName, entryDir, prodMode } = require('./constant');

module.exports = (webpackConfigEnv, argv) => {
  const mode = argv.env?.mode || 'development';
  const isProd = mode === prodMode;
  const entry = getEntryList(entryDir);
  delete entry[electromDirName];

  const htmlPlugins = Object.keys(entry).map((entryName) => {
    return new HtmlWebpackPlugin({
      template: path.join(entry[entryName], './index.html'),
      filename: entryName + '.html',
      chunks: [entryName],
    });
  });

  return {
    entry,
    mode,
    ...getModeConfig(isProd),
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, '../dist'),
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  auto: true,
                },
              },
            },
          ],
        },
        {
          test: /\.less$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  auto: true,
                  localIdentName: '[path]--[hash:base64:5]',
                },
              },
            },
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  javascriptEnabled: true,
                },
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(t|j)sx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.less', '.json'],
    },
    plugins: [...htmlPlugins],
    externals: ['electron'],
  };
};
