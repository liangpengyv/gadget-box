/**
 * 将任意路径转换为 POSIX 格式
 *
 * ---
 *
 * 输出示例：
 *
 * Original: C:\Users\liang\repos\gadget-box\packages\components
 *
 * Normalized: /Users/liang/repos/gadget-box/packages/components
 *
 * ---
 *
 * Original: /Users/liang/repos/gadget-box/packages/components
 *
 * Normalized: /Users/liang/repos/gadget-box/packages/components
 *
 * ---
 *
 * Original: ./packages/components
 *
 * Normalized: ./packages/components
 *
 * ---
 *
 * Original: ../packages/components
 *
 * Normalized: ../packages/components
 *
 * ---
 *
 * Original: packages/components
 *
 * Normalized: packages/components
 *
 * ---
 *
 * Original: D:\projects\my-app
 *
 * Normalized: /projects/my-app
 *
 * ---
 *
 * Original:
 *
 * Normalized:
 *
 * ---
 *
 * @param path 输入路径（可以是 Windows 路径、POSIX 路径、相对路径）
 * @returns 标准化的 POSIX 格式路径
 */
export const normalizeToPosixPath = (path: string): string => {
  // 如果是空字符串，直接返回
  if (!path) return path

  // 判断是否为相对路径
  const isRelative = !path.startsWith('/') && !path.match(/^[A-Z]:/i)

  // 统一将反斜杠转换为正斜杠
  const normalized = path.replace(/\\/g, '/')

  // 如果是相对路径，保持原样
  if (isRelative) {
    return normalized
  }

  // 如果是 Windows 绝对路径（如 C:/），移除盘符
  if (normalized.match(/^[A-Z]:/i)) {
    return normalized.substring(2)
  }

  // 其他情况（已经是 POSIX 格式的绝对路径）直接返回
  return normalized
}
