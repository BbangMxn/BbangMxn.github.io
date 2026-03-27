import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

type NavItem = {
  href: string
  label: string
  match: (slug: string) => boolean
}

const navItems: NavItem[] = [
  {
    href: "/projects",
    label: "프로젝트",
    match: (slug) => slug === "projects" || slug.startsWith("projects/"),
  },
  {
    href: "/research",
    label: "연구",
    match: (slug) => slug === "research" || slug.startsWith("research/"),
  },
  {
    href: "/docs",
    label: "문서",
    match: (slug) => slug === "docs" || slug.startsWith("docs/"),
  },
  {
    href: "/wiki",
    label: "위키",
    match: (slug) => slug === "wiki" || slug.startsWith("wiki/"),
  },
  {
    href: "/about",
    label: "소개",
    match: (slug) => slug === "about",
  },
  {
    href: "/resume",
    label: "이력",
    match: (slug) => slug === "resume",
  },
]

const GlobalHeader: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  const slug = fileData.slug ?? ""

  return (
    <div class={classNames(displayClass, "site-header-shell")}>
      <div class="site-header-inner">
        <a href={baseDir} class="site-header-brand" aria-label="홈으로 이동">
          <span class="site-header-mark">B</span>
          <strong class="site-header-wordmark">Bbang</strong>
        </a>

        <nav class="site-header-nav" aria-label="주요 섹션">
          {navItems.map((item) => (
            <a
              href={`${baseDir}${item.href}`}
              class={item.match(slug) ? "site-header-link is-active" : "site-header-link"}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default (() => GlobalHeader) satisfies QuartzComponentConstructor
