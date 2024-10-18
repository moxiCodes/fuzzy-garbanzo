import {
  render,
  screen,
  waitFor,
  within,
  RenderResult,
} from '@testing-library/react'
import '@testing-library/jest-dom'
import { userEvent } from '@testing-library/user-event'
import OptionsSelector from './optionSelector'
import { OptionInfo } from '../../types/types'
import * as useApiCall from '../../hooks/useApiCall'

type MockOptionsType = 'meow' | 'bark'
const mockedOptions = [
  { type: 'bark', displayName: 'Bark' },
  { type: 'meow', displayName: 'Meow' },
] as OptionInfo<MockOptionsType>[]

const handleSearchMock = jest.fn()

let dropDown: HTMLElement
let component: RenderResult

describe(`Gets and displays options, handles user selection`, () => {
  beforeEach(async () => {
    jest.spyOn(useApiCall, 'useApiCall').mockImplementation(() => mockedOptions)
    component = render(
      <OptionsSelector<MockOptionsType>
        handleSearch={handleSearchMock}
        optionsEndpoint="endpoint"
        value={undefined}
        label="Choose Option"
      />,
    )
    //Simulates user interaction with select element so that options appear in the document
    //userEvent.selectOptions() won't work with MUI Select because much like me... its actually a div 🥲
    const select = screen.getByLabelText('Choose Option')
    await waitFor(() => userEvent.click(select))
    dropDown = screen.getByRole('listbox')
  })

  it('shows options populated from options endpoint', async () => {
    expect(dropDown.childElementCount).toBe(3)
    expect(dropDown.firstChild?.textContent).toBe('None')
    expect(dropDown.lastChild?.textContent).toBe('Meow')
  })
  it('Triggers search handler when user selects an option', async () => {
    await waitFor(() => userEvent.click(within(dropDown).getByText(/Meow/i)))

    expect(handleSearchMock).toHaveBeenCalledWith('meow')
  })
  it('handles no selection', async () => {
    await waitFor(() => userEvent.click(within(dropDown).getByText(/None/i)))

    expect(handleSearchMock.mock.calls.length).toBe(0)
  })
})

export {}
