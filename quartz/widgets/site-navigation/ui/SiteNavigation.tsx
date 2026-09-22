import type { QuartzComponent, QuartzComponentConstructor } from "../../../shared/lib/quartz"
import { navigationFor } from "../../../shared/routes"
const Nav: QuartzComponent = (props) => {
  const { fileData } = props
  const ja = fileData.frontmatter?.lang === "ja"
  const home = ja ? "/ja/" : "/"
  const slug = fileData.slug ?? ""
  const links = navigationFor(slug, ja ? "ja" : "ko")
  const alternate = String(fileData.frontmatter?.alternate ?? (ja ? "/" : "/ja/"))
  return (
    <nav class="folio-nav" aria-label={ja ? "メインナビゲーション" : "주 메뉴"}>
      <a class="folio-brand" href={home} aria-label={ja ? "ホームへ" : "홈으로"}>
        <img
          class="sidebar-portrait"
          src="/static/profile.png"
          alt={ja ? "プロフィール画像" : "프로필 이미지"}
          width="144"
          height="144"
        />
      </a>
      <div class="folio-links">
        {links.map((link) => (
          <a key={link.href} href={link.href} aria-current={link.active ? "page" : undefined}>
            {link.label}
          </a>
        ))}
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
