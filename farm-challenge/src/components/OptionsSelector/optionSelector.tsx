import { InputLabel, MenuItem, Select } from '@mui/material'
import StyledFormInputWrapper from '../Containers/StyledFormInputWrapper'
import { OptionInfo } from '../../types/types'
import { useApiCall } from '../../hooks/useApiCall'
import { memo } from 'react'

type OptionsSelectorPropsType<T> = {
  handleSearch: (value: T | undefined) => void
  optionsEndpoint: string
  label: string
  value: T | undefined
}
const OptionsSelector = <T extends string>({
  handleSearch,
  optionsEndpoint,
  label,
  value,
}: OptionsSelectorPropsType<T>) => {
  const options = useApiCall<OptionInfo<T>>(optionsEndpoint)

  return (
    <StyledFormInputWrapper>
      <InputLabel id={optionsEndpoint}>{label}</InputLabel>
      <Select
        labelId={optionsEndpoint}
        value={value ?? ''}
        label={label}
        onChange={({ target }) =>
          handleSearch(target?.value ? (target?.value as T) : undefined)
        }
      >
        <MenuItem value={''}>None</MenuItem>
        {options?.length &&
          options.map(option => {
            return (
              <MenuItem key={option.type} value={option.type}>
                {option.displayName}
              </MenuItem>
            )
          })}
      </Select>
    </StyledFormInputWrapper>
  )
}

export default memo(OptionsSelector) as typeof OptionsSelector
