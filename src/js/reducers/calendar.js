import { ON_EVENTS_RECEIVED } from '../constants/ActionTypes'

const initialState = {
  events: []
}

const calendar = (state = initialState, action) => {
  switch (action.type) {
    case ON_EVENTS_RECEIVED:
      const { events } = action
      return { ...state, events: [...events] }
    default:
      return state
  }
}

export default calendar
