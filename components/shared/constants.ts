import { Code, Github, ExternalLink } from "lucide-react"

export const CV_FILE = '/public/documents/Phumlani_Mthembu_CV.pdf'

export const SOCIAL_LINKS = {
  github: 'https://github.com/banelee59',
  linkedin: 'https://www.linkedin.com/in/phumlani-mthembu-797339233',
  email: 'mailto:banelee59@gmail.com'
}

export const EXPERIENCE_DATA = [
  {
    title: "Software Developer",
    company: "GMNT Holdings",
    period: "Oct 2024 - Oct 2025",
    current: false,
    points: [
      "Lead development of responsive web applications using React, Next.js, and Tailwind CSS, improving client engagement by 40%.",
      "Architected and maintained scalable project codebases, implementing modern UI components and ensuring cross-browser compatibility.",
      "Mentored junior developers and collaborated with cross-functional teams to deliver complex project milestones."
    ]
  },
  {
    title: "Software Developer Intern",
    company: "Spaza Eats",
    period: "May 2024 - Sep 2024",
    current: false,
    points: [
      "Redesigned and optimized internal systems architecture, reducing processing time by 30% and improving system reliability.",
      "Developed automated dispatch coordination algorithms that reduced delivery times by 25% through route optimization.",
      "Led software quality assurance initiatives, identifying critical bugs and implementing CI/CD pipelines for seamless updates."
    ]
  },
  {
    title: "Software Developer Intern",
    company: "Mzingisi Simplified Solutions",
    period: "Jun 2023 - Apr 2024",
    current: false,
    points: [
      "Designed and developed 10+ client websites using modern web technologies, increasing client satisfaction scores by 35%.",
      "Implemented responsive design principles and modern UI updates that improved company website conversion rates by 20%.",
      "Built comprehensive online portfolio systems to showcase company projects and attract new clients."
    ]
  }
]

export const SKILLS_DATA = [
  {
    category: "Frontend",
    icon: Code,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Bootstrap", "React", "Next.js", "Tailwind CSS"]
  },
  {
    category: "Backend",
    icon: Code,
    skills: ["Node.js", "Express", "MongoDB", "MySQL", "RESTful API Design", "Postman"]
  },
  {
    category: "Mobile",
    icon: Code,
    skills: ["React Native", "JavaScript", "TypeScript", "Expo"]
  },
  {
    category: "Version Control",
    icon: Github,
    skills: ["Git", "GitHub"]
  },
  {
    category: "Deployment",
    icon: ExternalLink,
    skills: ["Vercel", "Netlify"]
  },
  {
    category: "Tools",
    icon: Code,
    skills: ["VS Code", "Figma"]
  }
]

export const EDUCATION_DATA = [
  {
    title: "Diploma in Software Development",
    institution: "Tshwane University of Technology",
    period: "2022",
    points: [
      "Completed comprehensive training in software development principles, web technologies, and programming methodologies.",
      "Gained hands-on experience with modern web development frameworks and database technologies."
    ]
  },
  {
    title: "IT Fundamentals Certificate",
    institution: "Thokoza Progressive Youth",
    period: "2018",
    points: [
      "Acquired foundational knowledge in information technology concepts and computer systems."
    ]
  },
  {
    title: "National Senior Certificate",
    institution: "Nsalamanga High School",
    period: "2016",
    points: [
      "Completed secondary education with a focus on mathematics and science subjects."
    ]
  }
]

export const PROJECTS_DATA = [
  {
    title: "Vilgro Energy Website",
    description: "Vilgro is the official site for Vilgro Energy, a company focused on energy solutions in Africa, particularly in Southern Africa. The site presents the company’s mission, services, values, and contact information.",
    technologies: ["Next.js", "Tailwind", "React"],
    image: "/images/vilgro.png",
    link: "https://www.vilgro.com/"
  },
  {
    title: "Eazi Ride Website",
    description: "Eazi Ride Is a ride-hailing / e-hailing service web app — a platform where users can book rides, similar to Uber or Bolt. The live page itself prompts JavaScript to be enabled to run properly, indicating it’s a dynamic web application likely used for interacting with the service (booking rides, signing in, or accessing user dashboards).",
    technologies: ["React", "HTML", "CSS", "JavaScript", "Tailwind" ],
    image: "/images/eazi.png",
    link: " https://eaziride-z7cw.vercel.app/"
  },
  {
    title: "Nthoestraight E-commerce Template",
    description: "Nthoestraight Is a preview deployment of a modern Next.js-powered online store application showcasing a full e-commerce user experience, including browsing products and shopping features, hosted via Vercel as part of a development workflow.",
    technologies: ["HTML/CSS", "JavaScript", "Node.js", "MongoDB", "Bootstrap"],
    image: "/images/ntho.png",
    link: "https://nthoestraight-ecommerce-git-ccfaa7-phumlanis-projects-49024bb5.vercel.app/"
  }
]