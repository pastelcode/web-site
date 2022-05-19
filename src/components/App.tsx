import {
  extendTheme,
  withDefaultColorScheme,
  ChakraProvider,
} from '@chakra-ui/react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Footer from './footer/Footer'
import NavBar from './navbar/NavBar'

import customizedTheme from '../theme'

const theme = extendTheme(
  customizedTheme,
  withDefaultColorScheme({ colorScheme: 'brand' })
)

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  )
}

export default App
