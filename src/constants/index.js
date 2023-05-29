import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  rentkeepr,
  wtokobd,
  youtube,
  tiktok,
  tmu,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  c,
  sql,
  python,
  java,
  express,
  passport,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full-Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "Passport JS",
    icon: passport,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "tailwind",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "Founder and CEO",
    company_name: "WTOKOBD",
    icon: wtokobd,
    iconBg: "#383E56",
    date: "Feb 2017 - Dec 2020",
    points: [
      "Managed the logistics of inventory worth $4000 through spreadsheet.",
      "Develop and create marketing plans to increase revenue, customer base, overall sales, and name recognition.",
      "Analyzed product trends and history of sales to promote revenue.",
    ],
  },
  {
    title: "Athlete",
    company_name: "TMU Esports",
    icon: tmu,
    iconBg: "#383E56",
    date: "Sep 2021 - Apr 2023",
    points: [
      "Lead my team members to reach the highest achievements in our esport.",
      "Learned the newest skills to stay relevant in a fast-paced gaming environment.",
      "Communicated and received feedback from team members.",
    ],
  },
  {
    title: "Content Creator",
    company_name: "Tiktok",
    icon: tiktok,
    iconBg: "#383E56",
    date: "Jan 2021 - Present",
    points: [
      "Created independent content about education in gaming.",
      "A total of 1.5 million views, 132,300 likes and 2000 followers.",
      "Self-learned editing videos and photos (thumbnail) through online resources for my TikTok videos.",
      " Analyzed TikTok video trending and algorithm to promote views and followers.",
    ],
  },
  {
    title: "Content Creator",
    company_name: "YouTube",
    icon: youtube,
    iconBg: "#E6DEDD",
    date: "Mar 2019 - Present",
    points: [
      "Created independent content about education, travel, and gaming.",
      " A total of 256,000 views, 7,500 likes and 1,400 subscribers.",
      "Self-learned editing videos and photos (thumbnail) through online resources for my YouTube channel.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Rentkeepr",
    icon: rentkeepr,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Developing and maintaining web applications using Javascript, React.js, Express.js, Node.js and MongoDB",
      "Collaborating with teams of other amazing developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Athletx",
    description:
      "AthletX is a platform that allows customers to purchase sports goods from various departments of a store through an online interface. The platform offers a simple, quick and secure way of shopping. The system will use a user-friendly interface where customers can browse products, place orders, track deliveries and make payments.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JavaFx",
        color: "green-text-gradient",
      },
      {
        name: "Gradle",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "",
  },
  {
    name: "Movie Reviews",
    description:
      "Web application that enables users to search for movies and write their own reviews, also users have the ability to delete reviews. The application use Movie Database API to get movie's data.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "MovieAPI",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://wilmovies--william-edwardo.repl.co",
  },
  {
    name: "Android Calculator App",
    description:
      "just a calculator for android.",
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "XML",
        color: "green-text-gradient",
      },
      {
        name: "Gradle",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
  },
];

export { services, technologies, experiences, testimonials, projects };