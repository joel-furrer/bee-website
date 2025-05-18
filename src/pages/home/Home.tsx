import wallpaper from "@Assets/bee-wallaper.jpg"
import "./Home.css"

function Home() {
    return (
        <>
            <h1>Home</h1>
            <img
                className="home__wallpaper"
                src={wallpaper}
                alt="wallpaper"
            />
        </>
    )
}

export default Home;
