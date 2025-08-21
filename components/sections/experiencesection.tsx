'use client'

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { fadeIn, container } from "@/components/shared/animations"
import TimelineItem from "@/components/ui/timelineitem"
import { EXPERIENCE_DATA } from "@/components/shared/constants"

export default function ExperienceSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="experience" className="py-16 sm:py-24 bg-[#f9fafb]" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={inView ? "show" : "hidden"}
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
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.8 }}
            />
            
            {/* Timeline Items */}
            <motion.div 
              className="space-y-12"
              variants={container}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              {EXPERIENCE_DATA.map((experience, index) => (
                <TimelineItem key={index} experience={experience} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}