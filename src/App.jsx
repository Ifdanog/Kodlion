import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Phylosophy from "./pages/Phylosophy"
import Project from "./pages/Project"
import ProjectDetails from "./pages/ProjectDetails"
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import PreLoader from "./components/Preloader"
import ParticlesBackground from './components/ParticlesBackground'

function App() {
  return (
    <>
      <PreLoader />
      <Navbar />
      <ParticlesBackground />
      <AnimatePresence>
      <Routes key='modal'>
        <Route path='/' element={<Home key="home" />} />
        <Route path='/about' element={<About key="about" />} />
        <Route path='/contact' element={<Contact key="contact" />} />
        <Route path='/project' element={<Project key="project" />} />
        <Route path='/project/:number' element={<ProjectDetails />} />
        <Route path='/phylosophy' element={<Phylosophy key="phylosophy" />} />
      </Routes>
    </AnimatePresence>
    </>
  )
}

export default App
