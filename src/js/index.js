import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import Calendar from './containers/calendar/Calendar'

import common from '../styles/common.scss' // load common styles

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

render(
  <Provider store={store}>
    <div>
      <Calendar />
    </div>
  </Provider>,
  document.getElementById('root')
)
