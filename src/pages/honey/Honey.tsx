import MarkdownPage from "@Components/markdownpage/MarkdownPage"
import Footer from "@Components/footer/Footer"

function Honey() {
    return (
        <>
            <MarkdownPage 
                filePaths={[
                    "/content/honey/honey.md"
                ]}
                showToc={true}
            />
            <Footer />
        </>
    )
}

export default Honey
