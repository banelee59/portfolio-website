'use client'

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { fadeIn, container } from "@/components/shared/animations"
import ProjectCard from "@/components/ui/projectcard"
import { PROJECTS_DATA } from "@/components/shared/constants"

export default function ProjectsSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="projects" className="py-16 sm:py-24 bg-[#f9fafb]" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate={inView ? "show" : "hidden"}
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
          animate={inView ? "show" : "hidden"}
        >
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}