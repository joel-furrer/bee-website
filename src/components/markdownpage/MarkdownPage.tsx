import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import remarkSlug from "remark-slug"
import remarkToc from "remark-toc"
import remarkStringify from "remark-stringify"
import "./MarkdownPage.css"

interface MarkdownPageProps {
    filePaths: string[]
    className?: string
}

function MarkdownPage({ filePaths, className = "" }: MarkdownPageProps) {
    const [content, setContent] = useState("")

    useEffect(() => {
        Promise.all(filePaths.map(path => fetch(path).then(res => res.text())))
            .then(async (contents) => {
                const rawMarkdown = contents.join("\n\n")

                const processed = await unified()
                    .use(remarkParse)
                    .use(remarkGfm)
                    .use(remarkSlug)
                    .use(remarkToc, { heading: 'Inhaltsverzeichnis', maxDepth: 2 })
                    .use(remarkStringify)
                    .process(rawMarkdown)

                setContent(String(processed))
            })
    }, [filePaths])

    return (
        <div className={`markdown-page ${className}`}>
            <ReactMarkdown
                children={content}
                remarkPlugins={[
                    remarkGfm,
                    remarkSlug,
                ]}
            />
        </div>
    )
}

export default MarkdownPage
