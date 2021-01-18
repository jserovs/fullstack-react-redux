import axios from 'axios'

const baseUrl = 'http://localhost:3002/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const post = async (data) => {
    const response = await axios.post(baseUrl, data)
}

export default { getAll, post}