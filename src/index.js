import 'react-app-polyfill/ie9' // For IE 9-11 support
import 'react-app-polyfill/ie11' // For IE 11 support
import './polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import {Provider} from 'react-redux'
import configureStore from './store/store.dev'

//初期ステート
let state = window.__initialState__ || undefined

//store作成
const store = configureStore('', state)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
