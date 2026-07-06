import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react'
import { SITE } from '../data/site'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactItems = [
    {
      icon: MapPin,
      title: 'Ubicación',
      content: (
        <>
          <p className="text-gray-700">{SITE.address}</p>
          <p className="text-gray-500 text-sm">{SITE.city}</p>
          <a
            href={`https://maps.google.com/maps?q=${SITE.mapsQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-spa-gold hover:text-spa-gold-dark font-medium text-sm mt-2 inline-block"
          >
            Ver en Google Maps →
          </a>
        </>
      ),
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: (
        <a href={`tel:${SITE.phone}`} className="text-gray-700 hover:text-spa-gold transition-colors">
          {SITE.phoneDisplay}
        </a>
      ),
    },
    {
      icon: Mail,
      title: 'Email',
      content: (
        <a href={`mailto:${SITE.email}`} className="text-gray-700 hover:text-spa-gold transition-colors">
          {SITE.email}
        </a>
      ),
    },
    {
      icon: Clock,
      title: 'Horarios',
      content: (
        <>
          <p className="text-gray-700">Lunes a Domingo: {SITE.hours}</p>
          <p className="text-gray-500 text-sm">Abierto todos los feriados</p>
        </>
      ),
    },
  ]

  return (
    <section id="contact" className="section-padding bg-spa-cream relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-spa-gold/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="section-label">Reservas</span>
          <h2 className="section-title mb-5">
            Reserva en <span className="text-gradient-gold italic">{SITE.name}</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Estamos listos para recibirte. Escribinos y te ayudamos a planificar tu visita ideal
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-5 mb-8">
              {contactItems.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="card-spa p-5 flex gap-4">
                    <div className="w-12 h-12 bg-spa-cream rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-spa-gold" />
                    </div>
                    <div>
                      <h4 className="font-serif font-semibold text-spa-dark mb-1">{item.title}</h4>
                      {item.content}
                    </div>
                  </div>
                )
              })}
            </div>

            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle size={22} />
              Escribir por WhatsApp
            </a>
          </div>

          <div className="card-spa p-8 md:p-10">
            <h3 className="text-2xl font-serif font-semibold text-spa-dark mb-6">Envíanos tu consulta</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { id: 'name', label: 'Nombre Completo', type: 'text', placeholder: 'Tu nombre', required: true },
                { id: 'email', label: 'Correo Electrónico', type: 'email', placeholder: 'tu@email.com', required: true },
                { id: 'phone', label: 'Teléfono', type: 'tel', placeholder: '+598 98765432', required: false },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-sm font-medium text-spa-dark mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    required={field.required}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3.5 bg-spa-light border border-spa-sand rounded-xl focus:border-spa-gold transition-colors"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-spa-dark mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={`Cuéntanos qué experiencia buscás en ${SITE.name}...`}
                  rows="5"
                  className="w-full px-4 py-3.5 bg-spa-light border border-spa-sand rounded-xl focus:border-spa-gold transition-colors resize-none"
                />
              </div>

              <button type="submit" className="w-full btn-primary">
                {submitted ? '✓ Mensaje Enviado' : (
                  <>
                    Enviar Consulta
                    <Send size={18} />
                  </>
                )}
              </button>

              {submitted && (
                <p className="text-center text-spa-sage font-medium text-sm">
                  Gracias por tu consulta. Nos contactaremos pronto.
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-serif font-semibold text-spa-dark mb-6 text-center">
            Cómo llegar a {SITE.name}
          </h3>
          <div className="rounded-3xl overflow-hidden shadow-spa-lg h-80 md:h-96 ring-1 ring-spa-sand">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.5!2d-57.9086561!3d-31.4574236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95acb8c8c8c8c8c9%3A0x0!2sSPA%20Thermal%20Daym%C3%A1n!5e0!3m2!1ses!2suy!4v1700000000000"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Ubicación ${SITE.name}`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
