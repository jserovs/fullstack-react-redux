import { createStore, combineReducers } from 'redux'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import anecdoteService from './services/anecdoteService'

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notification: notificationReducer
  })

const store = createStore(reducer,composeWithDevTools() )

export default store