const initialState = ''


const reducer = (state = initialState, action) => {
    console.log('state now: ', state)
    console.log('action', action)

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

export const setNotification = (message) => {

    return {
        type: 'SET',
        data: {
            notificationMessage: message
        }
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