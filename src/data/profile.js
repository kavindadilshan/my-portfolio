// Single source of truth for all portfolio content.
// Every section reads from here — edit this file, not the components.
// Values marked TODO are still waiting for real details.
// Sources: LinkedIn profile + CV. Where they disagree (dates, IJSE programme), LinkedIn wins.

export const profile = {
  name: 'Kavinda Dilshan',
  role: 'Frontend Developer',
  tagline:
    'Frontend developer at Ceyentra Technologies, crafting responsive, user-friendly interfaces for web and mobile with React, React Native and Flutter.',
  location: 'Beliatta, Southern Province, Sri Lanka',
  availability: '', // e.g. 'Open to new opportunities' — empty hides the badge
  avatar: '/avatar.jpg',
  resumeUrl: '', // TODO: '/resume.pdf' once a public CV (no references/address/DOB) is in /public
  email: 'kavindadilshan97@gmail.com',
  phone: '', // intentionally not shown publicly
  socials: {
    github: '', // TODO full URL
    linkedin: 'https://www.linkedin.com/in/kavindadilshan/',
    twitter: '',
    website: '',
  },
}

export const about = {
  // Each string renders as its own paragraph.
  bio: [
    'I am a software engineer with a huge interest in designing and building great applications. I enjoy taking on challenging work where I can use my skills creatively and contribute to the growth of the organisation.',
    "I've spent the last seven years at Ceyentra Technologies, growing from trainee to Software Engineer. I've shipped more than a dozen Android and iOS apps and web front ends with React, React Native and Flutter for clients in Sri Lanka, the UK and South Africa, and led the Synapse Link mobile app for Future Fibres.",
    'I hold a First Class CMJD diploma in Java from IJSE and graduated from the University of Bolton in 2024 with a top-up degree in Computer Science, studying at Study World Lanka Campus while working full-time.',
  ],
  highlights: [
    { value: '7+', label: 'Years experience' },
    { value: '21', label: 'Projects shipped' },
    { value: '40+', label: 'Skills' },
  ],
}

// Newest first. `end: ''` means "Present".
export const experience = [
  {
    company: 'Ceyentra Technologies',
    role: 'Software Engineer',
    type: 'Full-time',
    location: 'Kalutara District, Western Province, Sri Lanka',
    start: '2022-05',
    end: '',
    summary: 'Building responsive web and cross-platform mobile front ends for local and international clients.',
    achievements: [
      'Developed the Sri Delivery customer app in React Native, with real-time order tracking and location-based restaurant search, alongside Flutter rider and restaurant apps; the platform has 20,000+ downloads and 700+ daily orders.',
      'Built apps on the Veda charitable giving platform for Bhaktivedanta Manor, the British Geriatrics Society (BGS Supporter) and The Royal Television Society (My RTS), including a complete UI/UX overhaul.',
    ],
    tech: ['React.js', 'React Native', 'Flutter', 'AngularJS', 'TypeScript', 'Xcode'],
  },
  {
    company: 'Ceyentra Technologies',
    role: 'Associate Software Engineer',
    type: 'Full-time',
    location: 'Panadura, Sri Lanka',
    start: '2020-08',
    end: '2022-05',
    summary: 'Developed and led client mobile app front ends with React Native.',
    achievements: [
      'Led the Synapse Link project for Future Fibres: a React Native maritime load monitoring app that connects to sensors over Bluetooth Low Energy and shows live and historical loads.',
      'Built Miracle Dome, an event management app for Android and iOS, with React Native.',
      'Developed AFC Hapannu, a geo-location tree-planting app for the State Ministry of Rural Roads, used to track 509,000+ trees planted.',
    ],
    tech: ['React Native', 'axios', 'REST APIs', 'Leadership', 'Teamwork'],
  },
  {
    company: 'Ceyentra Technologies',
    role: 'Trainee Associate Software Engineer',
    type: '',
    location: 'Panadura, Sri Lanka',
    start: '2019-09',
    end: '2020-08',
    summary: '',
    achievements: [
      "Developed Fitzky, Sri Lanka's first fitness marketplace, for Android, Huawei and iOS, shipping offline memberships in the MVP and online coaching in later phases. It won the e-Swabhimani award for Best HealthCare App.",
    ],
    tech: ['React Native', 'axios', 'REST APIs', 'Teamwork'],
  },
]

