# 编辑文档

## 命名规范

- 组件目录：`docs/components/[组件名].md`
- 数据 Loader：`docs/components/[组件名].data.ts`

- 示例组件：`packages/components/[组件名]/demos/*.demo.vue`
- 示例描述：`packages/components/[组件名]/demos/*.demo.md`

## 组件 API

我们开发了 **组件数据 Loader**，用于从 **组件源码** 和 **示例组件** 中提取 API 等数据

开发组件 和 编写文档，请参考相关命名规则，以获得 **自动生成组件 API** 和 **示例组件预览** 的能力

## 编写 Demo

组件 Demo 围绕组价源码的工作区编写，位置从上 **命名规范** 所述

详细参考现有 `test-card` 组件

## 数据 Loader

解析组件 API，依赖于 组件源码 jsdoc

生成示例组件预览 & 示例代码，依赖于伴随组件源码的 demos
