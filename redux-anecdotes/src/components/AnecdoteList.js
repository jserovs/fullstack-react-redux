import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import Anecdote from './Anecdote'
import Filter from './Filter'


const AnecdoteList = (props) => {

    const voteForAnecdote = (anecdote) => {
        props.voteAnecdote(anecdote)

    }

    return (
        <div>
            <Filter />
            <div>
                {props.anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
                    <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={() => voteForAnecdote(anecdote)}  />
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
