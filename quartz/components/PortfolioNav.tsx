import { QuartzComponent, QuartzComponentConstructor } from "./types"
const Nav: QuartzComponent = (props) => {
  const { fileData } = props
  const ja = fileData.frontmatter?.lang === "ja"
  const home = ja ? "/ja/" : "/"
  const slug = fileData.slug ?? ""
  const active = (section: string) =>
    slug.replace(/^ja\//, "").startsWith(section) ? ("page" as const) : undefined
  const alternate = String(fileData.frontmatter?.alternate ?? (ja ? "/" : "/ja/"))
  return (
    <nav class="folio-nav" aria-label={ja ? "メインナビゲーション" : "주 메뉴"}>
      <a class="folio-brand" href={home}>
        <img
          class="sidebar-portrait"
          src="/static/profile.png"
          alt={ja ? "プロフィール画像" : "프로필 이미지"}
          width="144"
          height="144"
        />
      </a>
      <div class="folio-links">
        <a
          href={home}
          aria-current={
            fileData.slug === "index" || fileData.slug === "ja/index" ? "page" : undefined
          }
        >
          {ja ? "ホーム" : "홈"}
        </a>
        <a
          href={ja ? "/ja/notes" : "/notes"}
          aria-current={active("notes") ?? active("research") ?? active("wiki") ?? active("Diary")}
        >
          {ja ? "ノート" : "노트"}
        </a>
        <a href={ja ? "/ja/projects" : "/projects"} aria-current={active("projects")}>
          {ja ? "プロジェクト" : "프로젝트"}
        </a>
        <a href={ja ? "/ja/about" : "/about"} aria-current={active("about")}>
          {ja ? "自己紹介" : "소개"}
        </a>
      </div>
      <div class="folio-language" aria-label={ja ? "言語" : "언어"}>
        <a
          href={ja ? alternate : undefined}
          aria-current={!ja ? "page" : undefined}
          lang="ko"
          hrefLang="ko"
        >
          한국어
        </a>
        <span>/</span>
        <a
          href={!ja ? alternate : undefined}
          aria-current={ja ? "page" : undefined}
          lang="ja"
          hrefLang="ja"
        >
          日本語
        </a>
      </div>
    </nav>
  )
}
export default (() => Nav) satisfies QuartzComponentConstructor
