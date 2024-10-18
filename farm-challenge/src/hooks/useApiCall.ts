import { useEffect, useState } from 'react'

import axios from 'axios'

type ParamsType = { [k: string]: string | undefined }

export const useApiCall = <T>(endpoint: string, params?: ParamsType) => {
  const [data, setData] = useState<T[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await axios.get<T[]>(endpoint, { params })
        setData(data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [endpoint, paramsAsSerializedDeps(params)])

  return data
}

const paramsAsSerializedDeps = (params: ParamsType | undefined) => {
  return (
    (params && Object.values(params).filter(value => value))?.toString() ?? ''
  )
}
