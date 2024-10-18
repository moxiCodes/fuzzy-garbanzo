import { RenderResult, render, waitFor } from '@testing-library/react'
import NameSearchField from './nameSearchField'
import { userEvent } from '@testing-library/user-event'

const handleSearchMock = jest.fn()
let component: RenderResult
let input: HTMLInputElement | null

describe('Handles user searching by name', () => {
  beforeEach(() => {
    component = render(<NameSearchField handleSearch={handleSearchMock} />)
    input = component.container.querySelector('input')
  })
  it('updates value when user types', async () => {
    await waitFor(() => userEvent.type(input!, 'Kidd'))
    expect(input?.value).toBe('Kidd')
  })

  it('calls handler when user presses Enter', async () => {
    await waitFor(() => userEvent.type(input!, 'Kidd{enter}'))
    expect(handleSearchMock).toHaveBeenCalledWith('Kidd')
  })
})

export {}
