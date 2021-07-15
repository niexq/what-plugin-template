# 💫 what-plugin-template

> a normal js plugin template（可用于组件库或方法库）

[ 简体中文 ](./README.md) | English

## 🚀 How to use?

![](https://raw.githubusercontent.com/niexq/picbed/main/picgo/use2.gif)

## ✨ Online preview

https://niexq.github.io/what-plugin-template

## 📒 Catalog Introduction

```
├── README.md             Project presentation document
├── LICENSE               LICENSE
├── build                 Compile directory
├── package.json          package.json
├── .babelrc              babel configuration file
├── rollup.config.js      rollup configuration file
├── example               demo
├── docs                  Document storage path
├── public                Static resources
│   ├── favicon.ico
│   └── manifest.json
└── src                   Component (or function) home directory
    ├── Button            Component (or function) development
    │    ├── Button.css
    │    ├── Button.jsx
    │    └── index.jsx
    └── index.js          Component (or function) registration
```

The rest of the documents can be consulted by yourself.

## 🤖 Command introduction

| Name                    | Description           | Remarks                                                 |
| ----------------------- | -------------- | ----------------------------------------------------------------- |
| `npm run start`         | 项目启动       |          |
| `npm run dev`           | demo启动  |              |
| `npm run start-dev`     | 开发时启动      |                          |
| `npm run deploy`        | 部署demo页面       | 使用 [GitHub Pages](https://github.com/niexq/react-gh-pages) |
| `npm run build`         | 组件（或方法）打包  | 使用 [rollup](https://www.rollupjs.com/) 工具       |


## 🎫 License

[MIT licensed](./LICENSE)
