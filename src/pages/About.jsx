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
            I'm a developer based in Waterloo, Ontario, currently studying Systems Design Engineering at the University of Waterloo.
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing to open source,
            or working on side projects that push the boundaries of what I can create.
          </p>
          <p>
            I'm passionate about building applications that are not only functional but also delightful
            to use. Every line of code is an opportunity to make something great.
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
