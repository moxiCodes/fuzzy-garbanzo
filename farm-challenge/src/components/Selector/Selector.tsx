import { InputLabel, MenuItem } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { SelectorType } from '../../types/types'
import StyledFormControl from '../FormControl/StyledFormControl'
const defaultValueColor = { color: '#AAAAAA' }
const Selector = ({
  id,
  label,
  menuItems,
  stateValue,
  setter,
}: SelectorType) => {
  return (
    <StyledFormControl>
      <InputLabel id={`${id}-label`}>{label} </InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        value={stateValue}
        label={menuItems.none}
        onChange={(event: SelectChangeEvent) => setter(event.target.value)}
      >
        {Object.entries(menuItems).map(([key, val]) => {
          return key === 'none' ? (
            <MenuItem key={val} value={key}>
              <span style={defaultValueColor}>{val}</span>
            </MenuItem>
          ) : (
            <MenuItem key={val} value={key}>
              {val}
            </MenuItem>
          )
        })}
      </Select>
    </StyledFormControl>
  )
}

export default Selector
