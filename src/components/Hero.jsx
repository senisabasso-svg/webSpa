import React from 'react'
import { Link } from 'react-scroll'
import { ChevronDown, Star, Droplets } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center animate-ken-burns scale-110"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1540555700474-954638992c09?w=1920&h=1080&fit=crop&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-spa-dark/60 via-transparent to-spa-dark/40" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-24 pb-32">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium tracking-wide mb-8">
            <Droplets size={16} className="text-spa-gold-light" />
            Spa Médico · Daymán, Salto
          </span>
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-semibold mb-6 leading-[1.05] animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Renueva cuerpo
          <br />
          <span className="text-gradient-gold italic">y alma</span>
        </h1>

        <p
          className="text-lg md:text-xl mb-10 text-white/85 font-light max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.35s' }}
        >
          8 piscinas termales, medicina hiperbárica, sauna, vapor y masajes profesionales.
          Tu oasis de bienestar a solo 10 km de Salto.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          <Link to="services" smooth={true} duration={500} offset={-80} className="btn-primary cursor-pointer">
            Explorar Servicios
          </Link>
          <a
            href="https://wa.me/5984736980"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white cursor-pointer"
          >
            Reservar por WhatsApp
          </a>
        </div>

        <div
          className="flex flex-wrap justify-center gap-6 md:gap-10 animate-fade-in-up"
          style={{ animationDelay: '0.65s' }}
        >
          {[
            { value: '8', label: 'Piscinas termales' },
            { value: '4.9', label: 'Calificación', icon: Star },
            { value: '9–21h', label: 'Todos los días' },
            { value: '$250', label: 'Entrada diaria' },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center px-6 py-4 rounded-2xl bg-white/8 backdrop-blur-md border border-white/15 min-w-[120px]"
            >
              <span className="text-2xl md:text-3xl font-serif font-semibold text-spa-gold-light flex items-center gap-1">
                {stat.icon && <stat.icon size={20} className="fill-spa-gold-light text-spa-gold-light" />}
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-wider text-white/70 mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <Link to="about" smooth={true} duration={500} offset={-80} className="cursor-pointer flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors">
          <span className="text-[10px] uppercase tracking-[0.3em]">Descubrir</span>
          <ChevronDown size={28} />
        </Link>
      </div>
    </section>
  )
}
