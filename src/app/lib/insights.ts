import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { marked } from 'marked'

/**
 * Insights articles live as Markdown files in /content/insights.
 * The file name (without .md) is the URL slug: my-article.md → /insights/my-article.
 *
 * Front matter:
 *   title:       Article title (also the page <title>)
 *   description: One-line summary, shown on the index and used as the meta description
 *   date:        Publication date, YYYY-MM-DD
 *   author:      Author name
 *   authorBio:   One or two sentences about the author
 */

const DIR = path.join(process.cwd(), 'content', 'insights')

export type ArticleMeta = {
  slug: string
  title: string
  description: string
  date: string // YYYY-MM-DD
  author: string
  authorBio: string
}

export type Article = ArticleMeta & { html: string }

function text(data: Record<string, unknown>, key: string, file: string): string {
  const v = data[key]
  // YAML turns an unquoted 2026-11-15 into a Date.
  if (v instanceof Date) return v.toISOString().slice(0, 10)
  if (typeof v === 'string' && v.trim()) return v.trim()
  throw new Error(`content/insights/${file}: front matter is missing "${key}"`)
}

function read(file: string): Article {
  const { data, content } = matter(fs.readFileSync(path.join(DIR, file), 'utf8'))
  const date = text(data, 'date', file)
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error(`content/insights/${file}: date must be YYYY-MM-DD`)
  return {
    slug: file.replace(/\.md$/, ''),
    title: text(data, 'title', file),
    description: text(data, 'description', file),
    date,
    author: text(data, 'author', file),
    authorBio: text(data, 'authorBio', file),
    html: marked.parse(content, { async: false }),
  }
}

function files(): string[] {
  if (!fs.existsSync(DIR)) return []
  return fs.readdirSync(DIR).filter((f) => f.endsWith('.md'))
}

/** All articles, newest first. */
export function getArticles(): ArticleMeta[] {
  return files()
    .map((f) => {
      const { html: _html, ...meta } = read(f)
      return meta
    })
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.title.localeCompare(b.title)))
}

export function getArticle(slug: string): Article | null {
  const file = `${slug}.md`
  return files().includes(file) ? read(file) : null
}

/** "November 15, 2026" — formatted in UTC so the date never shifts by time zone. */
export function formatDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
