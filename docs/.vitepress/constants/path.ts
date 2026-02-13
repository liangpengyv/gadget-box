import path from 'node:path'
import { fileURLToPath } from 'node:url'

export const ROOT_PATH = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../')

export const COMPONENTS_PATH = path.resolve(ROOT_PATH, './packages/components')
export const COMPONENTS_DEMOS_ENTRY_PATH = path.resolve(
  ROOT_PATH,
  './docs/.vitepress/cache/components-demos-entry.ts',
)
