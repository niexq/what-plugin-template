# 💫 what-plugin-template

> a normal js plugin template（Can be used in component library or function library）

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
| `npm run start`         | Project begining       |          |
| `npm run dev`           | demo begining  |              |
| `npm run start-dev`     | Start at development      |                          |
| `npm run deploy`        | Deploy the demo page     | Use [GitHub Pages](https://github.com/niexq/react-gh-pages) |
| `npm run build`         | Component (or function) packaging  | Use [rollup](https://www.rollupjs.com/)     |


## 🎫 License

[MIT licensed](./LICENSE)
