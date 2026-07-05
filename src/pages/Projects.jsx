import './Projects.css'
import activeAgingImg from '../assets/activeAgingOntarioFindPrograms.png'
import bookSiteImg from '../assets/bookSiteHome.png'
import nothinggImg from '../assets/nothinggListing.png'
import ufcFighterImg from '../assets/ufcFighterComparison.png'

const projects = [
  {
    title: 'Active Aging Ontario',
    desc: 'Active Aging Ontario (moveStrong) is a curated, searchable directory of exercise programs for older adults in Ontario, Canada. Built as a React app, it helps older adults, clinicians, and caregivers find community exercise classes, virtual coaching, and disease-specific programs filtered by city, goals, budget, and health conditions. The dataset combines information scraped from Healthline and GoodLife Fitness.',
    tags: ['React', 'Vite', 'Health-tech', 'Web-scraping'],
    link: 'https://oliverbarta.github.io/moveStrong/',
    github: 'https://github.com/OliverBarta/moveStrong',
    image: activeAgingImg,
  },
  {
    title: 'Book Site',
    desc: 'A full-stack book discovery application featuring an automated backend and an interactive frontend. The app uses a custom web scraper to feed book data into a Supabase database. The React frontend dynamically displays the collection, while browser LocalStorage is utilized to seamlessly track user progress and saved favorites without requiring a heavy authentication system.',
    tags: ['React', 'Node.js', 'Web-scraping', 'PostgreSQL', 'supabase'],
    link: 'https://book-site-six-zeta.vercel.app',
    github: 'https://github.com/OliverBarta/Book-Site',
    image: bookSiteImg,
  },
  {
    title: 'NOTHINGG',
    desc: 'A full-stack e-commerce clothing website using a Node.js backend, HTML/CSS frontend, and Supabase database. Using Supabase I made a secure authentication system allowing authorized administrators to dynamically add, edit, and remove products. The admin system built in a custom management interface so admins never have to interact with the database or any code.',
    tags: ['Node.js', 'JavaScript', 'PostgreSQL', 'supabase'],
    link: 'https://oliverbarta.github.io/AlistairWebsite/',
    github: 'https://github.com/OliverBarta/AlistairWebsite',
    image: nothinggImg,
  },
  {
    title: 'UFC Fighter',
    desc: 'A comprehensive web app for exploring a database of every UFC fighter, their stats, fight history, and rankings. With images of fighters found using the Wikipedia API.',
    tags: ['API', 'CSV parsing'],
    link: 'https://oliverbarta.github.io/UFC-fighter/',
    github: 'https://github.com/OliverBarta/UFC-fighter',
    image: ufcFighterImg,
  },
]

function Projects() {
  return (
    <section id="projects">
      <span className="section-label">Projects</span>
      <h2 className="section-title">Things I've built</h2>
      <p className="section-subtitle">
        Some projects I've worked on. Each one taught me something new.
      </p>
      <div className="projects-list">
        {projects.map((project, i) => (
          <article key={i} className="project-card" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="project-card-body">
              <div className="project-card-header">
                <div className="project-folder-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div className="project-links">
                  {project.github && project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noreferrer" title="Source Code">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {project.link && project.link !== '#' && (
                    <a href={project.link} target="_blank" rel="noreferrer" title="Live Demo">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="project-image">
              <img className='project-image-placeholder' src={project.image} alt={`${project.title} screenshot`} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
