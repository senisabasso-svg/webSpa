import React from 'react'
import { Droplets, Wind, Flame, Smile, Heart, Users, ArrowRight } from 'lucide-react'
import { SITE } from '../data/site'
import { spaImages } from '../data/images'

const services = [
  {
    icon: Droplets,
    title: 'Circuitos Termales',
    description: 'Acceso a múltiples piscinas con diferentes temperaturas y propiedades terapéuticas naturales.',
    benefits: ['Relajación profunda', 'Alivio muscular', 'Mejora circulatoria'],
  },
  {
    icon: Wind,
    title: 'Masajes Terapéuticos',
    description: 'Tratamientos personalizados con terapeutas certificados para liberar tensión y estrés.',
    benefits: ['Relajación neuromuscular', 'Reducción de estrés', 'Recuperación física'],
  },
  {
    icon: Flame,
    title: 'Sauna y Vapor',
    description: 'Sauna finlandés, cabina de vapor y duchas de hidroterapia para una desintoxicación completa.',
    benefits: ['Desintoxicación', 'Apertura de poros', 'Bienestar general'],
  },
  {
    icon: Smile,
    title: 'Tratamientos Faciales',
    description: 'Lifting, belleza facial y fangoterapia para renovación, luminosidad y efecto anti-edad.',
    benefits: ['Regeneración cutánea', 'Vitalidad facial', 'Efecto rejuvenecedor'],
  },
  {
    icon: Heart,
    title: 'Tratamientos Corporales',
    description: 'Terapias integrales diseñadas para el bienestar y equilibrio del cuerpo completo.',
    benefits: ['Rejuvenecimiento', 'Tonificación', 'Hidratación profunda'],
  },
  {
    icon: Users,
    title: 'Experiencias Grupales',
    description: 'Programas especiales para parejas, familias y grupos que buscan momentos inolvidables.',
    benefits: ['Conexión', 'Calidad compartida', 'Recuerdos duraderos'],
  },
]

const ServiceCard = ({ service }) => {
  const Icon = service.icon
  return (
    <div className="card-spa p-8 h-full flex flex-col group relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-spa-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      <div className="w-14 h-14 bg-spa-cream rounded-2xl flex items-center justify-center mb-6 group-hover:bg-spa-gold/15 transition-colors duration-300">
        <Icon size={28} className="text-spa-gold" />
      </div>
      <h3 className="text-2xl font-serif font-semibold text-spa-dark mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{service.description}</p>
      <ul className="space-y-2.5 border-t border-spa-sand pt-5">
        {service.benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-center text-sm text-gray-600">
            <span className="w-1.5 h-1.5 bg-spa-gold rounded-full mr-3 flex-shrink-0" />
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="section-label">Experiencias</span>
          <h2 className="section-title mb-5">
            Servicios de <span className="text-gradient-gold italic">bienestar</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Tratamientos en {SITE.name} para nutrir cuerpo, mente y espíritu
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>

        <div className="mt-20 relative rounded-3xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${spaImages.cta})`,
            }}
          />
          <div className="absolute inset-0 bg-spa-dark/80" />
          <div className="relative z-10 p-12 md:p-16 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Diseñamos tu experiencia ideal
            </h3>
            <p className="text-white/80 mb-8 text-lg max-w-xl mx-auto leading-relaxed">
              Nuestro equipo profesional crea programas personalizados según tus necesidades y objetivos de bienestar.
            </p>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              Consulta Sin Compromiso
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
