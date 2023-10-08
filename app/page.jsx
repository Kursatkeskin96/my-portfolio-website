import About from '@/components/About'
import Contact from '@/components/Contact'
import HeroSection from '@/components/HeroSection'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Image from 'next/image'

export default function Home() {
  return (
   <div className='bg-black'>
    <HeroSection />
    <About />
    <Skills />
    <Projects />
    <Contact />
   </div>
  )
}
