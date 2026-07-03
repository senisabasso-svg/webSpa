import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Thermometer, Sparkles, Leaf, Accessibility } from 'lucide-react'

const facilities = [
  {
    image: 'https://images.unsplash.com/photo-1540555700474-954638992c09?w=1200&h=700&fit=crop&q=80',
    title: 'Piscinas Termales',
    description: 'Ocho piscinas con agua natural a distintas temperaturas',
  },
  {
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1200&h=700&fit=crop&q=80',
    title: 'Sauna y Vapor',
    description: 'Sauna finlandés y cabina de vapor para desintoxicación profunda',
  },
  {
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1200&h=700&fit=crop&q=80',
    title: 'Área de Masajes',
    description: 'Salas privadas con ambiente sereno para tratamientos exclusivos',
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=700&fit=crop&q=80',
    title: 'Zona de Relajación',
    description: 'Espacios diseñados para meditación y descanso profundo',
  },
  {
    image: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?w=1200&h=700&fit=crop&q=80',
    title: 'Entorno Natural',
    description: 'Rodeado de vegetación nativa y aire puro del río Daymán',
  },
  {
    image: 'https://images.unsplash.com/photo-1597836212624-27a9be7d0d18?w=1200&h=700&fit=crop&q=80',
    title: 'Vista al Río Daymán',
    description: 'Paisajes únicos que elevan cada momento de tu visita',
  },
]

const features = [
  { icon: Thermometer, title: 'Aguas Termales', desc: 'Propiedades minerales naturales' },
  { icon: Sparkles, title: 'Masajes Profesionales', desc: 'Terapeutas certificados' },
  { icon: Leaf, title: 'Entorno Natural', desc: 'Naturaleza y tranquilidad' },
  { icon: Accessibility, title: 'Accesibilidad', desc: 'Instalaciones inclusivas' },
]

export default function Facilities() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % facilities.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % facilities.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + facilities.length) % facilities.length)

  return (
    <section id="facilities" className="section-padding bg-spa-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">El Lugar</span>
          <h2 className="section-title mb-5">
            Instalaciones de <span className="text-gradient-gold italic">clase mundial</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Espacios pensados para que cada visita sea una experiencia memorable
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-spa-lg mb-6 group">
          <div className="aspect-[16/9] md:aspect-[21/9] relative">
            {facilities.map((facility, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-700 ${idx === currentIndex ? 'opacity-100' : 'opacity-0'}`}
              >
                <img src={facility.image} alt={facility.title} className="w-full h-full object-cover" />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-spa-dark/80 via-spa-dark/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <span className="text-spa-gold-light text-sm uppercase tracking-widest mb-2 block">
                {String(currentIndex + 1).padStart(2, '0')} / {String(facilities.length).padStart(2, '0')}
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-2">
                {facilities[currentIndex].title}
              </h3>
              <p className="text-white/80 text-lg max-w-xl">{facilities[currentIndex].description}</p>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-spa flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} className="text-spa-dark" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-spa flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
            aria-label="Siguiente"
          >
            <ChevronRight size={24} className="text-spa-dark" />
          </button>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-16">
          {facilities.map((facility, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative rounded-xl overflow-hidden aspect-video transition-all duration-300 ${
                idx === currentIndex ? 'ring-2 ring-spa-gold ring-offset-2 scale-105' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img src={facility.image} alt={facility.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div key={idx} className="card-spa p-6 text-center group">
                <div className="w-14 h-14 mx-auto mb-4 bg-spa-cream rounded-2xl flex items-center justify-center group-hover:bg-spa-gold/15 transition-colors">
                  <Icon size={26} className="text-spa-gold" />
                </div>
                <h3 className="font-serif font-semibold text-spa-dark text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
