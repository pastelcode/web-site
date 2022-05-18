import {
  extendTheme,
  withDefaultColorScheme,
  ChakraProvider,
} from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'

import customizedTheme from './theme'

const theme = extendTheme(
  customizedTheme,
  withDefaultColorScheme({ colorScheme: 'brand' })
)

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
