import React from 'react'
import { contactHeading, contactDescription } from '../constants/siteData'
import { githubUrl, linkedinUrl, personalEmail, xUrl } from '../constants/personalInfo'
import { EmailIcon, GitHubIcon, LinkedInIcon, XIcon } from '../constants/icons'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-heading">{contactHeading}</h2>
        <p className="section-description">{contactDescription}</p>
        <div className="contact-content">
          <div className="contact-links">
            <a
              href={`mailto:${personalEmail}`}
              className="contact-icon-link"
              aria-label="Email"
            >
              <EmailIcon />
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon-link"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon-link"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href={xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon-link"
              aria-label="X"
            >
              <XIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

