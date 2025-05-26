import MarkdownPage from "@Components/markdownpage/MarkdownPage"
import Footer from "@Components/footer/Footer"

function Wiki() {
    return (
        <>
            <MarkdownPage 
                filePaths={[
                    "/content/wiki/bienenarten.md"
                ]}
                showToc={true}
            />
            <Footer />
        </>
    )
}

export default Wiki

