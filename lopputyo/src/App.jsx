
import './App.css'
import { Routes, Route } from 'react-router-dom'
import AboutPage from "./pages/AboutPage"
import FeedPage from "./pages/FeedPage"
import MainPage from "./pages/MainPage"
import SelectPage from './pages/SelectPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/feed/:id" element={<FeedPage />} />
        <Route path="/select" element={<SelectPage />} />
      </Routes>
    </>
  )
}

export default App
