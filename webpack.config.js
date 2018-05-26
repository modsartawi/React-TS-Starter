const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const envConfig = (mode) => require(`./build-utils/webpack.${mode}`)(mode);
var path = require('path');
var outPath = path.join(__dirname, './dist');

module.exports = ({
    mode
}) => webpackMerge({
    mode,
    entry: './src/index.ts',
  
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx', '.jsx']
    },
    module: {
        rules: [{

                test: /\.(tsx|ts)$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },

            {
                test: /\.(png|jpg|gif|woff|woff2)$/,
                use: [{
                    loader: 'url-loader'
                }]
            }

        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
}, envConfig(mode))