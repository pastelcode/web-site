import { Box, Image, VStack } from '@chakra-ui/react'

const Footer = (): JSX.Element => {
  return (
    <Box as="footer" padding={7} paddingTop={20}>
      <VStack>
        <Image src="/pastel.svg" alt="Pastel" height={24} />
        <Box height={1} />
        <Image src="/pastel-letters.svg" alt="Pastel" height={7} />
      </VStack>
    </Box>
  )
}

export default Footer
