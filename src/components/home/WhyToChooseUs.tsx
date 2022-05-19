import {
  VStack,
  Heading,
  Text,
  Grid,
  GridItem,
  Box,
  Icon,
} from '@chakra-ui/react'

import HomeCard from './HomeCard'

import { reasonsToChooseUs } from '../../config/brandInformation'

const WhyToChooseUs = (): JSX.Element => (
  <HomeCard>
    <VStack>
      <Heading id="por-que-elegirnos" textAlign="center">
        ¿Por qué elegirnos?
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
        {reasonsToChooseUs.map(({ title, description, icon }) => {
          return (
            <GridItem
              key={title}
              background="whiteAlpha.100"
              borderRadius="xl"
              paddingY="4"
              paddingX="7"
            >
              <Icon boxSize={12} as={icon} />
              <Box height="2" />
              <Heading size="lg">{title}</Heading>
              <Box height="2" />
              <Text>{description}</Text>
            </GridItem>
          )
        })}
      </Grid>
    </VStack>
  </HomeCard>
)
export default WhyToChooseUs
