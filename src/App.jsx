import { Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage";
import ContactPage from "./pages/ContactPage";
import "./App.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="contactUs" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
