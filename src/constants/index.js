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
  kulturehire,
  stellar,
  carrent,
  jobit,
  tripguide,
  threejs,
  reactnative,
  firebase,
  mysql,
  nextjs,
  powerbi,
  python,
  cipherchat,
  aishort,
  rentex,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Full-Stack Developer",
    icon: backend,
  },
  {
    title: "Firebase Expert",
    icon: creator,
  },
];

const technologies = [
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
    name: "Next JS",
    icon: nextjs,
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
    name: "MySQL",
    icon: mysql,
  },

  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Power BI",
    icon: powerbi,
  },
  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Web & App Developer",
    company_name: "Client Business",
    icon: stellar,
    iconBg: "white",
    date: "Aug 2024 - Dec 2024",
    points: [
      "Designed and implemented the frontend of a customer website using React and Tailwind CSS.",
      "Built and maintained admin and customer-facing web applications using React and Firebase.",
      "Tested and debugged web applications, leading to a 15% increase in website responsiveness. ",
    ],
  },
  {
    title: "Data Analyst Intern",
    company_name: "Kulturehire",
    icon: kulturehire,
    iconBg: "white",
    date: "Aug 2024 - Sep 2024",
    points: [
      "Conducted data cleaning, analysis, and visualization using SQL and EXCEL to deliver actionable insights.",
    ],
  },
  {
    title: "Business Analyst Intern",
    company_name: "Kulturehire",
    icon: kulturehire,
    iconBg: "white",
    date: "Oct 2024 - Nov 2024",
    points: [
      "Collaborated with teams to optimize processes and prepared reports to support strategic planning.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "Stellar MoldTech",
    icon: stellar,
    iconBg: "white",
    date: "Jan 2025 - Present",
    points: [
      "Conducting exploratory data analysis (EDA) and deriving business insights from company data.",
      "Developing machine learning models to optimize business processes. Working with Python, SQL, and Power BI for data visualization and reporting.",
      "Throughout this internship, I am working with technologies like Google Firebase, BigQuery, Google Looker Studio, Google Sheets, and Python (Colab) to develop a data-driven solution for the company.",
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
    name: "Cipher Chat",
    description:
      "Developed a secure, encrypted chat application using React Native, Firebase,and Expo. Implemented end-to-end encryption for private and secure messaging. Focused on a clean UI and real-time messaging to enhance user experience.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "expo",
        color: "pink-text-gradient",
      },
    ],
    image: cipherchat,
    source_code_link: "https://www.linkedin.com/posts/omkar-deshmukh-67911223a_reactnative-firebase-appdevelopment-activity-7301315414041473024-8hq8?utm_source=share&utm_medium=member_desktop&rcm=ACoAADt2Dj0BA4mJJurDKojEmAHa7Ngp2_lBLhY",
  },
  {
    name: "RentEx",
    description:
      "Built a custom tenant management app to automate rent and bill tracking for my family. Solved the problem of complex Play Store apps by designing a simple & intuitive UI. Features include tenant account creation, automatic bill calculation, meter reading with images, and real-time tracking.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "expo",
        color: "pink-text-gradient",
      },


    ],
    image: rentex,
    source_code_link: "https://www.linkedin.com/posts/omkar-deshmukh-67911223a_reactnative-firebase-appdevelopment-activity-7301760664128143362-iZqQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADt2Dj0BA4mJJurDKojEmAHa7Ngp2_lBLhY",
  },
  {
    name: "Ai-Short-Video Generator",
    description:
      "Built an AI-driven tool to automate short video creation from script to final output. Integrated Google AI Studio for script generation, ElevenLabs for TTS, Microsoft Designer (Python) for AI images, and AssemblyAI for captions. Used Remotion to compile assets into a video",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
            {
        name: "ai",
        color: "blue-text-gradient",
      },
    ],
    image: aishort,
    source_code_link: "https://www.linkedin.com/posts/omkar-deshmukh-67911223a_ai-beginnerproject-youtubeshorts-activity-7307081831386947584-LT6f?utm_source=share&utm_medium=member_desktop&rcm=ACoAADt2Dj0BA4mJJurDKojEmAHa7Ngp2_lBLhY",
  },
];

export { services, technologies, experiences, testimonials, projects };
