import fse from 'fs-extra'
import { PACKAGE_JSON_BAK_PATH, PACKAGE_JSON_PATH } from './constants/path'

const restorePackageJson = async () => {
  await fse.copyFile(PACKAGE_JSON_BAK_PATH, PACKAGE_JSON_PATH)
}

const main = async () => {
  await restorePackageJson()
}

main()
