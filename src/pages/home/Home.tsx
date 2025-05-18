import wallpaper from "@Assets/bee-wallaper.jpg"
import "./Home.css"

function Home() {
    return (
        <div className="container__home" >
            <img
                className="home__wallpaper"
                src={wallpaper}
                alt="wallpaper"
            />
        </div>
    )
}

export default Home;
