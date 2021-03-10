# what-plugin-template

> a normal js plugin template

[![NPM](https://img.shields.io/npm/v/what-plugin-template.svg)](https://www.npmjs.com/package/what-plugin-template) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Use
![](https://i.loli.net/2021/03/10/o9YDJumaL6HtOCT.gif)

[Clone me](https://github.com/niexq/what-plugin-template), to create a new js plugin!

ENV
```bash
export MY_GITHUB_ORG=zhangsan
export MY_PLUGIN_NAME=js-plugin-SOMETHING
```

```bash
git clone git@github.com:niexq/what-plugin-template.git

mv what-plugin-template $MY_PLUGIN_NAME

cd $MY_PLUGIN_NAME

git remote rm origin

git remote add origin "git@github.com:$MY_GITHUB_ORG/$MY_PLUGIN_NAME.git"

yarn install && yarn link

cd example && yarn install && yarn link $MY_PLUGIN_NAME

cd .. && yarn run start-dev
```

## Install

```bash
npm install --save what-plugin-template
```

or

```bash
yarn add what-plugin-template
```
## License

MIT
