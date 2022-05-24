import { ComponentMultiStyleConfig } from '@chakra-ui/theme'

const Drawer: ComponentMultiStyleConfig = {
  parts: ['dialog'],
  baseStyle: {
    dialog: {
      background: '#10203A',
      borderTopRadius: '3xl',
    },
  },
}

const customizedTheme = {
  styles: {
    global: {
      body: {
        bg: '#091220',
      },
      '::selection': {
        background: '#8093F1',
      },
    },
  },
  colors: {
    brand: {
      900: '#2041E6',
      800: '#3855E9',
      700: '#4F69EB',
      600: '#677DEE',
      500: '#8093F1',
      400: '#8899F2',
      300: '#91A1F3',
      200: '#9AA9F4',
      100: '#A3B1F5',
      50: '#ACB9F6',
    },
  },
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Inter, system-ui serif',
  },
  components: {
    Drawer,
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
}

export default customizedTheme
