import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../modules/index'
import thunkMiddleware from 'redux-thunk'

const configureStore = (history, initialState) => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(
                thunkMiddleware,
            )
        )
    )
    return store
}

export default configureStore