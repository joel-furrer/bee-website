import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import "./App.css"
import "./styles/Variables.css"
import Header from "./components/header/Header"
import Home from "./pages/home/Home.tsx"
import Wiki from "./pages/wiki/Wiki"
import Honey from "./pages/honey/Honey.tsx"
import Tasks from "./pages/tasks/Tasks.tsx"

function App() {

    return (
        <>
            <Header/>
            <div className="app__layout" >
                <main className="main__main" >
                    <Router>
                        <Routes>
                            <Route 
                                path="/" 
                                element={<Navigate to="/home" replace />} 
                            />
                            <Route path="/home" element={<Home />} />
                            <Route path="/wiki" element={<Wiki />} />
                            <Route path="/honey" element={<Honey />} />
                            <Route path="/tasks" element={<Tasks />} />
                        </Routes>
                    </Router>
                </main>
            </div>
        </>
    )
}

export default App
