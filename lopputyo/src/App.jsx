import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import AboutPage from "./pages/AboutPage"
import FeedPage from "./pages/FeedPage"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/feed" element={<FeedPage />} />
      </Routes>
    </>
  )
}

export default App
