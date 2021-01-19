import React from 'react'
import { connect } from 'react-redux'
import { setFilter} from '../reducers/anecdoteFilterReducer'

const Filter = (props) => {

    const handleChange = (event) => {
        props.setFilter(event.target.value)

    }
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter <input onChange={handleChange} />
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        filter: state.filter
    }
}

const mapDispatchToProps = {
    setFilter
}

const FilterConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter)

export default FilterConnect