import { h } from "preact"
import type { QuartzComponent } from "../../../components/types"

export function localized(component: QuartzComponent): QuartzComponent {
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
