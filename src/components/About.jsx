import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-spa-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl h-96 md:h-full min-h-96">
            <img
              src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=600&fit=crop"
              alt="Instalaciones del Spa Termas del Daymán"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-spa-dark mb-6">
              Sobre Termas del Daymán
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Las Termas del Daymán son las aguas termales más calientes de Uruguay, con temperaturas que alcanzan hasta 44°C. Ubicadas a solo 10 km de la ciudad de Salto, en la costa del río Daymán, ofrecen una experiencia única de bienestar integral.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Descubierto accidentalmente en los años 40 durante exploraciones petroleras, este tesoro natural ofrece aguas ricas en minerales como magnesio, iodo, fluoruro y calcio, con propiedades terapéuticas comprobadas.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border-l-4 border-spa-gold">
                <h3 className="font-serif font-bold text-spa-gold text-2xl">44°C</h3>
                <p className="text-gray-700 text-sm">Temperatura máxima</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-spa-gold">
                <h3 className="font-serif font-bold text-spa-gold text-2xl">10 km</h3>
                <p className="text-gray-700 text-sm">De Salto ciudad</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-spa-gold">
                <h3 className="font-serif font-bold text-spa-gold text-2xl">10+</h3>
                <p className="text-gray-700 text-sm">Piscinas termales</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-spa-gold">
                <h3 className="font-serif font-bold text-spa-gold text-2xl">8-22h</h3>
                <p className="text-gray-700 text-sm">Horario abierto</p>
              </div>
            </div>

            <p className="text-gray-600 mt-8 text-sm">
              <strong>Ubicación:</strong> Km 478 Ruta 3, Costa del Río Daymán, Salto, Uruguay
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
