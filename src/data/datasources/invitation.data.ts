// ============================================================
// invitation.data.ts — ÚNICA FUENTE DE VERDAD del contenido.
// Para editar textos, precios, listas o links, toca SOLO este
// archivo: ningún componente importa datos directamente.
// Los valores se referencian por rutas de assets (assets/index.ts).
// ============================================================
import { villaPhotos, menuPhotos, closingPhotos, backgrounds } from '@assets/index';
import type {
  ClosingSection,
  CostSummary,
  Event,
  SummerMoodData,
  MarketList,
  MenuSection,
  NavSection,
  Plan,
  SpecialInvitation,
  Venue,
} from '@domain/entities';

// ---------- Enlaces compartidos ----------
const AIRBNB_URL =
  'https://www.airbnb.com.co/rooms/1329761087675818618?guests=1&adults=1&s=67&unique_share_id=0602a3fd-7508-4c2f-b0d7-3cd71208e1b6';
const WHATSAPP_URL = 'https://chat.whatsapp.com/Bzi5DFgDZgHIGJ2Q1lgnal';

// ---------- 6.0 Invitación especial ----------
// Textos base de la sección personalizada; el nombre del invitado
// NO va aquí: llega por query param en la URL (?para=Nombre).
export const specialInvitation: SpecialInvitation = {
  heading: 'INVITACIÓN',
  headingAccent: 'ESPECIAL PARA',
  tagline: 'Este finde no sería lo mismo sin ti',
};

// ---------- 6.1 Hero / Portada ----------
export const event: Event = {
  title: 'NOVEMBER',
  titleAccent: 'FEST',
  subtitle: 'Cumple de Sebas',
  datesLabel: '20 · 21 · 22 NOV 2026',
  // 20/11/2026 12:00 hora Colombia (UTC-5, America/Bogota)
  targetDateIso: '2026-11-20T12:00:00-05:00',
  location: 'La Mesa, Cundinamarca',
  tags: ['Sol y piscina', 'Afrohouse', 'Verano', 'Finde con amigos'],
  floatingTexts: ['Sol Piscina Buena Música', 'Un finde para desconectar'],
  ctaLabel: 'Confirmar asistencia',
  startedLabel: '¡Ya empezó!',
};

// ---------- 6.2 El plan ----------
export const plan: Plan = {
  sectionId: 'plan',
  heading: 'EL',
  headingAccent: 'PLAN',
  items: [
    {
      icon: 'calendar',
      label: 'Fechas',
      value: 'viernes 20 al domingo 22 de noviembre de 2026',
    },
    { icon: 'location', label: 'Lugar', value: 'La Mesa, Cundinamarca' },
    { icon: 'clock', label: 'Check-in', value: '12 del mediodía' },
    { icon: 'groups', label: 'Capacidad cotizada', value: '16 personas' },
    {
      icon: 'personAdd',
      label: 'Persona extra',
      value: '$80.000 por noche',
      note: 'Puedes ir con tu pareja o acompañante extra con previo aviso a algún anfitrión.',
    },
    { icon: 'pets', label: 'Mascotas', value: 'se permiten solo dos' },
    {
      icon: 'car',
      label: 'Transporte',
      value: 'no incluido',
      note: 'Si no cuentas con transporte, avisa para organizarlo con algún grupo.',
    },
  ],
  airbnbDisplayUrl: 'airbnb.com.co/rooms/1329761087675818618',
  airbnbUrl: AIRBNB_URL,
  airbnbQrLabel: 'Escanea aquí',
  floatingPhrases: [
    'Mis amigos, mi gente, mi plan favorito',
    'La misma energía, otro escenario increíble',
  ],
};

