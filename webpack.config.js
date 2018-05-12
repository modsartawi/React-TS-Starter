const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const envConfig = (mode) => require(`./build-utils/webpack.${mode}`)(mode);


module.exports = ({
    mode
}) => webpackMerge({
    mode,
    entry: './src/index.ts',
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx']
    },
    module: {
        rules: [{
            
                test: /\.(jsx|tsx|js|ts)$/,
                use: 'ts-loader',
                exclude: /node_modules/
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