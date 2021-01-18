import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setNotification, removeNotification } from '../reducers/notificationReducer'
import { voteAnecdote, initializeAnecdotes } from '../reducers/anecdoteReducer'
import Anecdote from './Anecdote'


function AnecdoteList() {

    const anecdotes = useSelector(state => state.anecdotes, () => { })
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeAnecdotes())
      },[dispatch])


    const voteForAnecdote = (anecdote) => {
        console.log (anecdote)
        dispatch(voteAnecdote(anecdote))
        dispatch(setNotification(`you voted '${anecdote.content}'`, 5))

    }    

    return (
        <div>
            {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
                <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={() => voteForAnecdote(anecdote)} />
            )}
        </div>
    )
}

export default AnecdoteList
