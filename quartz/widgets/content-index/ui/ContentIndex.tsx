import { documentGroups } from "../../../entities/document"
import { archiveFor } from "../../../shared/routes"
import { resolveRelative } from "../../../shared/lib/quartz"
import type { QuartzComponent, QuartzComponentConstructor } from "../../../shared/lib/quartz"

const ContentIndex: QuartzComponent = ({ fileData, allFiles }) => {
  const kind = archiveFor(fileData.slug ?? "")
  if (!kind) return null
  const language = fileData.frontmatter?.lang === "ja" ? "ja" : "ko"
  const groups = documentGroups(allFiles, kind, language)
  return (
    <>
      {groups.map((group) => (
        <section class="journal-feed" key={group.key} aria-label={group.title}>
          <div class="section-heading">
            <h2>{group.title}</h2>
            <span>{language === "ja" ? "本文は原文の言語で表示" : "최근 수정 순"}</span>
          </div>
          <ol>
            {group.documents.map((note, index) => (
              <li key={note.slug}>
                <span class="note-index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <span class="note-category">{note.slug?.split("/").slice(0, 2).join(" / ")}</span>
                  <h3>
                    <a href={resolveRelative(fileData.slug!, note.slug!)}>
                      {note.frontmatter?.title}
                    </a>
                  </h3>
                </div>
                <span aria-hidden="true">↗</span>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </>
  )
}
export default (() => ContentIndex) satisfies QuartzComponentConstructor
