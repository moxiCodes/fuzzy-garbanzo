import { render } from '@testing-library/react'
import { AnimalData } from '../../types/types'
import DataTable from './dataTable'

const data = [
  {
    age: 10,
    animalType: 'cow',
    gender: 'female',
    isAlive: false,
    name: 'Adriana Burgess',
    worth: 43.87,
    _id: '6690e34e1cb6c589294bf1e9',
  },
  {
    age: 6,
    animalType: 'cow',
    gender: 'male',
    isAlive: true,
    name: 'Aguirre Andrews',
    worth: 10.4,
    _id: '6690e34eb1965a30baab8221',
  },
  {
    age: 9,
    animalType: 'cow',
    gender: 'female',
    isAlive: true,
    name: 'Alejandra Burnett',
    worth: 42.7,
    _id: '6690e34ecd191888af125a38',
  },
] as AnimalData[]

describe('Displays table of animals or a message', () => {
  it('displays a message if no data is found', async () => {
    expect(render(<DataTable data={[]} />)).toMatchSnapshot()
  })
  it('displays a table if data exists', async () => {
    expect(render(<DataTable data={data} />)).toMatchSnapshot()
  })
})
