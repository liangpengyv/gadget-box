export default {
  '*.{js,ts,vue}': (stagedFiles) => [
    `eslint --fix ${stagedFiles.join(' ')}`,
    `prettier --write ${stagedFiles.join(' ')}`,
  ],
  '*.{css,less,vue}': (stagedFiles) => [`stylelint --fix ${stagedFiles.join(' ')}`],
}
