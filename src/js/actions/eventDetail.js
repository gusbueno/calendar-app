import axios from 'axios'

import {
  ON_OPEN_EVENT_DETAIL,
  ON_CLOSE_EVENT_DETAIL,
  ON_SAVE_EVENT_SUCCESS,
  ON_UPDATE_EVENT_SUCCESS,
  ON_DELETE_EVENT_SUCCESS
} from '../constants/ActionTypes'
import { to } from '../utils'
import { getEvents } from './calendar'

export const onOpenEventDetail = (isEditMode, data) => {
  return {
    type: ON_OPEN_EVENT_DETAIL,
    isEditMode,
    data
  }
}

export const onCloseEventDetail = () => {
  return {
    type: ON_CLOSE_EVENT_DETAIL
  }
}

export const onSaveEventSuccess = () => {
  return {
    type: ON_SAVE_EVENT_SUCCESS
  }
}

export const onUpdateEventSuccess = () => {
  return {
    type: ON_UPDATE_EVENT_SUCCESS
  }
}

export const onDeleteEventSuccess = () => {
  return {
    type: ON_DELETE_EVENT_SUCCESS
  }
}

export const saveEvent = (data) => {
  return async (dispatch) => {
    const [err, result] = await to(axios.post('http://localhost:8080/api/event', data))
    err && console.log(err)
    if (result) {
      dispatch(onSaveEventSuccess(result.data.event))
      dispatch(getEvents())
    }
  }
}

export const updateEvent = (data) => {
  return async (dispatch) => {
    const { id, ts, title, description } = data
    const [err, result] = await to(axios.put(`http://localhost:8080/api/event/${id}`, { title, description, ts }))
    err && console.log(err)
    if (result) {
      dispatch(onUpdateEventSuccess())
      dispatch(getEvents())
    }
  }
}

export const deleteEvent = (id) => {
  return async (dispatch) => {
    const [err, result] = await to(axios.delete(`http://localhost:8080/api/event/${id}`))
    err && console.log(err)
    if (result) {
      dispatch(onDeleteEventSuccess())
      dispatch(getEvents())
    }
  }
}
