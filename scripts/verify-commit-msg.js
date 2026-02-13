import fse from 'fs-extra'

// 获取 commit-msg 文件内容
const msg = fse.readFileSync(process.argv[2], 'utf-8').trim()

// commit 消息格式
const commitRE =
  /^(feat|fix|docs|style|refactor|perf|test|build|ci|chore)(\(.+\))?!?: .{1,50}|^Merge .+|^Revert .+/

// 检查 commit 消息是否符合规范
if (!commitRE.test(msg)) {
  console.error(`
❌ 提交信息格式有误

📋 正确格式：
<type>[(scope)][!]: <description>

🔍 type 必须是以下之一:
feat      新增功能
fix       修复缺陷
docs      文档更新
style     代码格式（不影响功能）
refactor  代码重构
perf      性能优化
test      测试相关
build     构建相关
ci        CI/CD 相关
chore     其他修改

📝 规范说明：
1. type: 必选，表明提交类型
2. scope: 可选，表明影响范围
3. !: 可选，表明有破坏性变更
4. description: 必选，简短描述，不超过 50 字符

💡 示例：
- feat(user): 添加用户登录功能
- fix: 修复首页加载异常
- docs!: 重写 README 文档

详细规范请参考：https://www.conventionalcommits.org/
  `)
  process.exit(1)
}
