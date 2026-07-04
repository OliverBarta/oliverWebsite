import './Home.css'

function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
      </div>
      <div className="hero-content">
        <p className="hero-greeting">Hi, my name is</p>
        <h1 className="hero-name">Oliver Barta</h1>
        <h2 className="hero-tagline">I build things for the web</h2>
        <p className="hero-desc">
          A passionate developer crafting clean, modern, and impactful digital experiences.
          Focused on building full-stack applications that make a difference.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View my work</a>
          <a href="#contact" className="btn btn-secondary">Get in touch</a>
        </div>
      </div>
    </section>
  )
}

export default Home
