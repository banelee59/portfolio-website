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
    period: "Oct 2024 - Present",
    current: true,
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
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"]
  },
  {
    category: "Backend",
    icon: Code,
    skills: ["Node.js", "Express", "MongoDB", "MySQL"]
  },
  {
    category: "Mobile",
    icon: Code,
    skills: ["React Native", "JavaScript", "TypeScript"]
  },
  {
    category: "Version Control",
    icon: Github,
    skills: ["Git", "GitHub"]
  },
  {
    category: "Deployment",
    icon: ExternalLink,
    skills: ["Vercel"]
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
    title: "Portfolio Website",
    description: "A personal portfolio website built with Next.js and Tailwind CSS to showcase my work.",
    technologies: ["Next.js", "Tailwind", "React"],
    image: "/project-placeholder-1.jpg",
    link: "#"
  },
  {
    title: "Task Management App",
    description: "A simple task management application with CRUD functionality built with React.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/project-placeholder-2.jpg",
    link: "#"
  },
  {
    title: "E-commerce Template",
    description: "A responsive e-commerce template with product listings and cart functionality.",
    technologies: ["HTML/CSS", "JavaScript", "Bootstrap"],
    image: "/project-placeholder-3.jpg",
    link: "#"
  }
]