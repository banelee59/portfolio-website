'use client'

import { motion } from "framer-motion"
import { item } from "@/components/shared/animations"

interface Experience {
  title: string
  company: string
  period: string
  current?: boolean
  points: string[]
}

interface TimelineItemProps {
  experience: Experience
  index: number
}

export default function TimelineItem({ experience, index }: TimelineItemProps) {
  const opacity = 1 - (index * 0.2) // Decreasing opacity for older items
  
  return (
    <motion.div className="relative flex items-start group" variants={item}>
      {/* Timeline Dot */}
      <div 
        className="absolute left-6 w-4 h-4 bg-[#0980b2] rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-110 transition-transform duration-300"
        style={{ opacity: experience.current ? 1 : opacity }}
      />
      
      {/* Content */}
      <div className="ml-20 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
          <div>
            <h3 className="text-2xl font-bold text-[#191f41] mb-1">{experience.title}</h3>
            <p className="text-[#0980b2] font-semibold text-lg">{experience.company}</p>
          </div>
          <div className="flex items-center gap-3">
            {experience.current && (
              <div className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Current Position
              </div>
            )}
            <span className="text-[#0980b2] font-medium bg-[#0980b2]/10 px-3 py-1 rounded-full text-sm">
              {experience.period}
            </span>
          </div>
        </div>
        
        <div className="space-y-3 text-[#191f41] leading-relaxed">
          {experience.points.map((point, pointIndex) => (
            <div key={pointIndex} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#0980b2] rounded-full mt-2 flex-shrink-0"></div>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}