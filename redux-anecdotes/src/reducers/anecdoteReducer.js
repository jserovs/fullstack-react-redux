import anecdoteService from "../services/anecdoteService";

// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]


const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

// const initialState = anecdotesAtStart.map(asObject)
const initialState = []



const reducer = (state = initialState, action) => {

  if (action.type === 'VOTE') {
    // const id = action.data.id
    // var anecdoteToVote = state.find(element => element.id === id)
    // anecdoteToVote.votes++

    // state.map((anecdote) => anecdote.id !== id ? anecdote : anecdoteToVote)
  }

  if (action.type === 'CREATE') {
    // asObject, create ready anecdote, by getting content

    console.log("action data:" + JSON.stringify(action.data))

    // add element to array
    return [...state, action.data]


    // return [...state, asObject(action.data.content)]
  }


  if (action.type === 'INIT') {
    state = action.data
  }

  return state
}

export const voteAnecdote = (anecdote) => {

  ++anecdote.votes

  return async dispatch => {
     const res = await anecdoteService.put(anecdote)
     console.log (res)
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const data = asObject(content)
    const res = await anecdoteService.post(data)
    console.log (res)
    dispatch({
      type: 'CREATE',
      data
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const data = await anecdoteService.getAll()
    dispatch({
      type: 'INIT',
      data: data,
    })
  }
}

export default reducer