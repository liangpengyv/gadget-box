import path from 'node:path'
import fse from 'fs-extra'
import fg from 'fast-glob'
import frontmatter from 'front-matter'
import { createMarkdownRenderer } from 'vitepress'
import { parse as parseSFC } from '@vue/compiler-sfc'
import { createChecker } from 'vue-component-meta'
import type {
  ComponentApi,
  ComponentDemo,
  ComponentDemoFrontmatter,
  ComponentMeta,
} from '../typings/component'
import { COMPONENTS_PATH } from '../constants/path'
import { normalizeToPosixPath } from './path'

export const loadComponentMeta = async (displayName: string): Promise<ComponentMeta> => {
  const demoPathList = await fg(
    `${normalizeToPosixPath(COMPONENTS_PATH)}/${displayName}/demos/*.demo.vue`,
  )
  const componentEntryPath = `${normalizeToPosixPath(COMPONENTS_PATH)}/${displayName}/src/${displayName}.vue`

  return {
    displayName,
    demos: await Promise.all(demoPathList.map((demoPath) => loadComponentDemo(demoPath))),
    api: await loadComponentApi(componentEntryPath),
  }
}

const loadComponentDemo = async (demoPath: string): Promise<ComponentDemo> => {
  const demoMdPath = `${path.dirname(demoPath)}/${path.basename(demoPath, '.vue')}.md`
  const mdFrontmatter = frontmatter<ComponentDemoFrontmatter>(
    await fse.readFile(demoMdPath, 'utf-8'),
  )
  const mdRenderer = await createMarkdownRenderer(process.cwd())
  const { descriptor } = parseSFC(await fse.readFile(demoPath, 'utf-8'))

  const template = descriptor.template?.content
    ? `<template>${descriptor.template.content}</template>`
    : ''
  const script = descriptor.scriptSetup?.content
    ? `<script setup${descriptor.scriptSetup.lang ? ' lang="' + descriptor.scriptSetup.lang + '"' : ''}>${descriptor.scriptSetup.content}</script>`
    : descriptor.script?.content
      ? `<script${descriptor.script.lang ? ' lang="' + descriptor.script.lang + '"' : ''}">${descriptor.script.content}</script>`
      : ''
  const styles = descriptor.styles
    .filter((block) => block.type === 'style')
    .map(
      (block) =>
        `<style${block.lang ? ' lang="' + block.lang + '"' : ''}${block.scoped ? ' scoped' : ''}>${block.content}</style>`,
    )

  return {
    filePath: demoPath,
    title: mdFrontmatter.attributes.title,
    description: mdRenderer.render(mdFrontmatter.body),
    code: mdRenderer.render(
      `\`\`\`vue\n${template}\n\n${script}\n\n${styles.join('\n\n')}\n\`\`\``,
    ),
  }
}

const loadComponentApi = async (componentEntryPath: string): Promise<ComponentApi> => {
  const tsconfigChecker = createChecker(`${normalizeToPosixPath(COMPONENTS_PATH)}/tsconfig.json`, {
    forceUseTs: true,
  })
  const componentTsMeta = tsconfigChecker.getComponentMeta(componentEntryPath)

  return {
    attributes: componentTsMeta.props?.length
      ? [...componentTsMeta.props.filter((item) => !item.global)]
      : undefined,
    events: componentTsMeta.events?.length ? [...componentTsMeta.events] : undefined,
    slots: componentTsMeta.slots?.length ? [...componentTsMeta.slots] : undefined,
    exposes: componentTsMeta.exposed?.length
      ? [
          ...componentTsMeta.exposed.filter(
            (item) =>
              ![
                '$slots',
                ...componentTsMeta.props.map((item) => item.name),
                ...componentTsMeta.events.map(
                  (item) => `on${item.name.charAt(0).toUpperCase() + item.name.slice(1)}`,
                ),
              ].includes(item.name),
          ),
        ]
      : undefined,
  }
}
