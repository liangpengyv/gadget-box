# Packages

## Workspace

本项目使用 pnpm 构建 monorepo 工作区，通过 `pnpm-workspace.yaml` 配置:

```yaml
packages:
  - 'packages/*'
  - 'playground'
  - 'docs'
```

目录结构：

```
packages/
  components/ # 组件包
  directives/ # （规划中）
  ... # 更多
playground/ # 组件调试环境
docs/ # 文档
```

所有依赖统一安装在根目录，子包通过 `workspace:*` 协议相互引用。

例如：

```json
"dependencies": {
  "gadget-box/components": "workspace:*"
}
```

## 文件命名规范

组件包源码：

- 组件目录：`packages/components/[组件名]`
- 组件源码: `packages/components/[组件名]/src/[组件名].vue`
- 示例组件: `packages/components/[组件名]/demos/*.demo.vue`
- 示例描述：`packages/components/[组件名]/demos/*.demo.md`

**详细参考：**

- `test-card`

## 导出

组件库入口文件为 `packages/components/index.ts`，用于导出所有组件

例如：

```ts
export * from './test-card'
```