// Newest first.
export const education = [
  {
    institution: 'The University of Bolton · Study World Lanka Campus',
    degree: 'Bachelor of Computer Science and Software Engineering',
    start: '2023-04',
    end: '2024-09',
    grade: '',
    logo: '/education/university-of-bolton.png',
    image: '/education/bolton-convocation-2024.jpg',
    imageCaption: 'Convocation Ceremony 2024 — BSc (Hons) Computer Science Engineering Top Up',
    details: [
      'Completed the top-up degree at Study World Lanka Campus (SWLC) while working full-time at Ceyentra Technologies, graduating at the University of Bolton Convocation Ceremony 2024.',
      'Activities and societies: IT Committee.',
      'Coursework covered cloud computing (IaaS), architectural design, service-oriented and solution architecture, and enterprise software.',
    ],
  },
  {
    institution: 'IJSE — Institute of Software Engineering',
    logo: '/education/ijse.png',
    degree: 'CMJD (Java)',
    start: '2018',
    end: '2021',
    grade: 'First Class',
    details: [
      'Diploma programme leading to a BSc (Hons) in Computer Science.',
      'Studied Java (JDBC, JSP, Spring), Angular, TypeScript, JavaScript, HTML5 and UX.',
    ],
  },
  {
    institution: 'H / Walasmulla National School',
    degree: 'GCE Advanced Level',
    start: '2017',
    end: '2017',
    grade: '',
    details: [],
  },
]

// Grouped skills; `level` (0–100) is optional and renders a bar when present.
export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React.js' },
      { name: 'Next.js' },
      { name: 'Vue.js' },
      { name: 'AngularJS' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'HTML5' },
      { name: 'CSS / Sass' },
      { name: 'Bootstrap' },
      { name: 'jQuery' },
      { name: 'axios' },
      { name: 'UX Design' },
    ],
  },
  {
    category: 'Mobile',
    items: [
      { name: 'React Native' },
      { name: 'Flutter' },
      { name: 'Swift' },
      { name: 'Xcode' },
      { name: 'Android Studio' },
      { name: 'Android' },
      { name: 'iOS Development' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git' },
      { name: 'GitLab' },
      { name: 'VS Code' },
      { name: 'IntelliJ IDEA' },
      { name: 'NetBeans' },
      { name: 'Adobe XD' },
      { name: 'Photoshop' },
      { name: 'Windows & macOS' },
    ],
  },
  {
    category: 'Architecture',
    items: [{ name: 'Solution Architecture' }, { name: 'System Architecture' }, { name: 'MVC' }, { name: 'Client–Server' }],
  },
  {
    category: 'Backend',
    items: [{ name: 'Java' }, { name: 'Spring Boot' }, { name: 'Spring MVC' }, { name: 'Hibernate' }, { name: 'REST APIs' }],
  },
  {
    category: 'Leadership',
    items: [{ name: 'Project Leadership' }, { name: 'Team Management' }, { name: 'Project Management' }, { name: 'Teamwork' }],
  },
]

