---
outline: deep
---

# 简介

## 背景

基于重复业务场景，收集沉淀可复用的组件

## 理念

单一职责，完善的 TreeShaking，按需摘取、灵活组织

## 目标

🏃‍♂️‍➡️ 业务驱动 -> 📥 UI Toolkit -> ⚙️ Turbo -> 驱动业务 🚀

## 使用 TypeScript

Gadget Box 全量使用 TypeScript 编写，完善的类型提示，和你的 TypeScript 项目无缝衔接

## 关于文档

### 我们构建

除了一个常规组件库应具备的各项基础元素，我们还构建了 **组件包源代码 Loader**，它帮助我们自动解析、生成文档数据

- 包括：组件预览生成、代码示例生成、组件 API 生成
- 从源头确保了 源代码 & 文档 的一致性
- 顺便减轻了文档编写的工作量

### 我们拥有（By [VitePress](https://vitepress.dev/)）

- 丰富的 Markdown 扩展：frontmatter、表格、语法高亮……应有尽有
- [Vue](https://vuejs.org/) 增强的 Markdown：可以使用 Vue 模板语法或导入的 Vue 组件在静态内容中嵌入交互性
- 同时拥有 **传统 SSG 的快速初始加载** & **SPA 的加载后快速切换**（**no-refresh**）
