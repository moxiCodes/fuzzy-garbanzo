import { useState } from 'react'
import {
  deriveUknownValue,
  getPrefix,
  removeParamKeyAndValue,
} from '../utils/query-string-helpers'
import { AnimalType, OrderType } from '../types/types'

export const useQueryString = () => {
  const [queryString, setQueryString] = useState('')

  const updateQueryString = (
    newParamValue: string,
    paramKey: string,
    previousParamValue: string,
    paramStateSetter: (value: OrderType | AnimalType | string) => void,
  ) => {
    //Handle empty selection
    if (newParamValue === 'none') {
      setQueryString(previousString =>
        removeParamKeyAndValue(previousString, paramKey, previousParamValue),
      )
      return paramStateSetter('')
    }
    //Handle value update
    if (previousParamValue && queryString.includes(previousParamValue)) {
      setQueryString(previousString =>
        previousString.replace(previousParamValue, newParamValue),
      )
      return paramStateSetter(newParamValue)
    }
    //Handle value update without known previous value
    //for updating param like 'name' where state changes on keystroke so value is not preserved
    if (queryString.includes(paramKey)) {
      return setQueryString(previousString =>
        previousString.replace(
          deriveUknownValue(previousString, paramKey),
          newParamValue,
        ),
      )
    }
    //Create string or concat new kv
    setQueryString(
      previousString =>
        `${previousString}${getPrefix(
          previousString,
        )}${paramKey}=${newParamValue}`,
    )
    return paramStateSetter(newParamValue)
  }

  return { updateQueryString, queryString }
}
