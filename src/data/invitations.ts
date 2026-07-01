import coupleImg from '../assets/banner/b2.jpg'
import dyePortada from '../assets/invitations/dye/portada.jpeg'
import dye1 from '../assets/invitations/dye/dye1.jpeg'
import dye3 from '../assets/invitations/dye/dye3.jpeg'
import dye4 from '../assets/invitations/dye/dye4.jpeg'
import dye5 from '../assets/invitations/dye/dye5.jpeg'
import dye6 from '../assets/invitations/dye/dye6.jpeg'
import dye7 from '../assets/invitations/dye/dye7.jpeg'
import dye8 from '../assets/invitations/dye/dye8.jpeg'
import dye9 from '../assets/invitations/dye/dye9.jpeg'
import b4 from '../assets/banner/b4.jpg'
import f1 from '../assets/invitations/f1.jpg'
import f2 from '../assets/invitations/f2.jpg'
import f3 from '../assets/invitations/f3.jpg'
import f4 from '../assets/invitations/f4.jpg'
import iglesiaImg from '../assets/invitations/iglesia.jpg'
import salonImg from '../assets/invitations/salon.png'
import salonJuluapan from '../assets/invitations/hacienda-juluapan.png'
import iglesiaBarrio3 from '../assets/invitations/iglesia-barrio3.png'

export interface Lugar {
  tipo: string; emoji: string; nombre: string
  direccion: string; ciudad: string; hora: string
  mapsUrl: string; imagen: string
}
export interface Hotel {
  nombre: string; estrellas: string; distancia: string
  precio: string; telefono: string; link: string
}
export interface Regalo {
  tienda: string; logo: string; color: string
  bgColor: string; link: string; texto: string
}
export interface ItemItinerario {
  hora: string; icono: string; titulo: string; descripcion: string
}
export interface Vestimenta {
  codigo: string; descripcion: string; evitar: string
  hombres: string; mujeres: string
}
export interface InvitationData {
  nombre1: string
  nombre2: string
  fecha: string
  fechaContdown: string
  fotoPortada: string
  galeria: string[]
  cancion: string
  lugares: Lugar[]
  vestimenta: Vestimenta
  soloAdultos: boolean
  hospedaje: Hotel[]
  regalos: Regalo[]
  itinerario: ItemItinerario[]
}

const defaultLugares: Lugar[] = [
  {
    tipo: 'Ceremonia', emoji: '⛪',
    nombre: 'Parroquia San Francisco',
    direccion: 'Av. Principal 456, Col. Centro',
    ciudad: 'Ciudad de México, México',
    hora: '16:00 hrs',
    mapsUrl: 'https://maps.google.com/?q=Parroquia+San+Francisco+Ciudad+de+Mexico',
    imagen: iglesiaImg,
  },
  {
    tipo: 'Recepción', emoji: '🥂',
    nombre: 'Salón Jardines del Lago',
    direccion: 'Calle Reforma 789, Col. Jardines',
    ciudad: 'Ciudad de México, México',
    hora: '19:00 hrs',
    mapsUrl: 'https://maps.google.com/?q=Jardines+del+Lago+Ciudad+de+Mexico',
    imagen: salonImg,
  },
]

const bodaLugares: Lugar[] = [
  {
    tipo: 'Ceremonia', emoji: '⛪',
    nombre: 'Templo Sagrado Corazón de Jesus',
    direccion: 'Palma Kerpis 103-Interior Sn, Playa Azul, Tercera',
    ciudad: 'Manzanillo, Colima, México',
    hora: '17:00 hrs',
    mapsUrl: 'https://maps.app.goo.gl/njRm65cUbMfsZwf47',
    imagen: iglesiaBarrio3,
  },
  {
    tipo: 'Recepción', emoji: '🥂',
    nombre: 'Hacienda Juluapan',
    direccion: 'Manzanillo - Cihuatlán kilómetro 21 El Naranjo',
    ciudad: 'Manzanillo, Colima, México',
    hora: '19:00 hrs',
    mapsUrl: 'https://maps.app.goo.gl/KfL99dbX2g9kgqFt7',
    imagen: salonJuluapan,
  },
]

const defaultVestimenta: Vestimenta = {
  codigo: 'Formal oscuro',
  descripcion: 'Solicitamos a nuestros invitados asistir en vestimenta formal. Los caballeros con traje y las damas con vestido de gala o cocktail.',
  evitar: 'Por favor evitar el color blanco y el negro.',
  hombres: '👔 Traje y corbata',
  mujeres: '👗 Vestido formal o de gala',
}

const defaultHospedaje: Hotel[] = [
  { nombre: 'Hotel Gran Plaza', estrellas: '⭐⭐⭐⭐', distancia: '5 min del salón', precio: 'Desde $1,200 MXN / noche', telefono: '+52 55 1234 5678', link: 'https://www.google.com' },
  { nombre: 'Hotel Boutique Central', estrellas: '⭐⭐⭐', distancia: '10 min del salón', precio: 'Desde $800 MXN / noche', telefono: '+52 55 8765 4321', link: 'https://www.google.com' },
]

