import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store/index'
import App from './App'
import * as serviceWorker from './serviceWorker'
import index from './redux/index'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))

serviceWorker.unregister()
