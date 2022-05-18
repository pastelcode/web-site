import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Heading, HStack, VStack } from '@chakra-ui/react'
import ContactUsButton from '../ContactUsButton'
import HomeCard from './HomeCard'

const CTA = (): JSX.Element => (
  <HomeCard background="url('/waves.svg') center repeat-x">
    <VStack>
      <Heading textAlign="center">¡Somos todo lo que necesitas!</Heading>
      <Box height={3} />
      <HStack>
        <ArrowForwardIcon boxSize={7} />
        <ContactUsButton />
        <ArrowBackIcon boxSize={7} />
      </HStack>
    </VStack>
  </HomeCard>
)

export default CTA
