'use client'

import { motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin } from "lucide-react"
import { SOCIAL_LINKS } from "@/components/shared/constants"
import { fadeIn } from "@/components/shared/animations"

export default function Footer() {
  return (
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
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-white hover:bg-[#0980b2]/20">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Github className="w-5 h-5" />
                </motion.div>
              </Button>
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-white hover:bg-[#0980b2]/20">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Linkedin className="w-5 h-5" />
                </motion.div>
              </Button>
            </a>
            <a href={SOCIAL_LINKS.email}>
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
  )
}