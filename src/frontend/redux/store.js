import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {rootReducer} from './reducers'
import generateId from './middleware/generateId'
import api from './middleware/api'
import {createBrowserHistory} from "history"
import {routerMiddleware} from 'connected-react-router'


const history = createBrowserHistory()
const middlewares = [thunk, routerMiddleware(history), api, generateId]
const enhancer = applyMiddleware(...middlewares)
const store = createStore(rootReducer(history), composeWithDevTools(enhancer))

export default store