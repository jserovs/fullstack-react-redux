const initialState = { message: '' }


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET':
            clearTimeout(state.timerId)       
            state = {
                message: action.data.notificationMessage,
                timerId: action.data.timerId
            }
            break
        case 'REMOVE':
            state = initialState;
            break
        default:
            break
    }
    console.log (JSON.stringify(state))
    return state
}

export const setNotification = (message, seconds) => {

    return async dispatch => {

        const id = await setTimeout(() => {
            dispatch({
                type: 'REMOVE',
            })
        }, seconds * 1000)

        dispatch({
            type: 'SET',
            data: {
                notificationMessage: message,
                timerId: id
            }
        })

        console.log(id)
    }
}

export const removeNotification = (message) => {
    return {
        type: 'REMOVE',
        data: {
            notificationMessage: ''
        }
    }
}

export default reducer