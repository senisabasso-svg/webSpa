import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la integración con un servicio de email o backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-spa-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-spa-dark mb-6">
            Reserva Tu Experiencia
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Contacta con nosotros para agendar tu visita o consultar sobre nuestros servicios
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-spa-dark mb-8">Información de Contacto</h3>

            <div className="space-y-6">
              {/* Location */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-spa-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-spa-gold" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-spa-dark mb-1">Ubicación</h4>
                  <p className="text-gray-700">Km 478 Ruta 3, Costa del Río Daymán</p>
                  <p className="text-gray-600 text-sm">Salto, Uruguay</p>
                  <a
                    href="https://maps.google.com/maps?q=Termas+del+Dayman+Salto+Uruguay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-spa-gold hover:text-spa-dark font-semibold text-sm mt-2 inline-block"
                  >
                    Ver en Google Maps →
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-spa-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-spa-gold" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-spa-dark mb-1">Teléfono</h4>
                  <a href="tel:+5984736971" className="text-gray-700 hover:text-spa-gold">
                    (+598) 4736 9711
                  </a>
                  <br />
                  <a href="tel:+5984736908" className="text-gray-700 hover:text-spa-gold">
                    (+598) 4736 9008
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-spa-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-spa-gold" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-spa-dark mb-1">Email</h4>
                  <a href="mailto:info@termasdeldayman.com" className="text-gray-700 hover:text-spa-gold">
                    info@termasdeldayman.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-spa-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-spa-gold" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-spa-dark mb-1">Horarios</h4>
                  <p className="text-gray-700">Lunes a Domingo: 8:00 - 22:00</p>
                  <p className="text-gray-600 text-sm">Abierto todos los feriados</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <a
                href="https://wa.me/598473697100"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300"
              >
                <MessageCircle size={24} />
                Escribir por WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-spa-dark mb-8">Envíanos tu Consulta</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-spa-dark mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-spa-gold focus:ring-2 focus:ring-spa-gold/20 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-spa-dark mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-spa-gold focus:ring-2 focus:ring-spa-gold/20 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-spa-dark mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+598 98765432"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-spa-gold focus:ring-2 focus:ring-spa-gold/20 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-spa-dark mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Cuéntanos tus necesidades..."
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-spa-gold focus:ring-2 focus:ring-spa-gold/20 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
              >
                {submitted ? '✓ Mensaje Enviado' : 'Enviar Consulta'}
              </button>

              {submitted && (
                <p className="text-center text-green-600 font-semibold">
                  Gracias por tu consulta. Nos contactaremos pronto.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <h3 className="text-2xl font-serif font-bold text-spa-dark mb-8">Ubicación</h3>
          <div className="rounded-xl overflow-hidden shadow-lg h-96">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.8269999999998!2d-57.024!3d-31.432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95e2b2b2b2b2b2b3%3A0x1a1a1a1a1a1a1a1a!2sTermas%20del%20Dayma%CC%81n!5e0!3m2!1ses!2suy!4v"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
