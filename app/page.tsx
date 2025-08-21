import HeroSection from '@/components/sections/herosection'
import AboutSection from '@/components/sections/aboutsection'
import ExperienceSection from '@/components/sections/experiencesection'
import SkillsSection from '@/components/sections/skillsection'
import EducationSection from '@/components/sections/educationsection'
import ProjectsSection from '@/components/sections/projectsection'
import Footer from '@/components/sections/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <Footer />
    </main>
  )
}