## npm插件发布

### 插件项目目录结构

```
target-lib

├── README.md
├── LICENSE
├── build
├── package.json
├── .babelrc
├── rollup.config.js
├── .gitignore
├── .yarnignore
├── node_modules
├── example
├── docs
├── public
│   ├── favicon.ico
│   └── manifest.json
└── src
    ├── Button
    │    ├── Button.css
    │    ├── Button.jsx
    │    └── index.jsx
    └── index.js
```

### 初始化插件项目
```bash
mkdir target-lib
yarn init
```

### 新建对应的目录及文件

### 安装所需插件

```bash
yarn add rollup rollup-plugin-babel rollup-plugin-commonjs rollup-plugin-node-resolve rollup-plugin-terser rollup-plugin-postcss postcss gh-pages less @babel/core @babel/preset-env @babel/preset-react --dev
```

插件简介：

+ rollup
    + rollup是一个 JavaScript 模块打包器，可以将小块代码编译成大块复杂的代码
+ rollup-plugin-babel
    + 提供babel功能，babel 是一个 JavaScript 编译器（ES5+转义成ES5）
+ rollup-plugin-node-resolve
    + 解析外部模块
+ rollup-plugin-commonjs
    + 将CommonJS模块转换为ES6
+ rollup-plugin-postcss
    + css处理
+ rollup-plugin-terser
    + 汇总插件可最小化生成的包
+ @babel/core
    + Babel编译器核心
+ @babel/preset-env
    + Babel预设环境
+ @babel/preset-react
    + Babel预设react
+ rollup-plugin-terser
    + 代码压缩

.babelrc
```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```

rollup.config.js
```js
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import { terser } from "rollup-plugin-terser";

import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: 'src/index.js',
  output: [
    {
      file: `${pkg.main}`,
      format: 'cjs',
    },
    {
      file: `${pkg.module}`,
      format: 'es',
    },
  ],
  plugins: [
    postcss({
      minimize: true,
      modules: true,
      use: {
        sass: null,
        stylus: null,
        less: { javascriptEnabled: true }
      }, 
      // extract: true,
      extensions: [".less", ".css"],
    }),
    resolve({
      extensions,
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      extensions,
    }),
    terser(),
  ],
  external: ['react']
}
```

package.json
```js
{
  "name": "nnn-test-lib-1",
  "version": "1.0.9",
  "description": "nnn-test-lib-1 description",
  "main": "build/index.js",
  "module": "build/index.esm.js",
  "author": "niexq<niexq0319@gmail.com>(https://niexq.github.io)",
  "license": "MIT",
  "homepage": "www.xiaoqiang.tech/red-button/",
  "repository": {
    "type": "git",
    "url": "https://github.com/niexq/red-button"
  },
  "scripts": {
    "build": "del build && rollup -c",
    "start": "rollup -c -w",
    "dev": "cd example && yarn start",
    "start-dev": "yarn run start & yarn run dev",
    "predeploy": "cd example && yarn install && del build && yarn run build",
    "deploy": "gh-pages -d example/build"
  },
  "devDependencies": {
    "@babel/core": "^7.13.8",
    "@babel/preset-env": "^7.13.9",
    "@babel/preset-react": "^7.12.13",
    "gh-pages": "^3.1.0",
    "less": "^4.1.1",
    "postcss": "^8.2.7",
    "rollup": "^2.40.0",
    "rollup-plugin-babel": "^4.4.0",
    "rollup-plugin-commonjs": "^10.1.0",
    "rollup-plugin-node-resolve": "^5.2.0",
    "rollup-plugin-postcss": "^4.0.0"
  },
  "dependencies": {}
}

```

.gitignore

```js
build
node_modules
```

.yarnignore

```js
src
.gitignore
node_modules
.yarnignore
.babelrc
rollup.config.js
*.log
*.lock
example
public
```

### 编写插件代码后，使用[yarn link](https://classic.yarnpkg.com/en/docs/cli/link)创建链接对象

```js
yarn link

// 成功会提示
// yarn link v1.22.4
// success Registered "target-lib".
```

查看本地link包
```bash
cd ~/.config/yarn/link
```

### 与插件同项目调试
在当前插件项目中
```bash
cd example
yarn create react-app .
```

使用[yarn link target-lib](https://classic.yarnpkg.com/en/docs/cli/link)链接对象
```js
yarn link target-lib

// 链接成功会提示
yarn link v1.22.4
success Using linked package for "target-lib".

```

和安装插件后调用方式保持一致，打开app.js
```js
import { Button } from 'target-lib';
```

### 监听插件编码及预览
返回项目根目录
```bash
yarn run start-dev
```

### 【可选】本地业务项目调用当前插件（两个不同项目）

初始化本地业务项目
```bash
cd target-project
yarn create react-app .
```

切换业务项目，执行
```js
// cd target-project
yarn link target-lib

// 链接成功会提示
yarn link v1.22.4
success Using linked package for "target-lib".

yarn start
```

app.js引用target-lib

```js
import { Button } from 'target-lib';
```


### 发布到npmjs
前提已注册npmjs及验证过邮箱
```bash
yarn publish
```