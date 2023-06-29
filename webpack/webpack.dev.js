const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
    port: process.env.PORT || 3000,
    proxy: {
      '/api': {
        target: `http://localhost:${process.env.PORT || 3000}`,
        router: () => `http://localhost:${process.env.BEND_PORT || 8080}`,
      },
    },
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('dev-plugin'),
    }),
    // Hot module replacement plugin
    new ReactRefreshWebpackPlugin(),
  ],
}
