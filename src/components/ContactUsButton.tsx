import { AtSignIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const ContactUsButton = (): JSX.Element => {
  return (
    <Button as={RouterLink} to="/contacto" leftIcon={<AtSignIcon />} size="lg">
      Contáctanos
    </Button>
  )
}

export default ContactUsButton
