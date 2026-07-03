import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-scroll'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Inicio', to: 'hero' },
    { label: 'Nosotros', to: 'about' },
    { label: 'Servicios', to: 'services' },
    { label: 'Instalaciones', to: 'facilities' },
    { label: 'Beneficios', to: 'benefits' },
    { label: 'Opiniones', to: 'testimonials' },
    { label: 'Contacto', to: 'contact' },
  ]

  const navClass = scrolled ? 'glass-nav shadow-spa' : 'glass-nav-transparent'
  const textClass = scrolled ? 'text-spa-dark' : 'text-white'
  const logoBg = scrolled ? 'bg-spa-gold' : 'bg-white/20 backdrop-blur-sm border border-white/30'

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="hero" smooth={true} duration={500} className="flex items-center gap-3 cursor-pointer group">
            <div className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${logoBg}`}>
              <span className={`font-serif font-bold text-lg ${scrolled ? 'text-spa-dark' : 'text-white'}`}>ST</span>
            </div>
            <div className="hidden sm:block">
              <span className={`font-serif font-semibold text-lg leading-tight block transition-colors ${textClass}`}>
                SPA Thermal Daymán
              </span>
              <span className={`text-[10px] uppercase tracking-[0.2em] transition-colors ${scrolled ? 'text-spa-gold' : 'text-white/70'}`}>
                Salto · Uruguay
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                className={`px-3 py-2 transition-colors cursor-pointer font-medium text-sm tracking-wide hover:text-spa-gold ${textClass}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/5984736980"
              target="_blank"
              rel="noopener noreferrer"
              className={scrolled ? 'btn-primary text-sm py-2.5 px-6' : 'btn-white text-sm py-2.5 px-6'}
            >
              Reservar
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-full transition-colors ${scrolled ? 'hover:bg-spa-cream text-spa-dark' : 'hover:bg-white/10 text-white'}`}
            aria-label="Menú"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6 bg-white/95 backdrop-blur-xl rounded-b-2xl shadow-spa-lg -mx-4 px-4">
            <div className="flex flex-col gap-1 pt-2">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="px-4 py-3 text-spa-dark hover:text-spa-gold hover:bg-spa-cream/50 rounded-xl transition-colors cursor-pointer font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://wa.me/5984736980"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                Reservar por WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
