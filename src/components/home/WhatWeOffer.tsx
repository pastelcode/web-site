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
  Badge,
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
        {ourServices.map(({ title, description, isComingSoon, basePrice }) => {
          return (
            <GridItem key={title}>
              <Grid
                height="100%"
                gridTemplateRows="auto 1fr auto auto"
                borderRadius="xl"
                border="2px"
                borderColor="whiteAlpha.400"
                overflow="hidden"
              >
                <Heading
                  size="lg"
                  background="brand.600"
                  width="100%"
                  paddingY="4"
                  paddingX="7"
                >
                  {title}
                </Heading>
                <VStack alignItems="start" paddingX="7" paddingY="4">
                  <Text>{description}</Text>
                  {!isComingSoon && (
                    <Text fontSize="lg" fontStyle="italic">
                      Desde Q{basePrice}
                    </Text>
                  )}
                </VStack>
                <Divider />
                {isComingSoon ? (
                  <Badge fontSize={14} paddingX={7} paddingY={4}>
                    Próximamente
                  </Badge>
                ) : (
                  <Link
                    as={RouterLink}
                    to={`/contacto?servicio=${title}`}
                    fontWeight="semibold"
                    paddingX="7"
                    paddingY="4"
                  >
                    Comencemos <ArrowForwardIcon />
                  </Link>
                )}
              </Grid>
            </GridItem>
          )
        })}
      </Grid>
    </VStack>
  </HomeCard>
)

export default WhatWeOffer
