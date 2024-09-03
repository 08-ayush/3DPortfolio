// Contains constant data for using in website
// ! Don't remove anything from here if not sure

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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/08-ayush",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: ".NET Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Iot Developer",
    company_name: "Nassccom",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "March 2023 - June 2023",
    points: [
      "As an intern at Nasscom Qmansys Infosolution, I actively participated in project planning, development, and implementation in the field of IOT.",
      "I collaborated with cross-functional teams, contributing innovative ideas and insights to solve complex problems and deliver high-qulaity IOT solution.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Codequotient",
    icon: shopify,
    iconBg: "#383E56",
    date: "July 2023 -  September 2023",
    points: [
      "During my internship, I gained hands-on experience in web development by acquiring new skills",
      "As a full-stack developer using the MERN Stack (MongoDB, Express.js, React.js, Node.js).",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and collaborating with experienced mentors.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Data Nova",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      " Experienced .NET Framework developer specializing in C# to create cross-platform applications.",
      "Skilled in using the MVVM (Model-View-ViewModel) architecture to improve code organization and maintainability.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "As a full-stack developer, I manage APIs, databases, backend, and frontend development.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  // {
  //   name: "Ticket Management System",
  //   description:
  //     "Disney+ is one of the biggest streaming platforms used by millions of people world-wide and allows us to stream high quality content in 4k and various other formats",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "firebase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project1,
  //   source_code_link: "https://github.com/sanidhyy/disney-clone",
  //   live_site_link: "https://clonedisneyplus.web.app/",
  // },
  {
    name: "Ticket Management System",
    description:
      "Our ticket management system uses cutting-edge technologies to provide a streamlined and efficient platform for users, administrators, and resolvers, It enables seamless handling user queries, ticket raising, and issue resolution.",
    
      
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/08-ayush/TicketManagementSystem",
   // live_site_link: "https://fitness-gym-react.netlify.app/",
  },
  {
    name: " E-Commerce ",
    description:
      " I leveraged Firebase for secure, scalable, and reliable data storage, enabling administrators to effortlessly add, delete, and manage data, I also integrated payment gateway support for seamless transactions and implemented authentication and authorization features to enhance security,  I leveraged Firebase as Database. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/08-ayush/E-Commerce",
    live_site_link: "https://e-commerce-tau-smoky.vercel.app/",
  },
  {
    name: "Whether App",
    description:
      "Allows users to input a specific city and country or use geolocation for their current location Weather Information: Displays real-time weather details such as temperature, humidity, wind speed, and conditions (sunny, rainy, cloudy, etc.) Ensures a seamless experience across different devices and screen sizes.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/08-ayush/Whether_App",
    live_site_link: "https://whether-app-phi.vercel.app/",
  },
  {
    name: " Movie Review Application  ",
    description:
      " I successfully designed and developed a movie review application, utilizing MongoDB as the backend, Java and Spring Boot for the server-side, and React for the user-friendly frontend  Enter the name of the movie, and you can easily get the rating in a few seconds without wasting any time.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/08-ayush/movie_review_Application",
   // live_site_link: "https://reactjscryptoapp.netlify.app/",
  },
  {
    name: " Netflix Clone",
    description:
      "The Netflix Clone is a meticulously crafted application that closely emulates the real Netflix experience, It mirrors the transitions, UI, and visual effects of the original platform, offering a seamless browsing journey, Seamless navigation, smooth transitions, immersive UI, and user-friendly design mirror ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/08-ayush/Netflix-clone",
    live_site_link: "https://netflix-clone-cswq.vercel.app/",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/aayush-chauhan-9b3b76207/",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/08-ayush",
  },
] as const;
