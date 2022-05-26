import { UseToastOptions } from '@chakra-ui/react'

const baseToastOptions: UseToastOptions = {
  duration: 9000,
  isClosable: true,
  variant: 'solid',
  position: 'bottom',
}

export const successToast: UseToastOptions = {
  title: 'Enviado correctamente',
  description: 'Te responderemos en tu correo',
  status: 'success',
  ...baseToastOptions,
}

export const errorToast: UseToastOptions = {
  title: 'Ocurrió un error',
  description: 'Vuelve a intentarlo en un momento',
  status: 'error',
  ...baseToastOptions,
}
