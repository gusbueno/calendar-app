/* global describe, it, expect */

import {
  ON_OPEN_EVENT_DETAIL,
  ON_DELETE_EVENT_SUCCESS,
  ON_UPDATE_EVENT_SUCCESS,
  ON_SAVE_EVENT_SUCCESS,
  ON_CLOSE_EVENT_DETAIL
} from '../../src/js/constants/ActionTypes'
import eventDetail from '../../src/js/reducers/eventDetail'

const initialState = {
  isEditMode: false,
  isOpen: false,
  data: {}
}

describe('EventDetail reducer', () => {
  it('should return default state', () => {
    expect(eventDetail(undefined, {})).toEqual(initialState)
  })

  it('should set isEditMode as false, isOpen as true and set data into data prop when ON_OPEN_EVENT_DETAIL action is fired', () => {
    const data = { tsDate: 601293600 }
    expect(eventDetail(initialState, { type: ON_OPEN_EVENT_DETAIL, isEditMode: false, data })).toEqual({ ...initialState, isEditMode: false, isOpen: true, data })
  })

  it('should set the initial state when ON_DELETE_EVENT_SUCCESS, ON_UPDATE_EVENT_SUCCESS, ON_SAVE_EVENT_SUCCESS or ON_CLOSE_EVENT_DETAIL action is fired', () => {
    expect(eventDetail(initialState, { type: ON_DELETE_EVENT_SUCCESS })).toEqual(initialState)
    expect(eventDetail(initialState, { type: ON_UPDATE_EVENT_SUCCESS })).toEqual(initialState)
    expect(eventDetail(initialState, { type: ON_SAVE_EVENT_SUCCESS })).toEqual(initialState)
    expect(eventDetail(initialState, { type: ON_CLOSE_EVENT_DETAIL })).toEqual(initialState)
  })
})
