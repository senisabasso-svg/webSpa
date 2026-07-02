import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const facilities = [
  {
    image: 'https://images.unsplash.com/photo-1544161515-81aae3ff8556?w=800&h=600&fit=crop',
    title: 'Piscinas Termales',
    description: 'Múltiples piscinas con agua a diferentes temperaturas'
  },
  {
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=600&fit=crop',
    title: 'Sauna y Vapor',
    description: 'Sauna finlandés y cabina de vapor para desintoxicación'
  },
  {
    image: 'https://images.unsplash.com/photo-1600881333195-c2f63f5d3b59?w=800&h=600&fit=crop',
    title: 'Área de Masajes',
    description: 'Salas profesionales para tratamientos personalizados'
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
    title: 'Zona de Relajación',
    description: 'Espacios tranquilos para descanso y meditación'
  },
  {
    image: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?w=800&h=600&fit=crop',
    title: 'Parque Natural',
    description: 'Entorno natural con vegetación nativa'
  },
  {
    image: 'https://images.unsplash.com/photo-1597836212624-27a9be7d0d18?w=800&h=600&fit=crop',
    title: 'Vista al Río Daymán',
    description: 'Hermosas vistas al río para mayor experiencia'
  },
]

export default function Facilities() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % facilities.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + facilities.length) % facilities.length)
  }

  return (
    <section id="facilities" className="py-20 px-4 sm:px-6 lg:px-8 bg-spa-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-spa-dark mb-4">
            Nuestras Instalaciones
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Infraestructura de clase mundial para tu experiencia de bienestar
          </p>
        </div>

        {/* Main Slider */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
          <div className="aspect-video relative">
            <img
              src={facilities[currentIndex].image}
              alt={facilities[currentIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
              <div>
                <h3 className="text-3xl font-serif font-bold text-white mb-2">
                  {facilities[currentIndex].title}
                </h3>
                <p className="text-white/90">{facilities[currentIndex].description}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full transition-all"
          >
            <ChevronLeft size={24} className="text-spa-dark" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full transition-all"
          >
            <ChevronRight size={24} className="text-spa-dark" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {facilities.map((facility, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative rounded-lg overflow-hidden h-24 transition-all ${
                idx === currentIndex ? 'ring-4 ring-spa-gold' : 'opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: '🌡️', title: 'Aguas a 44°C', desc: 'Las más calientes del país' },
            { icon: '💆', title: 'Masajes Profesionales', desc: 'Terapeutas certificados' },
            { icon: '🍃', title: 'Entorno Natural', desc: 'Rodeado de naturaleza' },
            { icon: '♿', title: 'Accesibilidad', desc: 'Instalaciones inclusivas' },
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="font-serif font-bold text-spa-dark mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
