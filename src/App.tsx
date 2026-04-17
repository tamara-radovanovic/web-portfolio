import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar";
import HomePage from "./pages/HomePage"
import ProjectDetailPage from "./pages/ProjectDetailPage"
import NotFoundPage from "./pages/NotFoundPage";
function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App