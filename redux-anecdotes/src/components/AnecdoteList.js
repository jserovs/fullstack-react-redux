import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import Anecdote from './Anecdote'



function AnecdoteList() {
    const anecdotes = useSelector(state => state, () => { })
    const dispatch = useDispatch()

    return (
        <div>
            {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
                <Anecdote anecdote={anecdote} handleClick={() => dispatch(voteAnecdote(anecdote.id))} />
            )}
        </div>
    )
}

export default AnecdoteList
