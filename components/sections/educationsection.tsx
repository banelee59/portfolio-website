'use client'

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { fadeIn, container } from "@/components/shared/animations"
import TimelineItem from "@/components/ui/timelineitem"
import { EDUCATION_DATA } from "@/components/shared/constants"

export default function EducationSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="education" className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-purple-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeIn}
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
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.8 }}
            />
            
            {/* Education Items */}
            <motion.div 
              className="space-y-12"
              variants={container}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              {EDUCATION_DATA.map((education, index) => (
                <motion.div 
                  key={index}
                  className="relative flex items-start group"
                  variants={container}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-[#0980b2] rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-110 transition-transform duration-300" 
                    style={{ opacity: 1 - (index * 0.3) }}
                  />
                  
                  {/* Content */}
                  <div className="ml-20 w-full">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-[#191f41] mb-1">{education.title}</h3>
                        <p className="text-[#0980b2] font-semibold text-lg">{education.institution}</p>
                      </div>
                      <span className="text-[#0980b2] font-medium bg-[#0980b2]/10 px-3 py-1 rounded-full text-sm">
                        {education.period}
                      </span>
                    </div>
                    
                    <div className="space-y-3 text-[#191f41] leading-relaxed">
                      {education.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#0980b2] rounded-full mt-2 flex-shrink-0"></div>
                          <p>{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}