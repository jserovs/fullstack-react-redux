import React from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import Anecdote from './Anecdote'
import Filter from './Filter'


const AnecdoteList = (props) => {

    const anecdoteFilter = useSelector(state => state.anecdoteFilter, () => { })

    const voteForAnecdote = (anecdote) => {
        props.voteAnecdote(anecdote)
        dispatch(setNotification(`you voted '${anecdote.content}'`, 5))

    }

    const dispatch = useDispatch()

    const filteredAnecdotes = props.anecdotes.filter(item => {
        return item.content.includes(anecdoteFilter)
    })

    return (
        <div>
            <Filter />
            <div>
                {filteredAnecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
                    <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={() => voteForAnecdote(anecdote)} />
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        anecdotes: state.anecdotes
    }
}

const mapDispatchToProps = {
    voteAnecdote
}

const AnecdoteListConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteList)


export default AnecdoteListConnect
