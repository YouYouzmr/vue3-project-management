const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require('path')

function resolve(dirname, url) {
    return path.resolve(dirname, url)
}

module.exports = {
    publicPath: "./",
    productionSourceMap: false,
    chainWebpack: (config) => {
        config.plugins.delete("prefetch");
        
        // svg
        const svgRule = config.module.rule("svg");
        svgRule.uses.clear();
        svgRule
            .test(/\.svg$/)
            .include.add(resolve(__dirname, "src/icons/svg"))
            .end()
            .use("svg-sprite-loader")
            .loader("svg-sprite-loader")
            .options({
                symbolId: "icon-[name]"
            })
    },

    configureWebpack: () => {
        let baseConfig = {};
        let envConfig = {};
        if (process.env.NODE_ENV !== "development") {
            // 为生产环境修改配置...
            envConfig = {
                optimization: {
                    splitChunks: {
                        chunks: "all",
                        // enforceSizeThreshold: 20000,
                        cacheGroups: {
                            echarts: {
                                name: "chunk-echarts",
                                priority: 20,
                                test: /[\\/]node_modules[\\/]_?echarts(.*)/,
                            },
                            elementPlus: {
                                name: "chunk-elementPlus",
                                priority: 20,
                                test: /[\\/]node_modules[\\/]_?element-plus(.*)/,
                            },
                            vue: {
                                name: 'chunk-vue',
                                priority: 20,
                                test: /[\\/]node_modules[\\/]_?vue(.*)/,
                            },
                            vueRouter: {
                                name: 'chunk-vuerouter',
                                priority: 20,
                                test: /[\\/]node_modules[\\/]_?vue-router(.*)/,
                            },
                            vuex: {
                                name: 'chunk-vuex',
                                priority: 20,
                                test: /[\\/]node_modules[\\/]_?vuex(.*)/,
                            }
                        },
                    },
                },
                externals: {
                    // lodash: "_"
                },
                plugins: [
                    new UglifyJsPlugin({
                        uglifyOptions: {
                            output: {
                                comments: false, // 去掉注释
                            },
                            warnings: false,
                            compress: {
                                drop_console: true,
                                // pure_funcs: ["console.log"] //移除console
                            },
                        },
                    }),
                    new CompressionWebpackPlugin({
                        filename: "[path].gz[query]",
                        algorithm: "gzip",
                        // test: /\.js$|\.html$|\.json$|\.css/,
                        test: /\.js$|\.json$|\.css/,
                        threshold: 10240, // 只有大小大于该值的资源会被处理
                        minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
                        // deleteOriginalAssets: true // 删除原文件
                    }),
                    new BundleAnalyzerPlugin()
                ],
            };
        }
        return Object.assign(baseConfig, envConfig);
    },

    css: {
        loaderOptions: {
            less: {
                // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
                // `primary` is global variables fields name
                lessOptions: {
                    modifyVars: {
                        'primary-color': '#1DA57A',
                        'link-color': '#1DA57A',
                        'border-radius-base': '2px',
                    },
                    javascriptEnabled: true
                }
            },
            // 给sass-loader 传递选项
            sass: {
                sassOptions: {
                    javascriptEnabled: true
                }
            },
            // 给 scss 语法进行单独配置
            scss: {
                // additionalData: `@import "./src/styles/theme.scss"`
            }
        }
    },
};
