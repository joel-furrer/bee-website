import MarkdownPage from "@Components/markdownpage/MarkdownPage"
import Footer from "@Components/footer/Footer"

function Tasks() {
    return (
        <>
            <MarkdownPage 
                filePaths={[
                    "/content/tasks/tasks.md"
                ]}
                showToc={true}
            />
            <Footer />
        </>
    )
}

export default Tasks
