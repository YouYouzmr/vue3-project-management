'use strict'
/**
 * vue.config.js 与 package.json同级，会被 @vue/cli-service 自动加载
 */
const path = require("path") 
const webpack = require("webpack")
const defaultSettings = require("./src/settings.js")
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

function resolve(dir) {
    return path.join(__dirname, dir)
}

const name = defaultSettings.title || "vue Element"

// https://cli.vuejs.org/config/
/**
 * @type {import("@vue/cli-serveice").ProjectOptions}
 */
module.exports = {
    /**
     * 部署应用包时的基本 URL。用法和 webpack 本身的 output.publicPath 一致，
     * 但是 Vue CLI 在一些其他地方也需要用到这个值，所以请始终使用 publicPath 而不要直接修改 webpack 的 output.publicPath
     */
    // publicPath: process.env.NODE_ENV === 'production'
    // ? '/production-sub-path/'
    // : '/'
    publicPath: './',
    // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录
    outputDir: 'dist',
    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: 'static',
    filenameHashing: false,
    pages: {
        // page 入口
        index: {
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index'],
        },
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        // subpage: 'src/subpage/main.js'
    },
    lintOnSave: process.env.NODE_ENV === 'development',
    // 组件是如何被渲染到页面中的？ （ast：抽象语法树；vDom：虚拟DOM）
    // template ---> ast ---> render ---> vDom ---> 真实的Dom ---> 页面
    // runtime-only：将template在打包的时候，就已经编译为render函数
    // runtime-compiler：在运行的时候才去编译template
    // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
    runtimeCompiler: false,
    productionSourceMap: false,
    // 调整 webpack-dev-server 行为
    devServer: {
        port: 8080,
        // host: "localhost",
        open: true,
        overlay: {
            warnings: false,
            error: true
        },
        // 配置代理
        proxy: {
            "api/": {
                target: 'https://localhost:443', // 请求本地
                ws: false,
                changeOrigin: true
            }
        }
    },
    configureWebpack: () => {
        let baseConfig = {
            name: name,
            resolve: {
                alias: {
                    '@': resolve("src")
                }
            }
        }
        let envConfig = {}

        if(process.env.NODE_ENV !== "development") {
            envConfig = {
                optimization: {
                    splitChunks: {
                        chunks: "all",
                        enforceSizeThreshold: 20000,
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
                            vueRouter: {
                                name: "chunk-vueRouter",
                                priority: 20,
                                test: /[\\/]node_modules[\\/]_?vue-router(.*)/,
                            },
                            vue: {
                                name: "chunk-vue",
                                priority: 20,
                                test: /[\\/]node_modules[\\/]_?vue(.*)/,
                            }
                        },
                    },
                },
                externals: {},
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
                        }
                    }),
                    new CompressionWebpackPlugin({
                        filename: "[path].gz[query]",
                        algorithm: "gzip",
                        test: /\.js$|\.json$|\.css/,
                        threshold: 10240, // 只有大小大于该值的资源会被处理
                        minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
                        deleteOriginalAssets: true // 删除原文件
                    })
                ]
            }
        }

        return Object.assign(baseConfig, envConfig)
    },
    chainWebpack(config) {
        config.plugin("define").use(webpack.DefinePlugin, [
            {
                "process.env": JSON.stringify(require("./config/dev.env"))
            }
        ])
        config.plugins.delete("prefetch")
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
    }
}