import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import Anecdote from './Anecdote'
import Filter from './Filter'


function AnecdoteList() {

    const anecdotes = useSelector(({ anecdoteFilter, anecdotes }) => {
        if (anecdoteFilter === '') {
            return anecdotes
        }
        return anecdotes.filter(item => {
            return item.content.includes(anecdoteFilter)
        })
    }, () => {})

    const dispatch = useDispatch()

    const voteForAnecdote = (anecdote) => {
        dispatch(voteAnecdote(anecdote))
        dispatch(setNotification(`you voted '${anecdote.content}'`, 5))

    }


    return (
        <div>
            <Filter />
            <div>
                {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
                    <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={() => voteForAnecdote(anecdote)} />
                )}
            </div>
        </div>
    )
}

export default AnecdoteList
