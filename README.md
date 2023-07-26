# 概述
这是一个使用vite打包构建为线上Vue3组件库（npm包）的demo。

[npm地址](https://www.npmjs.com/package/@jsnb2333/components)

# 介绍
主要技术是使用vite官方提供的[lib模式](https://cn.vitejs.dev/guide/build.html#library-mode)。我是在此提供的基础上组织了更适合开发组件库的模式。

./src/components是组件库本体

./src/App.vue内有组件使用demo


# 使用vite构建组件库的好处
- vite拥有rollup和esbuild构建组件库的预设。

- 在组件库开发环境中提供演示或测试界面。

# 启动组件库开发环境和构建
下载项目到本地

yarn install

yarn dev，开启组件开发模式

yarn build，最后构建打包文件
由于我们设置了build.watch，这时我们启动项目的时候需要开启两个命令行窗口分别执行vite dev 和 vite build。

npm publish，发布到线上npm网，目前绑定的是我仓库需要权限。
注意：每次发包都要手动更改package的version字段。

git commit，提交线上github仓库。


# 在项目中引入并使用

## 安装
npm install @jsnb2333/components

或

yarn add @jsnb2333/components

## 引入样式
可以在项目js入口文件内引入，或在使用的时候引入。

import "@jsnb2333/components/dist/style.css"

## 引入组件并使用
import { Test } from '@jsnb2333/components'

\<Test />