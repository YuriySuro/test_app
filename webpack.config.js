const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: ("development" === process.env.NODE_ENV ? "development" : "production"),

    entry: ["./src/index.js"],

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "build/[name].js"
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: [
                            "@babel/plugin-proposal-object-rest-spread",
                            "@babel/plugin-proposal-class-properties",
                            "@babel/plugin-transform-arrow-functions",
                            "@babel/plugin-transform-async-to-generator",
                            "@babel/plugin-transform-runtime"
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },

    plugins: [

        new MiniCssExtractPlugin({
            filename: "build/styles.css"
        }),

        new HTMLWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, "src/index.html"),
            minify: false
        }),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/assets"),
                    to: path.resolve(__dirname, "dist/assets")
                }
            ]
        })
    ],

    resolve: {
        extensions: [".js", ".jsx", ".css"]
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,
                vendor: {
                    chunks: "all",
                    name: "vendor",
                    test: /node_modules/
                }
            }
        }
    },

    devServer: {
        port: 8888,
        historyApiFallback: true,
        client: {
            overlay: true
        }
    },

    devtool: "source-map"
};