import {applyMiddleware, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {rootReducer} from './reducers'
import generateId from './middleware/generateId'
import api from './middleware/api'
import {createBrowserHistory} from "history"
import {routerMiddleware} from 'connected-react-router'


const history = createBrowserHistory()

const enhancer = applyMiddleware(thunkMiddleware, routerMiddleware(history), api, generateId)
const store = createStore(rootReducer, composeWithDevTools(enhancer))

export default store