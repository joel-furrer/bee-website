import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkSlug from "remark-slug"
import "./MarkdownPage.css"

interface MarkdownPageProps {
    filePaths: string[]
    showToc?: boolean
    className?: string
}

// Hilfsfunktion, um aus Markdown-Content ein TOC als Markdown-String zu bauen
function generateTocMarkdown(markdown: string) {
    const lines = markdown.split("\n")
    const headings = lines
        .filter(line => line.match(/^#{2,3}\s+/)) // nur H2 und H3
        .map(line => {
            const level = line.startsWith("###") ? 3 : 2
            const text = line.replace(/^#{2,3}\s+/, "").trim()
            // Slugify ähnlich remarkSlug (einfach)
            const slug = text.toLowerCase().replace(/[^\w]+/g, "-").replace(/^-+|-+$/g, "")
            const indent = level === 3 ? "    " : ""
            return `${indent}- [${text}](#${slug})`
        })
    return "## Inhaltsverzeichnis\n\n" + headings.join("\n")
}

function MarkdownPage({ filePaths, showToc = true, className = "" }: MarkdownPageProps) {
    const [content, setContent] = useState("")
    const [toc, setToc] = useState("")

    useEffect(() => {
        Promise.all(filePaths.map(path => fetch(path).then(res => res.text())))
            .then(contents => {
                const fullContent = contents.join("\n\n")
                setContent(fullContent)
                if (showToc) {
                    setToc(generateTocMarkdown(fullContent))
                }
            })
    }, [filePaths, showToc])

    return (
        <div className={`markdown-page ${className}`}>
            {showToc && toc && (
                <div className="toc">
                    <ReactMarkdown children={toc} remarkPlugins={[remarkSlug]} />
                </div>
            )}
            <ReactMarkdown children={content} remarkPlugins={[remarkGfm, remarkSlug]} />
        </div>
    )
}

export default MarkdownPage

