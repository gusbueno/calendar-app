import { combineReducers } from 'redux'

import eventDetail from './eventDetail'
import calendar from './calendar'

const rootReducer = combineReducers({
  eventDetail,
  calendar
})

export default rootReducer
