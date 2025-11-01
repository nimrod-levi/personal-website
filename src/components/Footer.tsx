import React from 'react'
import { footerText } from '../constants/siteData'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">{footerText}</p>
      </div>
    </footer>
  )
}

export default Footer

