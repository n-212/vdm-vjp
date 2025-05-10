import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import AboutPage from "./pages/AboutPage"
import FeedPage from "./pages/FeedPage"
import MainPage from "./pages/MainPage"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/feed" element={<FeedPage />} />
      </Routes>
    </>
  )
}

export default App
