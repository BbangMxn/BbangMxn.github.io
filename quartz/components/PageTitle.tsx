import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const currentSection = fileData.slug === "index" ? "home" : fileData.slug?.split("/")[0]
  const shortcuts = [
    { key: "projects", label: "Projects", description: "Build", href: `${baseDir}/projects` },
    { key: "research", label: "Research", description: "Study", href: `${baseDir}/research` },
    { key: "wiki", label: "Wiki", description: "Notes", href: `${baseDir}/wiki` },
  ]

  return (
    <div class={classNames(displayClass, "page-title")}>
      <a href={baseDir} class="brand-card">
        <span class="brand-mark">
          <img
            class="brand-avatar"
            src={`${baseDir}/static/profile.png`}
            alt={`${title} profile`}
          />
          <span class="brand-status">Live</span>
        </span>
        <span class="brand-copy">
          <span class="brand-kicker">Obsidian Publishing Hub</span>
          <span class="brand-title">{title}</span>
          <span class="brand-subtitle">Cache, JVM, backend architecture, and linked notes.</span>
        </span>
      </a>
      <div class="brand-meta" aria-label="Publishing stack">
        <span>Obsidian Vault</span>
        <span>Quartz Publish</span>
        <span>GitHub Pages</span>
      </div>
      <nav class="brand-shortcuts" aria-label="Primary sections">
        {shortcuts.map((item) => (
          <a
            href={item.href}
            class={item.key === currentSection ? "active" : undefined}
            data-section={item.key}
          >
            <span>{item.label}</span>
            <small>{item.description}</small>
          </a>
        ))}
      </nav>
    </div>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
