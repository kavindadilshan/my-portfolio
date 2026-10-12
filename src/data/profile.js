// Single source of truth for all portfolio content.
// Every section reads from here — edit this file, not the components.
// Values marked TODO are placeholders waiting for real details.

export const profile = {
  name: 'Your Name', // TODO
  role: 'Software Engineer', // TODO
  tagline: 'I build clean, fast and accessible web experiences.', // TODO
  location: 'Colombo, Sri Lanka', // TODO
  availability: 'Open to new opportunities', // set to '' to hide the badge
  avatar: '', // e.g. '/avatar.jpg' placed in /public; empty shows initials
  resumeUrl: '', // e.g. '/resume.pdf' placed in /public; empty hides the button
  email: 'you@example.com', // TODO
  phone: '', // optional
  socials: {
    github: '', // TODO full URL
    linkedin: '', // TODO full URL
    twitter: '',
    website: '',
  },
}

export const about = {
  // Each string renders as its own paragraph.
  bio: [
    'TODO: A short introduction — who you are, what you do and what drives you.',
    'TODO: A second paragraph about your focus areas, working style or interests outside work.',
  ],
  highlights: [
    { value: '0+', label: 'Years experience' }, // TODO
    { value: '0+', label: 'Projects shipped' }, // TODO
    { value: '0', label: 'Certifications' }, // TODO
  ],
}

// Newest first. `end: ''` means "Present".
export const experience = [
  {
    company: 'Company Name', // TODO
    role: 'Job Title',
    type: 'Full-time',
    location: 'City, Country',
    start: '2024-01',
    end: '',
    summary: 'TODO: One-line description of the role.',
    achievements: ['TODO: Impact-focused bullet point.', 'TODO: Another achievement with a metric.'],
    tech: ['React', 'Node.js'],
  },
]

// Newest first.
export const education = [
  {
    institution: 'University Name', // TODO
    degree: 'BSc (Hons) in Computer Science',
    start: '2019',
    end: '2023',
    grade: '', // e.g. 'First Class' or 'GPA 3.8'
    details: ['TODO: Relevant coursework, thesis, societies or awards.'],
  },
]

// Grouped skills; `level` (0–100) is optional and renders a bar when present.
export const skills = [
  {
    category: 'Frontend',
    items: [{ name: 'React' }, { name: 'JavaScript' }, { name: 'Tailwind CSS' }],
  },
  {
    category: 'Backend',
    items: [{ name: 'Node.js' }, { name: 'Java' }],
  },
  {
    category: 'Tools',
    items: [{ name: 'Git' }, { name: 'Docker' }],
  },
]

export const projects = [
  {
    title: 'Project Name', // TODO
    description: 'TODO: What it does, the problem it solves and your role.',
    tech: ['React', 'Vite'],
    image: '', // e.g. '/projects/name.png' in /public
    repo: '',
    live: '',
    featured: true,
  },
]

export const certifications = [
  {
    name: 'Certification Name', // TODO
    issuer: 'Issuer',
    date: '2024-06',
    url: '',
  },
]

// Controls nav order and which sections render. Remove an entry to hide a section.
export const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]
