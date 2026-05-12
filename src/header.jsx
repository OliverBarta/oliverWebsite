import './header.css'
import githubImg from './assets/githubIcon.png'
import linkedInImg from './assets/linkedinIcon.png'
import downloadImg from './assets/downloadIcon.png'
import oliverResume from './assets/Oliver_Barta_s_Resume.pdf'

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className='links'>
            <a href="https://github.com/OliverBarta" target="_blank" rel="noreferrer" title="GitHub"><img src={githubImg} alt="GitHub" /></a>
            <a href="https://www.linkedin.com/in/oliverbarta/" target="_blank" rel="noreferrer" title="LinkedIn"><img src={linkedInImg} alt="LinkedIn" /></a>
            <a href={oliverResume} download="Oliver_Barta_Resume.pdf" title="Download Resume"><img src={downloadImg} alt="Download Resume"></img></a>
        </div>
      </nav>
    </header>
  )
}
  
export default Header