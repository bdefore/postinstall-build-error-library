const fs = require('fs')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react',
};

const reactDOMExternal = {
  root: 'ReactDOM',
  commonjs2: 'react-dom',
  commonjs: 'react-dom',
  amd: 'react-dom',
};

module.exports = {
  entry: {
    client: path.resolve(__dirname, './src/react/react-player.js')
  },
  output: {
    path: path.resolve(__dirname, './public/react'),
    filename: 'react-player.js',
    library: 'VideoPlayer',
    libraryTarget: 'umd'
  },
  externals: {
    'react': reactExternal,
    'react-dom': reactDOMExternal
  },
  resolveLoader: {
    modules: [
      `${__dirname}/src`,
      `${__dirname}/node_modules`
    ],
    extensions: ['.js', '.less']
  },
  resolve: {
    modules: [
      `${__dirname}/src`,
      `${__dirname}/node_modules`
    ],
    extensions: ['.js', '.less']
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-0']
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'less-loader',
              options: {
                modifyVars: {
                  fontLoading: 'none'
                }
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
  ],
  stats: {
    children: process.env.NODE_ENV !== 'development' // ExtractTextPlugin is too noisy
  }
}
