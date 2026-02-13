<script setup lang="ts">
import { GdTestCard } from 'gadget-box/components'
import 'gadget-box/components/styles'
import { onMounted, useTemplateRef } from 'vue'

const testCardRef = useTemplateRef('testCardRef')

onMounted(() => {
  console.log(testCardRef.value?.anExposedData)
})

const handleShowMessage = (msg: string) => {
  alert(msg)
}
</script>

<template>
  <gd-test-card ref="testCardRef" title="测试卡片" @show-message="handleShowMessage">
    <div>测试内容</div>
  </gd-test-card>
</template>
