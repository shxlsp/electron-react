const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');
const path = require('path');

const orgName = 'jd';
const projectName = 'open-me-collect-opinion-h5';
const { version } = require('./package.json');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName,
    webpackConfigEnv,
    argv,
    orgPackagesAsExternal: false,
  });
  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      fallback: {
        path: require.resolve('path-browserify'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(le|c)ss$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  javascriptEnabled: true,
                },
              },
            },
          ],
          exclude: /node_modules/,
        },
      ],
    },
    output: {
      clean: true,
      filename:
        argv.mode === 'production'
          ? `${orgName}-${projectName}-${version}-[contenthash:8].js`
          : 'bundle.js',
    },
    externals: ['react', 'react-dom', 'antd', /^@jd\/jsmf.+/],
  });
};
