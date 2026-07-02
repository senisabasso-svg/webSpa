import React from 'react'
import { Droplets, Wind, Flame, Smile, Heart, Users } from 'lucide-react'

const services = [
  {
    icon: Droplets,
    title: 'Circuitos Termales',
    description: 'Acceso a múltiples piscinas con diferentes temperaturas y propiedades terapéuticas.',
    benefits: ['Relajación profunda', 'Alivio muscular', 'Mejora circulatoria']
  },
  {
    icon: Wind,
    title: 'Masajes Terapéuticos',
    description: 'Tratamientos personalizados de masajes profesionales para liberar tensión y estrés.',
    benefits: ['Relajación neuromuscular', 'Reducción de estrés', 'Recuperación física']
  },
  {
    icon: Flame,
    title: 'Sauna y Vapor',
    description: 'Sauna finlandés, vapor y diferentes tipos de duchas de hidroterapia.',
    benefits: ['Desintoxicación', 'Apertura de poros', 'Bienestar general']
  },
  {
    icon: Smile,
    title: 'Tratamientos Faciales',
    description: 'Lifting, belleza facial y fangoterapia para renovación y luminosidad.',
    benefits: ['Regeneración cutánea', 'Vitalidad facial', 'Efecto anti-edad']
  },
  {
    icon: Heart,
    title: 'Tratamientos Corporales',
    description: 'Terapias integrales para el bienestar del cuerpo completo.',
    benefits: ['Rejuvenecimiento', 'Tonificación', 'Hidratación profunda']
  },
  {
    icon: Users,
    title: 'Experiencias Grupales',
    description: 'Vivencias compartidas diseñadas para parejas, familias y grupos.',
    benefits: ['Conexión', 'Calidad compartida', 'Recuerdos duraderos']
  },
]

const ServiceCard = ({ service }) => {
  const Icon = service.icon
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
      <div className="w-16 h-16 bg-spa-gold/10 rounded-lg flex items-center justify-center mb-4">
        <Icon size={32} className="text-spa-gold" />
      </div>
      <h3 className="text-2xl font-serif font-bold text-spa-dark mb-4">{service.title}</h3>
      <p className="text-gray-700 mb-6 flex-grow">{service.description}</p>
      <ul className="space-y-2">
        {service.benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-center text-sm text-gray-600">
            <span className="w-2 h-2 bg-spa-gold rounded-full mr-3"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-spa-dark mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Disfruta de una amplia variedad de tratamientos diseñados para tu bienestar integral
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-spa-gold/10 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-serif font-bold text-spa-dark mb-4">
            Personaliza tu Experiencia
          </h3>
          <p className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto">
            Nuestro equipo profesional está listo para crear un programa personalizado según tus necesidades específicas.
          </p>
          <a
            href="https://wa.me/598473697100"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Consulta Sin Compromiso
          </a>
        </div>
      </div>
    </section>
  )
}
