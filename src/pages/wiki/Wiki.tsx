import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'

function Wiki() {
    const [content, setContent] = useState("")

    useEffect(() => {
        fetch("/content/wiki/bienenarten.md")
            .then(res => res.text())
            .then(setContent)
    }, [])

    return (
        <div className="wiki__container">
            <h1>Wiki</h1>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    )
}

export default Wiki

