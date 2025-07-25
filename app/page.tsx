"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  ExternalLink,
  Download,
  Github,
  Linkedin,
  User,
  Briefcase,
  GraduationCap,
  Code,
  FolderOpen,
  Users,
} from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

// Import the CV file (make sure the path is correct)
const cvFile = '/public/documents/Phumlani_Mthembu_CV.pdf';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } }
}

const slideInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
}

const slideInFromRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
}

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
}

const hoverEffect = {
  scale: 1.03,
  transition: { duration: 0.3 }
}

const tapEffect = {
  scale: 0.98
}

export default function Portfolio() {
  // Function to handle CV download
  const handleDownloadCV = () => {
    // Create an anchor element
    const link = document.createElement('a');
    link.href = cvFile;
    
    // Set the download attribute with the desired filename
    link.download = 'Phumlani_Sibonelo_Mthembu_CV.pdf';
    
    // Append to the body, trigger click, and then remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Intersection Observer hooks for scroll animations
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="min-h-screen  bg-white">
      {/* Hero Section with Galaxy Animation */}
    <section id="about" className="relative min-h-screen py-24 sm:py-24 bg-[#191f41] text-white overflow-hidden">
      {/* Dynamic particle background */}
  <div className="absolute inset-0">
    {Array.from({ length: 30 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-blue-400 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1.5, 0.5],
          x: [0, Math.random() * 50 - 25],
          y: [0, Math.random() * 50 - 25],
        }}
        transition={{
          duration: 3 + Math.random() * 3,
          repeat: Infinity,
          delay: Math.random() * 3,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>

  {/* Floating geometric shapes */}
  <motion.div 
    className="absolute top-20 left-10 w-32 h-32 border border-blue-400/30"
    animate={{ 
      rotate: [0, 360],
      scale: [1, 1.1, 1],
    }}
    transition={{ 
      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
      scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }}
  />
  
  <motion.div 
    className="absolute bottom-20 right-16 w-24 h-24 bg-purple-500/20 rounded-full"
    animate={{
      y: [-20, 20, -20],
      x: [-10, 10, -10],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

  <div className="container mx-auto px-4 sm:px-6 relative z-10 h-full flex items-center">
    <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
      <motion.div 
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight relative"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          Hi, I'm <span className="text-[#0980b2]">Phumlani Sibonelo Mthembu</span>
          {/* Glowing effect */}
          <motion.div 
            className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent blur-sm opacity-50"
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Hi, I'm Phumlani Sibonelo Mthembu
          </motion.div>
        </motion.h1>
        
        <motion.h2
          className="text-xl sm:text-3xl font-medium mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
           A Full-Stack Developer specializing in responsive web applications
           using modern technologies.
        </motion.h2>
        
        <motion.p 
          className="text-gray-300 mb-12 max-w-lg leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            onClick={handleDownloadCV}
            asChild
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </div>
            </motion.div>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div 
        className="lg:w-1/2 flex justify-center"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 1,
          type: "spring",
          bounce: 0.6,
          delay: 0.5
        }}
      >
        <motion.div 
          className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl flex items-center justify-center relative overflow-hidden border-4 border-[#0980b2]/30"
          whileHover={{ scale: 1.05 }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(59, 130, 246, 0.5)",
              "0 0 40px rgba(147, 51, 234, 0.7)",
              "0 0 20px rgba(59, 130, 246, 0.5)",
            ],
          }}
          transition={{
            boxShadow: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <Image
            src="/images/ps pic.jpeg"
            alt="Profile"
            width={320}
            height={320}
            className="object-cover rounded-full"
            priority
          />
          
          {/* Orbital rings */}
          <motion.div 
            className="absolute inset-0 border-2 border-blue-400/30 rounded-full"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute inset-2 border border-purple-400/30 rounded-full"
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </motion.div>
    </div>
  </div>

  {/* Cosmic dust overlay */}
  <motion.div 
    className="absolute inset-0 opacity-30"
    style={{
      background: `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                   radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
                   radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%)`
    }}
    animate={{
      opacity: [0.1, 0.3, 0.1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

  {/* Scroll indicator */}
  <motion.div 
    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 2, repeat: Infinity }}
  >
    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
      <motion.div 
        className="w-1 h-2 bg-white rounded-full mt-2"
        animate={{ y: [0, 4, 0], opacity: [1, 0.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </div>
  </motion.div>
</section>



{/* About Me Section */}
<section 
  id="about" 
  className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-blue-50 hover:bg-gradient-to-bl transition-all duration-500 ease-in-out"
>
  <div className="container mx-auto px-4 sm:px-6">
    <div className="max-w-5xl mx-auto">
      {/* Section Header */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent mb-6 hover:bg-gradient-to-l transition-all duration-300">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full hover:bg-gradient-to-l hover:scale-110 transition-all duration-300"></div>
      </motion.div>

      {/* Main Card */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Floating Background Elements */}
        <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-200 rounded-full opacity-50 blur-xl hover:opacity-70 hover:scale-110 transition-all duration-500"></div>
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full opacity-40 blur-xl hover:opacity-60 hover:scale-105 transition-all duration-500"></div>
        <div className="absolute top-1/2 -left-8 w-16 h-16 bg-pink-200 rounded-full opacity-30 blur-lg hover:opacity-50 hover:scale-110 transition-all duration-500"></div>

        {/* Main Content Card */}
        <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-xl border border-white/50 hover:shadow-2xl hover:border-blue-200/70 hover:bg-white/80 transition-all duration-300">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            
            {/* Profile Section */}
            <motion.div 
              className="lg:col-span-1 text-center lg:text-left group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative inline-block mb-6 group-hover:scale-105 transition-transform duration-300">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg hover:bg-gradient-to-bl hover:shadow-xl transition-all duration-300">
                  SD
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white shadow-md hover:bg-green-500 hover:scale-110 transition-all duration-300"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Software Developer</h3>
              <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">Full-Stack Enthusiast</p>
              
              <div className="flex justify-center lg:justify-start space-x-1 mb-6 group-hover:space-x-2 transition-all duration-300">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full hover:from-yellow-500 hover:to-orange-600 hover:scale-125 transition-all duration-300"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  />
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 text-center group-hover:gap-5 transition-all duration-300">
                <div className="hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">2+</div>
                  <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Years Exp</div>
                </div>
                <div className="hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-purple-600 group-hover:text-purple-700 transition-colors duration-300">∞</div>
                  <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Learning</div>
                </div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div 
              className="lg:col-span-2 space-y-6 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="prose prose-lg max-w-none group-hover:prose-xl transition-all duration-300">
                <p className="text-gray-700 leading-relaxed text-lg mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  I'm a <span className="font-semibold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">dedicated software developer</span> with over two years of hands-on experience creating responsive, user-friendly web applications. I hold a Diploma in Software Development and work confidently across the full stack.
                </p>
                
                <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  My passion lies in <span className="italic text-purple-600 group-hover:text-purple-700 transition-colors duration-300">transforming complex problems</span> into elegant, efficient solutions. I thrive in collaborative environments where innovation meets practicality.
                </p>
              </div>

              {/* Philosophy */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-2xl border-l-4 border-gradient-to-b from-blue-400 to-purple-500 hover:from-blue-100/70 hover:to-purple-100/70 hover:shadow-lg hover:border-l-8 transition-all duration-300">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center hover:text-blue-600 transition-colors duration-300">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-3 hover:scale-150 transition-all duration-300"></span>
                  My Philosophy
                </h4>
                <p className="text-gray-600 italic hover:text-gray-700 transition-colors duration-300">
                  "Code is poetry written in logic. Every line should tell a story, every function should have a purpose, and every project should make a difference."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>



      {/* Experience Section - Timeline Style */}
      <section id="experience" className="py-16 sm:py-24 bg-[#f9fafb]" ref={experienceRef}>
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={experienceInView ? "show" : "hidden"}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-[#191f41] mb-4">Work Experience</h2>
            <p className="text-grey-50 max-w-2xl mx-auto">
              My professional journey spanning 2+ years in the tech industry
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Timeline Container */}
            <div className="relative">
              {/* Timeline Line */}
              <motion.div 
                className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0980b2] via-[#0980b2]/60 to-[#0980b2]/30"
                initial={{ scaleY: 0 }}
                animate={experienceInView ? { scaleY: 1 } : {}}
                transition={{ duration: 0.8 }}
              />
              
              {/* Timeline Items */}
              <motion.div 
                className="space-y-12"
                variants={container}
                initial="hidden"
                animate={experienceInView ? "show" : "hidden"}
              >
                {/* Current Position */}
                <motion.div 
                  className="relative flex items-start group"
                  variants={item}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-[#0980b2] rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Content */}
                  <div className="ml-20 w-full">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-[#191f41] mb-1">Software Developer</h3>
                        <p className="text-[#0980b2] font-semibold text-lg">GMNT Holdings</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          Current Position
                        </div>
                        <span className="text-[#0980b2] font-medium bg-[#0980b2]/10 px-3 py-1 rounded-full text-sm">
                          Oct 2024 - Present
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-3 text-[#191f41] leading-relaxed">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#0980b2] rounded-full mt-2 flex-shrink-0"></div>
                        <p>Lead development of responsive web applications using React, Next.js, and Tailwind CSS, improving client engagement by 40%.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#0980b2] rounded-full mt-2 flex-shrink-0"></div>
                        <p>Architected and maintained scalable project codebases, implementing modern UI components and ensuring cross-browser compatibility.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#0980b2] rounded-full mt-2 flex-shrink-0"></div>
                        <p>Mentored junior developers and collaborated with cross-functional teams to deliver complex project milestones.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Previous Position 1 */}
                <motion.div 
                  className="relative flex items-start group"
                  variants={item}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-[#0980b2]/70 rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Content */}
                  <div className="ml-20 w-full">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-[#191f41] mb-1">Software Developer</h3>
                        <p className="text-[#0980b2] font-semibold text-lg">Spaza Eats</p>
                      </div>
                      <span className="text-[#0980b2] font-medium bg-[#0980b2]/10 px-3 py-1 rounded-full text-sm">
                        May 2024 - Sep 2024
                      </span>
                    </div>
                    
                    <div className="space-y-3 text-[#191f41] leading-relaxed">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#0980b2] rounded-full mt-2 flex-shrink-0"></div>
                        <p>Redesigned and optimized internal systems architecture, reducing processing time by 30% and improving system reliability.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#0980b2] rounded-full mt-2 flex-shrink-0"></div>
                        <p>Developed automated dispatch coordination algorithms that reduced delivery times by 25% through route optimization.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#0980b2] rounded-full mt-2 flex-shrink-0"></div>
                        <p>Led software quality assurance initiatives, identifying critical bugs and implementing CI/CD pipelines for seamless updates.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Previous Position 2 */}
                <motion.div 
                  className="relative flex items-start group"
                  variants={item}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-[#0980b2]/50 rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Content */}
                  <div className="ml-20 w-full">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-[#191f41] mb-1">Junior Software Developer</h3>
                        <p className="text-[#0980b2] font-semibold text-lg">Mzingisi Simplified Solutions</p>
                      </div>
                      <span className="text-[#0980b2] font-medium bg-[#0980b2]/10 px-3 py-1 rounded-full text-sm">
                        Jun 2023 - Apr 2024
                      </span>
                    </div>
                    
                    <div className="space-y-3 text-[#191f41] leading-relaxed">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#0980b2] rounded-full mt-2 flex-shrink-0"></div>
                        <p>Designed and developed 10+ client websites using modern web technologies, increasing client satisfaction scores by 35%.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#0980b2] rounded-full mt-2 flex-shrink-0"></div>
                        <p>Implemented responsive design principles and modern UI updates that improved company website conversion rates by 20%.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#0980b2] rounded-full mt-2 flex-shrink-0"></div>
                        <p>Built comprehensive online portfolio systems to showcase company projects and attract new clients.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    {/* Skills Section */}
<section className="py-16 sm:py-24" ref={skillsRef}>
  <div className="container mx-auto px-4 sm:px-6">
    <motion.div 
      className="text-center mb-12"
      initial="hidden"
      animate={skillsInView ? "show" : "hidden"}
      variants={fadeIn}
    >
      <h2 className="text-3xl font-bold text-[#191f41] mb-4">Skills & Technologies</h2>
      <p className="text-grey-50 max-w-2xl mx-auto">
        The tools and technologies I've mastered through 2+ years of professional experience
      </p>
    </motion.div>

    <motion.div 
      className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={container}
      initial="hidden"
      animate={skillsInView ? "show" : "hidden"}
    >
      {/* Frontend Technologies */}
      <motion.div variants={item} whileHover={{ y: -5 }}>
        <Card className="hover:shadow-lg transition-all duration-300 ease-in-out hover:border-[#0980b2]/30 border-2 border-transparent">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-[#191f41]/10 rounded-lg flex items-center justify-center hover:bg-[#0980b2]/20 transition-colors">
                <Code className="text-[#0980b2] hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-bold text-[#191f41] hover:text-[#0980b2] transition-colors">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-[#0980b2] hover:bg-[#191f41] text-white transition-colors cursor-default">HTML</Badge>
              <Badge className="bg-[#0980b2] hover:bg-[#191f41] text-white transition-colors cursor-default">CSS</Badge>
              <Badge className="bg-[#0980b2] hover:bg-[#191f41] text-white transition-colors cursor-default">JavaScript</Badge>
              <Badge className="bg-[#0980b2] hover:bg-[#191f41] text-white transition-colors cursor-default">TypeScript</Badge>
              <Badge className="bg-[#0980b2] hover:bg-[#191f41] text-white transition-colors cursor-default">React</Badge>
              <Badge className="bg-[#0980b2] hover:bg-[#191f41] text-white transition-colors cursor-default">Next.js</Badge>
              <Badge className="bg-[#0980b2] hover:bg-[#191f41] text-white transition-colors cursor-default">Tailwind CSS</Badge>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Backend Technologies */}
      <motion.div variants={item} whileHover={{ y: -5 }}>
        <Card className="hover:shadow-lg transition-all duration-300 ease-in-out hover:border-[#0980b2]/30 border-2 border-transparent">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-[#191f41]/10 rounded-lg flex items-center justify-center hover:bg-[#0980b2]/20 transition-colors">
                <Code className="text-[#0980b2] hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-bold text-[#191f41] hover:text-[#0980b2] transition-colors">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-[#0980b2] hover:bg-[#191f41] text-white transition-colors cursor-default">Node.js</Badge>
              <Badge className="bg-[#0980b2] hover:bg-[#191f41] text-white transition-colors cursor-default">Express</Badge>
              <Badge className="bg-[#0980b2] hover:bg-[#191f41] text-white transition-colors cursor-default">MongoDB</Badge>
              <Badge className="bg-[#0980b2] hover:bg-[#191f41] text-white transition-colors cursor-default">MySQL</Badge>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Mobile Development */}
      <motion.div variants={item} whileHover={{ y: -5 }}>
        <Card className="hover:shadow-lg transition-all duration-300 ease-in-out hover:border-[#0980b2]/30 border-2 border-transparent">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-[#191f41]/10 rounded-lg flex items-center justify-center hover:bg-[#0980b2]/20 transition-colors">
                <Code className="text-[#0980b2] hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-bold text-[#191f41] hover:text-[#0980b2] transition-colors">Mobile</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-[#0980b2] hover:bg-[#191f41] text-white transition-colors cursor-default">React Native</Badge>
              <Badge className="bg-[#0980b2] hover:bg-[#191f41] text-white transition-colors cursor-default">JavaScript</Badge>
              <Badge className="bg-[#0980b2] hover:bg-[#191f41] text-white transition-colors cursor-default">TypeScript</Badge>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Version Control */}
      <motion.div variants={item} whileHover={{ y: -5 }}>
        <Card className="hover:shadow-lg transition-all duration-300 ease-in-out hover:border-[#0980b2]/30 border-2 border-transparent">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-[#191f41]/10 rounded-lg flex items-center justify-center hover:bg-[#0980b2]/20 transition-colors">
                <Github className="text-[#0980b2] hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-bold text-[#191f41] hover:text-[#0980b2] transition-colors">Version Control</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-[#0980b2] hover:bg-[#191f41] text-white transition-colors cursor-default">Git</Badge>
              <Badge className="bg-[#0980b2] hover:bg-[#191f41] text-white transition-colors cursor-default">GitHub</Badge>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Deployment */}
      <motion.div variants={item} whileHover={{ y: -5 }}>
        <Card className="hover:shadow-lg transition-all duration-300 ease-in-out hover:border-[#0980b2]/30 border-2 border-transparent">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-[#191f41]/10 rounded-lg flex items-center justify-center hover:bg-[#0980b2]/20 transition-colors">
                <ExternalLink className="text-[#0980b2] hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-bold text-[#191f41] hover:text-[#0980b2] transition-colors">Deployment</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-[#0980b2] hover:bg-[#191f41] text-white transition-colors cursor-default">Vercel</Badge>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Tools */}
      <motion.div variants={item} whileHover={{ y: -5 }}>
        <Card className="hover:shadow-lg transition-all duration-300 ease-in-out hover:border-[#0980b2]/30 border-2 border-transparent">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-[#191f41]/10 rounded-lg flex items-center justify-center hover:bg-[#0980b2]/20 transition-colors">
                <Code className="text-[#0980b2] hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-bold text-[#191f41] hover:text-[#0980b2] transition-colors">Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-[#0980b2] hover:bg-[#191f41] text-white transition-colors cursor-default">VS Code</Badge>
              <Badge className="bg-[#0980b2] hover:bg-[#191f41] text-white transition-colors cursor-default">Figma</Badge>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  </div>
</section>


      {/* Education Section */}
<section id="education" className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
  <div className="container mx-auto px-4 sm:px-6">
    <div className="max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent mb-6">
          Education
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
      </motion.div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <motion.div 
          className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0980b2] via-[#0980b2]/60 to-[#0980b2]/30"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        
        {/* Education Items */}
        <motion.div 
          className="space-y-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Tshwane University */}
          <motion.div 
            className="relative flex items-start group"
            variants={item}
          >
            {/* Timeline Dot */}
            <div className="absolute left-6 w-4 h-4 bg-[#0980b2] rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-110 transition-transform duration-300" />
            
            {/* Content */}
            <div className="ml-20 w-full">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#191f41] mb-1">Diploma in Software Development</h3>
                  <p className="text-[#0980b2] font-semibold text-lg">Tshwane University of Technology</p>
                </div>
                <span className="text-[#0980b2] font-medium bg-[#0980b2]/10 px-3 py-1 rounded-full text-sm">
                  2022
                </span>
              </div>
              
              <div className="space-y-3 text-[#191f41] leading-relaxed">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0980b2] rounded-full mt-2 flex-shrink-0"></div>
                  <p>Completed comprehensive training in software development principles, web technologies, and programming methodologies.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0980b2] rounded-full mt-2 flex-shrink-0"></div>
                  <p>Gained hands-on experience with modern web development frameworks and database technologies.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* IT Fundamentals */}
          <motion.div 
            className="relative flex items-start group"
            variants={item}
          >
            {/* Timeline Dot */}
            <div className="absolute left-6 w-4 h-4 bg-[#0980b2]/70 rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-110 transition-transform duration-300" />
            
            {/* Content */}
            <div className="ml-20 w-full">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#191f41] mb-1">IT Fundamentals Certificate</h3>
                  <p className="text-[#0980b2] font-semibold text-lg">Thokoza Progressive Youth</p>
                </div>
                <span className="text-[#0980b2] font-medium bg-[#0980b2]/10 px-3 py-1 rounded-full text-sm">
                  2018
                </span>
              </div>
              
              <div className="space-y-3 text-[#191f41] leading-relaxed">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0980b2] rounded-full mt-2 flex-shrink-0"></div>
                  <p>Acquired foundational knowledge in information technology concepts and computer systems.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* High School */}
          <motion.div 
            className="relative flex items-start group"
            variants={item}
          >
            {/* Timeline Dot */}
            <div className="absolute left-6 w-4 h-4 bg-[#0980b2]/50 rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-110 transition-transform duration-300" />
            
            {/* Content */}
            <div className="ml-20 w-full">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#191f41] mb-1">National Senior Certificate</h3>
                  <p className="text-[#0980b2] font-semibold text-lg">Nsalamanga High School</p>
                </div>
                <span className="text-[#0980b2] font-medium bg-[#0980b2]/10 px-3 py-1 rounded-full text-sm">
                  2016
                </span>
              </div>
              
              <div className="space-y-3 text-[#191f41] leading-relaxed">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0980b2] rounded-full mt-2 flex-shrink-0"></div>
                  <p>Completed secondary education with a focus on mathematics and science subjects.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </div>
</section>


      {/* Projects Section */}
<section id="projects" className="py-16 sm:py-24 bg-[#f9fafb]" ref={projectsRef}>
  <div className="container mx-auto px-4 sm:px-6">
    <motion.div 
      className="text-center mb-12"
      initial="hidden"
      animate={projectsInView ? "show" : "hidden"}
      variants={fadeIn}
    >
      <h2 className="text-3xl font-bold text-[#191f41] mb-4">Featured Projects</h2>
      <p className="text-grey-50 max-w-2xl mx-auto">
        A selection of projects I've worked on throughout my career
      </p>
    </motion.div>

    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={container}
      initial="hidden"
      animate={projectsInView ? "show" : "hidden"}
    >
      {/* Project 1 */}
      <motion.div variants={item} whileHover={{ y: -5 }}>
        <Card className="hover:shadow-md transition-shadow hover:border-[#0980b2]/50 hover:border-2">
          <CardContent className="p-6">
            <div className="mb-4">
              <motion.div 
                className="w-full h-40 bg-[#191f41]/10 rounded-lg mb-4 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
              >
                <Image 
                  src="/project-placeholder-1.jpg" 
                  alt="Project 1 Screenshot" 
                  width={300} 
                  height={160}
                  className="rounded-lg object-cover"
                />
              </motion.div>
              <h3 className="text-xl font-bold text-[#191f41] mb-2 hover:text-[#0980b2] transition-colors">Portfolio Website</h3>
              <p className="text-grey-50 mb-4 hover:text-[#191f41] transition-colors">
                A personal portfolio website built with Next.js and Tailwind CSS to showcase my work.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-[#0980b2] text-[#0980b2] hover:bg-[#0980b2]/10">Next.js</Badge>
                <Badge variant="outline" className="border-[#0980b2] text-[#0980b2] hover:bg-[#0980b2]/10">Tailwind</Badge>
                <Badge variant="outline" className="border-[#0980b2] text-[#0980b2] hover:bg-[#0980b2]/10">React</Badge>
              </div>
            </div>
            <Button variant="outline" className="w-full border-[#0980b2] text-[#0980b2] hover:bg-[#0980b2]/10 hover:scale-[1.02] transition-transform">
              <ExternalLink className="w-4 h-4 mr-2" />
              View on GitHub
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Project 2 */}
      <motion.div variants={item} whileHover={{ y: -5 }}>
        <Card className="hover:shadow-md transition-shadow hover:border-[#0980b2]/50 hover:border-2">
          <CardContent className="p-6">
            <div className="mb-4">
              <motion.div 
                className="w-full h-40 bg-[#191f41]/10 rounded-lg mb-4 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
              >
                <Image 
                  src="/project-placeholder-2.jpg" 
                  alt="Project 2 Screenshot" 
                  width={300} 
                  height={160}
                  className="rounded-lg object-cover"
                />
              </motion.div>
              <h3 className="text-xl font-bold text-[#191f41] mb-2 hover:text-[#0980b2] transition-colors">Task Management App</h3>
              <p className="text-grey-50 mb-4 hover:text-[#191f41] transition-colors">
                A simple task management application with CRUD functionality built with React.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-[#0980b2] text-[#0980b2] hover:bg-[#0980b2]/10">React</Badge>
                <Badge variant="outline" className="border-[#0980b2] text-[#0980b2] hover:bg-[#0980b2]/10">Node.js</Badge>
                <Badge variant="outline" className="border-[#0980b2] text-[#0980b2] hover:bg-[#0980b2]/10">MongoDB</Badge>
              </div>
            </div>
            <Button variant="outline" className="w-full border-[#0980b2] text-[#0980b2] hover:bg-[#0980b2]/10 hover:scale-[1.02] transition-transform">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Live Demo
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Project 3 */}
      <motion.div variants={item} whileHover={{ y: -5 }}>
        <Card className="hover:shadow-md transition-shadow hover:border-[#0980b2]/50 hover:border-2">
          <CardContent className="p-6">
            <div className="mb-4">
              <motion.div 
                className="w-full h-40 bg-[#191f41]/10 rounded-lg mb-4 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
              >
                <Image 
                  src="/project-placeholder-3.jpg" 
                  alt="Project 3 Screenshot" 
                  width={300} 
                  height={160}
                  className="rounded-lg object-cover"
                />
              </motion.div>
              <h3 className="text-xl font-bold text-[#191f41] mb-2 hover:text-[#0980b2] transition-colors">E-commerce Template</h3>
              <p className="text-grey-50 mb-4 hover:text-[#191f41] transition-colors">
                A responsive e-commerce template with product listings and cart functionality.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-[#0980b2] text-[#0980b2] hover:bg-[#0980b2]/10">HTML/CSS</Badge>
                <Badge variant="outline" className="border-[#0980b2] text-[#0980b2] hover:bg-[#0980b2]/10">JavaScript</Badge>
                <Badge variant="outline" className="border-[#0980b2] text-[#0980b2] hover:bg-[#0980b2]/10">Bootstrap</Badge>
              </div>
            </div>
            <Button variant="outline" className="w-full border-[#0980b2] text-[#0980b2] hover:bg-[#0980b2]/10 hover:scale-[1.02] transition-transform">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Code
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  </div>
</section>


      {/* Footer */}
      <motion.footer 
        className="bg-[#191f41] text-white py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Phumlani Mthembu</h3>
              <p className="text-grey-50">Software Developer</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/banelee59" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-white hover:bg-[#0980b2]/20">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Github className="w-5 h-5" />
                  </motion.div>
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/phumlani-mthembu-797339233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-white hover:bg-[#0980b2]/20">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Linkedin className="w-5 h-5" />
                  </motion.div>
                </Button>
              </a>
              <a href="mailto:banelee59@gmail.com">
                <Button variant="ghost" size="icon" className="text-white hover:bg-[#0980b2]/20">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Mail className="w-5 h-5" />
                  </motion.div>
                </Button>
              </a>
            </div>
          </div>
          <Separator className="my-8 bg-[#0980b2]/30" />
          <div className="text-center text-sm text-grey-50">
            © {new Date().getFullYear()} Phumlani Sibonelo Mthembu. All rights reserved.
          </div>
        </div>
      </motion.footer>
    </div>
  )
}