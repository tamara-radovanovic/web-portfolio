export const personal = {
  name: 'Tamara Radovanović',
  title: 'Junior Frontend Developer',
  email: 'tamararadovanovic02@gmail.com',
  phone: '+381 611482440',
  location: 'Serbia',
  bio: 'Recent Information Technology graduate focused on web development and modern frontend technologies. Motivated to apply academic knowledge in practice, quickly learn new tools, and contribute to collaborative development teams.',

  // Linkovi ka društvenim mrežama i profilima
  links: {
    github: 'https://github.com/tamara-radovanovic',
    linkedin: 'https://linkedin.com/in/tamara-radovanovic13',
  },

  // PDF CV koji će biti u public/ folderu
  // Visitor može da klikne i preuzme fajl direktno
  cvUrl: '/cv.pdf',

  experience: [
    {
      title: 'Junior Frontend Developer',
      company: 'Digital Access Logic',
      location: 'Požarevac, Serbia',
      period: 'December 2025 – Present',
      responsibilities: [
        'Refactored reusable React.js components following modern best practices with React 18 and Hooks.',
        'Integrated frontend features with a PHP-based REST API using Axios.',
        'Collaborated with the team in developing solutions for distributed systems.',
        'Presented application features and functionality to stakeholders.',
        'Using GitLab for version control and working in a Kanban environment.',
      ],
    },
    {
      title: 'Member of Track and Trace Team',
      company: 'Extra Mille International Inc',
      location: 'Belgrade, Serbia',
      period: 'July 2022 – July 2023',
      responsibilities: [
        'Coordinated logistics operations by tracking trucks across the USA.',
        'Resolved driver issues and maintained communication with drivers and brokers.',
        'Provided updates, documentation, and reports in English.',
      ],
    },
  ],

  education: [
    {
      degree: 'Bachelor of Information Technology',
      institution: 'Faculty of Applied Management, Economics and Finance',
      location: 'Belgrade, Serbia',
      period: '2021 – 2025',
      thesis: 'Application of Supercomputers in Industry: The Role of Artificial Intelligence in Process Optimization',
    },
  ],

  languages: [
    { name: 'Serbian', level: 'Native' },
    { name: 'English', level: 'Advanced' },
    { name: 'Italian', level: 'Basic' },
  ],
} as const