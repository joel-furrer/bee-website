import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import "./styles/Variables.css"
import wallpaper from "./assets/bee-wallaper.jpg"
import Header from "./components/header/Header"
import Wiki from "./pages/wiki/Wiki"
import Honey from "./pages/honey/Honey.tsx"

function App() {

    return (
        <>
            <Header/>
            <main 
                className="main__main"
            >
                <img
                    className="wallpaper"
                    src={wallpaper} 
                    alt="wallpaper" 
                />
                <Router>
                    <Routes>
                        <Route path="/wiki" element={<Wiki />} />
                        <Route path="/honey" element={<Honey />} />
                    </Routes>
                </Router>
            </main>
        </>
    )
}

export default App
