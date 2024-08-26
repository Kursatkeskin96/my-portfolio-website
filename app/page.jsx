import About from '@/components/About'
import Card from '@/components/Card'
import Contact from '@/components/Contact'
import HeroSection from '@/components/HeroSection'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Timeline from '@/components/Timeline'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
   <div className='dark:bg-[#0A0A0A] bg-white'>
    <ScrollToTop />
    <HeroSection />
    <About />
    <Timeline />
    <Card />
    <Skills />
    <Projects />
    <Contact />
   </div>
  )
}
