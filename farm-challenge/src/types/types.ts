export type AnimalData = {
  _id: string
  isAlive: boolean
  worth: number
  age: number
  name: string
  gender: 'male' | 'female'
  animalType: AnimalType
}

export type AnimalType = 'chicken' | 'cow' | 'goat' | 'pig' | 'sheep' | 'none'

export type SortByOptions = 'age' | 'name' | 'worth' | 'none'

export type QueryParamsType = {
  name: string
  type: AnimalType | ''
  order: SortByOptions | ''
}

export type OptionInfo<T> = {
  type: T
  displayName: string
}
