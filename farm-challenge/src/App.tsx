import { useEffect, useState } from 'react'
import { get } from './utils/get'
import { genQuery } from './utils/gen-query-from-params'
import { AnimalData, QueryParamsType } from './types/types'

import StyledContainer from './components/Containers/StyledContainer'
import Heading from './components/Heading/heading'
import { Container } from '@mui/material'
import NameSearchField from './components/NameSearchField/nameSearchField'
import OptionsSelector from './components/OptionsSelector/optionSelector'
import DataTable from './components/DataTable/dataTable'

const App = () => {
  const [data, setData] = useState<AnimalData[]>([])
  const [queryParams, setQueryParams] = useState<QueryParamsType>({
    name: '',
    type: '',
    order: '',
  })
  const updateQueryParams = (key: string, value: string) =>
    setQueryParams(prev => {
      return { ...prev, [key]: value }
    })

  const getAndSetData = async () => {
    const data = await get(`animals/${genQuery(queryParams)}`)
    return setData(data)
  }

  useEffect(() => {
    getAndSetData()
  }, [queryParams])

  return (
    <StyledContainer>
      <Heading />
      <Container disableGutters>
        {' '}
        <NameSearchField handleSearch={updateQueryParams} />
        <OptionsSelector
          optionsEndpoint="animal-types"
          labelId="type"
          label="Choose type..."
          handleSearch={updateQueryParams}
        />
        <OptionsSelector
          optionsEndpoint="animal-sort-options"
          labelId="order"
          label="Choose order..."
          handleSearch={updateQueryParams}
        />
      </Container>
      <DataTable data={data} />
    </StyledContainer>
  )
}

export default App
