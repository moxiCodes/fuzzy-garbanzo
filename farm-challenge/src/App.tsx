import { Container } from '@mui/material'
import DataTable from './components/DataTable/DataTable'
import TextInput from './components/TextInput/TextInput'
import Selector from './components/Selector/Selector'
import HeadingWithTagline from './components/HeadingWithTagline/HeadingWithTagline'
import { useEffect, useState } from 'react'

import axios from 'axios'

import { useQueryString } from './hooks/useQueryString'
import StyledContainer from './components/Container/StyledContainer'

const animalTypeMenu = {
  none: 'Any old thing...',
  goat: 'Goat',
  cow: 'Cow',
  sheep: 'Sheep',
  pig: 'Pig',
}
const animalOrderMenu = {
  none: 'Any old way...',
  age: 'Age',
  worth: 'Worth',
}
const App = () => {
  const [data, setData] = useState<Record<string, string>[] | string>(
    'No Data Found',
  )
  const { updateQueryString, queryString } = useQueryString()
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [order, setOrder] = useState('')

  const nameSetter = (value: string) => setName(value)

  const typeSetter = (value: string) =>
    updateQueryString(value, 'type', type, setType)

  const orderSetter = (value: string) =>
    updateQueryString(value, 'order', order, setOrder)

  const getAndSetData = async () => {
    let resData
    try {
      resData = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/animals/${queryString}`,
      )
    } catch (error) {
      console.log(error)
    }
    return resData?.data ? setData(resData.data) : setData('No Data Found')
  }

  useEffect(() => {
    getAndSetData()
  }, [queryString])

  return (
    <StyledContainer>
      <HeadingWithTagline />
      <Container disableGutters>
        {' '}
        <TextInput
          id="name-input"
          setter={nameSetter}
          stateValue={name}
          performUpdate={updateQueryString}
        />
        <Selector
          id="type-selector"
          label="What Type?"
          menuItems={animalTypeMenu}
          setter={typeSetter}
          stateValue={type}
        />
        <Selector
          id="order-selector"
          label="Which Order?"
          menuItems={animalOrderMenu}
          setter={orderSetter}
          stateValue={order}
        />
      </Container>
      <DataTable data={data} />
    </StyledContainer>
  )
}

export default App