// ---------- 6.3 La Villa — La Finca ----------
export const venue: Venue = {
  sectionId: 'villa',
  heading: 'La Villa',
  headingAccent: 'LA FINCA',
  texts: [
    'Finca para disfrutar el finde con amigos',
    'El escenario perfecto para un cumpleaños con toda la vibra de verano en La Mesa.',
  ],
  photos: [
    { src: villaPhotos.finca, alt: 'Vista general de la finca', caption: 'La finca', rotation: -4 },
    {
      src: villaPhotos.piscina,
      alt: 'Piscina y jacuzzi de la finca',
      caption: 'Piscina + jacuzzi',
      rotation: 3,
    },
    {
      src: villaPhotos.terraza,
      alt: 'Terraza social con hamaca',
      caption: 'Terraza social',
      rotation: -3,
    },
    {
      src: villaPhotos.montanas,
      alt: 'Vista a las montañas desde la piscina',
      caption: 'Vista a las montañas',
      rotation: 4,
    },
    {
      src: villaPhotos.chill,
      alt: 'Zona chill con silla colgante',
      caption: 'Zona chill',
      rotation: -5,
    },
    {
      src: villaPhotos.habitacion,
      alt: 'Habitación con cama y cobijas azul marino',
      caption: 'Habitaciones cómodas',
      rotation: 3,
    },
  ],
};

// ---------- 6.4 Summer mood ----------
export const summerMood: SummerMoodData = {
  sectionId: 'summer',
  heading: 'SUMMER',
  headingAccent: 'all weekend',
  subtitle: 'Sol, piscina y buena música todo el finde',
  mood: [
    'Blanco, beige, azul y toques plateados',
    'Lino, gafas, swimwear y look de verano',
    'Piscina, atardecer y parche entre amigos',
  ],
  music: ['Techno', 'Afrohouse', 'Melodic', 'Hard', 'Reggaeton', 'Latino', 'Afrobeats'],
  included: ['Sonido y luces de alta calidad', 'DJs invitados', 'Personal de cocina'],
  closingText: 'La idea es vivir un finde de puro verano: sol, piscina, relax y baile.',
};

// ---------- 6.5 Menú del finde ----------
const desayunoItems = [
  'Huevos revueltos',
  'Chocolate o café',
  'Sándwich de jamón con queso',
  'Granola con leche',
  'Uvas',
  'Jugo de naranja',
];

export const menu: MenuSection = {
  sectionId: 'menu',
  heading: 'MENÚ',
  headingAccent: 'del finde',
  tagline: 'Verano · Buena comida · Mejores amigos',
  days: [
    {
      id: 'viernes',
      label: 'Viernes 20',
      color: 'gold',
      meals: [
        {
          title: 'Cena: Hamburguesa',
          items: ['Tomate', 'Lechuga', 'Carne de hamburguesa', 'Tocineta', 'Queso tajado', 'Pepino'],
          photo: {
            src: menuPhotos.hamburguesa,
            alt: 'Hamburguesa con tocineta crujiente, queso fundido, tomate y lechuga',
          },
        },
      ],
    },
    {
      id: 'sabado',
      label: 'Sábado 21',
      color: 'teal',
      meals: [
        {
          title: 'Desayuno',
          items: desayunoItems,
          photo: {
            src: menuPhotos.desayuno,
            alt: 'Desayuno con huevos revueltos, sándwich de jamón y queso, granola y jugo de naranja',
          },
        },
        {
          title: 'Almuerzo',
          items: [
            'Pechuga a la plancha',
            'Arroz',
            'Ensalada de aguacate/pepino/tomate/cebolla y lechuga',
            'Papas a la francesa',
            'Plátano frito o maduro',
            'Coca-Cola o limonada',
          ],
          photo: {
            src: menuPhotos.almuerzo,
            alt: 'Pechuga a la plancha con arroz, ensalada fresca, papas a la francesa y plátano frito',
          },
        },
        {
          title: 'Cena',
          items: ['Arroz con pollo colombiano', 'Coca-Cola o limonada', 'Papas a la francesa'],
          photo: {
            src: menuPhotos.arrozPollo,
            alt: 'Arroz con pollo colombiano con papas a la francesa',
          },
        },
      ],
    },
    {
      id: 'domingo',
      label: 'Domingo 22',
      color: 'coral',
      meals: [
        {
          title: 'Desayuno',
          items: desayunoItems,
          photo: {
            src: menuPhotos.desayuno,
            alt: 'Desayuno con huevos revueltos, sándwich de jamón y queso, granola y jugo de naranja',
          },
        },
        {
          title: 'Almuerzo especial: Asado típico colombiano',
          items: [
            'Carne de res a la parrilla',
            'Chorizo',
            'Costillas de cerdo',
            'Arepa',
            'Papa criolla',
            'Ensalada',
            'Salsa chimichurri',
          ],
          photo: {
            src: menuPhotos.asadoTipico,
            alt: 'Asado típico colombiano con carne a la parrilla, chorizo, costillas, arepa y chimichurri',
          },
        },
      ],
    },
  ],
  phrases: ['Buena comida, mejores momentos', '¡A recargar energías para más historias!'],
  gallery: [
    {
      src: menuPhotos.carta,
      alt: 'Carta del menú del fin de semana colombiano',
      caption: 'El menú del finde',
      rotation: -3,
    },
    {
      src: menuPhotos.asadoTipico,
      alt: 'Asado colombiano en la parrilla',
      caption: 'El asado del domingo',
      rotation: 3,
    },
  ],
};

