import React from 'react'
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react'
import { Link } from 'react-scroll'
import { SITE } from '../data/site'

const quickLinks = [
  { label: 'Inicio', to: 'hero' },
  { label: 'Servicios', to: 'services' },
  { label: 'Instalaciones', to: 'facilities' },
  { label: 'Contacto', to: 'contact' },
]

export default function Footer() {
  return (
    <footer className="bg-spa-dark text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-spa-gold/40 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-spa-gold/3 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-spa-gold-gradient rounded-full flex items-center justify-center">
                  <span className="text-spa-dark font-serif font-bold text-lg">ST</span>
                </div>
                <div>
                  <span className="font-serif font-semibold text-lg block">{SITE.name}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-spa-gold/70">{SITE.tagline}</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Tu spa médico integral en Salto. Bienestar, relax y salud en {SITE.name}, rodeado de naturaleza.
              </p>
            </div>

            <div>
              <h4 className="font-serif font-semibold text-lg mb-5 text-spa-gold-light">Enlaces</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className="text-gray-400 hover:text-spa-gold transition-colors text-sm cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-semibold text-lg mb-5 text-spa-gold-light">Horarios</h4>
              <p className="text-gray-400 text-sm mb-2">Abierto todos los días</p>
              <p className="text-spa-gold font-serif text-2xl font-semibold">{SITE.hours}</p>
              <p className="text-gray-500 text-sm mt-3">Incluyendo feriados</p>
            </div>

            <div>
              <h4 className="font-serif font-semibold text-lg mb-5 text-spa-gold-light">Contacto</h4>
              <div className="space-y-3">
                <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 text-gray-400 hover:text-spa-gold transition-colors text-sm">
                  <Phone size={16} className="text-spa-gold/60" />
                  {SITE.phoneDisplay}
                </a>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-gray-400 hover:text-spa-gold transition-colors text-sm">
                  <Mail size={16} className="text-spa-gold/60" />
                  {SITE.email}
                </a>
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin size={16} className="text-spa-gold/60 mt-0.5 flex-shrink-0" />
                  {SITE.address}, Salto
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-gray-500 text-sm text-center md:text-left">
              <p>&copy; 2026 {SITE.name}. Todos los derechos reservados.</p>
              <p className="mt-1">
                Diseño web por{' '}
                <a href="https://febros.dev" className="text-spa-gold/80 hover:text-spa-gold transition-colors">
                  FEBROS
                </a>
              </p>
            </div>

            <div className="flex gap-3">
              {[
                { href: SITE.facebook, icon: Facebook, label: 'Facebook' },
                { href: SITE.instagram, icon: Instagram, label: 'Instagram' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${SITE.name} en ${social.label}`}
                  className="w-10 h-10 rounded-full border border-white/10 hover:border-spa-gold hover:bg-spa-gold/10 flex items-center justify-center text-gray-400 hover:text-spa-gold transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            <div className="flex gap-6 text-gray-500 text-sm">
              <a href="#" className="hover:text-spa-gold transition-colors">Privacidad</a>
              <a href="#" className="hover:text-spa-gold transition-colors">Términos</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
