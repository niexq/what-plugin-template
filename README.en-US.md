# ๐ซ what-plugin-template

> a normal js plugin template๏ผCan be used in component library or function library๏ผ

[ ็ฎไฝไธญๆ ](./README.md) | English

## ๐ How to use?

![](https://raw.githubusercontent.com/niexq/picbed/main/picgo/use2.gif)

## โจ Online preview

https://niexq.github.io/what-plugin-template

## ๐ Catalog Introduction

```
โโโ README.md             Project presentation document
โโโ LICENSE               LICENSE
โโโ build                 Compile directory
โโโ package.json          package.json
โโโ .babelrc              babel configuration file
โโโ rollup.config.js      rollup configuration file
โโโ example               demo
โโโ docs                  Document storage path
โโโ public                Static resources
โ   โโโ favicon.ico
โ   โโโ manifest.json
โโโ src                   Component (or function) home directory
    โโโ Button            Component (or function) development
    โ    โโโ Button.css
    โ    โโโ Button.jsx
    โ    โโโ index.jsx
    โโโ index.js          Component (or function) registration
```

The rest of the documents can be consulted by yourself.

## ๐ค Command introduction

| Name                    | Description           | Remarks                                                 |
| ----------------------- | -------------- | ----------------------------------------------------------------- |
| `npm run start`         | Project begining       |          |
| `npm run dev`           | demo begining  |              |
| `npm run start-dev`     | Start at development      |                          |
| `npm run deploy`        | Deploy the demo page     | Use [GitHub Pages](https://github.com/niexq/react-gh-pages) |
| `npm run build`         | Component (or function) packaging  | Use [rollup](https://www.rollupjs.com/)     |


## ๐ซ License

[MIT licensed](./LICENSE)
