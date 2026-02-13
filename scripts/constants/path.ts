import path from 'node:path'
import { fileURLToPath } from 'node:url'

export const ROOT_PATH = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../')
export const NODE_MODULES_TMP_PATH = path.resolve(ROOT_PATH, './node_modules/.tmp')

export const PACKAGE_JSON_PATH = path.resolve(ROOT_PATH, './package.json')
export const PACKAGE_JSON_BAK_PATH = path.resolve(NODE_MODULES_TMP_PATH, './package.json.bak')
