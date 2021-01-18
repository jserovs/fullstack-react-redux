import anecdoteService from "../services/anecdoteService";

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


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



const reducer = (state = [initialState], action) => {

  if (action.type === 'VOTE') {
    const id = action.data.id
    var anecdoteToVote = state.find(element => element.id === id)
    anecdoteToVote.votes++

    state.map((anecdote) => anecdote.id !== id ? anecdote : anecdoteToVote)
  }

  if (action.type === 'CREATE') {
    // asObject, create ready anecdote, by getting content
    const newBlog = asObject(action.data.content)
    console.log(newBlog)
    anecdoteService.post(newBlog)
    // add element to array
    return [...state, newBlog]


    // return [...state, asObject(action.data.content)]
  }


  if (action.type === 'INIT') {    
    state = action.data
  }

  return state
}

export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: {
      id
    }
  }
}

export const createAnecdote = (content) => {
  return {
    type: 'CREATE',
    data: {
      content
    }
  }
}

export const initializeAnecdotes = (data) => {
  return {
    type: 'INIT',
    data
  }
}

export default reducer