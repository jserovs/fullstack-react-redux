import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {

    const create = async (event) => {
        event.preventDefault()
        //getting value from form unput = anecdote
        const content = event.target.anecdote.value
        // setting to empty anecdote
        event.target.anecdote.value = ''
        props.createAnecdote(content)
    }
    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={create}>
                <div><input name='anecdote' /></div>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes
    }
}

const mapDispatchToProps = {
    createAnecdote
}

const AnecdoteFormConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteForm)

export default AnecdoteFormConnect
