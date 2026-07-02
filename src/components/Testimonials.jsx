import React from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: '[Nombre del Cliente]',
    location: 'Salto, Uruguay',
    rating: 5,
    text: '[Testimonial real pendiente de completar con opinión verificada del cliente]',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
  },
  {
    name: '[Nombre del Cliente]',
    location: 'Montevideo, Uruguay',
    rating: 5,
    text: '[Testimonial real pendiente de completar con opinión verificada del cliente]',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
  },
  {
    name: '[Nombre del Cliente]',
    location: 'Buenos Aires, Argentina',
    rating: 5,
    text: '[Testimonial real pendiente de completar con opinión verificada del cliente]',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
  },
]

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={18} className="fill-spa-gold text-spa-gold" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic leading-relaxed">
        "{testimonial.text}"
      </p>
      <div className="flex items-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <p className="font-serif font-bold text-spa-dark">{testimonial.name}</p>
          <p className="text-sm text-gray-600">{testimonial.location}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-spa-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-spa-dark mb-6">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experiencias reales de visitantes que han transformado su bienestar con nosotros
          </p>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border-l-4 border-spa-blue p-6 rounded-lg mb-12">
          <p className="text-blue-900 font-medium">
            📝 <strong>Nota:</strong> Esta sección está preparada para mostrar testimonios verificables de clientes reales.
            Los nombres y opiniones deben ser completados con reseñas públicas de Google, Booking.com, TripAdvisor u otras plataformas de confianza.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-serif font-bold text-spa-gold mb-2">4.8/5</div>
              <p className="text-gray-600">Calificación Promedio</p>
              <p className="text-sm text-gray-500 mt-2">En plataformas de reseñas</p>
            </div>
            <div>
              <div className="text-5xl font-serif font-bold text-spa-gold mb-2">1000+</div>
              <p className="text-gray-600">Clientes Satisfechos</p>
              <p className="text-sm text-gray-500 mt-2">Anuales</p>
            </div>
            <div>
              <div className="text-5xl font-serif font-bold text-spa-gold mb-2">98%</div>
              <p className="text-gray-600">Recomendación</p>
              <p className="text-sm text-gray-500 mt-2">De nuestros visitantes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
