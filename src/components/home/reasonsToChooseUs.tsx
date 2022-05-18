import { BiPaintRoll, BiExtension, BiHeart } from 'react-icons/bi'
import { IconType } from 'react-icons/lib'

interface ReasonToChooseUs {
  title: string
  description: string
  icon: IconType
}

const reasonsToChooseUs: ReasonToChooseUs[] = [
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

export default reasonsToChooseUs
