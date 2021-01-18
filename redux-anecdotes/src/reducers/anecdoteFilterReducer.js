const initialState = ''


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_FILTER':
            // state = action.filter
            state = action.data.filter
            console.log("state:" + action.data.filter)
            break

        default:
            break
    }

    return state
}

export const setFilter = (filter) => {
    return {
        type: 'SET_FILTER',
        data: {
            filter
        }

    }   
}

export default reducer

