import {
  Button,
  Heading,
  Image,
  Text,
  VStack,
  useMediaQuery,
  Box,
  HStack,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const NotFoundPage = (): JSX.Element => {
  const [isSmallDisplayDevice] = useMediaQuery('(max-width: 600px)')

  const content = (
    <>
      <VStack spacing={5}>
        <Heading textAlign="center">¡Ups! Página no encontrada</Heading>
        <Text textAlign="center" fontSize="xl">
          Creo que hemos ido demasiado lejos
        </Text>
        <Button as={RouterLink} to="/" colorScheme="gray">
          Regresemos a casa
        </Button>
      </VStack>
      <Image
        src="/person-lost.svg"
        alt="Ilustración de persona perdida"
        height="xs"
      />
    </>
  )

  return (
    <Box width="90%" maxWidth="800px" marginLeft="auto" marginRight="auto">
      {isSmallDisplayDevice ? (
        <VStack spacing={7}>{content}</VStack>
      ) : (
        <HStack justifyContent="space-evenly" flexFlow="row-reverse">
          {content}
        </HStack>
      )}
    </Box>
  )
}

export default NotFoundPage
