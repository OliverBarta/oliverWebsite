import './About.css'

const skills = [
  'JavaScript', 'React', 'Node.js',
  'Python', 'HTML/CSS', 'Git', 'REST APIs',
  'PostgreSQL', 'C++', 'Docker',
]

function About() {
  return (
    <section id="about">
      <span className="section-label">About</span>
      <h2 className="section-title">A bit about me</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
          I'm a Systems Design Engineering student at the University of Waterloo. I love learning new technologies and building things that are useful, fun, or just interesting to me.
          </p>
          <p>
          Recently I’ve been doing a lot of full stack web development. I’ve been using React, building web-scrapers, using APIs, and using databases like Supabase.
          </p>
          <p>
          When I'm not coding, I'm usually playing soccer, building PCs, or studying for an upcoming test.
          </p>
        </div>
        <div className="about-skills">
          <h3>Technologies I work with</h3>
          <div className="skills-grid">
            {skills.map(skill => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
