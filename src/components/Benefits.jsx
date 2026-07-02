import React from 'react'
import { Zap, Brain, Heart, Leaf, Users, Sparkles } from 'lucide-react'

const benefits = [
  {
    icon: Brain,
    title: 'Reducción del Estrés',
    description: 'Las aguas termales relajan el sistema nervioso, reduciendo ansiedad y estrés de forma significativa.'
  },
  {
    icon: Heart,
    title: 'Salud Cardiovascular',
    description: 'Mejora la circulación sanguínea y reduce la presión arterial gracias a la vasodilatación.'
  },
  {
    icon: Zap,
    title: 'Recuperación Muscular',
    description: 'Alivio del dolor muscular, articular y recuperación más rápida post-ejercicio.'
  },
  {
    icon: Sparkles,
    title: 'Rejuvenecimiento Cutáneo',
    description: 'Los minerales en el agua mejoran la elasticidad y regeneran la piel naturalmente.'
  },
  {
    icon: Leaf,
    title: 'Desintoxicación',
    description: 'Aumenta la sudoración para eliminar toxinas y purificar el cuerpo profundamente.'
  },
  {
    icon: Users,
    title: 'Bienestar Integral',
    description: 'Experiencia holística que nutre cuerpo, mente y espíritu en armonía total.'
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-spa-dark mb-6">
            Beneficios del Bienestar Termal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Científicamente comprobados, las aguas termales de Daymán ofrecen múltiples beneficios para tu salud física y mental
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div
                key={idx}
                className="group p-8 bg-gradient-to-br from-spa-cream to-white rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-spa-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-spa-gold/20 transition-colors">
                  <Icon size={28} className="text-spa-gold" />
                </div>
                <h3 className="text-xl font-serif font-bold text-spa-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Science Section */}
        <div className="bg-spa-dark text-white rounded-2xl p-12 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold mb-6">
                Respaldado por la Ciencia
              </h3>
              <div className="space-y-4 text-gray-100">
                <p>
                  Las aguas termales de Daymán contienen minerales esenciales como:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-spa-gold mr-3">✓</span>
                    <span><strong>Magnesio:</strong> Reduce estrés y tensión muscular</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-spa-gold mr-3">✓</span>
                    <span><strong>Calcio:</strong> Fortalece huesos y articulaciones</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-spa-gold mr-3">✓</span>
                    <span><strong>Iodo:</strong> Equilibra el metabolismo y tiroides</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-spa-gold mr-3">✓</span>
                    <span><strong>Fluoruro:</strong> Fortalece dientes y óseos</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg border border-white/20">
                <div className="text-4xl font-serif font-bold text-spa-gold mb-2">44°C</div>
                <p className="text-sm">Temperatura óptima para vasodilatación</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg border border-white/20">
                <div className="text-4xl font-serif font-bold text-spa-gold mb-2">8+</div>
                <p className="text-sm">Minerales beneficiosos</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg border border-white/20">
                <div className="text-4xl font-serif font-bold text-spa-gold mb-2">100%</div>
                <p className="text-sm">Natural y puro</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg border border-white/20">
                <div className="text-4xl font-serif font-bold text-spa-gold mb-2">80 años</div>
                <p className="text-sm">De tradición termal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
