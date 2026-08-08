import { useState, useEffect } from 'react'
import { scrollToId } from './scrollToId'
import './header.css'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, id) => {
    e.preventDefault()
    scrollToId(id)
  }
// comment
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <a href="#home" onClick={e => handleNav(e, 'home')} className="logo">OB</a>
        <ul className="nav-links">
          {navItems.map(item => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={e => handleNav(e, item.id)}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
