# electron-react

## 开发目录结构

|- src
  |- main // electron 主进程项目
     - index.ts // 入口文件 - 必须有
  |- xxx // 跑在 electron 中的页面
     - index.html // 入口html - 必须有
     - index.tsx // 入口 tsx文件 - 必须有
    |- src // 内容文件 里面目录结构暂时不做约定

## 快速开始

### 安装依赖
```shell 
  cd ./xx
  yarn
```

### 启动项目

```shell
yarn startWebpack
yarn startElectron
```
#### startWebpack命令
启动react项目和electron项目的打包

#### startElectron
启动electron主进程。
`注意：需要等待startWebpack打包完成后，再启动。或者确认/dist/main.js文件存在，否则报错。`