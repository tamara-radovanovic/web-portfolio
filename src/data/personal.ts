export const personal = {
  name: 'Tamara Radovanović',
  title: 'Junior Frontend Developer',
  email: 'tamararadovanovic02@gmail.com',
  phone: '+381 611482440',
  location: 'Serbia',
  bio: 'Recent Information Technology graduate focused on web development and modern frontend technologies. Motivated to apply academic knowledge in practice, quickly learn new tools, and contribute to collaborative development teams.',

  links: {
    github: 'https://github.com/tamara-radovanovic',
    linkedin: 'https://linkedin.com/in/tamara-radovanovic13',
  },

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
      institution: 'Faculty of Applied Management, Economics and Finance (MEF)',
      location: 'Belgrade, Serbia',
      period: '2021 – 2025',
      thesis: 'Application of Supercomputers in Industry: The Role of Artificial Intelligence in Process Optimization',
      description: [
      'During my studies I developed a foundation in software development, web technologies, and database systems. ' ,
      'I gained experience working with programming languages such as Python, PHP, Java, and JavaScript, along with HTML and CSS for web development. ', 
      'My coursework also included database fundamentals and data management concepts. ', 
      'In addition, I worked with graphic design tools including Adobe Illustrator, Photoshop, XD, and Figma, and was introduced to Arduino and basic hardware interaction as part of my studies.', 
      ],
    },
  ],

  languages: [
    { name: 'Serbian', level: 'Native' },
    { name: 'English', level: 'Advanced' },
    { name: 'Italian', level: 'Basic' },
  ],
} as const