import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../modules/index'
import thunkMiddleware from 'redux-thunk'

const configureStore = (history, initialState) => {

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            thunkMiddleware,
        )
    )
    return store
}

export default configureStore