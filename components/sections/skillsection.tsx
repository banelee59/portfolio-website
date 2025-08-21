'use client'

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { fadeIn, container } from "@/components/shared/animations"
import SkillCard from "@/components/ui/skillcard"
import { SKILLS_DATA } from "@/components/shared/constants"

export default function SkillsSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="py-16 sm:py-24" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate={inView ? "show" : "hidden"}
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
          animate={inView ? "show" : "hidden"}
        >
          {SKILLS_DATA.map((skillCategory, index) => (
            <SkillCard key={index} category={skillCategory} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}