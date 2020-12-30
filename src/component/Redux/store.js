import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {};

const middleware = [thunk]

const store = createStore(
    rootReducer, 
    initialState,
    applyMiddleware(...middleware)    
);

export default store

/* the store holds the whole state tree of an application and the only way to chnage the state is to dispatch an action to it
it is usually just an object with a few methods on it.
createStore takes in three parameters, 
1. the reducer: returns the next state tree, given the current state tree and an action to handle
2. the initial state
3. enhancer: which is a middleWare application */
