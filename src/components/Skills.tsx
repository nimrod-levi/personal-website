import React from 'react'
import { skillsHeading, skillsDescription } from '../constants/siteData'
import { skills } from '../constants/skillsData'
import { Skill, SkillCategory } from '../types/skills'

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-heading">{skillsHeading}</h2>
        <p className="section-description">{skillsDescription}</p>
        <div className="skills-content">
          {skills.map((category: SkillCategory) => {
            return (
              <div key={category.name} className="skills-category">
                <h3 className="skills-category-title">{category.name}</h3>
                <div className="skills-grid">
                  {category.skills.map((skill: Skill, index: number) => (
                    <div key={index} className={`skill-item skill-${skill.level}`}>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills

