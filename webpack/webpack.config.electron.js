const path = require('path');
const { getModeConfig } = require('./utils');
const { electromDirName, entryDir, prodMode } = require('./constant');

module.exports = (webpackConfigEnv, argv) => {
  const mode = argv.env?.mode || 'development';
  const isProd = mode === prodMode;

  return {
    entry: path.join(entryDir, electromDirName),
    mode,
    ...getModeConfig(isProd),
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, '../dist'),
    },
    target: 'electron-main',
    module: {
      rules: [
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
  };
};
