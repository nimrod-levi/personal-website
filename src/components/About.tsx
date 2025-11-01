import React from 'react'
import { aboutHeading, aboutDescription } from '../constants/siteData'
import { personalBio } from '../constants/personalInfo'

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-heading">{aboutHeading}</h2>
        <p className="section-description">{personalBio}</p>
        <p className="section-description">{aboutDescription}</p>
      </div>
    </section>
  )
}

export default About

