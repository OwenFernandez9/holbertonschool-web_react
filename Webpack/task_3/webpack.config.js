const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    clean: false
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: 'assets/[name][hash:8].[ext]',
          esModule: false
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      templateContent: ({ htmlWebpackPlugin }) => `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <title>Holberton Dashboard</title>
            <meta name="viewport" content="width=device-width,initial-scale=1" />
          </head>
          <body>
          </body>
        </html>
      `,
      inject: 'body'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public')
    },
    port: 8564,
    open: true,
    hot: false,
    compress: true,
    client: {
      logging: 'info',
      overlay: true
    }
  },
  performance: { hints: false }
};
