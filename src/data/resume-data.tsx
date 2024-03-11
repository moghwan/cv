import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Marwane Chaoui",
  initials: "MC",
  location: "Temara, Morocco, GMT+1",
  locationLink: "https://www.google.com/maps/place/temara",
  about:
    "Backend Engineer PHP",
  summary:
    "",
  avatarUrl: "https://media.licdn.com/dms/image/D4E03AQEV8svAEbOSTg/profile-displayphoto-shrink_400_400/0/1668801560823?e=1715817600&v=beta&t=qO_m6KdUWRZgX6FwKuc4CNAkLK4ghCFjDvhCOAKRVhc",
  personalWebsiteUrl: "https://moghwan.io",
  contact: {
    email: "chaoui.mar1@gmail.com",
    tel: "+212",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/moghwan",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/moghwan/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/moghwan",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "High-Tech - High Technology School in Morocco",
      degree: "Master's Degree (Bac+5) in Software engineering",
      start: "2014",
      end: "2017",
    },
    {
      school: "OFPPT - Specialized Institute of Applied Technology",
      degree: "Technician specialist in Software Development",
      start: "2010",
      end: "2012",
    },
  ],
  work: [
    {
      company: "Leyton",
      link: "https://leyton.com/",
      badges: ["Hybrid"],
      title: "Software Engineer Backend Senior",
      start: "Oct 2022",
      end: "Present",
      description: "",
    },
    {
      company: "DXC Technology Morocco",
      link: "",
      badges: ["Hybrid"],
      title: "Senior Technical Functional Consultant",
      start: "Aug 2022",
      end: "Sep 2022",
      description: "Programming Insurance platforms with Graphtalk",
    },
    {
      company: "L'NKBOOT",
      link: "https://www.lnkboot.fr/",
      badges: ["On-site"],
      title: "Full-stack Developer",
      start: "Nov 2020",
      end: "Jul 2022",
      description: "Prestashop modules integration and development with jQuery and Fabric.js. Bug fixing on Prestashop websites. Installation, Config and migration of Prestashop websites on OVH VPS with CentOS and WHM.",
    },
    {
      company: "H2O Services",
      link: "",
      badges: [],
      title: "PHP Developer",
      start: "Aug 2020",
      end: "Oct 2020",
      description: "Prestashop modules integration and development.",
    },
    {
      company: "High-Tech Group",
      link: "https://hightech.edu/",
      badges: [],
      title: "Webmaster, IS administrator and PHP Developer",
      start: "Nov 2013",
      end: "Jul 2020",
      description: "Website management and Webmaster, Information systems administration, maintenance and development with CakePHP.",
    },
    {
      company: "Majjane.ma",
      link: "https://www.majjane.ma",
      badges: [],
      title: "PHP Web Developer/Integrator (intern)",
      start: "Jul 2012",
      end: "Jan 2013",
      description: "Integration of psd models, Adaptation and Development of modules for Wordpress / Joomla. Development of web applications with CakePHP2 / jQuery.",
    },
  ],
  skills: [
    "JavaScript",
    "Nuxt.js",
    "Node.js",
    "PHP",
    "Laravel",
    "Symfony",
    "WordPress",
    "Prestashop",
    "Docker",
  ],
  projects: [
    {
      title: "Web BouayadApp",
      techStack: [
        "VueJS",
      ],
      description: "A simple app that shows daily quotes and prayers times — heavily inspired from the paper version of bouayad calendar.",
      link: {
        label: "web.bouayad.app",
        href: "https://web.bouayad.app/",
      },
    },
    {
      title: "Browser BouayadApp",
      techStack: [
        "Json"
      ],
      description: "A wrapper chrome/firefox extension for web.bouayad.app.",
      link: {
        label: "ext.bouayad.app",
        href: "https://bouayad.app/",
      },
    },
    {
      title: "Early Riser Syntax Color Scheme - JetBrains",
      techStack: [
      ],
      description: "a light theme heavely inspired from VSCode's \"Early Riser Syntax\" theme. ",
      link: {
        label: "github.com/moghwan/idea-early-riser-theme",
        href: "https://github.com/moghwan/idea-early-riser-theme",
      },
    },
    {
      title: "Covid Stats in Morocco",
      techStack: [
        "VueJS"
      ],
      description: "Just another Unofficial Covid-19 Graph stats for Morocco",
      link: {
        label: "corona.moghwan.io",
        href: "https://corona.moghwan.io/",
      },
    },
  ],
} as const;
