import wallpaper from "@Assets/bee-wallaper.jpg"
import "./Home.css"

function Home() {
    return (
        <>
            <img
                className="home__wallpaper"
                src={wallpaper}
                alt="wallpaper"
            />
        </>
    )
}

export default Home;
