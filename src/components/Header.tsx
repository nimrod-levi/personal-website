import React, { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { navigationItems, themeToggleLightLabel, themeToggleDarkLabel, siteName } from '../constants/siteData'
import { SunIcon, MoonIcon } from '../constants/icons'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const { isDarkMode, toggleTheme } = useTheme()

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-left">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={isDarkMode ? themeToggleDarkLabel : themeToggleLightLabel}
            >
              {isDarkMode ? <SunIcon /> : <MoonIcon />}
            </button>
            <a href="#home" className="nav-logo">{siteName}</a>
          </div>
          <div className="nav-right">
            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              {navigationItems.map(item => (
                <li key={item.id} className="nav-item">
                  <a 
                    href={item.href} 
                    className="nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <button 
              className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

