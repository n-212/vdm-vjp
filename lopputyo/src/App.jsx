
import './App.css'
import { Routes, Route } from 'react-router-dom'
import AboutPage from "./pages/AboutPage"
import FeedPage from "./pages/FeedPage"
import SelectPage from './pages/SelectPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/select" element={<SelectPage />} />
      </Routes>
    </>
  )
}

export default App
