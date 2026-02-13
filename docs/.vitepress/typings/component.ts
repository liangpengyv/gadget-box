import type { PropertyMeta, EventMeta, SlotMeta, ExposeMeta } from 'vue-component-meta'

export interface ComponentMeta {
  displayName: string
  demos: ComponentDemo[]
  api: ComponentApi
}

export interface ComponentDemoFrontmatter {
  title: string
  description?: string
}

export interface ComponentDemo extends ComponentDemoFrontmatter {
  filePath: string
  code: string
}

export interface ComponentApi {
  attributes?: PropertyMeta[]
  events?: EventMeta[]
  slots?: SlotMeta[]
  exposes?: ExposeMeta[]
}
