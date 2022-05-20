import { useState, useEffect } from 'react'
import { Box, HStack, Image } from '@chakra-ui/react'

import { brandLetters, brandLogo } from '../../config/brandInformation'
import SmallMenu from './smallMenu/SmallMenu'

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0)

  const handleScroll = () => {
    const position = window.scrollY
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Box
      as="nav"
      position="sticky"
      top={0}
      transform="translateZ(0)"
      zIndex="sticky"
      background={scrollPosition >= 75 ? 'blackAlpha.800' : 'transparent'}
      paddingX={5}
    >
      <HStack justifyContent="space-between">
        <HStack height={16}>
          <Image src={brandLogo} alt="Pastel" height="60%" />
          <Image src={brandLetters} alt="Pastel" height="30%" />
        </HStack>
        <SmallMenu />
      </HStack>
    </Box>
  )
}

export default NavBar
