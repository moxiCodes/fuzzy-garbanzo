import { TextField } from '@mui/material'
import { TextInputType } from '../../types/types'
import StyledFormControl from '../FormControl/StyledFormControl'

const TextInput = ({
  id,
  setter,
  stateValue,
  performUpdate,
}: TextInputType) => {
  return (
    <StyledFormControl>
      <TextField
        autoComplete="off"
        id={id}
        variant="outlined"
        label="What's it called?"
        onKeyDown={event => {
          if (event.key === 'Enter')
            return performUpdate(stateValue || 'none', 'name', 'none', setter)
        }}
        onChange={event => setter(event.target.value)}
        value={stateValue}
        helperText="Press Enter to Search"
      />
    </StyledFormControl>
  )
}

export default TextInput
