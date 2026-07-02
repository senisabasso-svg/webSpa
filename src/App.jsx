import React, { useEffect } from 'react'
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
    // Meta tags dinámicos
    document.title = 'Spa Termas del Daymán - Bienestar y Relajación en Salto, Uruguay'
    document.querySelector('meta[name="description"]').content = 'Vive una experiencia de bienestar integral en las aguas termales más calientes de Uruguay. Masajes, tratamientos corporales y circuitos termales.'

    // Scroll to top on mount
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
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

      {/* Footer */}
      <Footer />

      {/* Scroll to top button */}
      <ScrollToTopButton />
    </div>
  )
}

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = React.useState(false)

  const handleScroll = () => {
    setIsVisible(window.scrollY > 300)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-spa-gold text-spa-dark rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center font-bold"
      aria-label="Volver arriba"
    >
      ↑
    </button>
  ) : null
}
