const u = (id, w, h) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&q=85&auto=format`

export const spaImages = {
  hero: u('photo-1564501049412-61e2f337fe6e', 1920, 1080),
  about: u('photo-1576017799058-4faa1129f4e3', 700, 900),
  og: u('photo-1596178060810-fb4a27b1b245', 1200, 630),
  cta: u('photo-1611892440504-42a784e24d32', 1200, 400),
  facilities: [
    {
      image: u('photo-1564501049412-61e2f337fe6e', 1200, 700),
      title: 'Piscinas Termales',
      description: 'Ocho piscinas con agua natural a distintas temperaturas en SPA Thermal Daymán',
    },
    {
      image: u('photo-1596178060810-fb4a27b1b245', 1200, 700),
      title: 'Piscina Principal',
      description: 'Amplias piscinas termales para relajación y bienestar integral',
    },
    {
      image: u('photo-1506157786151-b8491531f063', 1200, 700),
      title: 'Sauna y Vapor',
      description: 'Sauna finlandés y cabina de vapor para desintoxicación profunda',
    },
    {
      image: u('photo-1571019613454-1cb2f99b2d8b', 1200, 700),
      title: 'Aguas Minerales',
      description: 'Aguas termales con propiedades terapéuticas naturales',
    },
    {
      image: u('photo-1600334089648-b0d9d3028eb2', 1200, 700),
      title: 'Área de Masajes',
      description: 'Salas privadas para tratamientos y masajes profesionales',
    },
    {
      image: u('photo-1611892440504-42a784e24d32', 1200, 700),
      title: 'Zona de Relajación',
      description: 'Espacios serenos rodeados de naturaleza en nuestro complejo spa',
    },
  ],
}
