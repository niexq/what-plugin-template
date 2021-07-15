# 💫 what-plugin-template

> 一个普通的js插件模板（可用于组件库或方法库）

简体中文 | [English](./README.md)

## 🚀 如何使用？

![](https://raw.githubusercontent.com/niexq/picbed/main/picgo/use2.gif)

## ✨ 在线预览

https://niexq.github.io/what-plugin-template

## 📒 目录介绍

```
├── README.md             项目展示文档
├── LICENSE               LICENSE
├── build                 编译目录
├── package.json          package.json
├── .babelrc              babel配置文件
├── rollup.config.js      rollup配置文件
├── node_modules          三方插件
├── example               demo
├── docs                  文档存放路径
├── public                静态资源
│   ├── favicon.ico
│   └── manifest.json
└── src                    组件（或方法）主目录
    ├── Button             组件（或方法）开发
    │    ├── Button.css
    │    ├── Button.jsx
    │    └── index.jsx
    └── index.js           组件（或方法）注册
```

其余文件可自行查阅了解。

## 🤖 命令介绍

| 名称                    | 描述           | 备注                                                                 |
| ----------------------- | -------------- | -------------------------------------------------------------------- |
| `npm run start`         | 项目启动       |          |
| `npm run dev`           | demo启动  |              |
| `npm run start-dev`     | 开发时启动      |                          |
| `npm run deploy`        | 部署demo页面       | 使用 [GitHub Pages](https://github.com/niexq/react-gh-pages) |
| `npm run build`         | 组件（或方法）打包  | 使用 [rollup](https://www.rollupjs.com/) 工具       |


## 🎫 License

[MIT licensed](./LICENSE)
