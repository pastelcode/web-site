import { useRef } from 'react'
import { Button, useDisclosure } from '@chakra-ui/react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import DrawerMenu from './DrawerMenu'

const SmallMenu = () => {
  const buttonReference = useRef<HTMLButtonElement>(null)

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button colorScheme="gray" onClick={onOpen} ref={buttonReference}>
        <BiDotsHorizontalRounded />
      </Button>
      <DrawerMenu
        isOpen={isOpen}
        onClose={onClose}
        buttonReference={buttonReference}
      />
    </>
  )
}

export default SmallMenu
