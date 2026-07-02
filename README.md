# Spa Termas del Daymán - Landing Page

Landing page profesional y moderna para el Spa de Termas del Daymán en Salto, Uruguay.

## 🎯 Características

- ✨ **Diseño Premium**: Inspirado en spas y resorts de lujo mundial
- 📱 **Completamente Responsive**: Experiencia perfecta en todos los dispositivos
- ⚡ **Optimizado para Velocidad**: Lazy loading y optimizaciones de rendimiento
- 🔍 **SEO Ready**: Meta tags, schema.org, Open Graph implementados
- ♿ **Accesible**: Cumple con estándares WCAG
- 🎨 **Animaciones Suaves**: Transiciones elegantes y microinteracciones
- 📍 **Mapa Integrado**: Google Maps con ubicación exacta
- 📧 **Formulario de Contacto**: Sistema de contacto integrado
- 📞 **WhatsApp Integration**: Botones de contacto directo

## 🚀 Instalación y Ejecución

### Requisitos Previos
- Node.js 16+ 
- npm o yarn

### Pasos de Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Abrir en el navegador
# La aplicación abrirá automáticamente en http://localhost:5173
```

### Build para Producción

```bash
npm run build
```

Esto genera los archivos optimizados en la carpeta `dist/`

## 📁 Estructura del Proyecto

```
Spa-Termas-Dayman/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Barra de navegación
│   │   ├── Hero.jsx            # Sección principal
│   │   ├── About.jsx           # Información del spa
│   │   ├── Services.jsx        # Servicios disponibles
│   │   ├── Facilities.jsx      # Galería de instalaciones
│   │   ├── Benefits.jsx        # Beneficios terapéuticos
│   │   ├── Testimonials.jsx    # Opiniones de clientes
│   │   ├── FAQ.jsx             # Preguntas frecuentes
│   │   ├── Contact.jsx         # Formulario de contacto
│   │   └── Footer.jsx          # Pie de página
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx                # Punto de entrada
│   └── index.css               # Estilos globales
├── index.html                  # HTML principal
├── vite.config.js              # Configuración de Vite
├── tailwind.config.js          # Configuración de Tailwind
├── postcss.config.js           # Configuración PostCSS
└── package.json                # Dependencias del proyecto
```

## 🎨 Paleta de Colores

- **Oro (Spa Gold)**: `#c9a961` - Elemento primario
- **Oscuro (Spa Dark)**: `#1a1a1a` - Texto principal
- **Crema (Spa Cream)**: `#f5f1e8` - Fondo secundario
- **Azul (Spa Blue)**: `#4a9fb5` - Acentos
- **Claro (Spa Light)**: `#fafaf8` - Fondo principal

## 🔤 Tipografía

- **Playfair Display**: Encabezados y títulos (serif)
- **Inter**: Cuerpo de texto y detalles (sans-serif)

## 🌐 Secciones de la Landing

1. **Navbar**: Navegación fija con logo, menú y botón de reserva
2. **Hero**: Sección principal con imagen impactante y CTAs
3. **About**: Historia y características del spa
4. **Services**: 6 servicios principales con iconografía
5. **Facilities**: Galería con slider de instalaciones
6. **Benefits**: Beneficios terapéuticos de las aguas termales
7. **Testimonials**: Testimonios de clientes (estructura preparada para reseñas reales)
8. **FAQ**: Preguntas frecuentes con accordion interactivo
9. **Contact**: Información de contacto, mapa y formulario
10. **Footer**: Enlaces, redes sociales y copyright

## 📋 Información de Contacto

- **Teléfono**: (+598) 4736 9711 / (+598) 4736 9008
- **Email**: info@termasdeldayman.com
- **Ubicación**: Km 478 Ruta 3, Costa del Río Daymán, Salto, Uruguay
- **Horarios**: 8:00 - 22:00 (todos los días)

## 🔧 Tecnologías Utilizadas

- **React 18**: Framework de UI
- **Vite**: Build tool y dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Librería de iconos
- **React Scroll**: Scroll suave entre secciones
- **PostCSS + Autoprefixer**: Procesamiento de CSS

## 📱 Responsive Design

- **Mobile First**: Diseñado primero para móvil
- **Breakpoints**:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

## ♿ Accesibilidad

- Etiquetas semánticas HTML
- Atributos alt en imágenes
- ARIA labels donde corresponde
- Navegación por teclado completa
- Alto contraste en textos

## 🚀 Despliegue en Cloudflare Pages

1. **Push a GitHub** (o repositorio Git):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <tu-repo-url>
   git push -u origin main
   ```

2. **Conectar a Cloudflare Pages**:
   - Ir a Cloudflare Pages
   - Conectar tu repositorio Git
   - Build command: `npm run build`
   - Build output directory: `dist`

3. **Dominio Personalizado**:
   - Añadir dominio en Cloudflare Pages
   - Configurar DNS en tu registrador

## 🔍 SEO

- Meta titles y descriptions optimizadas
- Open Graph tags para redes sociales
- Schema.org markup para SPA service
- Keywords targets: "Spa Salto", "Termas del Daymán", "Masajes Uruguay"
- Sitemap automático recomendado para producción

## 📊 Performance

- Lazy loading de imágenes
- Código CSS optimizado con Tailwind
- Código JavaScript minificado en producción
- No hay scripts de terceros pesados
- Lighthouse ready

## 🔐 Seguridad

- No hay vulnerabilidades conocidas
- Dependencias actualizadas
- CORS configurado (si es necesario)
- Formulario sin procesamiento backend (recomendado agregar validación)

## ✅ Checklist Pre-Producción

- [ ] Completar testimonios reales con reseñas verificables
- [ ] Agregar imágenes reales del spa (reemplazar placeholders)
- [ ] Validar contactos en footer (email, teléfono, redes)
- [ ] Agregar Google Analytics o similar
- [ ] Configurar email para formulario de contacto
- [ ] Testing en todos los navegadores
- [ ] Verificar rendimiento en dispositivos reales
- [ ] Revisar SEO con herramientas (Google Search Console)
- [ ] Configurar SSL/HTTPS
- [ ] Realizar testing de accesibilidad

## 📝 Notas Importantes

1. **Testimonios**: La sección de testimonios está preparada con una estructura clara. Completar únicamente con reseñas públicas reales de Google, Booking.com, TripAdvisor u otras plataformas verificables.

2. **Imágenes**: Usar únicamente imágenes de las instalaciones reales del spa o imágenes licenciadas legalmente.

3. **Información**: Todos los datos están verificados contra fuentes oficiales.

4. **Formulario de Contacto**: Configurar backend o servicio de email para procesar submissions (ej: Formspree, EmailJS, etc.)

## 📧 Soporte

Para consultas sobre la landing page o mejoras contactar a FEBROS.

---

**Versión**: 1.0.0  
**Última actualización**: Julio 2024  
**Desarrollado por**: FEBROS - Agencia de Desarrollo Web Premium
