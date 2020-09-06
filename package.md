  "@babel/core": "^7.11.4",
    "@babel/plugin-proposal-class-properties": "^7.10.4", 编译babel无法编译的语法，比如class
    "@babel/plugin-proposal-decorators": "^7.10.1",编译class装饰器
    "@babel/plugin-transform-runtime": "^7.11.0", 
    "@babel/preset-env": "^7.11.0",
    "@babel/runtime": "^7.11.2",
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-plugin-component": "^1.1.1",
    "babel-plugin-import": "^1.13.0",//按需加载
    "babel-preset-env": "^1.7.0",
    "babel-preset-es2015": "^6.24.1",
    "compression-webpack-plugin": "^4.0.0",//文件压缩 开启gzip
    "eslint": "^7.7.0",
    "extract-text-webpack-plugin": "^3.0.2",
    "friendly-errors-webpack-plugin": "^1.7.0",
    "portfinder": "^1.0.26",
    "postcss-loader": "^3.0.0"，// css兼容查案件自动添加-webkit，-moz，-ms，-o
    autoprefixer与postcss-loader配合使用
    "postcss-modules-scope": "^2.2.0",
    "uglifyjs-webpack-plugin": "^2.2.0",缩小（压缩优化）js文件
    "webpack-bundle-analyzer": "^3.8.0",性能分析的插件
    "webpack-merge": "^4.2.2"   合并webpack配置文件
    用terser-webpack-plugin替换掉uglifyjs-webpack-plugin解决uglifyjs不支持es6语法问题
webpack-bundle-analyzer //生成打包图
    "mini-css-extract-plugin": "^0.11.0",//抽离css
    "optimize-css-assets-webpack-plugin": "^5.0.4",//压缩css
