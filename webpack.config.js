const webpack = require('webpack');
const { getIfUtils, removeEmpty } = require('webpack-config-utils');
const path = require('path');

const CleanPlugin = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = env => {
  const {
    ifDev, ifNotDev, ifTest,
  } = getIfUtils(env);
  return removeEmpty({
    cache: true,
    entry: removeEmpty({
      app: './src/App.jsx',
    }),
    output: {
      filename: ifDev('[name].js', '[name].min.js'),
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: removeEmpty([
      ifNotDev(new CleanPlugin(['dist'])),
      ifDev(new HtmlPlugin({
        title: 'Test',
        template: 'src/htmlTemplate.html',
      })),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(ifNotDev('production', 'development')),
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
      }),
      ifNotDev(new UglifyJsPlugin({
        sourceMap: true,
        parallel: 4,
        cache: path.resolve(__dirname, 'cache/uglify'),
      })),
      ifDev(new webpack.NamedModulesPlugin()),
      ifDev(new webpack.HotModuleReplacementPlugin()),
      ifTest(new BundleAnalyzerPlugin()),
    ]),
    devServer: ifDev({
      contentBase: path.resolve(__dirname, 'dist'),
      hot: true,
      port: 9005,
    }),
    devtool: ifNotDev('source-map', 'eval-source-map'),
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: ['node_modules', 'src'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loaders: [
            {
              loader: 'eslint-loader',
              options: {
                cache: path.resolve(__dirname, 'cache/eslint'),
              },
            },
          ],
          exclude: path.resolve(__dirname, 'node_modules'),
          include: path.resolve(__dirname, 'src'),
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader',
        },
      ],
    },
  });
};
