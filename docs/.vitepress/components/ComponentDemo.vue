<template>
  <div>
    <h3>{{ data.title }}</h3>
    <div v-html="data.description"></div>
    <div class="wrapper">
      <div class="preview">
        <component :is="demoComponents[data.filePath]" />
      </div>
      <div class="operation">
        <span class="btn" :title="showCode ? '收起代码' : '显示代码'" @click="showCode = !showCode">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
          >
            <path
              d="M160 389a20.91 20.91 0 0 1-13.82-5.2l-128-112a21 21 0 0 1 0-31.6l128-112a21 21 0 0 1 27.66 31.61L63.89 256l109.94 96.19A21 21 0 0 1 160 389z"
              fill="currentColor"
            ></path>
            <path
              d="M352 389a21 21 0 0 1-13.84-36.81L448.11 256l-109.94-96.19a21 21 0 0 1 27.66-31.61l128 112a21 21 0 0 1 0 31.6l-128 112A20.89 20.89 0 0 1 352 389z"
              fill="currentColor"
            ></path>
            <path
              d="M208 437a21 21 0 0 1-20.12-27l96-320a21 21 0 1 1 40.23 12l-96 320A21 21 0 0 1 208 437z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
      </div>
      <div v-show="showCode" class="code">
        <div v-html="data.code"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ComponentDemo } from '../typings/component'

// Before `npx tsx path/to/.vitepress/scripts/generate.ts`
import demoComponents from '../cache/components-demos-entry'

defineProps<{
  data: ComponentDemo
}>()

const showCode = ref(false)
</script>

<style lang="less" scoped>
.wrapper {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;

  > .preview {
    padding: 24px;
  }

  > .operation {
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 16px;
    padding: 8px 16px;
    border-top: 1px solid var(--vp-c-divider);

    .btn {
      display: inline-block;
      width: 16px;
      height: 16px;
      cursor: pointer;
      fill-opacity: 0.7;

      &:hover {
        fill-opacity: 1;
      }
    }
  }

  > .code {
    margin: -16px 0;
  }
}
</style>
