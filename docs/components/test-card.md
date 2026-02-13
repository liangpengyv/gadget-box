---
outline: deep
---

<script setup lang="ts">
import { data as testCardMeta } from './test-card.data'
import ComponentDemo from '../.vitepress/components/ComponentDemo.vue'
import ComponentApi from '../.vitepress/components/ComponentApi.vue'
</script>

# TestCard

## 示例

<ComponentDemo v-for="demoData in testCardMeta.demos" :key="demoData.filePath" :data="demoData" />

## API

<ComponentApi :data="testCardMeta.api" />
