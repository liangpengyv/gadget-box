<template>
  <div class="test-card" @click="emits('showMessage', '我点击了卡片')">
    <div v-if="title" class="title">{{ title }}</div>
    <slot />
  </div>
</template>

<script setup lang="ts">
// ------------------------------
// 👉 Props
interface Props {
  /**
   * 卡片的标题
   */
  title?: string
}
defineProps<Props>()

// ------------------------------
// 👉 Emits
interface Emits {
  /**
   * 卡片的 showMessage 事件
   */
  showMessage: [msg: string]
}
const emits = defineEmits<Emits>()

// ------------------------------
// 👉 Slots
interface Slots {
  /**
   * 卡片的默认插槽
   */
  default: () => void
}
defineSlots<Slots>()

// ------------------------------
// 👉 Exposes
defineExpose({
  /**
   * 卡片的一个 exposed 数据
   */
  anExposedData: 'exposedDataValue',
})
</script>

<style lang="less" scoped>
.test-card {
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 20%);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 16px 0 rgb(0 0 0 / 25%);
  }

  .title {
    font-size: 16px;
    font-weight: bold;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background-color: #888;
      opacity: 0.5;
      margin: 8px 0;
    }
  }
}
</style>
