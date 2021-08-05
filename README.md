# vuenext-management

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

**使用sass最新版本报错，TypeError: this.getOptions is not a function**
sass webpack v5 以上
vue-cli webpack 是v4

``` js
├── build                    # build 打包配置
├── config                   # 打包配置
├── public
│   └── favicon.png          # Favicon
│   └── index.html           # index.html
├── src
│   ├── api                  # 对应views接口、以及工作接口配置
│   ├── assets               # 图片存储位置
│   ├── components           # 业务通用组件
│   ├── echarts              # echarts组件
│   ├── icons                # .svg文件
│   ├── router               # 路由配置
│   ├── store                # vuex配置
│   ├── styles               # 全局样式
│   ├── utils                # 工具库
│   ├── views                # 业务页面入口和常用模板
│   └── main.js              # 全局 JS
├── vue.config.js
├── README.md
└── package.json
```