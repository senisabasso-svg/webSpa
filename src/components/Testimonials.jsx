import React from 'react'
import { Star, Quote } from 'lucide-react'
import { SITE } from '../data/site'

const testimonials = [
  {
    name: 'María González',
    location: 'Salto, Uruguay',
    rating: 5,
    text: 'Un lugar increíble para desconectar. Las piscinas termales de SPA Thermal Daymán son espectaculares y el personal muy atento. Volvemos cada mes con la familia.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80',
  },
  {
    name: 'Carlos Mendez',
    location: 'Montevideo, Uruguay',
    rating: 5,
    text: 'El masaje terapéutico en SPA Thermal Daymán fue lo mejor que me hice en años. Las instalaciones son impecables y el ambiente transmite paz desde que llegás.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
  },
  {
    name: 'Ana Rodríguez',
    location: 'Concordia, Argentina',
    rating: 5,
    text: 'Cruzamos la frontera especialmente para venir. Vale totalmente la pena: aguas calientes, entorno natural y un servicio de primera.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80',
  },
]

const TestimonialCard = ({ testimonial }) => (
  <div className="card-spa p-8 h-full flex flex-col relative">
    <Quote size={40} className="text-spa-gold/20 absolute top-6 right-6" />
    <div className="flex items-center gap-1 mb-5">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} size={16} className="fill-spa-gold text-spa-gold" />
      ))}
    </div>
    <p className="text-gray-700 mb-8 leading-relaxed flex-grow italic text-lg">
      "{testimonial.text}"
    </p>
    <div className="flex items-center gap-4 pt-5 border-t border-spa-sand">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover ring-2 ring-spa-gold/30"
      />
      <div>
        <p className="font-serif font-semibold text-spa-dark">{testimonial.name}</p>
        <p className="text-sm text-gray-500">{testimonial.location}</p>
      </div>
    </div>
  </div>
)

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-spa-gradient relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-spa-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="section-label">Testimonios</span>
          <h2 className="section-title mb-5">
            Lo que dicen nuestros <span className="text-gradient-gold italic">visitantes</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Experiencias reales de quienes visitaron {SITE.name}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} testimonial={testimonial} />
          ))}
        </div>

        <div className="card-spa p-10 md:p-12">
          <div className="grid md:grid-cols-3 gap-10 text-center divide-y md:divide-y-0 md:divide-x divide-spa-sand">
            {[
              { value: '4.9/5', label: 'Calificación promedio', sub: 'En Google y redes sociales' },
              { value: '1000+', label: 'Visitantes al año', sub: 'De Uruguay y Argentina' },
              { value: '98%', label: 'Nos recomiendan', sub: 'Volverían sin dudarlo' },
            ].map((stat, i) => (
              <div key={i} className="py-4 md:py-0 md:px-6">
                <div className="text-4xl md:text-5xl font-serif font-semibold text-gradient-gold mb-2">{stat.value}</div>
                <p className="text-spa-dark font-medium">{stat.label}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
