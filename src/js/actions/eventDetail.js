import axios from 'axios'

import { ON_OPEN_EVENT_DETAIL } from '../constants/ActionTypes'

export const onOpenEventDetail = (isEditMode, data) => {
  return {
    type: ON_OPEN_EVENT_DETAIL,
    isEditMode,
    data
  }
}
