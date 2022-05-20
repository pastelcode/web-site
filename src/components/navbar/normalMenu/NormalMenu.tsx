import { Link as RouterLink } from 'react-router-dom'
import { HStack, Link } from '@chakra-ui/react'

import applicationRoutes from '../../../config/applicationRoutes'

const NormalMenu = (): JSX.Element => {
  return (
    <HStack gap={3}>
      {applicationRoutes.map(({ name, path }) => (
        <Link key={path} as={RouterLink} to={path}>
          {name}
        </Link>
      ))}
    </HStack>
  )
}

export default NormalMenu
