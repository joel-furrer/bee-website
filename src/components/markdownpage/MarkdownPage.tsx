import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkSlug from "remark-slug"
import remarkToc from "remark-toc"
import "./MarkdownPage.css"

interface MarkdownPageProps {
    filePath: string
    showToc?: boolean
    className?: string
}

function MarkdownPage({ filePath, showToc = true, className = "" }: MarkdownPageProps) {
    const [content, setContent] = useState("")

    useEffect(() => {
        fetch(filePath)
            .then((res) => res.text())
            .then(setContent)
    }, [filePath])

    return (
        <div className={`markdown-page ${className}`}>
            <ReactMarkdown
                children={content}
                remarkPlugins={[
                    remarkGfm,
                    remarkSlug,
                    ...(showToc ? [remarkToc] : []),
                ]}
            />
        </div>
    )
}

export default MarkdownPage
