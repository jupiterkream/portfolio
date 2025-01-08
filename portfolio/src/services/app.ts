import axios from 'axios'

const API_URL = '/api/bpi/spend'

export const getCredits = async (id: string) => {
  const response = await axios.post(`${API_URL}/v4/credits/${id}`)
  return response.data
}
