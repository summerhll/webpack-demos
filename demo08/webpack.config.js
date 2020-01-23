/**
 * 1. webpack4: 通过配置mode为"production", 调用UglifyJsPlugin
 * 2. 第三方库注意其是不是有es或者common规范对应的版本: lodash和lodash-es
 * 需要使用lodash-es，而不是lodash。 因为lodash.js没有使用es的写法，不会进行 Tree Sharking。
 */
const path = require("path");

module.exports = {
    entry: {
        app: "./src/app.js"
    },
    output: {
        publicPath: __dirname + "/dist/",
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    mode: "production"
};
