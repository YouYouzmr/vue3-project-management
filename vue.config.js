'use strict'
/**
 * vue.config.js 与 package.json同级，会被 @vue/cli-service 自动加载
 */
const path = require("path")
const defaultSettings = require("./src/settings.js")

function resolve(dir) {
    return path.join(__dirname, dir)
}

const name = defaultSettings.title || "vue Element"

const port = process.env.port || process.env.npm_config_port || 8080

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
    // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
    runtimeCompiler: false,
    productionSourceMap: false,
    // devServer: {
    //     port: port,
    //     open: true,
    //     overlay: {
    //         warnings: false,
    //         error: true
    //     },
    //     before: require("./mock/mock-server.js")
    // },
    configureWebpack: {
        name: name,
        resolve: {
            alias: {
                '@': resolve("src"),
                '~': path.join(__dirname, '')
            }
        }
    },
    chainWebpack(config) {
        // preload-webpack-plugin
        // it can improve the speed of the first screen, it is recommended to turn on preload
        // config.plugin('preload').tap(() => [
        //     {
        //       rel: 'preload',
        //       // to ignore runtime.js
        //       // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        //       fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        //       include: 'initial'
        //     }
        // ])

        config.plugins.delete('prefetch')

        // set svg-sprite-loader
        // config.module
        //     .rule('svg')
        //     .exclude.add(resolve('src/icons'))
        //     .end()

        // config.module
        //     .rule('icons')
        //     .test(/\.svg$/)
        //     .include.add(resolve('src/icons'))
        //     .end()
        //     .use('svg-sprite-loader')
        //     .options({
        //         symbolId: 'icon-[name]'
        //     })
        //     .end()

        config
            .when(process.env.NODE_ENV !== 'development',
                config => {
                    config
                        .plugin('ScriptExtHemlWebpackPlugin')
                        .after('html')
                        .use('script-ext-html-webpack-plugin', [{
                            inline: /runtime\..*\.js$/
                        }])
                        .end()

                    config
                        .optimization.splitChunks({
                            chunks: "all",
                            cacheGroups: {
                                libs: {
                                    name: 'chunk-libs',
                                    test: /[\\/]node_modules[\\/]/,
                                    priority: 10,
                                    chunks: 'initial'
                                },
                                elementPlus: {
                                    name: 'chunk-emelentPlus',
                                    priority: 20,
                                    test: /[\\/]node_module[\\/]_?element-plus(.*)/
                                },
                                commons: {
                                    name: 'chunk-commons',
                                    test: resolve('src/components'),
                                    minChunks: 3,
                                    priority: 5,
                                    reuseExistingChunk: true
                                }
                            }
                        })

                    // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
                    config.optimization.runtimeChunk('single')
                })
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