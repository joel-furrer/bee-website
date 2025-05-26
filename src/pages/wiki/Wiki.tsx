import MarkdownPage from "@Components/markdownpage/MarkdownPage"
import Footer from "@Components/footer/Footer"

function Wiki() {
    return (
        <>
            <MarkdownPage filePath="/content/wiki/bienenarten.md" />
            <Footer />
        </>
    )
}

export default Wiki

