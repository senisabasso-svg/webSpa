import React from 'react'
import { Link } from 'react-scroll'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1544161515-81aae3ff8556?w=1200&h=900&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in leading-tight">
          Descubre el Bienestar
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-gray-100 animate-fade-in font-light max-w-2xl mx-auto">
          Sumérjete en las aguas termales más calientes de Uruguay. Una experiencia de relajación, salud y rejuvenecimiento en el paraíso natural de Salto.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="btn-primary cursor-pointer inline-block"
          >
            Conoce Nuestros Servicios
          </Link>
          <a
            href="https://wa.me/598473697100"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white cursor-pointer inline-block"
          >
            Reservar Ahora
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <Link to="about" smooth={true} duration={500} className="cursor-pointer">
          <ChevronDown size={32} className="text-white" />
        </Link>
      </div>
    </section>
  )
}
