import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import simonImg from "../assets/symon-game-image.jpg";

export const HERO_CONTENT = `I am an enthusiastic and dedicated Frontend Developer with a strong academic background in computer science and programming. Known for my diligence, hard work, and passion for crafting exceptional user experiences, I am eager to contribute my skills in a dynamic and collaborative environment.`;

export const ABOUT_TEXT = `I am a passionate and driven front-end developer with a strong academic foundation, holding a BSc in Computer Science. I specialize in creating intuitive, efficient, and visually appealing web applications. My expertise spans modern technologies like React, TypeScript, Tailwind CSS, Firebase, and MongoDB, along with a solid grounding in HTML, CSS, JavaScript, and core front-end principles, including mobile-first development. What started as a curiosity about how things work has blossomed into a fulfilling journey where I embrace challenges and continuously evolve my skills. I excel in collaborative environments, thrive on solving complex problems, and take pride in delivering solutions that make a tangible impact. Beyond the code, I enjoy staying active, exploring emerging technologies, and finding inspiration in everyday experiences to fuel my creativity.`;

export const PROJECTS = [
  {
    title: "Simon Game",
    image: simonImg,
    link: "https://krydertr.github.io/newRyderGame/",
    description:
      "A memory game designed with a mobile-first approach, challenging players to replicate sequences of lights and sounds. It features sound effects, and a responsive design for smooth gameplay on any device.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A personal portfolio showcasing my skills, projects, and contact information, with a responsive design and smooth animations powered by Framer Motion for an engaging user experience across all devices.",
    technologies: ["React.js", "JavaScript", "Tailwind", "FramerMotion"],
  },
  {
    title: "Task App",
    image: project3,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["React.js", "TypeScript", "Tailwind", "Firebase"],
  },
];

export const CONTACT = {
  address: "Rishon LeZion, Israel ",
  phoneNo: "+972 527904149 ",
  email: "romcharit@gmail.com",
};

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];


