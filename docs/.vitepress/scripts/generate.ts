import fse from 'fs-extra'
import fg from 'fast-glob'
import { COMPONENTS_DEMOS_ENTRY_PATH, COMPONENTS_PATH } from '../constants/path'
import { normalizeToPosixPath } from '../utils/path'

const generateComponentDemosEntry = async () => {
  const pattern = `${normalizeToPosixPath(COMPONENTS_PATH)}/**/*.demo.vue`
  const files = await fg(pattern)

  const imports = files.map((file, index) => `import demo${index} from '${file}'`).join('\n')
  const exports = files.map((file, index) => `  '${file}': demo${index},`).join('\n')
  const content = `${imports}

export default {
${exports}
};
`

  await fse.writeFile(COMPONENTS_DEMOS_ENTRY_PATH, content)
}

const main = async () => {
  await generateComponentDemosEntry()
}

main()
