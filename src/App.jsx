import Home from './pages/Home'
import ProjectSlide from './pages/Projects'
import { projects } from './data/projects'
import Contact from './pages/Contact'
import Header from './header'
import Slideshow from './slideshow'
import './App.css'

function App() {
  return (
    <div className="app">
      <Slideshow>
        <Home />
        {projects.map((project, i) => (
          <ProjectSlide key={project.title} project={project} index={i} />
        ))}
        <Contact />
      </Slideshow>
    </div>
  )
}

export default App
