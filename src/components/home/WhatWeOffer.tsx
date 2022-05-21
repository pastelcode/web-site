import { Link as RouterLink } from 'react-router-dom'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import {
  Heading,
  VStack,
  Box,
  Grid,
  GridItem,
  Text,
  Link,
  Divider,
} from '@chakra-ui/react'

import HomeCard from './HomeCard'

import { ourServices } from '../../config/brandInformation'

const WhatWeOffer = (): JSX.Element => (
  <HomeCard>
    <VStack>
      <Heading id="nuestros-servicios" textAlign="center">
        Nuestros servicios
      </Heading>
      <Box height="3" />
      <Grid
        gap="3"
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        marginLeft="auto"
        marginRight="auto"
        width="90%"
        maxWidth="1000px"
      >
        {ourServices.map(({ title, description }) => {
          return (
            <GridItem
              key={title}
              borderRadius="xl"
              border="2px"
              borderColor="whiteAlpha.400"
              overflow="hidden"
            >
              <Grid height="100%" gridTemplateRows="auto 1fr auto auto">
                <Heading
                  size="lg"
                  background="brand.600"
                  width="100%"
                  paddingY="4"
                  paddingX="7"
                >
                  {title}
                </Heading>
                <Text paddingX="7" paddingY="4">
                  {description}
                </Text>
                <Divider />
                <Link
                  as={RouterLink}
                  to={`/contacto?referencia=${title}`}
                  fontWeight="semibold"
                  paddingX="7"
                  paddingY="4"
                >
                  Comencemos <ArrowForwardIcon />
                </Link>
              </Grid>
            </GridItem>
          )
        })}
      </Grid>
    </VStack>
  </HomeCard>
)

export default WhatWeOffer
