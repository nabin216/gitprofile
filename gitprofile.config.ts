// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'nabin216', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Asadur Zaman Nabin',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'asadur-zaman-nabin/',
    //twitter: 'arif_szn',
    //mastodon: 'arifszn@mastodon.social',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    //medium: 'arifszn',
    //dev: 'arifszn',
    tryhackme: "asadurzamannabin",
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: 'asadurzamannabin1',
    //website: 'https://www.arifszn.com',
    phone: '',
    email: 'asadurzamannabin@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/13Wp3AUQJhfKg4eh62bRH_qvxmhgdTNT8/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Eduskills Foundation',
      position: 'PALO ALTO CYBERSECURITY VIRTUAL INTERNSHIP',
      from: 'Apr 2024',
      to: 'Jun 2024',
      companyLink: 'https://drive.google.com/file/d/1iRP8rrCaixf7wN4OyXEQK6O3Khd8yxcJ/view',
    },
    {
      company: 'Eduskills Foundation',
      position: 'Juniper Network Networking Virtual Internship',
      from: 'Dec 2022',
      to: 'Feb 2023',
      companyLink: 'https://drive.google.com/file/d/1ZAUFiXUVA5BDraOFUyvKGha2OrkXxr5j/view',
    },
  ],
  educations: [
    {
      institution: 'KL University',
      degree: 'B.Tech in Computer Science & Engineering ',
      from: '2021',
      to: '2025',
    },
    {
      institution: 'Notre Dame College Mymensingh',
      degree: 'Higher Secondary School Certificate (HSC), Science',

      from: '2018',
      to: '2020',
    },
    {
      institution: 'Barhatta C.K.P Govt Pilot Hight School',
      degree: 'Secondary School Certificate (SSC), Science',
      from: '2013',
      to: '2018',
    },
  ],
  certifications: [
    {
      name: 'Juniper Networks Certified Associate, Junos (JNCIA-Junos)',
      body: 'By Juniper',
      year: 'May 2023 - 2026',
      link: 'https://cp.certmetrics.com/juniper/en/public/verify/credential/61HR8TZ54FV4QRSD',
    },
    {
      name: 'Google IT support professional certification',
      body: 'The Bits and Bytes of Computer Networking · System Administration and IT Infrastructure Services · IT Security: Defense against the digital dark arts · Technical Support Fundamentals · Operating Systems and You: Becoming a Power User',
      year: 'February 2023',
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/69RWVWLH8NHT',
    },
  ],
  
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Thank you for visiting my profile`,

  enablePWA: true,
};

export default CONFIG;
