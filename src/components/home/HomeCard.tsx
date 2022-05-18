import { Box } from '@chakra-ui/react'

interface Props {
  background?: string
  compact?: boolean
  children: JSX.Element
}

const HomeCard = ({ background, compact, children }: Props): JSX.Element => (
  <Box background={background || 'none'} paddingY="10" width="100%">
    <Box
      marginLeft="auto"
      marginRight="auto"
      width={compact ? '90%' : '100%'}
      maxWidth={compact ? '1000px' : 'none'}
    >
      {children}
    </Box>
  </Box>
)

export default HomeCard
