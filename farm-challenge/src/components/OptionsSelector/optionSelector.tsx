import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import StyledFormInputWrapper from '../Containers/StyledFormInputWrapper'
import { useEffect, useState } from 'react'
import { AnimalType, OptionInfo, SortByOptions } from '../../types/types'
import { get } from '../../utils/get'

type OptionsSelectorPropsType = {
  handleSearch: (key: string, param: string) => void
  optionsEndpoint: string
  labelId: string
  label: string
}
const OptionsSelector = ({
  optionsEndpoint,
  labelId,
  label,
  handleSearch,
}: OptionsSelectorPropsType) => {
  const [selection, setSelection] = useState('')
  const [options, setOptions] = useState<
    OptionInfo<SortByOptions | AnimalType>[]
  >([])

  const getOptions = async () => {
    setOptions(await get(optionsEndpoint))
  }
  useEffect(() => {
    getOptions()
  })

  const handleChange = ({ target }: SelectChangeEvent) => {
    setSelection(target.value)
    return handleSearch(labelId, target.value)
  }
  return (
    <StyledFormInputWrapper>
      <InputLabel id={`${labelId}-selector-label`}>{label}</InputLabel>
      <Select
        labelId={`${labelId}-selector-label`}
        value={selection}
        label={label}
        onChange={handleChange}
      >
        <MenuItem value={''}>None</MenuItem>
        {options?.length &&
          options.map(option => {
            return (
              <MenuItem key={`${option.type}`} value={option.type}>
                {option.displayName}
              </MenuItem>
            )
          })}
      </Select>
    </StyledFormInputWrapper>
  )
}

export default OptionsSelector
