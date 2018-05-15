/* global describe, it, expect */

import { ON_EVENTS_RECEIVED } from '../../src/js/constants/ActionTypes'
import calendar from '../../src/js/reducers/calendar'

const initialState = {
  events: []
}

describe('Calendar reducer', () => {
  it('should return default state', () => {
    expect(calendar(undefined, {})).toEqual(initialState)
  })

  it('should add new events into events array when ON_EVENTS_RECEIVED action is fired', () => {
    const events = [
      {
        id: 1,
        title: 'meetup',
        description: 'PWA vs Hybrid vs Native',
        ts: 601293600
      }
    ]
    expect(calendar(initialState, { type: ON_EVENTS_RECEIVED, events })).toEqual({ ...initialState, events })
  })
})
