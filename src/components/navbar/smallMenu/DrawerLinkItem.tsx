import { Link } from 'react-router-dom'
import { HStack, Icon, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import { Route } from '../../../config/applicationRoutes'

const DrawerLinkItem = ({ path, name, icon }: Route) => {
  return (
    <LinkBox>
      <HStack
        padding={5}
        background="whiteAlpha.100"
        marginBottom={5}
        borderRadius="xl"
      >
        <Icon as={icon} boxSize={5} />
        <LinkOverlay as={Link} to={path}>
          <Text fontWeight="medium">{name}</Text>
        </LinkOverlay>
      </HStack>
    </LinkBox>
  )
}

export default DrawerLinkItem
