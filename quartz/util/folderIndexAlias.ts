import path from "path"
import { FilePath, FullSlug, joinSegments, slugifyFilePath } from "./path"

const FOLDER_INDEX_ALIAS_PATTERN = /^0+[\s_-]*index$/i

export function isFolderIndexAliasPath(relativePath: string): boolean {
  const parsed = path.posix.parse(relativePath)
  return FOLDER_INDEX_ALIAS_PATTERN.test(parsed.name)
}

export function resolvePublishedSlug(relativePath: FilePath, allFiles: string[]): FullSlug {
  const defaultSlug = slugifyFilePath(relativePath)

  if (!isFolderIndexAliasPath(relativePath)) {
    return defaultSlug
  }

  const dir = path.posix.dirname(relativePath)
  const canonicalIndex = path.posix.join(dir === "." ? "" : dir, "index.md")
  const hasCanonicalIndex = allFiles.some(
    (candidate) => candidate.toLowerCase() === canonicalIndex.toLowerCase(),
  )

  if (hasCanonicalIndex) {
    return defaultSlug
  }

  return joinSegments(dir === "." ? "" : dir, "index") as FullSlug
}
