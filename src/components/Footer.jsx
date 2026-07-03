import React from 'react'
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-spa-dark text-white">
      {/* Main Footer */}
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-spa-gold rounded-full flex items-center justify-center">
                <span className="text-spa-dark font-bold">ST</span>
              </div>
              <span className="font-serif font-bold text-lg">SPA Thermal Daymán</span>
            </div>
            <p className="text-gray-400 text-sm">
              Tu spa médico integral en Daymán. Bienestar, relax y salud en un mismo lugar.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#hero" className="hover:text-spa-gold transition-colors">Inicio</a></li>
              <li><a href="#services" className="hover:text-spa-gold transition-colors">Servicios</a></li>
              <li><a href="#facilities" className="hover:text-spa-gold transition-colors">Instalaciones</a></li>
              <li><a href="#contact" className="hover:text-spa-gold transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Horarios</h4>
            <p className="text-gray-400 text-sm mb-2">Abierto todos los días</p>
            <p className="text-spa-gold font-semibold text-lg">9:00 - 21:00</p>
            <p className="text-gray-400 text-sm mt-4">Incluyendo feriados</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Contacto</h4>
            <div className="space-y-3">
              <a href="tel:+5984736980" className="flex items-center gap-2 text-gray-400 hover:text-spa-gold transition-colors">
                <Phone size={18} />
                <span className="text-sm">(+598) 4736 9280</span>
              </a>
              <a href="mailto:contacto@spathermaldayman.com.uy" className="flex items-center gap-2 text-gray-400 hover:text-spa-gold transition-colors">
                <Mail size={18} />
                <span className="text-sm">contacto@spathermaldayman.com.uy</span>
              </a>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm">Km 478 Ruta 3, Salto</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            <p>&copy; 2026 SPA Thermal Daymán. Todos los derechos reservados.</p>
            <p className="mt-2">Diseño web premium por <a href="https://febros.dev" className="text-spa-gold hover:underline">FEBROS</a></p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com/spathermaldayman"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-spa-gold text-white hover:text-spa-dark rounded-lg flex items-center justify-center transition-all duration-300"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com/spathermaldayman"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-spa-gold text-white hover:text-spa-dark rounded-lg flex items-center justify-center transition-all duration-300"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-spa-gold transition-colors">Privacidad</a>
            <a href="#" className="hover:text-spa-gold transition-colors">Términos</a>
            <a href="#" className="hover:text-spa-gold transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
