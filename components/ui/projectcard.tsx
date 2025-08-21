'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { item } from "@/components/shared/animations"

interface Project {
  title: string
  description: string
  technologies: string[]
  image: string
  link: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div variants={item} whileHover={{ y: -5 }}>
      <Card className="hover:shadow-md transition-shadow hover:border-[#0980b2]/50 hover:border-2">
        <CardContent className="p-6">
          <div className="mb-4">
            <motion.div 
              className="w-full h-40 bg-[#191f41]/10 rounded-lg mb-4 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
            >
              <Image 
                src={project.image} 
                alt={`${project.title} Screenshot`} 
                width={300} 
                height={160}
                className="rounded-lg object-cover"
              />
            </motion.div>
            <h3 className="text-xl font-bold text-[#191f41] mb-2 hover:text-[#0980b2] transition-colors">{project.title}</h3>
            <p className="text-grey-50 mb-4 hover:text-[#191f41] transition-colors">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="border-[#0980b2] text-[#0980b2] hover:bg-[#0980b2]/10"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          <Button 
            variant="outline" 
            className="w-full border-[#0980b2] text-[#0980b2] hover:bg-[#0980b2]/10 hover:scale-[1.02] transition-transform"
            onClick={() => window.open(project.link, '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Project
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}