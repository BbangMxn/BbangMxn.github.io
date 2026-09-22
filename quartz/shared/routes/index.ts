export type SiteLanguage = "ko" | "ja"
export type ArchiveKind = "projects" | "notes"

const sections = [
  { path: "about", ko: "소개", ja: "自己紹介", matches: ["about"] },
  { path: "projects", ko: "포트폴리오", ja: "ポートフォリオ", matches: ["projects"] },
  {
    path: "notes",
    ko: "공부 기록",
    ja: "学習記録",
    matches: ["notes", "research", "wiki", "Diary", "docs"],
  },
  { path: "contact", ko: "Contact Me", ja: "Contact Me", matches: ["contact"] },
] as const

export function withoutLanguage(slug: string): string {
  return slug.replace(/^ja\//, "")
}

export function navigationFor(slug: string, language: SiteLanguage) {
  const local = withoutLanguage(slug)
  return sections.map((section) => ({
    href: `${language === "ja" ? "/ja" : ""}/${section.path}`,
    label: section[language],
    active: section.matches.some((prefix) => local === prefix || local.startsWith(prefix + "/")),
  }))
}

export function archiveFor(slug: string): ArchiveKind | undefined {
  const local = withoutLanguage(slug)
  if (local === "notes" || local === "notes/index") return "notes"
  if (local === "projects/index") return "projects"
  return undefined
}
