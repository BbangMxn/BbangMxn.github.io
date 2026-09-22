import {
  QuartzComponents as Component,
  localized,
  type PageLayout,
  type SharedLayout,
  type QuartzComponent,
} from "../../shared/lib/quartz"
import { SiteNavigation } from "../../widgets/site-navigation"
import { ContentIndex } from "../../widgets/content-index"
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [ContentIndex()],
  footer: localized(
    Component.Footer({
      links: { GitHub: "https://github.com/BbangMxn", Email: "mailto:bbangmxn6484@outlook.kr" },
    }),
  ),
}
const left: QuartzComponent[] = [SiteNavigation()]
const noteOnly = (component: QuartzComponent) =>
  Component.ConditionalRender({
    component,
    condition: ({ fileData }) => {
      const slug = fileData.slug ?? ""
      const projectNote =
        /^(ja\/)?projects\//.test(slug) && !["projects/index", "ja/projects/index"].includes(slug)
      const knowledgeNote =
        /^(notes\/(research|wiki|diary)|docs)\//.test(slug) && !slug.endsWith("/index")
      return projectNote || knowledgeNote
    },
  })
const right = [noteOnly(localized(Component.TableOfContents()))]
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
