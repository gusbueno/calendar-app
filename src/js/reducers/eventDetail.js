import { ON_OPEN_EVENT_DETAIL } from '../constants/ActionTypes'

const initialState = {
  isEditMode: false,
  isOpen: false,
  data: {}
}

const eventDetail = (state = initialState, action) => {
  switch (action.type) {
    case ON_OPEN_EVENT_DETAIL:
      const { isEditMode, data } = action
      console.log(data)
      return { ...state, isEditMode, data, isOpen: true }
    default:
      return state
  }
}

export default eventDetail
