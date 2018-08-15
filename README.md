<p align="center">
  <img src="https://cdn.rawgit.com/ElemeFE/element/dev/element_logo.svg">
</p>

# Element

[![Build Status](https://travis-ci.org/ElemeFE/element.svg?branch=master)](https://travis-ci.org/ElemeFE/element)
[![Coverage Status](https://coveralls.io/repos/github/ElemeFE/element/badge.svg?branch=master)](https://coveralls.io/github/ElemeFE/element?branch=master)
[![CDNJS](https://img.shields.io/cdnjs/v/element-ui.svg)](https://cdnjs.com/libraries/element-ui)
[![npm package](https://img.shields.io/npm/v/element-ui.svg)](https://www.npmjs.org/package/element-ui)
[![NPM downloads](http://img.shields.io/npm/dm/element-ui.svg)](https://npmjs.org/package/element-ui)
![JS gzip size](http://img.badgesize.io/https://unpkg.com/element-ui-prefix/lib/index.js?compression=gzip&label=gzip%20size:%20JS)
![CSS gzip size](http://img.badgesize.io/https://unpkg.com/element-ui-prefix/lib/theme-default/index.css?compression=gzip&label=gzip%20size:%20CSS)
[![Join the chat at https://gitter.im/ElemeFE/element](https://badges.gitter.im/ElemeFE/element.svg)](https://gitter.im/ElemeFE/element?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)(Chinese)
[![Join the chat at https://gitter.im/element-en/Lobby](https://badges.gitter.im/element-en/Lobby.svg)](https://gitter.im/element-en/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)(English)
[![OpenCollective](https://opencollective.com/element/backers/badge.svg)](#backers) 
[![OpenCollective](https://opencollective.com/element/sponsors/badge.svg)](#sponsors)

> A Vue.js 2.0 UI Toolkit for Web.

<p align="center">
  <b>Special thanks to the generous sponsorship by:</b>
  <br><br>
  <a href="https://laravist.com">
    <img width="300px" src="https://fuss10.elemecdn.com/4/87/c072c1651b0efd1c5cde39bc8b422png.png">
  </a>
</p>

## 项目说明
这个项目是根据element-ui的v1.4.0版本改造而成的，在使用过程中的'el-'都变成了'ab-'。
在打包的时候，修改配置，将lib目录下打包之后的文件所有的'el-'都变成了'ab-'。
同时需要下载两个插件：ab-loader 和 cooking-loader-prefix。
并且在整个项目中，将路径'element-ui/'改成了'element-ui-prefix/'。
目的：可视化编辑器在客户页面上展示，当客户也用element-ui时，这样修改可避免版本冲突导致的问题。


##改造步骤：
1. 将build下面三个文件修改（cooking.common.js cooking.component.js cooking.conf.js）, extends: ['vue2','loader-prefix']
2. 下载两个插件ab-loader 和 cooking-loader-prefix
3. 将package/theme-default/gulpfile.js修改：
var replace = require('./replace');
.pipe(replace())
.pipe(cssmin())

4. 在package/theme-default/中添加文件repalce.js

##改造步骤：
项目启动：npm run dev
项目下载：yarn
项目打包：npm run dist


## Links
- [Home Page](http://element.eleme.io/)
- [Docs](http://element.eleme.io/#/component)
- [awesome-element](https://github.com/ElementUI/awesome-element)
- [FAQ](./FAQ.md)
- [Customize Theme](http://element.eleme.io/#/en-US/component/custom-theme)
- [Preview and generate theme online](https://elementui.github.io/theme-preview)
- [Element for React](https://github.com/eleme/element-react)
- [Atom helper](https://github.com/ElemeFE/element-helper)
- Starter Kit
  - [element-starter](https://github.com/ElementUI/element-starter)
  - [element-cooking-starter](https://github.com/ElementUI/element-cooking-starter)
  - [element-in-laravel-starter](https://github.com/ElementUI/element-in-laravel-starter)
- [Design resources](https://github.com/ElementUI/Resources)
- Boilerplate for bug reports
  - [CodePen](https://codepen.io/anon/pen/ozYpNA)
  - [JSFiddle](https://jsfiddle.net/gmve9d3p/)
- [Mint UI](https://github.com/ElemeFE/mint-ui) - Mobile UI elements for Vue.js

## Install
```shell
npm install element-ui -S
```

## Quick Start
``` javascript
import Vue from 'vue'
import Element from 'element-ui'

Vue.use(Element)

// or
import {
  Select,
  Button
  // ...
} from 'element-ui'

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
```
For more information, please refer to [Quick Start](http://element.eleme.io/#/en-US/component/quickstart) in our documentation.

## Browser Support
Modern browsers and Internet Explorer 9+.

## Development
Skip this part if you just want to use Element.

For those who are interested in contributing to Element, please refer to our contributing guide ([中文](https://github.com/ElemeFE/element/blob/master/.github/CONTRIBUTING.zh-CN.md) | [English](https://github.com/ElemeFE/element/blob/master/.github/CONTRIBUTING.en-US.md)) to see how to run this project.

## Changelog
Detailed changes for each release are documented in the [release notes](https://github.com/ElemeFE/element/releases).

## FAQ
We have collected some [frequently asked questions](https://github.com/ElemeFE/element/blob/master/FAQ.md). Before reporting an issue, please search if the FAQ has the answer to your problem.

## Contribution
Please make sure to read the contributing guide ([中文](https://github.com/ElemeFE/element/blob/master/.github/CONTRIBUTING.zh-CN.md) | [English](https://github.com/ElemeFE/element/blob/master/.github/CONTRIBUTING.en-US.md)) before making a pull request.



## Donation
If you find Element useful, you can buy us a cup of coffee
<img width="650" src="./pay.jpg" alt="pay">


## LICENSE
MIT
