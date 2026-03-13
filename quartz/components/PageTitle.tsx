import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)

  return (
    <div class={classNames(displayClass, "page-title")}>
      <a href={baseDir} class="brand-card">
        <img class="brand-avatar" src={`${baseDir}/static/profile.png`} alt={`${title} profile`} />
        <span class="brand-copy">
          <span class="brand-kicker">Portfolio</span>
          <span class="brand-title">{title}</span>
          <span class="brand-subtitle">Projects / Research / Wiki / Diary</span>
        </span>
      </a>
    </div>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
