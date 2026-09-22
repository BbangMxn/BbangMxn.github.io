import { QuartzComponent, QuartzComponentConstructor } from "./types"
import { resolveRelative } from "../util/path"
const Feed: QuartzComponent = ({ fileData, allFiles }) => {
  const slug = fileData.slug ?? ""
  const archive = ["notes", "ja/notes", "projects/index", "ja/projects/index"].includes(slug)
  const projectArchive = slug.endsWith("projects/index")
  if (!archive) return null
  const ja = fileData.frontmatter?.lang === "ja"
  const notes = allFiles
    .filter(
      (p) =>
        (projectArchive
          ? /^projects\/[^/]+\/index$/.test(p.slug ?? "")
          : /^(research|wiki|Diary)\//.test(p.slug ?? "")) &&
        (projectArchive || !p.slug?.endsWith("index")) &&
        !p.slug?.startsWith("wiki/portfolio") &&
        !p.slug?.startsWith("wiki/site/"),
    )
    .sort(
      (a, b) =>
        (b.dates?.modified?.getTime() ?? 0) - (a.dates?.modified?.getTime() ?? 0) ||
        String(a.slug).localeCompare(String(b.slug)),
    )
    .slice(0, archive ? undefined : 8)
  return (
    <section class="journal-feed" id="notes">
      <div class="section-heading">
        <h2>
          {archive ? (ja ? "記録一覧" : "기록 목록") : ja ? "更新したノート" : "최근 정리한 노트"}
        </h2>
        <span>{ja ? "技術ノート本文は韓国語" : "RECENTLY UPDATED"}</span>
      </div>
      <ol>
        {notes.map((note, index) => (
          <li>
            <span class="note-index">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <span class="note-category">{note.slug?.split("/").slice(0, 2).join(" / ")}</span>
              <h3>
                <a href={resolveRelative(fileData.slug!, note.slug!)}>{note.frontmatter?.title}</a>
              </h3>
            </div>
            <span aria-hidden="true">↗</span>
          </li>
        ))}
      </ol>
    </section>
  )
}
export default (() => Feed) satisfies QuartzComponentConstructor
