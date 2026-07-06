import React from 'react'
import { Zap, Brain, Heart, Leaf, Users, Sparkles } from 'lucide-react'
import { SITE } from '../data/site'

const benefits = [
  {
    icon: Brain,
    title: 'Reducción del Estrés',
    description: 'Las aguas termales relajan el sistema nervioso, reduciendo ansiedad y estrés de forma natural y duradera.',
  },
  {
    icon: Heart,
    title: 'Salud Cardiovascular',
    description: 'Mejora la circulación sanguínea y favorece la vasodilatación gracias a las propiedades del agua mineral.',
  },
  {
    icon: Zap,
    title: 'Recuperación Muscular',
    description: 'Alivio del dolor articular y muscular, acelerando la recuperación después del ejercicio o el estrés.',
  },
  {
    icon: Sparkles,
    title: 'Rejuvenecimiento Cutáneo',
    description: 'Los minerales del agua termal mejoran la elasticidad y regeneran la piel de forma natural.',
  },
  {
    icon: Leaf,
    title: 'Desintoxicación',
    description: 'La combinación de calor y minerales favorece la eliminación de toxinas y purifica el organismo.',
  },
  {
    icon: Users,
    title: 'Bienestar Integral',
    description: 'Una experiencia holística que armoniza cuerpo, mente y espíritu en un solo lugar.',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="section-label">Ciencia y Naturaleza</span>
          <h2 className="section-title mb-5">
            Beneficios del <span className="text-gradient-gold italic">agua termal</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Propiedades terapéuticas del agua termal en {SITE.name}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div key={idx} className="group p-8 rounded-2xl bg-spa-gradient border border-spa-sand/60 hover:shadow-spa-lg hover:-translate-y-1 transition-all duration-500">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-spa flex items-center justify-center mb-6 group-hover:bg-spa-gold/10 transition-colors">
                  <Icon size={26} className="text-spa-gold" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-spa-dark mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>

        <div className="relative rounded-3xl overflow-hidden bg-spa-dark-gradient p-12 md:p-16">
          <div className="absolute top-0 right-0 w-64 h-64 bg-spa-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-spa-sage/10 rounded-full blur-3xl" />

          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="text-spa-gold text-xs uppercase tracking-[0.25em] mb-4 block">Composición Mineral</span>
              <h3 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                Respaldado por la ciencia
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Las aguas termales de {SITE.name} contienen minerales esenciales con propiedades terapéuticas reconocidas:
              </p>
              <ul className="space-y-3">
                {[
                  { mineral: 'Magnesio', effect: 'Reduce estrés y tensión muscular' },
                  { mineral: 'Calcio', effect: 'Fortalece huesos y articulaciones' },
                  { mineral: 'Iodo', effect: 'Equilibra el metabolismo' },
                  { mineral: 'Fluoruro', effect: 'Fortalece dientes y huesos' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <span className="text-spa-gold mt-1">◆</span>
                    <span><strong className="text-white">{item.mineral}:</strong> {item.effect}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '44°C', label: 'Temperatura máxima' },
                { value: '8+', label: 'Minerales activos' },
                { value: '100%', label: 'Agua natural' },
                { value: '80+', label: 'Años de tradición' },
              ].map((stat, i) => (
                <div key={i} className="card-spa-dark p-6 text-center">
                  <div className="text-3xl font-serif font-semibold text-spa-gold-light mb-2">{stat.value}</div>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
