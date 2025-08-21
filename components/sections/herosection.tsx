'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { handleDownloadCV } from "@/lib/utils"

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen py-24 sm:py-24 bg-[#191f41] text-white overflow-hidden">
      {/* Dynamic particle background */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10 h-full flex items-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
          {/* Left Content */}
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

          {/* Right Side - Advanced Geometric Animations */}
          <motion.div 
            className="lg:w-1/2 flex justify-center relative"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <div className="relative w-96 h-96">
              {/* Central Hexagon */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                }}
                animate={{
                  background: [
                    "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                    "linear-gradient(45deg, #8b5cf6, #ec4899)",
                    "linear-gradient(45deg, #ec4899, #06b6d4)",
                    "linear-gradient(45deg, #06b6d4, #3b82f6)"
                  ],
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Floating Cubes */}
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * 45) * (Math.PI / 180);
                const radius = 120;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <motion.div
                    key={i}
                    className="absolute w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg shadow-lg"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`
                    }}
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                      x: [x, x + 20, x],
                      y: [y, y - 20, y],
                    }}
                    transition={{
                      duration: 6 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                    whileHover={{ scale: 1.5, rotate: 45 }}
                  />
                );
              })}

              {/* Orbiting Triangles */}
              {Array.from({ length: 4 }).map((_, i) => {
                const orbitRadius = 160;
                return (
                  <motion.div
                    key={`triangle-${i}`}
                    className="absolute w-6 h-6"
                    style={{
                      left: '50%',
                      top: '50%',
                      clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
                    }}
                    animate={{
                      rotate: [i * 90, i * 90 + 360],
                      background: [
                        "linear-gradient(45deg, #f59e0b, #ef4444)",
                        "linear-gradient(45deg, #ef4444, #8b5cf6)",
                        "linear-gradient(45deg, #8b5cf6, #06b6d4)",
                        "linear-gradient(45deg, #06b6d4, #f59e0b)"
                      ]
                    }}
                    style={{
                      transformOrigin: `0px ${orbitRadius}px`,
                    }}
                    transition={{
                      rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                      background: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                  />
                );
              })}

              {/* Pulsing Rings */}
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={`ring-${i}`}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
                  style={{
                    width: 100 + i * 60,
                    height: 100 + i * 60,
                    borderColor: i === 0 ? "#3b82f6" : i === 1 ? "#8b5cf6" : "#ec4899"
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.8, 0.3],
                    borderColor: [
                      i === 0 ? "#3b82f6" : i === 1 ? "#8b5cf6" : "#ec4899",
                      i === 0 ? "#8b5cf6" : i === 1 ? "#ec4899" : "#06b6d4",
                      i === 0 ? "#ec4899" : i === 1 ? "#06b6d4" : "#3b82f6",
                      i === 0 ? "#3b82f6" : i === 1 ? "#8b5cf6" : "#ec4899"
                    ]
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                />
              ))}

              {/* Floating Spheres */}
              {Array.from({ length: 12 }).map((_, i) => {
                const randomX = (Math.random() - 0.5) * 400;
                const randomY = (Math.random() - 0.5) * 400;
                
                return (
                  <motion.div
                    key={`sphere-${i}`}
                    className="absolute w-4 h-4 rounded-full opacity-60"
                    style={{
                      left: '50%',
                      top: '50%',
                      background: `radial-gradient(circle, ${
                        i % 4 === 0 ? '#3b82f6' :
                        i % 4 === 1 ? '#8b5cf6' :
                        i % 4 === 2 ? '#ec4899' : '#06b6d4'
                      }, transparent)`
                    }}
                    animate={{
                      x: [0, randomX, -randomX, 0],
                      y: [0, randomY, -randomY, 0],
                      scale: [0.5, 1.5, 0.8, 0.5],
                      opacity: [0.2, 0.8, 0.4, 0.2]
                    }}
                    transition={{
                      duration: 8 + Math.random() * 4,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                );
              })}

              {/* DNA Helix */}
              <motion.div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {Array.from({ length: 20 }).map((_, i) => {
                  const angle = (i * 18) * (Math.PI / 180);
                  const helixRadius = 80;
                  const x = Math.cos(angle) * helixRadius;
                  const y = (i - 10) * 8;
                  const z = Math.sin(angle) * helixRadius;
                  
                  return (
                    <motion.div
                      key={`helix-${i}`}
                      className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                      style={{
                        left: x,
                        top: y,
                        transform: `translateZ(${z}px)`
                      }}
                      animate={{
                        rotateY: [0, 360],
                        opacity: [0.3, 1, 0.3],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut"
                      }}
                    />
                  );
                })}
              </motion.div>

              {/* Morphing Blob */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 opacity-20"
                animate={{
                  borderRadius: [
                    "60% 40% 30% 70%/60% 30% 70% 40%",
                    "30% 60% 70% 40%/50% 60% 30% 60%",
                    "40% 60% 60% 40%/60% 40% 60% 40%",
                    "60% 40% 30% 70%/60% 30% 70% 40%"
                  ],
                  background: [
                    "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                    "linear-gradient(135deg, #8b5cf6, #ec4899)",
                    "linear-gradient(225deg, #ec4899, #06b6d4)",
                    "linear-gradient(315deg, #06b6d4, #3b82f6)"
                  ],
                  scale: [1, 1.1, 0.9, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Floating Geometric Shapes */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-400/30"
        style={{ clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" }}
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          borderColor: ["rgba(59, 130, 246, 0.3)", "rgba(139, 92, 246, 0.3)", "rgba(236, 72, 153, 0.3)", "rgba(59, 130, 246, 0.3)"]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          borderColor: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-16 w-24 h-24 rounded-full"
        style={{
          background: "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #06b6d4, #3b82f6)"
        }}
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          rotate: [0, 360],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 12, repeat: Infinity, ease: "linear" },
          opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      />

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
  )
}