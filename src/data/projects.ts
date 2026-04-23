import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'school-management-system',
    title: 'School Management System',
    description: 'Full-stack web application for managing schools — students, teachers, subjects, and grades.',
    longDescription: 'A full-stack school management application built with NestJS on the backend and React on the frontend. The system supports complete CRUD operations for students, teachers, and subjects, assigning teachers to classes, managing grades, and user authentication via JWT tokens.',
    techStack: ['React', 'TypeScript', 'NestJS', 'TypeORM', 'PostgreSQL', 'JWT', 'REST API', 'Formik'],
    githubUrl: 'https://github.com/tamara-radovanovic/school-app',
    featured: true,
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description: 'Personal portfolio and CV website built with modern frontend technologies.',
    longDescription: 'A personal portfolio website showcasing my projects, skills, and experience. Built with React, TypeScript, Vite, and Tailwind CSS v4.',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Motion'],
    githubUrl: 'GitHub link',
    featured: true,
  },
]