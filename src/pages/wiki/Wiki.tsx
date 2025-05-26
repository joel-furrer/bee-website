import MarkdownPage from "@Components/markdownpage/MarkdownPage"
import Footer from "@Components/footer/Footer"

function Wiki() {
    return (
        <>
            <MarkdownPage 
                filePaths={[
                    "/content/wiki/bienen.md"
                ]}
                showToc={true}
            />
            <Footer />
        </>
    )
}

export default Wiki

