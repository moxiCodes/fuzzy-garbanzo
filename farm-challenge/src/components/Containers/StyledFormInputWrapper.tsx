import { FormControl } from '@mui/material'
import { ReactNode } from 'react'

const StyledFormInputWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <FormControl
      sx={{
        minWidth: '300px',
        marginRight: '1em',
        marginTop: '1em',
      }}
    >
      {' '}
      {children}{' '}
    </FormControl>
  )
}

export default StyledFormInputWrapper
