import {
  extendTheme,
  withDefaultColorScheme,
  ChakraProvider,
} from '@chakra-ui/react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import Footer from './footer/Footer'
import NavBar from './navbar/NavBar'

import customizedTheme from '../theme'
import ContactPage from '../pages/ContactPage'
import NotFoundPage from '../pages/NotFoundPage'

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
          <Route path="/" element={<HomePage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  )
}

export default App
