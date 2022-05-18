import { VStack, Heading, Text, Box, Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import HomeCard from './HomeCard'
import ContactUsButton from '../ContactUsButton'

const Introduction = (): JSX.Element => (
  <HomeCard background="url('/background.svg')" compact>
    <VStack paddingY="7">
      <Heading textAlign="center" size="4xl" letterSpacing="tighter">
        Conecta tu negocio a Internet
      </Heading>
      <Box height="2" />
      <Text textAlign="center" fontSize="xl">
        y dale doble click a ese mundo de posibilidades
      </Text>
      <Box height="4" />
      <ContactUsButton />
      <Box height="1" />
      <Button colorScheme="gray" rightIcon={<ArrowForwardIcon />}>
        Explora nuestros proyectos
      </Button>
    </VStack>
  </HomeCard>
)

export default Introduction
