'use client'

import { motion } from "framer-motion"
import { fadeIn } from "@/components/shared/animations"

export default function AboutSection() {
  return (
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
                    <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ring-4 ring-gradient-to-br from-blue-400 to-purple-500 hover:ring-8 hover:ring-blue-300">
                      <img 
                        src="/images/ps pic.jpeg" 
                        alt="Profile Picture" 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
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
  )
}