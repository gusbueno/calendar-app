
/* global describe, it, expect */

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import {
  ON_EVENTS_RECEIVED
} from '../../src/js/constants/ActionTypes'
import * as actions from '../../src/js/actions/calendar'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Calendar actions', () => {
  it('should dispatch ON_EVENTS_RECEIVED action when onEventsReceived is fired', () => {
    const event = {
      id: 1,
      title: 'meetup',
      description: 'PWA vs Hybrid vs Native',
      ts: 601293600
    }
    const events = [event]
    const expectedActions = [
      { type: ON_EVENTS_RECEIVED, events }
    ]

    const store = mockStore()
    store.dispatch(actions.onEventsReceived(events))
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('should dispatch ON_EVENTS_RECEIVED action when getEvents is fired', () => {
    const event = {
      id: 1,
      title: 'meetup',
      description: 'PWA vs Hybrid vs Native',
      ts: 601293600
    }
    const events = [event]
    const expectedActions = [
      { type: ON_EVENTS_RECEIVED, events }
    ]

    const mock = new MockAdapter(axios)
    mock.onGet('http://localhost:8080/api/events').reply(200, { events })

    const store = mockStore()
    return store.dispatch(actions.getEvents()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
