import React from 'react'
import { MapPin, Clock, Waves, DollarSign } from 'lucide-react'
import { SITE } from '../data/site'
import { spaImages } from '../data/images'

const stats = [
  { icon: Waves, value: '8', label: 'Piscinas termales' },
  { icon: MapPin, value: '10 km', label: 'De Salto ciudad' },
  { icon: DollarSign, value: '$250', label: 'Entrada diaria' },
  { icon: Clock, value: '9–21h', label: 'Horario diario' },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-spa-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-spa-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-spa-sage/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="image-frame order-2 md:order-1">
            <div className="rounded-3xl overflow-hidden shadow-spa-lg aspect-[4/5]">
              <img
                src={spaImages.about}
                alt={`Piscinas termales de ${SITE.name}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <span className="section-label">Nuestra Historia</span>
            <h2 className="section-title mb-6">
              Bienestar integral en <span className="text-gradient-gold italic">{SITE.name}</span>
            </h2>
            <div className="divider-ornament">
              <span className="text-spa-gold text-lg">✦</span>
            </div>
            <p className="text-gray-700 mb-5 leading-relaxed text-lg">
              {SITE.name} es el spa médico más completo de Salto. Combinamos las propiedades terapéuticas de las aguas termales naturales con tecnología médica de vanguardia y servicios de bienestar integral.
            </p>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Nuestro equipo de profesionales certificados crea experiencias personalizadas: 8 piscinas a distintas temperaturas, sauna, vapor, medicina hiperbárica, masajes terapéuticos y tratamientos faciales de lujo.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <div key={idx} className="card-spa p-5 group">
                    <Icon size={22} className="text-spa-gold mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-serif font-bold text-spa-gold text-2xl">{stat.value}</h3>
                    <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
                  </div>
                )
              })}
            </div>

            <div className="flex items-start gap-3 text-gray-600">
              <MapPin size={20} className="text-spa-gold mt-0.5 flex-shrink-0" />
              <p className="text-sm">
                <strong className="text-spa-dark">Ubicación:</strong> {SITE.address}, {SITE.city}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
