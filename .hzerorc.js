module.exports =  {
  "enableVue": false, // 不使用 vue 开发页面, 如果设置为 true 的话 vue 依赖需要自己安装, 执行命令:  yarn add vue@~3.2.30 -W
  "packages": [
    {
      "name": "hzero-front-hiam"
    },
    {
      "name": "hzero-front-hpfm"
    },
    {
      "name": "h0-project-demo1"
    }
  ],
  "hzeroBoot": "hzero-boot/lib/pathInfo",
  // webpackConfig: (config, webpackConfigType) => { // webpack 配置修改
  //   console.log(webpackConfigType); // string webpack配置类型: 'dll' | 'base' | 'ms' ;
  //   config.externals = {
  //     ..config.externals,
  //     jQuery: 'window["jQuery"]',
  //     $: 'window["jQuery"]',
  //   }
  //   return config;
  // },
  // alias: {}, // webpack alias 配置, alias 的值可以是 string 表示指向配置文件
  // theme: {}, // less 变量配置, theme 的值可以是 string 表示指向配置文件
  // hzeroBoot: 'hzero-boot/lib/pathInfo', // hzero入口文件信息配置
  // dllConfig: { // dllConfig 配置
  //   common: {
  //     priority: 100,
  //     packages: ['react','react-dom','dva','hzero-ui','choerodon-ui','choerodon-ui/pro','core-js'],
  //   },
  //   vendorsGraph: {
  //     packages: ['echarts'],
  //   },
  //   vendors: {
  //     packages: ['lodash','lodash-decorators','react-intl-universal','axios','uuid','numeral','react-cropper','cropperjs',]
  //   }
  // },
  // splitChunks:{ /* ... */}, // chunks 优化配置 参考: https://webpack.js.org/plugins/split-chunks-plugin/#optimizationsplitchunks
  'common': ['h0-project-common'],
};