// `logo` renders contained on a soft background; `image` renders a full-bleed screenshot.
// `platforms` ('mobile' | 'web') drive the filter tabs and card badges.
// `metrics` render as stat chips; `links` as labelled buttons (App Store, Google Play, Website…).
// Client-project details come from ceyentra.com/portfolio case studies.
export const projects = [
  {
    title: 'Fitzky — Fitness Market Place',
    platforms: ['mobile', 'web'],
    description:
      "Sri Lanka's first fitness platform, offering online and offline fitness services in one marketplace: Zoom-powered group classes for 300+ participants, gym day passes, paid instructor chat, subscriptions and a corporate loyalty programme.",
    metrics: ['e-Swabhimani: Best HealthCare App', 'National Best Quality Software Award'],
    tech: ['React Native', 'Zoom SDK'],
    logo: '/projects/fitzky.png',
    start: '2020-04',
    end: '',
    context: 'Ceyentra Technologies',
    repo: '',
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/lk/app/fitzky-gym-class-deals/id1445345189' },
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.fitzky.fitzkyuser' },
      { label: 'Website', url: 'https://www.fitzky.com' },
      { label: 'Case study', url: 'https://ceyentra.com/projects/fitzky' },
    ],
    featured: true,
  },
  {
    title: 'AFC Hapannu',
    platforms: ['mobile', 'web'],
    description:
      'A geo-location based tree-planting app for the State Ministry of Rural Roads and Other Infrastructure, letting citizens take part in and track national tree-planting programmes towards a 2-million-tree goal.',
    metrics: ['509,000 trees planted', '15,389 Mt carbon reduction'],
    tech: ['React Native'],
    logo: '/projects/maga-depasa.png',
    start: '2021-04',
    end: '2021-12',
    context: 'Ceyentra Technologies',
    repo: '',
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/lk/app/afc-hapannu/id6747387235' },
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.afcdalu' },
    ],
    featured: true,
  },
  {
    title: 'Sri Delivery',
    platforms: ['mobile', 'web'],
    description:
      'A food and grocery delivery platform for Sri Lanka with real-time order tracking on a live map with ETAs, time-optimised deliveries and a "5-tap" ordering flow. React Native customer app plus Flutter rider and restaurant apps.',
    metrics: ['20,000+ downloads', '700+ orders daily', '100+ restaurants'],
    tech: ['React Native', 'Flutter'],
    logo: '/projects/sri-delivery.png',
    start: '2023-03',
    end: '',
    context: 'Ceyentra Technologies',
    repo: '',
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/lk/app/sridelivery/id1506865775' },
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.sridelivery.srideliveryuser' },
      { label: 'Website', url: 'https://www.sridelivery.com/' },
    ],
    featured: true,
  },
  {
    title: 'BGS Supporter',
    platforms: ['mobile'],
    description:
      'The British Geriatrics Society supporter app, built on the Veda platform, so members can stay connected, donate and follow articles and events.',
    tech: ['React Native', 'Xcode'],
    logo: '/projects/bgs-supporter.png',
    start: '2023-01',
    end: '',
    context: 'Ceyentra Technologies',
    repo: '',
    links: [{ label: 'App Store', url: 'https://apps.apple.com/us/app/bgs-supporter/id1472530245' }],
    featured: false,
  },
  {
    title: 'My RTS',
    platforms: ['mobile'],
    description:
      'The Royal Television Society member app, built on the Veda platform, for engaging with the society through articles, events and memberships.',
    tech: ['React Native', 'Xcode'],
    logo: '/projects/my-rts.jpg',
    start: '2022-11',
    end: '2023-06',
    context: 'Ceyentra Technologies',
    repo: '',
    links: [{ label: 'App Store', url: 'https://apps.apple.com/us/app/my-rts/id1485694478' }],
    featured: false,
  },
  {
    title: 'Rig Pro Care',
    platforms: ['mobile'],
    description:
      'A vessel service management app that lets yacht managers and captains track service logs, schedule maintenance and share documentation securely. Built as Mobile Application Developer with React Native.',
    tech: ['React Native'],
    logo: '/projects/rig-pro-care.png',
    start: '',
    end: '',
    context: 'Ceyentra Technologies · Mobile Application Developer',
    repo: '',
    links: [{ label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.ceyentra.rigpro' }],
    featured: false,
  },
  {
    title: 'Synapse Link',
    platforms: ['mobile'],
    description:
      'A maritime load monitoring app for Future Fibres (Valencia, Spain), using Bluetooth Low Energy to connect to load sensors with power-optimised connectivity and show live and historical loads. I led the project.',
    metrics: ['High BLE connection success rate'],
    tech: ['React Native', 'Bluetooth LE', 'Xcode'],
    logo: '/projects/synapse-link.jpg',
    start: '2021-09',
    end: '2023-05',
    context: 'Ceyentra Technologies · Project lead',
    repo: '',
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/gb/app/synapse-link/id6449232122' },
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.ceyentra.synapsemarine' },
    ],
    featured: false,
  },
  {
    title: 'Karuna.lk',
    platforms: ['web'],
    description:
      'A crowdfunding platform for The Dialog Foundation that makes charitable giving transparent and easy, scaled up to initiate and support welfare activities across Sri Lanka.',
    metrics: ["National award: Best 'Tech for Good'"],
    tech: [],
    logo: '/projects/karuna.jpg',
    start: '',
    end: '',
    context: 'Ceyentra Technologies',
    repo: '',
    links: [{ label: 'Website', url: 'https://karuna.lk/' }],
    featured: false,
  },
  {
    title: 'Veda Platform',
    platforms: ['mobile', 'web'],
    description:
      'A charitable giving and membership platform: donations, membership management, subscription payments, articles, events and chat. The work included a complete UI/UX overhaul and fixing build errors. Its baseline apps power the Bhaktivedanta Manor, BGS Supporter, My RTS and SOM Portal apps.',
    tech: ['React Native'],
    logo: '',
    start: '',
    end: '',
    context: 'Ceyentra Technologies',
    repo: '',
    links: [{ label: 'Website', url: 'https://veda.cc/' }],
    featured: false,
  },
  {
    title: 'Bhaktivedanta Manor',
    platforms: ['mobile'],
    description:
      'The Bhaktivedanta Manor community app, built on the Veda platform: donations, memberships, subscription payments, articles, events and chat.',
    tech: ['React Native', 'Xcode'],
    logo: '/projects/bhaktivedanta-manor.png',
    start: '2022-09',
    end: '',
    context: 'Ceyentra Technologies',
    repo: '',
    links: [{ label: 'App Store', url: 'https://apps.apple.com/us/app/bhaktivedanta-manor/id6446362125' }],
    featured: false,
  },
  {
    title: 'SOM Portal',
    platforms: ['mobile'],
    description:
      'A member portal app built on the Veda platform: donations, memberships, subscription payments, articles, events and chat.',
    tech: ['React Native', 'Xcode'],
    logo: '/projects/som-portal.png',
    start: '',
    end: '',
    context: 'Ceyentra Technologies',
    repo: '',
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/us/app/som-portal/id1578254464' },
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=uk.co.vedaconsulting.somportal' },
    ],
    featured: false,
  },
  {
    title: 'Wooks.lk',
    platforms: ['web'],
    description:
      'An online library for children by Wooks Sinhala School, with a collection of 200+ digital books and interactive learning resources that bring stories to life.',
    metrics: ['200+ books'],
    tech: [],
    logo: '/projects/wooks.png',
    start: '2022',
    end: '',
    context: 'Ceyentra Technologies',
    repo: '',
    links: [{ label: 'Website', url: 'https://www.wooks.lk/' }],
    featured: false,
  },
  {
    title: 'Wedding Portal',
    platforms: ['web'],
    description:
      'A wedding planning platform for Sri Lanka with a comprehensive vendor directory, customisable search filters, reviews and ratings, and a mobile-friendly design.',
    tech: [],
    logo: '/projects/wedding-portal-logo.png',
    start: '',
    end: '',
    context: 'Ceyentra Technologies',
    repo: '',
    links: [
      { label: 'Website', url: 'http://weddingportal.lk/' },
      { label: 'Case study', url: 'https://ceyentra.com/portfolio/wedding-portal' },
    ],
    featured: false,
  },
  {
    title: 'Alpha Accounting',
    platforms: ['web'],
    description: 'Alpha Books, the web platform for Alpha Consultancy in Sri Lanka.',
    tech: [],
    logo: '',
    start: '',
    end: '',
    context: 'Web Developer',
    repo: '',
    links: [{ label: 'Website', url: 'https://www.alphaconsultancy.lk' }],
    featured: false,
  },
  {
    title: 'Sereny',
    platforms: ['web'],
    description:
      'An online platform tailored for Australian audiences. As Frontend Developer I built responsive user interfaces and seamless web navigation in React.js.',
    tech: ['React.js'],
    logo: '/projects/sereny.webp',
    start: '',
    end: '',
    context: 'Frontend Developer',
    repo: '',
    links: [{ label: 'Website', url: 'https://www.serenyaustralia.com/' }],
    featured: false,
  },
  {
    title: 'Figure 4 Life',
    platforms: ['mobile'],
    description: 'A mobile app for seamless salon appointment booking across Sri Lanka.',
    tech: ['React Native'],
    logo: '/projects/figure4life.png',
    start: '2023-08',
    end: '',
    context: 'The University of Bolton',
    repo: '',
    links: [],
    featured: false,
  },
  {
    title: 'CarDoc',
    platforms: ['mobile'],
    description: 'A handy search app for vehicle repair.',
    tech: ['Java', 'Xcode'],
    logo: '/projects/cardoc.png',
    start: '2023-11',
    end: '',
    context: 'Personal project',
    repo: '',
    links: [],
    featured: false,
  },
  {
    title: 'Miracle Dome',
    platforms: ['mobile'],
    description:
      'An event management app for Android and iOS, built for the International Conference Services Institute (ICSI).',
    tech: ['React Native'],
    logo: '/projects/miracle-dome.webp',
    start: '2022-04',
    end: '2023-03',
    context: 'Ceyentra Technologies',
    repo: '',
    links: [{ label: 'App Store', url: 'https://apps.apple.com/pl/app/miracle-dome/id1625074175' }],
    featured: false,
  },
  {
    title: 'Wood Vibes',
    platforms: ['web'],
    description: 'The first and only wood mill software in Sri Lanka.',
    tech: ['axios'],
    logo: '',
    start: '2021-08',
    end: '2021-12',
    context: '',
    repo: '',
    links: [],
    featured: false,
  },
  {
    title: 'CCL — Commercial Credit Leasing App',
    platforms: ['mobile'],
    description:
      'A finance-process app for a commercial credit leasing company, used by dealers, dealer assistants and branches. Features loan evaluations and a public user login.',
    tech: ['React Native'],
    logo: '',
    start: '',
    end: '',
    context: '',
    repo: '',
    links: [],
    featured: false,
  },
  {
    title: 'Winelands Pass',
    platforms: ['mobile', 'web'],
    description:
      'A subscription-based wine tourism marketplace: a virtual pass to curated winery experiences, exclusive tours and rates, with easy booking and scheduling and regular curated product deliveries.',
    tech: ['React Native'],
    logo: '',
    start: '2023',
    end: '',
    context: 'Ceyentra Technologies',
    repo: '',
    links: [{ label: 'Case study', url: 'https://ceyentra.com/portfolio/winelands' }],
    featured: false,
  },
]

export const certifications = [
  {
    name: 'Claude Certified Architect — Foundations',
    issuer: 'Anthropic',
    date: '2026-09',
    expires: '2027-09',
    url: 'https://www.credly.com/badges/c510888d-c14e-4cb8-8bd0-83fa2c89ba1e',
    badge: '/certifications/claude-certified-architect.png',
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
