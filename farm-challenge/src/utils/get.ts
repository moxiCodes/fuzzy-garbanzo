import axios, { AxiosResponse } from 'axios'
export const get = async (endpoint: string) => {
  let res: AxiosResponse
  try {
    res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/${endpoint}`)
    return res.data
  } catch (error) {
    console.error(error)
  }
}
