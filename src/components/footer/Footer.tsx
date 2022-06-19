import {
  Box,
  HStack,
  Image,
  VStack,
  LinkBox,
  LinkOverlay,
  Icon,
  Heading,
} from '@chakra-ui/react'
import {
  brandLetters,
  brandLogo,
  socialMedia,
} from '../../config/brandInformation'

const Footer = (): JSX.Element => {
  return (
    <Box as="footer" padding={7} paddingTop={20}>
      <VStack>
        <Image src={brandLogo} alt="Pastel" height={24} />
        <Box height={1} />
        <Image src={brandLetters} alt="Pastel" height={7} />
        <Box height={6} />
        {socialMedia.map(({ url, name, icon }) => (
          <LinkBox key={url}>
            <HStack marginBottom={4}>
              <Icon as={icon} boxSize={6} />
              <Heading as="h6" size="md">
                <LinkOverlay href={url} isExternal>
                  {name}
                </LinkOverlay>
              </Heading>
            </HStack>
          </LinkBox>
        ))}
      </VStack>
    </Box>
  )
}

export default Footer
