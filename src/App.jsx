import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Header from './header'
import Slideshow from './slideshow'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* <Header /> */}
      <Slideshow>
        <Home />
        <Projects />
        <Contact />
      </Slideshow>
    </div>
  )
}

export default App
