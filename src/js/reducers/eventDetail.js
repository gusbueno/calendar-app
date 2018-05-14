import {
  ON_OPEN_EVENT_DETAIL,
  ON_CLOSE_EVENT_DETAIL,
  ON_SAVE_EVENT_SUCCESS,
  ON_UPDATE_EVENT_SUCCESS,
  ON_DELETE_EVENT_SUCCESS
} from '../constants/ActionTypes'

const initialState = {
  isEditMode: false,
  isOpen: false,
  data: {}
}

const eventDetail = (state = initialState, action) => {
  switch (action.type) {
    case ON_OPEN_EVENT_DETAIL:
      const { isEditMode, data } = action
      return { ...state, isEditMode, data, isOpen: true }
    case ON_DELETE_EVENT_SUCCESS:
    case ON_UPDATE_EVENT_SUCCESS:
    case ON_SAVE_EVENT_SUCCESS:
    case ON_CLOSE_EVENT_DETAIL:
      return { ...state, isEditMode: false, data: {}, isOpen: false }
    default:
      return state
  }
}

export default eventDetail
