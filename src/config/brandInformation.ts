import { BiPaintRoll, BiExtension, BiHeart } from 'react-icons/bi'
import { BsGithub, BsInstagram, BsYoutube } from 'react-icons/bs'
import { IconType } from 'react-icons/lib'

interface SocialMedia {
  url: string
  name: string
  icon: IconType
  color?: string
}

export const socialMedia: SocialMedia[] = [
  {
    url: 'https://github.com/pastelcode',
    name: 'Github',
    icon: BsGithub,
  },
  {
    url: 'https://www.instagram.com/pastelcode.dev',
    name: 'Instagram',
    icon: BsInstagram,
  },
  {
    url: 'https://www.youtube.com/channel/UCOsYvHAtI6xtPcN3NORiU2Q',
    name: 'YouTube',
    icon: BsYoutube,
  },
]

interface Service {
  title: string
  description: string
  isComingSoon: boolean
  basePrice?: number
}

export const ourServices: Service[] = [
  {
    title: 'Landing pages',
    description:
      'Dale una bienvenida acogedora a tu cliente y permite que conozca lo que haces y contacte contigo',
    isComingSoon: false,
    basePrice: 549,
  },
  {
    title: 'Aplicaciones móviles',
    description:
      'Mueve tu idea a la comodidad de la palma de la mano, en cualquier plataforma y en cualquier dispositivo',
    isComingSoon: false,
    basePrice: 2049,
  },
  {
    title: 'Tiendas en línea',
    description:
      'Expande los límites de tu negocio y empieza a vender a través de Internet y de forma remota',
    isComingSoon: true,
  },
]

interface ReasonToChooseUs {
  title: string
  description: string
  icon: IconType
}

export const reasonsToChooseUs: ReasonToChooseUs[] = [
  {
    title: 'Diseños modernos y actualizados',
    description:
      'Cuidamos cada aspecto de nuestros diseños de interfaces para hacer de la experiencia de usuario una experiencia sin obstáculos y sumamente placentera',
    icon: BiPaintRoll,
  },
  {
    title: 'Multiplataforma',
    description:
      'Utilizamos tecnologías modernas y populares para que el mantenimiento y construcción del sitio sea rápida y compatible en cualquier plataforma',
    icon: BiExtension,
  },
  {
    title: 'Pasión',
    description:
      'Amamos lo que hacemos y la pasión que nos mueve internamente se asegura de una elaboración de productos y servicios de alta calidad',
    icon: BiHeart,
  },
]

export const brandLogo = '/pastel.svg'
export const brandLetters = '/pastel-letters.svg'
