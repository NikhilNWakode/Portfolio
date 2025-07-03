import CineCraft from "../assets/CineCraft.png";
import Syncup from "../assets/Syncup.png";
import Planeterium from "../assets/Planeterium.png"

const HERO_CONTENT = `I am a committed full-stack developer specializing in JavaScript and modern web technologies. With a solid foundation in front-end tools like React, Tailwind, and SASS, alongside back-end expertise in Node.js, Express, MongoDB, and MySQL, I bring a year of hands-on experience. Skilled in Git, GitHub, Figma, and Jira, I’m passionate about creating impactful, user-focused solutions. Driven by curiosity, I strive to continuously learn and deliver scalable, high-quality digital experiences.`;

const PROJECTS = [
  {
    title: "SyncUp - A Realtime Chat Web App",
    image: Syncup,
    description:
      "SyncUp is a responsive real-time chat application built for fast, efficient messaging. Leveraging React.js, TailwindCSS, and Socket.io, SyncUp supports over 100 concurrent users with optimized performance and secure authentication, enabling seamless media sharing and a 30% faster message delivery experience.",
    technologies: ["React.js", "Node.js", "MongoDB", "Axios", "TailwindCss", "Zustand", "Shadcn", "Express.js", "Jwt", "Socket.io"],
    links : ["https://syncup-frontend.onrender.com/","https://github.com/NikhilNWakode/Syncup"]

  },
  {
  title: "ApnaStay - Airbnb Clone with Cloud Features",
  image: ApnaStayImage, 
  description:
    "ApnaStay is a full-featured Airbnb clone built with Node.js, Express, MongoDB, and EJS. It includes secure user authentication, Cloudinary image uploads, dynamic listings with CRUD operations, review systems, flash messaging, and responsive modern UI. Enhanced with real-time validations, filtering options, and optimized for performance using lazy loading and Cloudinary transformations.",
  technologies: [
    "Node.js", "Express.js", "MongoDB", "EJS", "Mongoose",
    "Bootstrap", "Cloudinary", "Multer", "Mapbox", 
    "Helmet", "Passport.js", "Connect-Flash"
  ],
  links: [
    "https://apnastay-1jut.onrender.com/listings",
    "https://github.com/NikhilNWakode/Apnastay"
  ]
},
  {
    title: "CineCraft - Movie and TV Discovery Platform",
    image: CineCraft,
    description:
      "CineCraft is a responsive, data-driven platform for exploring trending and popular movies with ease. Built to enhance user experience, it features optimized API calls for rapid content retrieval and infinite scrolling, delivering smooth navigation with under 2-second load times for interactive movie browsing.",
    technologies: ["React.js", "Axios", "Shadcn", "TailwindCss", "Zustand"],
    links : ["https://cine-craft-three.vercel.app","https://github.com/NikhilNWakode/CineCraft"]
  },
  {
    title: "Planetarium - Planet Searching Website",
    image: Planeterium,
    description:
      "Planetarium is a responsive web application that showcases in-depth information on all 8 planets of our solar system. Featuring a fast, efficient search functionality with query processing under 500 milliseconds, Planetarium offers users a seamless and interactive exploration of planetary data.",
    technologies: ["Html", "Css", "Javascript",],
    links : ["https://nikhilnwakode.github.io/Planeterium/","https://github.com/NikhilNWakode/Planeterium"]

  },
];

export { PROJECTS, HERO_CONTENT };
