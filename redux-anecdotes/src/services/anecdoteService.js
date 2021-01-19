import axios from 'axios'

const baseUrl = 'http://localhost:3002/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const post = async (data) => {
  const response = await axios.post(baseUrl, data)
  console.log("POST: "+ response)
}

const put = async (data) => {
  const response = await axios.put(baseUrl+'/'+data.id, data)
  console.log("PUT: " + response)
}

export default { getAll, post, put }