/* global describe, it, expect */

import { ON_OPEN_EVENT_DETAIL } from '../../src/js/constants/ActionTypes'
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
})