// ---------- 6.6 Cuentas claras ----------
// Nota: "Mercado" usa el total CON reserva ($1.772.100) y "Asado" su
// subtotal ($422.000), tal como está en el Excel.
export const costs: CostSummary = {
  sectionId: 'cuentas',
  heading: 'CUENTAS CLARAS',
  headingAccent: 'amigos duraderos',
  intro:
    'Aquí va el detalle de los costos del Cumple de Sebas, para que todo fluya como debe ser: con transparencia y buena vibra.',
  items: [
    { label: 'Valor finca', amount: 2_624_655 },
    { label: 'Personal de cocina', amount: 150_000 },
    { label: 'Mercado', amount: 1_772_100 },
    { label: 'Asado', amount: 422_000 },
  ],
  totalLabel: 'Total base',
  perPersonLabel: 'Aporte base por persona (16)',
  guests: 16,
  considerations: [
    'La finca fue cotizada para 16 personas.',
    'Cada persona extra paga $80.000 por noche.',
    'El mercado normal y el asado fueron presupuestados para 20 personas.',
  ],
  notes: [
    { icon: 'paid', text: 'Si falta dinero, los anfitriones pondrán el restante.' },
    { icon: 'cocktail', text: 'Si sobra, se usará para licor y cerveza.' },
    {
      icon: 'beer',
      text: 'Cada persona debe traer 3 sixpack de cerveza o el licor de su preferencia.',
    },
    { icon: 'party', text: 'Si no bebes licor, trae algo que maree de tu preferencia.' },
  ],
  phrases: ['Buena compañía siempre suma', 'Misma amistad, más buenos momentos'],
};

