import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Portfolio & Notes",
    pageTitleSuffix: "",
    enableSPA: false,
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
          name: "Gothic A1",
          weights: [500, 700, 800],
        },
        body: {
          name: "Gothic A1",
          weights: [400, 500, 700],
          includeItalic: false,
        },
        code: {
          name: "JetBrains Mono",
          weights: [400, 500, 600],
          includeItalic: false,
        },
      },
      colors: {
        lightMode: {
          light: "#f7f7f2",
          lightgray: "#d3d3cd",
          gray: "#62625e",
          darkgray: "#242422",
          dark: "#181818",
          secondary: "#c33121",
          tertiary: "#c33121",
          highlight: "rgba(241, 191, 50, 0.16)",
          textHighlight: "#f1bf3266",
        },
        darkMode: {
          light: "#f7f7f2",
          lightgray: "#d3d3cd",
          gray: "#62625e",
          darkgray: "#242422",
          dark: "#181818",
          secondary: "#c33121",
          tertiary: "#c33121",
          highlight: "rgba(255, 213, 102, 0.12)",
          textHighlight: "#c3312144",
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
