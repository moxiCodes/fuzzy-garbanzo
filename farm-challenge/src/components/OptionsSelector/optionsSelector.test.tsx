import axios from 'axios'
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

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedOptions = [
  { type: 'first-option', displayName: 'First Option' },
  { type: 'second-option', displayName: 'Second Option' },
]

const handleSearchMock = jest.fn()

let dropDown: HTMLElement
let component: RenderResult

describe(`Gets and displays options, handles user selection`, () => {
  beforeEach(async () => {
    jest.clearAllMocks()
    mockedAxios.get.mockResolvedValue({ data: mockedOptions })
    component = render(
      <OptionsSelector
        handleSearch={handleSearchMock}
        optionsEndpoint="endpoint"
        labelId="test"
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
    expect(dropDown.lastChild?.textContent).toBe('Second Option')
  })
  it('updates value and triggers search handler when user selects an option', async () => {
    await waitFor(() =>
      userEvent.click(within(dropDown).getByText(/Second Option/i)),
    )

    expect(handleSearchMock).toHaveBeenCalledWith('test', 'second-option')
    expect(component.container.querySelector('input')?.value).toBe(
      'second-option',
    )
  })
  it('handles no selection', async () => {
    await waitFor(() => userEvent.click(within(dropDown).getByText(/None/i)))

    expect(handleSearchMock.mock.calls.length).toBe(0)
    expect(component.container.querySelector('input')?.value).toBe('')
  })
})

export {}
