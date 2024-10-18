import { TextField } from '@mui/material'
import { useState } from 'react'
import StyledFormInputWrapper from '../Containers/StyledFormInputWrapper'

type NameSearchFieldPropsType = {
  handleSearch: (value: string) => void
}
const NameSearchField = ({ handleSearch }: NameSearchFieldPropsType) => {
  const [name, setName] = useState('')

  return (
    <StyledFormInputWrapper>
      <TextField
        autoComplete="off"
        variant="outlined"
        label="Search by name..."
        onKeyDown={({ key }) => {
          return key === 'Enter' && handleSearch(name)
        }}
        onChange={({ target }) => setName(target.value)}
        value={name}
        helperText="Press Enter to Search"
      />
    </StyledFormInputWrapper>
  )
}
export default NameSearchField
