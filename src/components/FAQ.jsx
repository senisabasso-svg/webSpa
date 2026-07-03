import React, { useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'

const faqs = [
  {
    question: '¿Cuál es la temperatura del agua?',
    answer: 'Las aguas termales de Daymán alcanzan hasta 44°C. Contamos con 8 piscinas a distintas temperaturas para que elijas la que más te convenga.',
  },
  {
    question: '¿Cuáles son los horarios de atención?',
    answer: 'Estamos abiertos de 9:00 a 21:00 todos los días de la semana, incluyendo feriados. Para grupos, podemos coordinar horarios especiales.',
  },
  {
    question: '¿Hay estacionamiento?',
    answer: 'Sí, contamos con estacionamiento amplio, seguro y completamente gratuito para todos nuestros visitantes.',
  },
  {
    question: '¿Qué incluye la entrada?',
    answer: 'La entrada incluye acceso a todas las piscinas termales, sauna, vapor y áreas comunes. Masajes y tratamientos especiales tienen costo adicional.',
  },
  {
    question: '¿Puedo traer niños?',
    answer: 'Por supuesto. Somos un lugar familiar con tarifas especiales para menores de 12 años y áreas seguras diseñadas para los más pequeños.',
  },
  {
    question: '¿Es necesario reservar con anticipación?',
    answer: 'No es obligatorio para la entrada general, pero recomendamos reservar si querés agendar masajes o visitar en temporada alta.',
  },
  {
    question: '¿Cuáles son las contraindicaciones?',
    answer: 'No recomendamos el agua termal a personas con ciertos problemas cardiovasculares, embarazo avanzado o heridas abiertas. Consultá con tu médico.',
  },
  {
    question: '¿Ofrecen alojamiento?',
    answer: 'En nuestro complejo nos especializamos en servicios de spa. En la zona hay hoteles y posadas a pocos metros para complementar tu estadía.',
  },
]

const FAQItem = ({ faq, isOpen, onClick }) => (
  <div className={`rounded-2xl border transition-all duration-300 mb-3 ${isOpen ? 'border-spa-gold/40 bg-spa-cream/50 shadow-spa' : 'border-spa-sand bg-white hover:border-spa-gold/20'}`}>
    <button onClick={onClick} className="w-full text-left p-6 flex items-center justify-between gap-4">
      <h3 className="font-serif font-semibold text-lg text-spa-dark">{faq.question}</h3>
      <ChevronDown
        size={22}
        className={`text-spa-gold flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
      <p className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.answer}</p>
    </div>
  </div>
)

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section-padding bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">Preguntas</span>
          <h2 className="section-title mb-5">
            Preguntas <span className="text-gradient-gold italic">frecuentes</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Todo lo que necesitás saber antes de tu visita
          </p>
        </div>

        <div>
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              faq={faq}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>

        <div className="mt-16 relative rounded-3xl overflow-hidden p-10 text-center">
          <div className="absolute inset-0 bg-spa-gradient" />
          <div className="relative z-10">
            <h3 className="text-2xl font-serif font-semibold text-spa-dark mb-3">
              ¿Tenés otra consulta?
            </h3>
            <p className="text-gray-600 mb-6">
              Nuestro equipo está disponible para ayudarte
            </p>
            <a
              href="https://wa.me/5984736980"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              <MessageCircle size={18} />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
