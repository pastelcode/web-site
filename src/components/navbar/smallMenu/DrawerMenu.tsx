import { RefObject } from 'react'
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from '@chakra-ui/react'

import DrawerLinkItem from './DrawerLinkItem'

import applicationRoutes from '../../../config/applicationRoutes'

interface Props {
  isOpen: boolean
  onClose: () => void
  buttonReference: RefObject<HTMLButtonElement>
}

const DrawerMenu = ({ isOpen, onClose, buttonReference }: Props) => {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement="bottom"
      finalFocusRef={buttonReference}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader fontSize="3xl">Menú</DrawerHeader>
        <DrawerBody>
          {applicationRoutes.map((route) => (
            <DrawerLinkItem key={route.path} {...route} />
          ))}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default DrawerMenu
