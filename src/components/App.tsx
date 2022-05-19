import {
  extendTheme,
  withDefaultColorScheme,
  ChakraProvider,
} from '@chakra-ui/react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'

import customizedTheme from '../theme'
import Footer from './footer/Footer'

const theme = extendTheme(
  customizedTheme,
  withDefaultColorScheme({ colorScheme: 'brand' })
)

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  )
}

export default App
