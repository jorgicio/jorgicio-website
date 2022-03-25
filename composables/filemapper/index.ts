import { searchFiles } from './filesSearcher'

interface FilePathMapperOptions {
  startDirectory: string
  deepSearch?: boolean
  extensions?: string[]
}

export async function filePathMapper({ startDirectory, deepSearch, extensions }: FilePathMapperOptions) {
  try{
    const paths = await searchFiles(startDirectory, deepSearch, extensions)

    return {
      ok: true,
      paths
    }
  } catch (err) {
    console.error(err)
    return {
      ok: false,
      message: err.message
    }
  }
}