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
        <img class="brand-avatar" src={`${baseDir}/static/profile.png`} alt={`${title} 프로필`} />
        <span class="brand-copy">
          <span class="brand-kicker">포트폴리오</span>
          <span class="brand-title">{title}</span>
          <span class="brand-subtitle">프로젝트 / 연구 / 위키 / 다이어리</span>
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
