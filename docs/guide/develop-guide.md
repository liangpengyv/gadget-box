# 开发指南

## 准备

我们使用 [NVS](https://github.com/jasongin/nvs) 来管理 Node.js 版本

切换 Node.js 版本：

```sh
nvs use
```

我们使用 [pnpm](https://pnpm.io/) 来管理包：

```sh
npm install -g pnpm@9.14.4
```

安装依赖：

```sh
pnpm install
```

## 构建

```sh
pnpm build
```

## Playground

```sh
pnpm dev:play
```

## 联调

我们使用 [yalc](https://github.com/wclr/yalc) 与外部 Vue 项目在本地联调

全局安装它（yalc）：

```sh
npm install -g yalc
```

在 gadget-box 侧：

```sh
yalc publish --no-scripts
yalc push --replace
```

在 外部 Vue 项目 侧：

```sh
yalc add gadget-box
yalc update // If gadget-box is not pushed
yalc remove --all
```

## 文档

```sh
pnpm dev:docs
```
