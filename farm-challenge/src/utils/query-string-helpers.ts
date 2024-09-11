export const getPrefix = (queryStr: string) =>
  queryStr.includes('?') ? '&' : '?'

export const deriveUknownValue = (queryStr: string, paramKey: string) => {
  return queryStr
    ?.split('&')
    .filter(subStrArr => subStrArr.includes(paramKey))[0]
    ?.split('=')[1]
}

export const removeParamKeyAndValue = (
  prevQueryStr: string,
  paramKey: string,
  previousParamValue: string,
) => {
  const prefix = prevQueryStr[prevQueryStr.indexOf(`${paramKey}=`) - 1]
  const valueIsPossiblyUnknown = paramKey === 'name' && prevQueryStr.length > 1

  const newQueryStr = prevQueryStr.replace(
    `${prefix}${paramKey}=${
      valueIsPossiblyUnknown
        ? deriveUknownValue(prevQueryStr, paramKey)
        : previousParamValue
    }`,
    '',
  )
  return newQueryStr[0] === '&' ? newQueryStr.replace('&', '?') : newQueryStr
}
