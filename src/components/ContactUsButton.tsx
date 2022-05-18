import { AtSignIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'

const ContactUsButton = (): JSX.Element => {
  return (
    <Button leftIcon={<AtSignIcon />} size="lg">
      Contáctanos
    </Button>
  )
}

export default ContactUsButton
