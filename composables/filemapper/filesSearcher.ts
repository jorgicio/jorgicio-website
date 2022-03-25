import { promises as fs } from 'fs'
import path from 'path'

let paths = []

export async function searchFiles(folderName: string, deepSearch?: boolean, extensions?: string[]) {
  const characters = ['/','~','.']
  const fn = (characters.some(c => folderName.includes(c))) ? path.resolve(folderName) : folderName
  const folderChildren = await fs.readdir(fn)

  for (const child of folderChildren) {
    const childPath = `${fn}/${child}`
    const childRelPath = `${folderName}/${child}`
    const childStats = await fs.lstat(childPath)

    if (childStats.isDirectory() && deepSearch) {
      await searchFiles(childRelPath, deepSearch, extensions)
    }

    if (childStats.isFile()) {
      const extension = child.split('.').pop() || ''
      const skipFile = extensions?.length ? !extensions.includes(extension) : false

      if (skipFile) continue

      const fullPathToFile = path.resolve(childPath)
      const fileContent = await fs.readFile(fullPathToFile)
      
      paths = [
        ...paths, 
        {
          file: childRelPath,
          fileName: child,
          path: fullPathToFile,
          data: fileContent,
        }
      ]
    }
  }
  return paths
}