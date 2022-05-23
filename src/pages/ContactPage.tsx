import { Heading, VStack } from '@chakra-ui/react'
import yup from 'yup'

const dataSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Debe tener al menos 2 caracteres')
    .max(50, 'Debe ser de 50 caracteres como máximo')
    .required('Tu nombre es requerido'),
  email: yup
    .string()
    .email('Correo inválido')
    .required('Tu correo es requerido'),
})

const ContactPage = (): JSX.Element => {
  return (
    <VStack>
      <Heading>Contacto</Heading>
    </VStack>
  )
}

export default ContactPage
