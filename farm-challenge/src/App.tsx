import { useState } from 'react'

import { AnimalData, AnimalType, SortByOptions } from './types/types'

import StyledContainer from './components/Containers/StyledContainer'
import Heading from './components/Heading/heading'
import { Container } from '@mui/material'
import NameSearchField from './components/NameSearchField/nameSearchField'
import OptionsSelector from './components/OptionsSelector/optionSelector'
import DataTable from './components/DataTable/dataTable'
import { useApiCall } from './hooks/useApiCall'

const App = () => {
  const [name, setName] = useState('')
  const [type, setType] = useState<AnimalType | undefined>(undefined)
  const [order, setOrder] = useState<SortByOptions | undefined>(undefined)

  const data = useApiCall<AnimalData>('animals', {
    name,
    type,
    order,
  })

  return (
    <StyledContainer>
      <Heading />
      <Container disableGutters>
        <NameSearchField handleSearch={setName} />
        <OptionsSelector<AnimalType>
          optionsEndpoint="animal-types"
          label="Choose type"
          value={type}
          handleSearch={setType}
        />
        <OptionsSelector<SortByOptions>
          optionsEndpoint="animal-sort-options"
          label="Choose order"
          value={order}
          handleSearch={setOrder}
        />
      </Container>
      <DataTable data={data} />
    </StyledContainer>
  )
}

export default App
