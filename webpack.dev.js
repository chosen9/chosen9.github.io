/**
 * 
 * @package Webpack
 * 
 * Webpack development configuration.
 * All the loaders and plugins will be imported in this config file
 * 
 * @loaders
 * 
 *   1. TypeScript
 *   2. JavaScript
 *   3. SASS
 *   4. CSS
 *   5. FILE-LOAdER
 * 
 */


const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

const app = {
    mode: "production",
}

module.exports = {


    //watch: true, //for auto saving...
    devtool: "source-map", //avoid eval...
    mode: app.mode, //development mode...


    entry: {
        bundle: path.resolve(__dirname, "src/ts/index.ts"), //entry file TYPESCRIPT
        themes: path.resolve(__dirname, "src/ts/themes.ts"), //theme stylesheet -ini
    },


    output: {
        path: path.resolve(__dirname, "./"),
        filename: "dist/scripts/[name].js",
    },

    /**
     * 
     * @package Modules
     * 
     * All the modules and loader will be loaded in this module object,
     * before compile it will test specific files
     */
    resolve: {
        extensions: ['.ts', '.js', '.scss', '.css', '.sass'],
    },

    module: {
        rules: [

            {
                test: /\.ts|js$/i,
                use: "ts-loader",
                include: [
                    path.resolve(__dirname, './'),
                ],
                exclude: /node_modules/,
            },

            {
                test: /\.(sass|scss|css)$/i,
                use: [

                    {
                        loader: miniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                    },
                    {

                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: 'postcss.config.js'
                            },
                        },
                    },
                    {
                        loader: "sass-loader"
                    },
                ],
            },

            {
                test: /\.(jpg|png|gif)$/i,
                use: [

                    {
                        loader: "file-loader",
                        options: {
                            publicPath: "../../",
                            name: "assets/img/[name].[ext]",
                        },
                    },
                ],
            },
            {
                test: /\.svg$/i,
                use: [

                    {
                        loader: "file-loader",
                        options: {
                            publicPath: "../../",
                            name: "assets/svg/[name].svg",
                        },
                    },
                ],
            }

        ],
    },


    plugins: [
        new miniCssExtractPlugin({
            filename: "./dist/styles/[name].css",
        }),
    ]
}