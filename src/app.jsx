import { useEffect } from 'preact/hooks'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Schedule } from './components/Schedule'
import { Topics } from './components/Topics'
import { Mentors } from './components/Mentors'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import { I18nProvider } from './components/i18n'
import AOS from 'aos'
import 'aos/dist/aos.css'

export function App() {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true
    })
  }, [])

  return (
    <I18nProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <About />
        <Schedule />
        <Topics />
        <Mentors />
        <CTA />
        <Footer />
      </div>
    </I18nProvider>
  )
}
