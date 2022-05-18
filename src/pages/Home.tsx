import { VStack } from '@chakra-ui/react'

import Introduction from '../components/home/Introduction'
import WhyToChooseUs from '../components/home/WhyToChooseUs'

const Home = (): JSX.Element => {
  return (
    <VStack>
      <Introduction />
      <WhyToChooseUs />
    </VStack>
  )
}

export default Home
