import { defineLoader } from 'vitepress'
import { fileURLToPath } from 'node:url'
import { basename } from 'node:path'
import type { ComponentMeta } from '../.vitepress/typings/component'
import { COMPONENTS_PATH } from '../.vitepress/constants/path'
import { loadComponentMeta } from '../.vitepress/utils/loader'
import { normalizeToPosixPath } from '../.vitepress/utils/path'

declare const data: ComponentMeta
export { data }

const displayName = basename(fileURLToPath(import.meta.url), '.data.ts')

export default defineLoader({
  watch: `${normalizeToPosixPath(COMPONENTS_PATH)}/${displayName}/**`,
  load: () => loadComponentMeta(displayName),
})
