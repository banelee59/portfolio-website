"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  ExternalLink,
  Download,
  Github,
  Linkedin,
  User,
  Briefcase,
  GraduationCap,
  Code,
  FolderOpen,
  Users,
} from "lucide-react"

// Import the CV file (make sure the path is correct)
const cvFile = '/public/documents/Phumlani_Mthembu_CV.pdf';

export default function Portfolio() {
  // Function to handle CV download
  const handleDownloadCV = () => {
    // Create an anchor element
    const link = document.createElement('a');
    link.href = cvFile;
    
    // Set the download attribute with the desired filename
    link.download = 'Phumlani_Sibonelo_Mthembu_CV.pdf';
    
    // Append to the body, trigger click, and then remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with #191f41 background */}
      <section id="about" className="py-24 sm:py-24 bg-[#191f41] text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
                Hi, I'm <span className="text-[#0980b2]">Phumlani Sibonelo Mthembu</span>
              </h1>
              <h2 className="text-xl sm:text-3xl font-medium mb-8">a Software Developer</h2>
              <p className="text-grey-50 mb-12 max-w-lg">
                A motivated software developer with a Diploma in Software Development and hands-on experience building responsive web applications using modern technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-[#0980b2] hover:bg-[#0980b2]/90"
                  onClick={handleDownloadCV}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-white/10 rounded-full flex items-center justify-center overflow-hidden backdrop-blur-sm relative">
                <Image
                  src="/images/ps pic.jpeg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

  

{/* Experience Section - Timeline Style */}
<section id="experience" className="py-16 sm:py-24 bg-[#f9fafb]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#191f41] mb-4">Work Experience</h2>
            <p className="text-grey-50 max-w-2xl mx-auto">
              My professional journey and the roles I've held in the tech industry
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Timeline Container */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0980b2] via-[#0980b2]/60 to-[#0980b2]/30"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                
                {/* Current Position */}
                <div className="relative flex items-start group">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-[#0980b2] rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-110 transition-transform duration-300"></div>
                  
                  {/* Content */}
                  <div className="ml-20 w-full">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-[#191f41] mb-1">Software Developer Intern</h3>
                        <p className="text-[#0980b2] font-semibold text-lg">GMNT Holdings</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          Current Position
                        </div>
                        <span className="text-[#0980b2] font-medium bg-[#0980b2]/10 px-3 py-1 rounded-full text-sm">
                          Oct 2024 - Present
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-3 text-[#191f41] leading-relaxed">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#0980b2] rounded-full mt-2 flex-shrink-0"></div>
                        <p>Developed and deployed responsive company websites using React, Next.js, and Tailwind CSS.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#0980b2] rounded-full mt-2 flex-shrink-0"></div>
                        <p>Built and maintained project codebases, implemented modern UI components, and ensured crossbrowser compatibility.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#0980b2] rounded-full mt-2 flex-shrink-0"></div>
                        <p>Collaborated with team members to plan and deliver project milestones. </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Previous Position 1 */}
                <div className="relative flex items-start group">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-[#0980b2]/70 rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-110 transition-transform duration-300"></div>
                  
                  {/* Content */}
                  <div className="ml-20 w-full">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-[#191f41] mb-1">Software Developer Intern</h3>
                        <p className="text-[#0980b2] font-semibold text-lg">Spaza Eats</p>
                      </div>
                      <span className="text-[#0980b2] font-medium bg-[#0980b2]/10 px-3 py-1 rounded-full text-sm">
                        May 2024 - Sep 2024
                      </span>
                    </div>
                    
                    <div className="space-y-3 text-[#191f41] leading-relaxed">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#0980b2] rounded-full mt-2 flex-shrink-0"></div>
                        <p>System management:
                        Optimizing internal systems to ensure seamless functionality and efficiency. </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#0980b2] rounded-full mt-2 flex-shrink-0"></div>
                        <p>Dispatch Coordination:
                        coordinating with delivery personnel and optimizing routes to enhance efficiency</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#0980b2] rounded-full mt-2 flex-shrink-0"></div>
                        <p>Software Management: 
                      identifying bugs, suggesting enhancements, and assisting in the deployment of updates
                      </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Previous Position 2 */}
                <div className="relative flex items-start group">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-[#0980b2]/50 rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-110 transition-transform duration-300"></div>
                  
                  {/* Content */}
                  <div className="ml-20 w-full">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-[#191f41] mb-1">Software Developer Intern</h3>
                        <p className="text-[#0980b2] font-semibold text-lg">Mzingisi Simplified Solutions</p>
                      </div>
                      <span className="text-[#0980b2] font-medium bg-[#0980b2]/10 px-3 py-1 rounded-full text-sm">
                        Jun 2023 - Apr 2024
                      </span>
                    </div>
                    
                    <div className="space-y-3 text-[#191f41] leading-relaxed">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#0980b2] rounded-full mt-2 flex-shrink-0"></div>
                        <p>Designed and developed new websites for the company and clients using HTML, CSS, and React.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#0980b2] rounded-full mt-2 flex-shrink-0"></div>
                        <p>Improved existing company website by implementing responsive design and modern UI updates</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#0980b2] rounded-full mt-2 flex-shrink-0"></div>
                        <p>Built a personal online portfolio to showcase company projects.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#191f41] mb-4">Skills & Technologies</h2>
            <p className="text-grey-50 max-w-2xl mx-auto">
              The tools and technologies I work with on a daily basis
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend Technologies */}
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#191f41]/10 rounded-lg flex items-center justify-center">
                    <Code className="text-[#0980b2]" />
                  </div>
                  <h3 className="font-bold text-[#191f41]">Frontend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-[#0980b2] hover:bg-[#0980b2]/90 text-white">HTML</Badge>
                  <Badge className="bg-[#0980b2] hover:bg-[#0980b2]/90 text-white">CSS</Badge>
                  <Badge className="bg-[#0980b2] hover:bg-[#0980b2]/90 text-white">JavaScript</Badge>
                  <Badge className="bg-[#0980b2] hover:bg-[#0980b2]/90 text-white">TypeScript</Badge>
                  <Badge className="bg-[#0980b2] hover:bg-[#0980b2]/90 text-white">React</Badge>
                  <Badge className="bg-[#0980b2] hover:bg-[#0980b2]/90 text-white">Next.js</Badge>
                  <Badge className="bg-[#0980b2] hover:bg-[#0980b2]/90 text-white">Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Backend Technologies */}
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#191f41]/10 rounded-lg flex items-center justify-center">
                    <Code className="text-[#0980b2]" />
                  </div>
                  <h3 className="font-bold text-[#191f41]">Backend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-[#0980b2] hover:bg-[#0980b2]/90 text-white">Node.js</Badge>
                  <Badge className="bg-[#0980b2] hover:bg-[#0980b2]/90 text-white">Express</Badge>
                  <Badge className="bg-[#0980b2] hover:bg-[#0980b2]/90 text-white">MongoDB</Badge>
                  <Badge className="bg-[#0980b2] hover:bg-[#0980b2]/90 text-white">MySQL</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Mobile Development */}
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#191f41]/10 rounded-lg flex items-center justify-center">
                    <Code className="text-[#0980b2]" />
                  </div>
                  <h3 className="font-bold text-[#191f41]">Mobile</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-[#0980b2] hover:bg-[#0980b2]/90 text-white">React Native</Badge>
                  <Badge className="bg-[#0980b2] hover:bg-[#0980b2]/90 text-white">JavaScript</Badge>
                  <Badge className="bg-[#0980b2] hover:bg-[#0980b2]/90 text-white">TypeScript</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Version Control */}
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#191f41]/10 rounded-lg flex items-center justify-center">
                    <Github className="text-[#0980b2]" />
                  </div>
                  <h3 className="font-bold text-[#191f41]">Version Control</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-[#0980b2] hover:bg-[#0980b2]/90 text-white">Git</Badge>
                  <Badge className="bg-[#0980b2] hover:bg-[#0980b2]/90 text-white">GitHub</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Deployment */}
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#191f41]/10 rounded-lg flex items-center justify-center">
                    <ExternalLink className="text-[#0980b2]" />
                  </div>
                  <h3 className="font-bold text-[#191f41]">Deployment</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-[#0980b2] hover:bg-[#0980b2]/90 text-white">Vercel</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Tools */}
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#191f41]/10 rounded-lg flex items-center justify-center">
                    <Code className="text-[#0980b2]" />
                  </div>
                  <h3 className="font-bold text-[#191f41]">Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-[#0980b2] hover:bg-[#0980b2]/90 text-white">VS Code</Badge>
                  <Badge className="bg-[#0980b2] hover:bg-[#0980b2]/90 text-white">Figma</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-24 bg-[#f9fafb]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#191f41] mb-4">Featured Projects</h2>
            <p className="text-grey-50 max-w-2xl mx-auto">
              A selection of projects I've worked on recently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-full h-40 bg-[#191f41]/10 rounded-lg mb-4 flex items-center justify-center">
                    <FolderOpen className="w-12 h-12 text-[#0980b2]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#191f41] mb-2">Mzingisi Web Design</h3>
                  <p className="text-grey-50 mb-4">
                    Created a comprehensive website for Mzingisi construction to improve customer accessibility.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-[#0980b2] text-[#0980b2]">Web Design</Badge>
                    <Badge variant="outline" className="border-[#0980b2] text-[#0980b2]">Client Project</Badge>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-[#0980b2] text-[#0980b2] hover:bg-[#0980b2]/10">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-full h-40 bg-[#191f41]/10 rounded-lg mb-4 flex items-center justify-center">
                    <FolderOpen className="w-12 h-12 text-[#0980b2]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#191f41] mb-2">Spaza Eats System</h3>
                  <p className="text-grey-50 mb-4">
                    Managed dispatch operations and updated website systems to ensure optimal functionality.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-[#0980b2] text-[#0980b2]">System Management</Badge>
                    <Badge variant="outline" className="border-[#0980b2] text-[#0980b2]">Optimization</Badge>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-[#0980b2] text-[#0980b2] hover:bg-[#0980b2]/10">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-full h-40 bg-[#191f41]/10 rounded-lg mb-4 flex items-center justify-center">
                    <FolderOpen className="w-12 h-12 text-[#0980b2]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#191f41] mb-2">GMNT Client Websites</h3>
                  <p className="text-grey-50 mb-4">
                    Developed multiple client websites using modern technologies and integrated MongoDB databases.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-[#0980b2] text-[#0980b2]">Full Stack</Badge>
                    <Badge variant="outline" className="border-[#0980b2] text-[#0980b2]">MongoDB</Badge>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-[#0980b2] text-[#0980b2] hover:bg-[#0980b2]/10">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


     {/* Footer */}
<footer className="bg-[#191f41] text-white py-12">
  <div className="container mx-auto px-4 sm:px-6">
    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
      <div>
        <h3 className="text-xl font-bold mb-2">Phumlani Mthembu</h3>
        <p className="text-grey-50">Software Developer</p>
      </div>
      <div className="flex space-x-4">
        <a href="https://github.com/banelee59" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon" className="text-white hover:bg-[#0980b2]/20">
            <Github className="w-5 h-5" />
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/phumlani-mthembu-797339233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon" className="text-white hover:bg-[#0980b2]/20">
            <Linkedin className="w-5 h-5" />
          </Button>
        </a>
        <a href="mailto:banelee59@gmail.com">
          <Button variant="ghost" size="icon" className="text-white hover:bg-[#0980b2]/20">
            <Mail className="w-5 h-5" />
          </Button>
        </a>
      </div>
    </div>
    <Separator className="my-8 bg-[#0980b2]/30" />
    <div className="text-center text-sm text-grey-50">
      © {new Date().getFullYear()} Phumlani Sibonelo Mthembu. All rights reserved.
    </div>
  </div>
</footer>
    </div>
  )
}