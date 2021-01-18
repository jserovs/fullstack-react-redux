import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setNotification, removeNotification } from '../reducers/notificationReducer'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import Anecdote from './Anecdote'


function AnecdoteList() {
    
    const anecdotes = useSelector(state => state.anecdotes, () => { })
    const dispatch = useDispatch()

    const voteForAnecdote = (id, content) => {
        dispatch(voteAnecdote(id))
        dispatch(setNotification('you voted for: "' + content + '"!'))
        setTimeout(() => {
            dispatch(removeNotification())
          }, 5000)
    }
    

    return (
        <div>
            {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
                <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={() => voteForAnecdote(anecdote.id, anecdote.content)} />
            )}
        </div>
    )
}

export default AnecdoteList
