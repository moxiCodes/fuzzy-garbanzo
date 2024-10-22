import { AnimalData, OptionInfo } from '../types/types'

export const mockedData = [
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

export type MockOrderOptionsType = 'age' | 'worth'

export const mockedOrderOptions = [
  { type: 'age', displayName: 'Age' },
  { type: 'worth', displayName: 'Worth' },
] as OptionInfo<MockOrderOptionsType>[]
