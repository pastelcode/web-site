import { useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, HStack, Image, useMediaQuery } from '@chakra-ui/react'

import NormalMenu from './normalMenu/NormalMenu'
import SmallMenu from './smallMenu/SmallMenu'

import { brandLetters, brandLogo } from '../../config/brandInformation'

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

  const [isSmallDisplayDevice] = useMediaQuery('(max-width: 600px)')

  return (
    <Box
      as="nav"
      position="sticky"
      top={0}
      transform="translateZ(0)"
      zIndex="sticky"
      background={scrollPosition >= 75 ? 'blackAlpha.800' : 'transparent'}
      backdropFilter="auto"
      backdropBlur="3px"
      paddingX={5}
    >
      <HStack justifyContent="space-between">
        <HStack as={RouterLink} to="/" height={16}>
          <Image src={brandLogo} alt="Pastel" height="60%" />
          <Image src={brandLetters} alt="Pastel" height="30%" />
        </HStack>
        {isSmallDisplayDevice ? <SmallMenu /> : <NormalMenu />}
      </HStack>
    </Box>
  )
}

export default NavBar
