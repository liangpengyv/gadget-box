---
outline: deep
---

# 快速开始

## 安装

::: code-group

```sh [npm]
npm install gadget-box
```

```sh [pnpm]
pnpm add gadget-box
```

```sh [yarn]
yarn add gadget-box
```

:::

## 用法

```vue
<template>
  <gd-test-card title="卡片标题">
    <div>卡片内容</div>
  </gd-test-card>
</template>

<script setup lang="ts">
import { GdTestCard } from 'gadget-box'
import 'gadget-box/styles' # TODO: Atomization of Style
</script>
```

## 兼容性

- Vue.js v3.2.0+
- 仅支持 ESM（至少目前是这样 🤷‍♂️）
