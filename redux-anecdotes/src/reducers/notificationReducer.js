const initialState = ''


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET':
            state = action.data.notificationMessage;
            break;

        case 'REMOVE':
            state = initialState;
            break;
        default:
            break;
    }

    return state
}

export const setNotification = (message, seconds) => {

    // return {
    //     type: 'SET',
    //     data: {
    //         notificationMessage: message
    //     }
    // }

    return async dispatch => {
        
        dispatch({
            type: 'SET',
            data: {
                notificationMessage: message
            }
        })

        await setTimeout(() => {
            dispatch({
                type: 'SET',
                data: {
                    notificationMessage: ''
                }
            })
          }, seconds * 1000)
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