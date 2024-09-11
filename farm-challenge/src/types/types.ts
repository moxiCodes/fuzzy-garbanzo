export type AnimalType =
  | 'chicken'
  | 'cow'
  | 'goat'
  | 'pig'
  | 'sheep'
  | 'none'
  | ''
export type OrderType = 'age' | 'name' | 'worth' | 'none' | ''

export type SelectorType = {
  id: string
  label: string
  menuItems: Partial<Record<AnimalType | OrderType, string>>
  stateValue: string
  setter: (value: OrderType | AnimalType | string) => void
}

export type TextInputType = {
  id: string
  stateValue: string
  setter: (value: string) => void
  performUpdate: updateQueryStringFnType
}

export type updateQueryStringFnType = {
  (
    newParamValue: string,
    paramKey: string,
    previousParamValue: string,
    paramStateSetter: (value: string) => void,
  ): void
}
