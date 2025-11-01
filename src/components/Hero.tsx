import React from 'react'
import { heroHeading, heroSubheading, heroButtonText } from '../constants/siteData'
import { personalName } from '../constants/personalInfo'

const Hero: React.FC = () => {
  const handleContactClick = (): void => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <h1 className="hero-heading">
          {heroHeading} <span className="hero-name">{personalName}</span>
        </h1>
        <p className="hero-subheading">{heroSubheading}</p>
        <button className="hero-button" onClick={handleContactClick}>
          {heroButtonText}
        </button>
      </div>
    </section>
  )
}

export default Hero

