import reducer from './reducer'
import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'

// redux dev tools 支持
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store;