// ---------- 6.7 Mercado normal (20 personas) ----------
export const marketNormal: MarketList = {
  sectionId: 'mercado',
  heading: 'Mercado normal',
  tagline: 'Presupuesto pensado para el finde',
  intro: 'Presupuesto de mercado normal para 20 personas.',
  people: 20,
  reserveRate: 0.1,
  categories: [
    {
      id: 'proteinas',
      name: 'Proteínas y carnes',
      items: [
        { product: 'Carne para hamburguesas', quantity: '20 unidades (~100 g c/u)', price: 100_000 },
        { product: 'Tocineta', quantity: '1.5 kg', price: 60_000 },
        { product: 'Pechuga de pollo', quantity: '11 kg aprox.', price: 310_000 },
        { product: 'Huevos', quantity: '90 unidades', price: 42_000 },
        { product: 'Jamón para sándwiches', quantity: '1.5 kg', price: 35_000 },
      ],
    },
    {
      id: 'panaderia',
      name: 'Panadería y lácteos',
      items: [
        { product: 'Pan de hamburguesa', quantity: '24 unidades', price: 24_000 },
        { product: 'Pan tajado', quantity: '4 paquetes', price: 24_000 },
        { product: 'Queso tajado para hamburguesas', quantity: '2 paquetes de 400 g', price: 21_000 },
        { product: 'Queso para sándwiches', quantity: '1.2–1.5 kg', price: 40_000 },
        { product: 'Leche', quantity: '12 litros aprox.', price: 47_000 },
        { product: 'Granola', quantity: '2 kg', price: 40_000 },
        { product: 'Uvas', quantity: '4 kg', price: 48_000 },
        { product: 'Jugo de naranja', quantity: '10 litros', price: 50_000 },
        { product: 'Café y chocolate de mesa', quantity: 'Para 40 desayunos', price: 35_000 },
      ],
    },
    {
      id: 'arroz',
      name: 'Arroz y acompañamientos',
      items: [
        { product: 'Arroz', quantity: '6 kg', price: 24_000 },
        { product: 'Papa para freír', quantity: '12 kg', price: 70_000 },
        { product: 'Plátano verde o maduro', quantity: '20 unidades', price: 30_000 },
        { product: 'Aceite de cocina', quantity: '3 litros', price: 30_000 },
      ],
    },
    {
      id: 'verduras',
      name: 'Verduras y frutas',
      items: [
        { product: 'Tomate', quantity: '5 kg', price: 25_000 },
        { product: 'Lechuga', quantity: '6 unidades', price: 18_000 },
        { product: 'Pepino cohombro', quantity: '3 kg', price: 12_000 },
        { product: 'Cebolla', quantity: '3 kg', price: 12_000 },
        { product: 'Aguacate', quantity: '20 unidades medianas', price: 50_000 },
        { product: 'Limón', quantity: '4 kg', price: 16_000 },
        { product: 'Naranja adicional para bebidas', quantity: 'Cantidad por definir', price: 15_000 },
      ],
    },
    {
      id: 'bebidas',
      name: 'Bebidas y condimentos',
      items: [
        { product: 'Coca-Cola', quantity: '12–15 litros', price: 45_000 },
        { product: 'Azúcar', quantity: '2 kg', price: 8_000 },
        {
          product: 'Sal, pimienta, ajo, comino y otros condimentos',
          quantity: 'Reserva estimada',
          price: 20_000,
        },
      ],
    },
    {
      id: 'adicionales',
      name: 'Adicionales',
      items: [
        {
          product: 'Arveja y zanahoria para arroz con pollo',
          quantity: '2–3 kg combinados',
          price: 25_000,
        },
        { product: 'Salsa de tomate y mayonesa', quantity: '2–3 envases', price: 25_000 },
      ],
    },
    {
      id: 'desechables',
      name: 'Desechables y aseo',
      items: [
        { product: 'Platos desechables', quantity: '100 unidades', price: 20_000 },
        { product: 'Vasos desechables', quantity: '100 unidades', price: 15_000 },
        { product: 'Cubiertos desechables', quantity: '100 juegos', price: 20_000 },
        { product: 'Servilletas', quantity: '2 paquetes grandes', price: 12_000 },
        { product: 'Papel higiénico', quantity: '12 rollos', price: 25_000 },
        { product: 'Bolsas para basura', quantity: '1 paquete', price: 10_000 },
        { product: 'Hielo', quantity: '4 bolsas de 3 kg', price: 28_000 },
      ],
    },
    {
      id: 'mecato',
      name: 'Mecato y fruta adicional',
      items: [
        { product: 'Galletas surtidas', quantity: '10 paquetes', price: 30_000 },
        { product: 'Chocolatinas', quantity: '20 unidades pequeñas', price: 40_000 },
        { product: 'Gomitas', quantity: '20 paquetes pequeños', price: 25_000 },
        { product: 'Bombombunes', quantity: '2 bolsas surtidas', price: 20_000 },
        { product: 'Fruta adicional surtida', quantity: '5 kg', price: 35_000 },
        { product: 'Snacks salados', quantity: '10 paquetes', price: 30_000 },
      ],
    },
  ],
};

