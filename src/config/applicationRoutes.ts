import { IconType } from 'react-icons'
import { BiAt, BiHome, BiTask } from 'react-icons/bi'

export interface Route {
  path: string
  name: string
  icon: IconType
}

const applicationRoutes: Route[] = [
  {
    path: '/',
    name: 'Inicio',
    icon: BiHome,
  },
  {
    path: '/proyectos',
    name: 'Proyectos',
    icon: BiTask,
  },
  {
    path: '/contacto',
    name: 'Contacto',
    icon: BiAt,
  },
]

export default applicationRoutes
