import axios from 'axios'

import { ON_EVENTS_RECEIVED } from '../constants/ActionTypes'
import { to } from '../utils'

export const onEventsReceived = (events) => {
  return {
    type: ON_EVENTS_RECEIVED,
    events
  }
}

export const getEvents = () => {
  return async (dispatch) => {
    const [err, result] = await to(axios.get('http://localhost:8080/api/events'))
    err && console.log(err)
    result && dispatch(onEventsReceived(result.data.events))
  }
}
