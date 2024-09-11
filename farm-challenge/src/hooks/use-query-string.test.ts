import { useQueryString } from './useQueryString'
import { renderHook, act } from '@testing-library/react'

describe('Creates dynamic query strings from user input in arbitrary order', () => {
  const paramStateSetterMock = jest.fn()

  it(`constructs query string with correct param kv and correct prefix (? or &)`, () => {
    const { result } = renderHook(() => useQueryString())
    act(() => {
      result.current.updateQueryString('cow', 'type', '', paramStateSetterMock)
    })
    expect(paramStateSetterMock).toHaveBeenCalled()
    expect(result.current.queryString).toEqual('?type=cow')
  })

  it(`derives and replaces previous param value,
  when previous value is uknown because state is not preserved like 'name'`, () => {
    const { result } = renderHook(() => useQueryString())
    act(() => {
      result.current.updateQueryString('Tina', 'name', '', paramStateSetterMock)
    })
    expect(paramStateSetterMock).toHaveBeenCalled()
    expect(result.current.queryString).toEqual('?name=Tina')
  })

  it(`returns query string with previous value replaced, 
 when param key exists in query string and param value should be updated`, () => {
    const { result } = renderHook(() => useQueryString())
    act(() => {
      result.current.updateQueryString(
        'LeBlanc',
        'name',
        '',
        paramStateSetterMock,
      )
    })
    act(() => {
      result.current.updateQueryString(
        'Not Leblanc',
        'name',
        'LeBlanc',
        paramStateSetterMock,
      )
    })
    expect(paramStateSetterMock).toHaveBeenCalled()
    expect(result.current.queryString).toEqual('?name=Not Leblanc')
  })

  it(`returns query string with params removed if newParamValue is 'none', 
  for cases like empty selection or deleted name`, () => {
    const { result } = renderHook(() => useQueryString())
    act(() => {
      result.current.updateQueryString('age', 'order', '', paramStateSetterMock)
    })

    act(() => {
      result.current.updateQueryString(
        'none',
        'order',
        'age',
        paramStateSetterMock,
      )
    })
    expect(paramStateSetterMock).toHaveBeenCalled()
    expect(result.current.queryString).toEqual('')
  })

  it(`returns query string concatenated with a new param kv and correct prefix (? or '&)`, () => {
    const { result } = renderHook(() => useQueryString())

    act(() => {
      result.current.updateQueryString('age', 'order', '', paramStateSetterMock)
    })

    act(() => {
      result.current.updateQueryString('cow', 'type', '', paramStateSetterMock)
    })

    expect(paramStateSetterMock).toHaveBeenCalled()
    expect(result.current.queryString).toEqual('?order=age&type=cow')
  })
})
