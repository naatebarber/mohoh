const webpack = require("webpack")
const path = require("path")
const contentful = require("contentful")

const cf = contentful.createClient({
    space: "ndcvlnh97o15",
    accessToken: "Nh6mEhjj3ySdFhs6v6yueICw3r_Cyc7a4A7q4T4hjqE"
})

module.exports = {
    entry: path.resolve(__dirname, "src", "App.jsx"),
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css/,
                exclude: /node_modules/,
                loader: ["style-loader", "css-loader"]
            }
        ]
    },
    output: {
        publicPath: "/",
        filename: "appbundle.js",
        path: path.resolve(__dirname, "build")
    },
    resolve: {
        extensions: [".js", ".jsx", ".css"]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "build"),
        port: 8000,
        before: (app, server) => {
            app.get("/get-entries", (req, res) => {
                cf.getEntries()
                    .then(data => res.send(data))
            })
        },
        historyApiFallback: {
            index: 'index.html'
        }
    }
}