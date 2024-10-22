import { render, waitFor, screen, within } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'
import * as useApiCall from './hooks/useApiCall'
import { userEvent } from '@testing-library/user-event'
import { mockedData, mockedOrderOptions } from './test-utils/mocks'
import { AnimalData } from './types/types'

const mockServerFiltering = (
  name: string | undefined,
  order: keyof AnimalData,
) =>
  mockedData
    .filter(item => item.name.includes(`${name}`))
    .sort((a, b) => (a[order] > b[order] ? 1 : a[order] < b[order] ? -1 : 0))

describe('Handles search on input and displays refetched data with user input as query params', () => {
  it(`correctly re-renders with queried data from user input`, async () => {
    jest.spyOn(useApiCall, 'useApiCall').mockImplementation(() => mockedData)
    jest
      .spyOn(useApiCall, 'useApiCall')
      .mockImplementation(() => mockedOrderOptions)

    const app = render(<App />)

    const searchInputs = app.container.querySelectorAll('input')
    const nameInput = searchInputs[0]
    const orderInput = searchInputs[2]

    nameInput && (await waitFor(() => userEvent.type(nameInput!, 'Bur{enter}')))

    const orderSelect = screen.getByLabelText('Choose order')
    await waitFor(() => userEvent.click(orderSelect))
    const orderDropDown = screen.getByRole('listbox')
    await waitFor(() =>
      userEvent.click(within(orderDropDown).getByText(/Worth/i)),
    )
    const nameInputValue = nameInput?.value
    const orderInputValue = orderInput?.value as keyof AnimalData

    jest
      .spyOn(useApiCall, 'useApiCall')
      .mockImplementation(() =>
        mockServerFiltering(nameInputValue, orderInputValue),
      )
    app.rerender(<App />)

    expect(app.container.querySelector('tbody')?.firstChild).toHaveTextContent(
      'Alejandra Burnett',
    )
    expect(app.container.querySelector('tbody')?.lastChild).toHaveTextContent(
      'Adriana Burgess',
    )
    expect(screen.queryByText('Aguirre Andrews')).not.toBeInTheDocument()
    expect(app).toMatchSnapshot()
  })
})
