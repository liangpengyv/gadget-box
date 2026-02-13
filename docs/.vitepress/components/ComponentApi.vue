<template>
  <div v-if="data.attributes?.length">
    <h3>Attributes</h3>
    <div v-for="attribute in data.attributes" :key="attribute.name">
      <h4>名称：{{ attribute.name }}</h4>
      <p>说明：{{ attribute.description }}</p>
      <p>类型：{{ attribute.type }}</p>
      <p>默认值：{{ attribute.default || '-' }}</p>
    </div>
  </div>
  <div v-if="data.events?.length">
    <h3>Events</h3>
    <div v-for="event in data.events" :key="event.name">
      <h4>名称：{{ event.name }}</h4>
      <p>说明：{{ event.description || '尚不支持' }}</p>
      <p>类型：{{ event.type }}</p>
    </div>
  </div>
  <div v-if="data.slots?.length">
    <h3>Slots</h3>
    <div v-for="slot in data.slots" :key="slot.name">
      <h4>名称：{{ slot.name }}</h4>
      <p>说明：{{ slot.description }}</p>
    </div>
  </div>
  <div v-if="data.exposes?.length">
    <h3>Exposes</h3>
    <div v-for="expose in data.exposes" :key="expose.name">
      <h4>名称：{{ expose.name }}</h4>
      <p>说明：{{ expose.description }}</p>
      <p>类型：{{ expose.type }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ComponentApi } from '../typings/component'

defineProps<{
  data: ComponentApi
}>()
</script>
