import { RefObject } from 'react'
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from '@chakra-ui/react'

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
        <DrawerHeader>Menú</DrawerHeader>
        <DrawerBody></DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default DrawerMenu
