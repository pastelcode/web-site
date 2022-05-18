interface Service {
  title: string
  description: string
  reference: string
}

const ourServices: Service[] = [
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

export default ourServices
