import type { ArchiveKind, SiteLanguage } from "../../../shared/routes"

type Document = {
  slug?: string
  frontmatter?: { title?: unknown; draft?: unknown }
  dates?: { modified?: Date }
}

export type DocumentGroup<T> = { key: string; title: string; documents: T[] }

const topicNames: Record<string, [string, string]> = {
  Java: ["Java", "Java"],
  DB: ["데이터베이스", "データベース"],
  Cache: ["캐시", "キャッシュ"],
  Outbox: ["Outbox", "Outbox"],
  Algorithm: ["알고리즘", "アルゴリズム"],
  Diary: ["일상과 경험", "日常と経験"],
}

function groupKey(slug: string, kind: ArchiveKind): string | undefined {
  if (slug.startsWith("ja/")) return undefined
  if (kind === "projects") {
    if (/^projects\/hackathon\/(?!index$)[^/]+$/i.test(slug)) return "hackathon"
    if (/^projects\/capstone\/index$/i.test(slug)) return "capstone"
    return /^projects\/(?!hackathon\/)[^/]+\/index$/i.test(slug) ? "projects" : undefined
  }
  if (!/^notes\/(research|wiki|diary)\//.test(slug) || /\/index$/i.test(slug)) return undefined
  if (/^notes\/wiki\/(site\/|portfolio)/.test(slug)) return undefined
  const parts = slug.split("/")
  return parts[1] === "diary" ? "Diary" : parts[2]
}

export function documentGroups<T extends Document>(
  documents: T[],
  kind: ArchiveKind,
  language: SiteLanguage,
): DocumentGroup<T>[] {
  const groups = new Map<string, T[]>()
  for (const document of documents) {
    if (document.frontmatter?.draft === true) continue
    const key = groupKey(document.slug ?? "", kind)
    if (!key) continue
    const group = groups.get(key) ?? []
    group.push(document)
    groups.set(key, group)
  }
  return Array.from(groups, ([key, entries]) => ({
    key,
    title:
      kind === "projects"
        ? ({
            projects: ["프로젝트", "プロジェクト"],
            hackathon: ["해커톤", "ハッカソン"],
            capstone: ["캡스톤", "キャップストーン"],
          }[key]?.[language === "ja" ? 1 : 0] ?? key)
        : (topicNames[key]?.[language === "ja" ? 1 : 0] ?? key),
    documents: entries.sort(
      (a, b) =>
        (b.dates?.modified?.getTime() ?? 0) - (a.dates?.modified?.getTime() ?? 0) ||
        String(a.slug).localeCompare(String(b.slug)),
    ),
  })).sort((a, b) =>
    kind === "projects"
      ? ["projects", "hackathon", "capstone"].indexOf(a.key) -
        ["projects", "hackathon", "capstone"].indexOf(b.key)
      : a.key.localeCompare(b.key),
  )
}
