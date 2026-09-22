import assert from "node:assert/strict"
import test from "node:test"
import { documentGroups } from "./catalog"

test("project archive includes both index spellings and excludes detail pages and translations", () => {
  const groups = documentGroups(
    [
      { slug: "projects/Panon/index" },
      { slug: "projects/AlLang/Index" },
      { slug: "projects/Panon/architecture/index" },
      { slug: "projects/Panon/spec" },
      { slug: "ja/projects/nazgul" },
      { slug: "projects/private/index", frontmatter: { draft: true } },
    ],
    "projects",
    "ko",
  )
  assert.deepEqual(groups[0].documents.map((entry) => entry.slug).sort(), [
    "projects/AlLang/Index",
    "projects/Panon/index",
  ])
})

test("study archive combines research and wiki by topic without site guides or folder indexes", () => {
  const groups = documentGroups(
    [
      { slug: "notes/research/Java/jvm", dates: { modified: new Date("2026-09-20") } },
      { slug: "notes/wiki/Java/javac", dates: { modified: new Date("2026-09-22") } },
      { slug: "notes/research/Java/index" },
      { slug: "notes/wiki/site/folder-structure" },
      { slug: "notes/wiki/portfolio-standard" },
      { slug: "notes/diary/experience" },
    ],
    "notes",
    "ja",
  )
  assert.equal(groups.length, 2)
  const java = groups.find((group) => group.key === "Java")!
  assert.deepEqual(
    java.documents.map((entry) => entry.slug),
    ["notes/wiki/Java/javac", "notes/research/Java/jvm"],
  )
  assert.equal(groups.find((group) => group.key === "Diary")?.title, "日常と経験")
})

test("portfolio groups hackathon and capstone projects without listing category hubs", () => {
  const groups = documentGroups(
    [
      { slug: "projects/hackathon/index" },
      { slug: "projects/hackathon/move-ai" },
      { slug: "projects/capstone/index" },
      { slug: "ja/projects/hackathon/index" },
      { slug: "projects/Panon/index" },
    ],
    "projects",
    "ko",
  )
  assert.deepEqual(
    groups.map((group) => [group.key, ...group.documents.map((entry) => entry.slug)]),
    [
      ["projects", "projects/Panon/index"],
      ["hackathon", "projects/hackathon/move-ai"],
      ["capstone", "projects/capstone/index"],
    ],
  )
})
