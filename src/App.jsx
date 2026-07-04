import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Header from './header'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
