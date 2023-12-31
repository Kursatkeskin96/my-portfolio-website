import About from '@/components/About'
import Contact from '@/components/Contact'
import HeroSection from '@/components/HeroSection'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

export default function Home() {
  return (
   <div className='dark:bg-black bg-white'>
    <HeroSection />
    <About />
    <Skills />
    <Projects />
    <Contact />
   </div>
  )
}
