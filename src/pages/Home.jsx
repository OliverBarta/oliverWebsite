import './Home.css'
import { scrollToId } from '../scrollToId'

function Home() {
  return (
    <section id="home" className="slide hero">
      <div className="hero-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
      </div>
      <div className="hero-content">
        <p className="hero-greeting" data-slide-in>Hi, my name is</p>
        <h1 className="hero-name" data-slide-in>Oliver Barta</h1>
        {/* <h2 className="hero-tagline" data-slide-in>Engineering student at the University of Waterloo</h2> */}
        <p className="hero-desc" data-slide-in>
          Systems Design Engineering student at the University of Waterloo
        </p>
        <div className="hero-actions" data-slide-in>
          <a href="#projects" onClick={e => { e.preventDefault(); scrollToId('projects') }} className="btn btn-primary">View my work</a>
          <a href="#contact" onClick={e => { e.preventDefault(); scrollToId('contact') }} className="btn btn-secondary">Get in touch</a>
        </div>
      </div>
    </section>
  )
}

export default Home