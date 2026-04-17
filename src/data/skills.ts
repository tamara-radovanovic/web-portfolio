export interface Skill {
  category: string
  items: string[]
}

export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
  },
  {
    category: 'Backend & Databases',
    items: ['NestJS', 'PHP', 'Python', 'Java', 'MySQL', 'SQLite'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Microsoft Office', 'Git', 'GitLab', 'GitHub', 'REST API', 'Figma', 'Adobe Illustrator', 'Adobe Photoshop','Adobe XD','Canva', 'AI Tools'],
  },
  {
    category: 'Currently Learning',
    items: ['NestJS'],
  },
]
