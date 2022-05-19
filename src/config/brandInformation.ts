import { BiPaintRoll, BiExtension, BiHeart } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
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
]

interface Service {
  title: string
  description: string
  reference: string
}

export const ourServices: Service[] = [
  {
    title: 'Landing pages',
    description:
      'Dale una bienvenida acogedora a tu cliente y permite que conozca lo que haces y contacte contigo',
    reference: 'landing',
  },
  {
    title: 'Tiendas en línea',
    description:
      'Expande los límites de tu negocio y empieza a vender a través de Internet y de forma remota',
    reference: 'store',
  },
  {
    title: 'Aplicaciones móviles',
    description:
      'Mueve tu idea a la comodidad de la palma de la mano, en cualquier plataforma y en cualquier dispositivo',
    reference: 'mobile',
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
