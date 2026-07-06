import React, { useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { SITE } from './data/site'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Facilities from './components/Facilities'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    document.title = `${SITE.name} - ${SITE.tagline}`
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-spa-light overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Facilities />
        <Benefits />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-spa-gold-gradient text-spa-dark rounded-full shadow-spa-gold hover:shadow-spa-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
      aria-label="Volver arriba"
    >
      <ArrowUp size={20} />
    </button>
  )
}
