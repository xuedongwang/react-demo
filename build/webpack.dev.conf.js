const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const notifier = require('node-notifier');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const portfinder = require('portfinder');
const chalk = require('chalk');
const internalIp = require('internal-ip');
const { resolve } = require('./utils');
const packageJson = require('../package.json');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
portfinder.basePort = process.env.PORT || 8080;

const buildDirname = packageJson.name || 'dist';

const devWebpackConfig = {
  mode: process.env.NODE_ENV,
  entry: resolve('../src/main.js'),
  output: {
    publicPath: '/',
    path: resolve(`../${buildDirname}`),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      '@': resolve('../src')
    },
    extensions: ['.js', '.jsx', '.json', '.scss']
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
        }
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]---[local]---[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'postcss-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ],
        include: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          }
        ],
        include: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    hot: true,
    progress: true,
    historyApiFallback: true,
    quiet: true,
    overlay: {
      errors: true
    },
    proxy: {}
  },
  plugins: [
    new HTMLPlugin({
      template: './index.html'
    }),
    new ProgressBarPlugin(),
    new LodashModuleReplacementPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = async () => {

  try {
    const port = await portfinder.getPortPromise()
    devWebpackConfig.devServer.port = port
    devWebpackConfig.plugins.push(new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`\nYou application is running:\n`,`${chalk.cyan('http://localhost:' + port)}`, `${chalk.cyan('http://'+internalIp.v4.sync())}`]
      },
      onErrors: (severity, errors) => {
        if (severity !== 'error') {
          return;
        }
        const error = errors[0];
        notifier.notify({
          title: '编译失败（build err）',
          message: severity + ': ' + error.name,
          subtitle: error.file || '',
          icon: resolve('./error_icon.jpeg')
        });
      }
    }));
    return devWebpackConfig;
  } catch (err) {
    throw err;
  }
};