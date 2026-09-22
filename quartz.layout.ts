import { h } from "preact"
import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import PortfolioNav from "./quartz/components/PortfolioNav"
import JournalFeed from "./quartz/components/JournalFeed"
import { QuartzComponent } from "./quartz/components/types"
function localized(component: QuartzComponent): QuartzComponent {
  const Wrapped: QuartzComponent = (props) =>
    h(component, {
      ...props,
      cfg: { ...props.cfg, locale: props.fileData.frontmatter?.lang === "ja" ? "ja-JP" : "ko-KR" },
    })
  Wrapped.css = component.css
  Wrapped.beforeDOMLoaded = component.beforeDOMLoaded
  Wrapped.afterDOMLoaded = component.afterDOMLoaded
  return Wrapped
}
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [JournalFeed()],
  footer: localized(
    Component.Footer({
      links: { GitHub: "https://github.com/BbangMxn", Email: "mailto:bbangmxn6484@outlook.kr" },
    }),
  ),
}
const left: QuartzComponent[] = [PortfolioNav()]
const noteOnly = (component: QuartzComponent) =>
  Component.ConditionalRender({
    component,
    condition: ({ fileData }) => {
      const slug = fileData.slug ?? ""
      const projectNote =
        /^(ja\/)?projects\//.test(slug) && !["projects/index", "ja/projects/index"].includes(slug)
      const knowledgeNote = /^(research|wiki|Diary|docs)\//.test(slug) && !slug.endsWith("/index")
      return projectNote || knowledgeNote
    },
  })
const right = [
  noteOnly(
    localized(
      Component.Graph({ localGraph: { showTags: false }, globalGraph: { showTags: false } }),
    ),
  ),
  noteOnly(localized(Component.Backlinks())),
  noteOnly(localized(Component.TableOfContents())),
]
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) => !page.fileData.frontmatter?.portfolio,
    }),
    Component.ConditionalRender({
      component: localized(Component.ContentMeta()),
      condition: (page) => !page.fileData.frontmatter?.portfolio,
    }),
    Component.TagList(),
  ],
  left,
  right,
}
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) => !page.fileData.frontmatter?.portfolio,
    }),
  ],
  left,
  right,
}
