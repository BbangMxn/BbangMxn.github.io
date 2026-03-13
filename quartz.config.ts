import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Bbang",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "ko-KR",
    baseUrl: "bbangmxn.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: {
          name: "Noto Sans KR",
          weights: [500, 700],
        },
        body: {
          name: "Noto Sans KR",
          weights: [400, 500, 700],
          includeItalic: false,
        },
        code: {
          name: "IBM Plex Mono",
          weights: [400, 500],
          includeItalic: false,
        },
      },
      colors: {
        lightMode: {
          light: "#f4f2ed",
          lightgray: "#ddd7ce",
          gray: "#878177",
          darkgray: "#55504a",
          dark: "#1d1b19",
          secondary: "#4f7386",
          tertiary: "#a28567",
          highlight: "rgba(79, 115, 134, 0.08)",
          textHighlight: "#d8c69b66",
        },
        darkMode: {
          light: "#151615",
          lightgray: "#323436",
          gray: "#a39c92",
          darkgray: "#ede8df",
          dark: "#f6f2eb",
          secondary: "#9cbccc",
          tertiary: "#c2a485",
          highlight: "rgba(156, 188, 204, 0.10)",
          textHighlight: "#8d775240",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