const defaultRegalos: Regalo[] = [
  { tienda: 'Amazon', logo: '📦', color: '#FF9900', bgColor: '#FFF8EC', link: 'https://www.amazon.com.mx', texto: 'Ver lista en Amazon' },
  { tienda: 'Liverpool', logo: '🛍️', color: '#C8102E', bgColor: '#FFF0F2', link: 'https://www.liverpool.com.mx', texto: 'Ver lista en Liverpool' },
]

const invitations: Record<string, InvitationData> = {
  'isabella-y-alejandro': {
    nombre1: 'Isabella',
    nombre2: 'Alejandro',
    fecha: 'Sábado, 14 de septiembre de 2026',
    fechaContdown: '2026-09-14T16:00:00',
    fotoPortada: coupleImg,
    galeria: [f4, f2, f3, coupleImg, f1, b4],
    cancion: '/music/Mi Corazón Encantado - Dragon Ball GT  Piano Tutorial 2024 (pollonuel).mp3',
    lugares: defaultLugares,
    vestimenta: defaultVestimenta,
    soloAdultos: true,
    hospedaje: defaultHospedaje,
    regalos: defaultRegalos,
    itinerario: [
      { hora: '15:30', icono: '🎊', titulo: 'Llegada de invitados',   descripcion: 'Bienvenida y acomodo en la iglesia' },
      { hora: '16:00', icono: '💒', titulo: 'Ceremonia religiosa',    descripcion: 'Unión de Isabella y Alejandro' },
      { hora: '17:30', icono: '📸', titulo: 'Sesión de fotos',        descripcion: 'Momentos que duran para siempre' },
      { hora: '18:00', icono: '🥂', titulo: 'Cocktail',               descripcion: 'Brindis de bienvenida en el salón' },
      { hora: '19:00', icono: '🍽️', titulo: 'Cena',                   descripcion: 'Disfruta del banquete con nosotros' },
      { hora: '20:00', icono: '💃', titulo: 'Primer baile',           descripcion: 'El momento más esperado' },
      { hora: '20:30', icono: '✨', titulo: 'Brindis',                descripcion: 'Palabras de los novios e invitados' },
      { hora: '21:00', icono: '🎶', titulo: 'Fiesta',                 descripcion: '¡A bailar toda la noche!' },
    ],
  },

  'dulce-y-enrique': {
    nombre1: 'Dulce',
    nombre2: 'Enrique',
    fecha: 'Sábado, 21 de noviembre de 2026',
    fechaContdown: '2026-11-21T17:00:00',
    fotoPortada: dyePortada,
    galeria: [dye1, dye5, dye3, dye8, dye4, dye7, dye9, dye6],
    // galeria: [dye2, dye3, dye4, dye5, dye6, dye7, dye8],
    cancion: '/music/Mi Corazón Encantado - Dragon Ball GT  Piano Tutorial 2024 (pollonuel).mp3',
    lugares: bodaLugares,
    vestimenta: defaultVestimenta,
    soloAdultos: true,
    hospedaje: [],
    regalos: [
      { tienda: 'Amazon', logo: '📦', color: '#FF9900', bgColor: '#FFF8EC', link: 'https://www.amazon.com.mx/wedding/share/BodaDyE21Nov26', texto: 'Ver lista en Amazon' },
      { tienda: 'Liverpool', logo: '🛍️', color: '#C8102E', bgColor: '#FFF0F2', link: 'https://mesaderegalos.liverpool.com.mx/milistaderegalos/52005813', texto: 'Ver lista en Liverpool' },
    ],
    itinerario: [
      { hora: '16:30', icono: '🎊', titulo: 'Llegada de invitados',   descripcion: 'Bienvenida y acomodo en la iglesia' },
      { hora: '17:00', icono: '💒', titulo: 'Ceremonia religiosa',    descripcion: 'Unión de Dulce y Enrique' },
      { hora: '19:00', icono: '✨', titulo: 'Recepción',              descripcion: 'Recepción de los novios' },
      // { hora: '17:30', icono: '📸', titulo: 'Sesión de fotos',        descripcion: 'Momentos que duran para siempre' },
      // { hora: '18:00', icono: '🥂', titulo: 'Cocktail',               descripcion: 'Brindis de bienvenida en el salón' },
      // { hora: '19:00', icono: '🍽️', titulo: 'Cena',                   descripcion: 'Disfruta del banquete con nosotros' },
      // { hora: '20:00', icono: '💃', titulo: 'Primer baile',           descripcion: 'El momento más esperado' },
      // { hora: '20:30', icono: '✨', titulo: 'Brindis',                descripcion: 'Palabras de los novios e invitados' },
      // { hora: '21:00', icono: '🎶', titulo: 'Fiesta',                 descripcion: '¡A bailar toda la noche!' },
    ],
  },
}

export default invitations