// ---------- 6.8 Mercado para asado (20 personas) ----------
export const marketGrill: MarketList = {
  sectionId: 'asado',
  heading: 'Mercado para asado colombiano',
  tagline: 'El sabor de la casa, a la parrilla',
  intro: 'Presupuesto de mercado para el asado de 20 personas.',
  people: 20,
  reserveRate: 0.1,
  closingPhrase: 'Misma buena vibra, mejores asados',
  categories: [
    {
      id: 'carnes',
      name: 'Carnes',
      items: [
        { product: 'Carne de res para asar', quantity: '4 kg', price: 128_000 },
        { product: 'Chorizos', quantity: '20 unidades', price: 50_000 },
        { product: 'Costillas de cerdo', quantity: '3 kg', price: 57_000 },
      ],
    },
    {
      id: 'acompanamientos',
      name: 'Acompañamientos',
      items: [
        { product: 'Arepas', quantity: '20 unidades', price: 20_000 },
        { product: 'Papa criolla', quantity: '4 kg', price: 28_000 },
      ],
    },
    {
      id: 'ensalada',
      name: 'Ensalada',
      items: [
        { product: 'Lechuga', quantity: '3 unidades', price: 9_000 },
        { product: 'Tomate', quantity: '2 kg', price: 10_000 },
        { product: 'Cebolla cabezona', quantity: '1 kg', price: 4_000 },
        { product: 'Aguacates', quantity: '8 unidades', price: 24_000 },
      ],
    },
    {
      id: 'chimichurri',
      name: 'Chimichurri',
      items: [
        { product: 'Limones', quantity: '1 kg', price: 4_000 },
        { product: 'Cilantro', quantity: '3 manojos', price: 6_000 },
        { product: 'Ajo', quantity: '3 cabezas', price: 5_000 },
        { product: 'Perejil', quantity: '2 manojos', price: 5_000 },
        { product: 'Vinagre', quantity: '1 botella', price: 5_000 },
        { product: 'Aceite adicional', quantity: '500 ml', price: 6_000 },
      ],
    },
    {
      id: 'condimentos',
      name: 'Condimentos',
      items: [
        { product: 'Sal gruesa y pimienta', quantity: '1 unidad de cada uno', price: 10_000 },
        { product: 'Comino y color/achiote', quantity: '1 unidad de cada uno', price: 7_000 },
      ],
    },
    {
      id: 'parrilla',
      name: 'Parrilla',
      items: [
        { product: 'Carbón', quantity: '2 bolsas de 3 kg', price: 36_000 },
        { product: 'Encendedores/iniciador de fuego', quantity: '1 paquete', price: 8_000 },
      ],
    },
  ],
};

// ---------- 6.9 Observaciones + Confirmación ----------
export const closing: ClosingSection = {
  sectionId: 'confirmar',
  heading: 'Observaciones',
  headingAccent: 'Confirmación',
  phrases: ['Misma Gente, Mejores Historias', 'La Finca Nos Espera'],
  rules: [
    { icon: 'pets', text: 'Se permiten solo dos mascotas.' },
    { icon: 'car', text: 'El precio no incluye transporte.' },
    {
      icon: 'info',
      text: 'En caso de no contar con transporte, comunicarlo para organizarlo con algún grupo.',
    },
    {
      icon: 'beer',
      text: 'Aparte del precio, cada persona debe traer 3 sixpack de cerveza o algún licor de preferencia.',
    },
    { icon: 'party', text: 'En caso de no beber licor, traer algo que maree de tu preferencia.' },
    { icon: 'music', text: 'Dispondremos de sonido y luces de alta calidad.' },
    { icon: 'headphones', text: 'DJs invitados.' },
    { icon: 'restaurant', text: 'Dispondremos de personal que nos ayude con la cocina.' },
    {
      icon: 'whatsapp',
      text: 'Confirma tu asistencia ingresando al grupo de WhatsApp; no habrá spam y solo se enviarán mensajes generales por parte de los administradores.',
    },
  ],
  links: [
    {
      id: 'whatsapp',
      title: 'Grupo de WhatsApp',
      url: WHATSAPP_URL,
      qrLabel: 'Escanea aquí',
      buttonLabel: 'Únete al grupo y no te pierdas nada',
    },
    {
      id: 'airbnb',
      title: 'Airbnb de la finca',
      url: AIRBNB_URL,
      qrLabel: 'Escanea aquí',
      buttonLabel: 'Revisa la finca y enamórate más',
    },
  ],
  footerText: 'Nos vemos para celebrar, pasarla brutal y vivir un November Fest de puro verano.',
  polaroidCaptions: ['Atardeceres inolvidables', 'La casa de nuestra historia'],
};

// ---------- Navegación del StickyNav ----------
export const navSections: NavSection[] = [
  { id: 'inicio', label: 'Inicio', icon: 'home' },
  { id: 'plan', label: 'Plan', icon: 'calendar' },
  { id: 'villa', label: 'Villa', icon: 'pool' },
  { id: 'menu', label: 'Menú', icon: 'restaurant' },
  { id: 'cuentas', label: 'Cuentas', icon: 'receipt' },
  { id: 'confirmar', label: 'Confirmar', icon: 'whatsapp' },
];

// Fotos del menú usadas como decoración de los tabs (referencia central)
export const menuGallery = menuPhotos;
export const closingGallery = closingPhotos;
export const heroBackground = backgrounds.heroSky;
