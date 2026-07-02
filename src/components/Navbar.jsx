import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-scroll'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: 'Inicio', to: 'hero' },
    { label: 'Sobre Nosotros', to: 'about' },
    { label: 'Servicios', to: 'services' },
    { label: 'Instalaciones', to: 'facilities' },
    { label: 'Beneficios', to: 'benefits' },
    { label: 'Opiniones', to: 'testimonials' },
    { label: 'Contacto', to: 'contact' },
  ]

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-spa-gold rounded-full flex items-center justify-center">
              <span className="text-spa-dark font-bold text-sm">TD</span>
            </div>
            <span className="hidden sm:inline font-serif font-semibold text-spa-dark">
              Termas del Daymán
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="px-4 py-2 text-spa-dark hover:text-spa-gold transition-colors cursor-pointer font-medium text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="btn-primary cursor-pointer"
            >
              Reservar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? (
              <X size={24} className="text-spa-dark" />
            ) : (
              <Menu size={24} className="text-spa-dark" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 bg-white/95 backdrop-blur">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="px-4 py-2 text-spa-dark hover:text-spa-gold transition-colors cursor-pointer font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="btn-primary cursor-pointer text-center"
                onClick={() => setIsOpen(false)}
              >
                Reservar
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
