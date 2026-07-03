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
              Sobre SPA Thermal Daymán
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              SPA Thermal Daymán es el spa médico más completo de Salto. Ubicado en el corazón de Daymán, a solo 10 km de la ciudad, combina las propiedades terapéuticas de las aguas termales naturales con tecnología médica de vanguardia y servicios de bienestar integral.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Nuestro equipo de profesionales certificados ofrece una experiencia personalizada en bienestar. Contamos con 8 piscinas termales a diferentes temperaturas, sauna, vapor, medicina hiperbárica, masajes terapéuticos y tratamientos faciales de lujo.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border-l-4 border-spa-gold">
                <h3 className="font-serif font-bold text-spa-gold text-2xl">8</h3>
                <p className="text-gray-700 text-sm">Piscinas termales</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-spa-gold">
                <h3 className="font-serif font-bold text-spa-gold text-2xl">10 km</h3>
                <p className="text-gray-700 text-sm">De Salto ciudad</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-spa-gold">
                <h3 className="font-serif font-bold text-spa-gold text-2xl">$250</h3>
                <p className="text-gray-700 text-sm">Entrada diaria</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-spa-gold">
                <h3 className="font-serif font-bold text-spa-gold text-2xl">9-21h</h3>
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
