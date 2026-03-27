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
          name: "IBM Plex Sans KR",
          weights: [500, 700],
        },
        body: {
          name: "IBM Plex Sans KR",
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
          light: "#f3ede1",
          lightgray: "#ddd3c4",
          gray: "#766d61",
          darkgray: "#322c26",
          dark: "#111111",
          secondary: "#0b57d0",
          tertiary: "#d9482e",
          highlight: "rgba(241, 191, 50, 0.16)",
          textHighlight: "#f1bf3266",
        },
        darkMode: {
          light: "#171311",
          lightgray: "#332b26",
          gray: "#b6ab9d",
          darkgray: "#ede3d7",
          dark: "#fff6eb",
          secondary: "#7aa8ff",
          tertiary: "#ff8260",
          highlight: "rgba(255, 213, 102, 0.12)",
          textHighlight: "#d9482e44",
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
