export type SkillLevel = 'gold' | 'silver' | 'bronze'

export const levelOrder: Record<SkillLevel, number> = {
  gold: 1,
  silver: 2,
  bronze: 3
}

export interface Skill {
  name: string
  level: SkillLevel
}

export interface SkillCategory {
    name: string
    skills: Skill[]
  }