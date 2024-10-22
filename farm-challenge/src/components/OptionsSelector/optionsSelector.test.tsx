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
import {
  MockOrderOptionsType,
  mockedOrderOptions,
} from '../../test-utils/mocks'

const handleSearchMock = jest.fn()

let dropDown: HTMLElement
let component: RenderResult

describe(`Displays options from endpoint, handles user selection`, () => {
  beforeEach(async () => {
    jest
      .spyOn(useApiCall, 'useApiCall')
      .mockImplementation(() => mockedOrderOptions)
    component = render(
      <OptionsSelector<MockOrderOptionsType>
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
    expect(dropDown.lastChild?.textContent).toBe('Worth')
  })
  it('Triggers search handler when user selects an option', async () => {
    await waitFor(() => userEvent.click(within(dropDown).getByText(/Worth/i)))

    expect(handleSearchMock).toHaveBeenCalledWith('worth')
  })
  it('handles no selection', async () => {
    await waitFor(() => userEvent.click(within(dropDown).getByText(/None/i)))

    expect(handleSearchMock.mock.calls.length).toBe(0)
  })
})

export {}
