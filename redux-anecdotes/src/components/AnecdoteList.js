import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { voteAnecdote, initializeAnecdotes } from '../reducers/anecdoteReducer'
import Anecdote from './Anecdote'
import Filter from './Filter'


function AnecdoteList () {

    const anecdotes = useSelector(state => state.anecdotes, () => { })
    const anecdoteFilter = useSelector(state => state.anecdoteFilter, () => { })
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeAnecdotes())
    }, [dispatch])


    const voteForAnecdote = (anecdote) => {
        dispatch(voteAnecdote(anecdote))
        dispatch(setNotification(`you voted '${anecdote.content}'`, 5))

    }

    var arrayToShow = []

    if (anecdotes.length > 0 ) {
        arrayToShow = anecdotes.filter(item => {
            return item.content.includes(anecdoteFilter)
        })
    }

    return (
        <div>
            <Filter />
            <div>
                {arrayToShow.sort((a, b) => b.votes - a.votes).map(anecdote =>
                    <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={() => voteForAnecdote(anecdote)} />
                )}
            </div>
        </div>
    )
}

export default AnecdoteList
