import path from 'node:path'
import fse from 'fs-extra'
import { PACKAGE_JSON_BAK_PATH, PACKAGE_JSON_PATH } from './constants/path'

const backupPackageJson = async () => {
  await fse.ensureDir(path.dirname(PACKAGE_JSON_BAK_PATH))
  await fse.copyFile(PACKAGE_JSON_PATH, PACKAGE_JSON_BAK_PATH)
}

const tempUpdatePackageJson = async () => {
  const packageJson = await fse.readJson(PACKAGE_JSON_PATH, 'utf-8')
  delete packageJson.dependencies['gadget-box/components']
  await fse.writeJson(PACKAGE_JSON_PATH, packageJson, 'utf-8')
}

const main = async () => {
  await backupPackageJson()
  await tempUpdatePackageJson()
}

main()
