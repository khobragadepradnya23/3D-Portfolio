const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas (9).svg" },
  { text: "Concepts", imgPath: "/images/concepts (9).svg" },
  { text: "Designs", imgPath: "/images/designs (9).svg" },
  { text: "Code", imgPath: "/images/code (9).svg" },
  { text: "Ideas", imgPath: "/images/ideas (9).svg" },
  { text: "Concepts", imgPath: "/images/concepts (9).svg" },
  { text: "Designs", imgPath: "/images/designs (9).svg" },
  { text: "Code", imgPath: "/images/code (9).svg" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Technologies Mastered" },
  { value: 200, suffix: "+", label: "Github Contributions" },
  { value: 3, suffix: "+", label: "Group projects" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1 (9).png",
  },
  {
    imgPath: "/images/logos/company-logo-2 (9).png",
  },
  {
    imgPath: "/images/logos/company-logo-3 (9).png",
  },
  {
    imgPath: "/images/logos/company-logo-4 (9).png",
  },
  {
    imgPath: "/images/logos/company-logo-5 (9).png",
  },
  {
    imgPath: "/images/logos/company-logo-6 (9).png",
  },
  {
    imgPath: "/images/logos/company-logo-7 (9).png",
  },
  {
    imgPath: "/images/logos/company-logo-8 (9).png",
  },
  {
    imgPath: "/images/logos/company-logo-9 (9).png",
  },
  {
    imgPath: "/images/logos/company-logo-10 (9).png",
  },
  {
    imgPath: "/images/logos/company-logo-11 (9).png",
  },
];

const abilities = [
  {
    imgPath: "/images/frontend.png",
    title: "Frontend Development",
    desc: "Building responsive and user-friendly websites with clean layouts and modern design."
  },
  {
    imgPath: "/images/solving.png",
    title: "Problem Solving",
    desc: "Finding practical solutions while developing projects and improving website functionality."
  },
  {
    imgPath: "/images/learning.png",
    title: "Continuous Learning",
    desc: "Always exploring new tools and technologies to improve web development skills and create better projects."
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react (9).png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python (9).svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node (9).png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three (9).png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git (9).svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Resumind is a personal project focused on building an AI-powered resume analyzer with a clean and responsive interface for resume upload, scoring, and feedback.",
    logoPath: "/images/Resume_logo.png",
    title: "Web Developer",
    responsibilities: [
      "Built an AI-powered resume analyzer with resume upload and feedback-based UI.",
      "Designed a responsive interface for displaying resume scores and analysis results.",
      "Focused on creating a clean and user-friendly frontend experience.",
    ],
  },
  {
    review:
      "Helping Hands is a group project where I contributed to the frontend development of a donation platform designed for clothes, food, and books.",
    logoPath: "/images/HelpingHand_logo.png",
    title: "Frontend Developer",
    responsibilities: [
      "Developed the frontend of a donation website for clothes, food, and books.",
      "Designed a simple and responsive interface to improve accessibility and usability.",
      "Collaborated with team members on layout and styling.",
    ],
  },
  {
    review:
      "LevelUp is a group project where I worked on the frontend of an AI mock interview platform with a gamified and engaging design.",
    logoPath: "/images/LevelUp_logo.png",
    title: "Frontend Developer",
    responsibilities: [
      "Created the frontend of an AI mock interview platform with a gamified design.",
      "Designed interface sections for interview practice, rewards, and leaderboard features.",
      "Worked on responsive layout, visual design, and engaging user experience.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1 (9).png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2 (9).png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3 (9).png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1 (9).png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3 (9).png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2 (9).png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5 (9).png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4 (9).png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6 (9).png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/",
    imgPath: "/images/insta (9).png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/",
    imgPath: "/images/fb (9).png",
  },
  {
    name: "x",
    url: "https://www.x.com/",
    imgPath: "/images/x (4).png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
    imgPath: "/images/linkedin (9).png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};