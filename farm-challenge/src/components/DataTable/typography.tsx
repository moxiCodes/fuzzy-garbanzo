import { Typography } from '@mui/material'
import { ReactNode } from 'react'

const StyledTypography = ({ children }: { children: ReactNode }) => {
  return (
    <Typography
      variant="subtitle1"
      gutterBottom
      sx={{ marginBottom: 1.2, color: '#666666' }}
    >
      {children}
    </Typography>
  )
}

export default StyledTypography
