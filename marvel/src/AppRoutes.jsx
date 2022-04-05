import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from './App'
import Characters from './pages/characters/Characters'
import Home from './pages/home/Home'

function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/characters" element={<Characters />} />
                <Route path="/selected" element={<App />} />
            </Routes>
        </>
    )
}
export default AppRoutes;
