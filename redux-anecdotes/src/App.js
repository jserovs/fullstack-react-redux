import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  
  const anecdotes = useSelector(state => state, () => {})
  const dispatch = useDispatch()

  const create = (event) => {
    event.preventDefault()
     //getting value from form unput = anecdote
    const content = event.target.anecdote.value
    // setting to empty anecdote
    event.target.anecdote.value = ''

    console.log (content)
    dispatch({
      type: 'CREATE',
      data: {
        content
      }
    })
  }

  const vote = (id) => {
    console.log('vote', id)
    dispatch({
      type: 'VOTE',
      data: { id }
    })
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.sort((a,b)=> b.votes - a.votes ).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={create}>
        <div><input name='anecdote'/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App