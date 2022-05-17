import {
  extendTheme,
  withDefaultColorScheme,
  ChakraProvider,
  Heading,
  Text,
  Switch,
  Button,
  VStack,
} from '@chakra-ui/react'
import customizedTheme from './theme'

const theme = extendTheme(
  customizedTheme,
  withDefaultColorScheme({ colorScheme: 'brand' })
)

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <Heading>Heading</Heading>
        <Text>Text</Text>
        <Switch>Switch</Switch>
        <Button>Button</Button>
      </VStack>
    </ChakraProvider>
  )
}
