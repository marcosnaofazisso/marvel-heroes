import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Characters from './pages/characters/Characters'
import Home from './pages/home/Home'
import Selected from './pages/selected/Selected'

function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/characters" element={<Characters />} />
                <Route path="/selected" element={<Selected />} />
            </Routes>
        </>
    )
}
export default AppRoutes;
