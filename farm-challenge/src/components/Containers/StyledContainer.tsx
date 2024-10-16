import { Box } from '@mui/material'
import { ReactNode } from 'react'

const StyledContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      my={4}
      mx={2}
      gap={5}
      p={8}
      display="flex"
      flexDirection="column"
      borderRadius="5px"
      sx={{ border: '1px solid grey' }}
    >
      {children}
    </Box>
  )
}

export default StyledContainer
