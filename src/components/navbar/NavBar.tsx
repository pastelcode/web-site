import { Box } from '@chakra-ui/react'
const NavBar = () => {
  return (
    <Box
      as="nav"
      position="sticky"
      top={0}
      width="100%"
      transform="translateZ(0)"
      background="red"
      zIndex="sticky"
    >
      NavBar
    </Box>
  )
}

export default NavBar
