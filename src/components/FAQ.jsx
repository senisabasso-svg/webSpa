import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: '¿Cuál es la temperatura del agua?',
    answer: 'Las aguas termales de Daymán alcanzan temperaturas de hasta 44°C, la más alta de Uruguay. Contamos con múltiples piscinas a diferentes temperaturas para tu comodidad.'
  },
  {
    question: '¿Cuáles son los horarios de atención?',
    answer: 'Estamos abiertos de 8:00 a 22:00 horas todos los días de la semana, incluyendo feriados. Ajustamos horarios especiales para grupos.'
  },
  {
    question: '¿Hay estacionamiento?',
    answer: 'Sí, contamos con estacionamiento amplio y seguro para nuestros visitantes. Es completamente gratuito.'
  },
  {
    question: '¿Qué incluye la entrada?',
    answer: 'La entrada incluye acceso a todas las piscinas termales, sauna, vapor, y áreas comunes. Los tratamientos y masajes tienen costo adicional.'
  },
  {
    question: '¿Puedo traer niños?',
    answer: 'Absolutamente. Las Termas del Daymán es un lugar familiar. Ofrecemos tarifas especiales para niños menores de 12 años y áreas seguras para ellos.'
  },
  {
    question: '¿Es necesario reservar con anticipación?',
    answer: 'No es obligatorio, pero recomendamos contactarnos si deseas agendar tratamientos específicos o visitar en temporada alta.'
  },
  {
    question: '¿Cuáles son las contraindicaciones?',
    answer: 'El agua termal no es recomendada para personas con ciertos problemas cardiovasculares, embarazo avanzado o heridas abiertas. Consulta con tu médico.'
  },
  {
    question: '¿Ofrecen servicios de alojamiento?',
    answer: 'Directamente en nuestro complejo ofrecemos servicios de spa. En la zona de Termas hay varios hoteles y posadas disponibles a pocos metros.'
  },
]

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-white p-6 rounded-lg border border-gray-200 hover:border-spa-gold transition-colors duration-300 mb-4"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-serif font-bold text-lg text-spa-dark">{faq.question}</h3>
        <ChevronDown
          size={24}
          className={`text-spa-gold transition-transform duration-300 flex-shrink-0 ml-4 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>
      {isOpen && (
        <p className="mt-4 text-gray-700 leading-relaxed animate-fade-in">{faq.answer}</p>
      )}
    </button>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-spa-dark mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600">
            Resuelve tus dudas sobre nuestras instalaciones y servicios
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              faq={faq}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-spa-gold/10 p-8 rounded-xl text-center border border-spa-gold/20">
          <h3 className="text-2xl font-serif font-bold text-spa-dark mb-3">
            ¿Tienes otra pregunta?
          </h3>
          <p className="text-gray-700 mb-6">
            Nuestro equipo está listo para ayudarte con cualquier consulta
          </p>
          <a
            href="https://wa.me/598473697100"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
