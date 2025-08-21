'use client'

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { item, hoverEffect } from "@/components/shared/animations"

interface SkillCategory {
  category: string
  icon: any
  skills: string[]
}

interface SkillCardProps {
  category: SkillCategory
}

export default function SkillCard({ category }: SkillCardProps) {
  const IconComponent = category.icon

  return (
    <motion.div variants={item} whileHover={{ y: -5 }}>
      <Card className="hover:shadow-lg transition-all duration-300 ease-in-out hover:border-[#0980b2]/30 border-2 border-transparent">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-[#191f41]/10 rounded-lg flex items-center justify-center hover:bg-[#0980b2]/20 transition-colors">
              <IconComponent className="text-[#0980b2] hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-bold text-[#191f41] hover:text-[#0980b2] transition-colors">{category.category}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, index) => (
              <Badge 
                key={index}
                className="bg-[#0980b2] hover:bg-[#191f41] text-white transition-colors cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}