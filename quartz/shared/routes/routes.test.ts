import assert from "node:assert/strict"
import test from "node:test"
import { archiveFor, navigationFor } from "./index"

test("navigation matches exact sections and keeps Japanese destinations", () => {
  const links = navigationFor("ja/projects/hackathon/move-ai", "ja")
  assert.equal(links.length, 4)
  assert.deepEqual(
    links.filter((link) => link.active).map((link) => link.href),
    ["/ja/projects"],
  )
  assert.equal(
    navigationFor("projects-other", "ko").some((link) => link.active),
    false,
  )
})

test("study subtrees share navigation while archives only render at their entrances", () => {
  for (const slug of [
    "notes/research/Outbox/index",
    "notes/wiki/Java/javac",
    "notes/diary/index",
    "docs/spec",
  ]) {
    assert.deepEqual(
      navigationFor(slug, "ko")
        .filter((link) => link.active)
        .map((link) => link.href),
      ["/notes"],
    )
    assert.equal(archiveFor(slug), undefined)
  }
  assert.equal(archiveFor("ja/projects/index"), "projects")
  assert.equal(archiveFor("ja/projects/hackathon/index"), undefined)
  assert.equal(archiveFor("ja/notes"), "notes")
  assert.equal(archiveFor("notes/index"), "notes")
  assert.equal(archiveFor("ja/notes/index"), "notes")
})
