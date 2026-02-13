<template>
  <gd-test-card title="响应点击的卡片" @show-message="handleShowMessage">
    <div>点击卡片试一试</div>
    <i class="comment">对于卡片组件没有实际意义，仅为了测试 组件 emit</i>
  </gd-test-card>
</template>

<script setup lang="ts">
import { GdTestCard } from '../index'

const handleShowMessage = (msg: string) => alert(msg)
</script>

<style scoped>
.comment {
  font-size: small;
}
</style>
