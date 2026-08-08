import { useCallback, useEffect, useState } from 'react'
import './Projects.css'

export function ProjectCarousel({ project }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [ratio, setRatio] = useState(null)
  const count = project.images.length
  const current = ((index % count) + count) % count

  useEffect(() => {
    const img = new Image()
    img.onload = () => setRatio(img.naturalWidth / img.naturalHeight)
    img.src = project.images[0]
  }, [project.images])

  const go = useCallback(dir => setIndex(i => i + dir), [])

  useEffect(() => {
    if (count <= 1 || paused) return
    const id = setInterval(() => go(1), 8000)
    return () => clearInterval(id)
  }, [count, paused, go])

  const cardStyle = rel => {
    if (rel === 0) return { '--x': '0%', '--y': '0px', '--scale': 1, '--opacity': 1, '--z': 30 }
    if (rel === 1) return { '--x': '100%', '--y': '18px', '--scale': 0.9, '--opacity': 0.92, '--z': 20 }
    if (rel === -1) return { '--x': '-160%', '--y': '0px', '--scale': 0.85, '--opacity': 0, '--z': 10 }
    return { '--x': `${rel * 100}%`, '--y': '0px', '--scale': 0.85, '--opacity': 0, '--z': 10 }
  }

  const slots = []
  for (let j = index - 1; j <= index + 2; j++) {
    const rel = j - index
    const image = project.images[((j % count) + count) % count]
    slots.push({ key: j, image, rel })
  }

  return (
    <div
      className="project-carousel"
      onClick={() => go(1)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="project-carousel-stack" style={{ aspectRatio: ratio || 4 / 3 }}>
        {slots.map(({ key, image, rel }) => (
          <a
            key={key}
            className="project-carousel-card"
            target="_blank"
            rel="noreferrer"
            data-animate={rel === 0 || rel === 1 || rel === -1 ? 1 : 0}
            style={cardStyle(rel)}
          >
            <img src={image} alt={`${project.title} screenshot ${(((key % count) + count) % count) + 1}`} />
          </a>
        ))}
        <button
          type="button"
          className="project-carousel-arrow prev"
          onClick={e => {
            e.stopPropagation()
            go(-1)
          }}
          aria-label="Previous image"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          type="button"
          className="project-carousel-arrow next"
          onClick={e => {
            e.stopPropagation()
            go(1)
          }}
          aria-label="Next image"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
      <div className="project-carousel-dots">
        {project.images.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`project-carousel-dot${i === current ? ' active' : ''}`}
            onClick={e => {
              e.stopPropagation()
              go(i - current)
            }}
            aria-label={`Show image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export function ProjectSlide({ project, index }) {
  const number = String(index + 1).padStart(2, '0')
  const orientation = project.imageOrientation === 'horizontal' ? 'horizontal' : project.imageOrientation === 'carousel' ? 'carousel' : 'vertical'
  const gridCount = orientation === 'vertical' && [3, 4].includes(project.images.length) ? project.images.length : 0
  return (
    <section className="slide project-slide" id={index === 0 ? 'projects' : undefined}>
      <div className={`project-slide-content ${index % 2 === 1 ? 'reverse' : ''}`}>
        <div className="project-slide-body">
          <span className="section-label" data-slide-in>Project {number}</span>
          <h2 className="project-slide-title" data-slide-in>{project.title}</h2>
          <p className="project-slide-desc" data-slide-in>{project.desc}</p>
          <div className="project-tags" data-slide-in>
            {project.tags.map(tag => (
              <span key={tag} className="project-tag">{tag}</span>
            ))}
          </div>
          <div className="project-slide-actions" data-slide-in>
            {project.github && project.github !== '#' && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                Source
              </a>
            )}
            {project.link && project.link !== '#' && (
              <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Visit
              </a>
            )}
          </div>
        </div>
        <div className={`project-slide-images ${orientation}${gridCount ? ` grid grid-${gridCount}` : ''}`} data-slide-in>
          {orientation === 'carousel'
            ? <ProjectCarousel project={project} />
            : project.images.map((image, i) => (
                <a key={i} target="_blank" rel="noreferrer" className="project-slide-image">
                  <img src={image} alt={`${project.title} screenshot ${i + 1}`} />
                </a>
              ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectSlide