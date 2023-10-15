import { navbar } from 'vuepress-theme-hope'
// https://cn.vitejs.dev/guide/features.html#glob-import
import fs from 'fs'
import path from 'path'

// 读取内容目录中的文件列表
const contentDir = path.resolve(__dirname, '../../posts')

function readDir(dir: string, depth: number): any {
  const files = fs.readdirSync(dir) // 读取文件夹中的所有内容
  const folderName = path.basename(dir)
  const folderItem = {
    text: folderName,
    prefix: `${folderName}`,
    icon: 'pen-to-square',
    depth,
    children: []
  }
  if (depth === 0) {
    folderItem.text = '博文'
    folderItem.prefix = '/zh/' + folderItem.prefix + '/'
  }
  files.forEach(file => {
    const filePath = path.join(dir, file) // 获取文件的完整路径
    const stat = fs.statSync(filePath) // 判断文件是否是一个文件夹
    depth++
    if (stat.isDirectory()) {
      const item: any = readDir(filePath)
      item.prefix += '/'
      item.depth = depth
      folderItem.children.push(item) // 递归处理子文件夹 // 如果是一个文件夹，继续递归遍历子文件夹
    } else {
      const fileName = file.replace('.md', '')
      const fileItem = {
        text: fileName,
        link: fileName,
        depth
      }
      folderItem.children.push(fileItem)
    }
  })
  return folderItem
}
const routes = readDir(contentDir, 0)
export const zhNavbar = navbar(['/zh/', '/zh/demo/', routes])
