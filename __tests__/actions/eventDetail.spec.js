
/* global describe, it, expect */

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import {
  ON_OPEN_EVENT_DETAIL,
  ON_CLOSE_EVENT_DETAIL,
  ON_SAVE_EVENT_SUCCESS,
  ON_UPDATE_EVENT_SUCCESS,
  ON_DELETE_EVENT_SUCCESS
} from '../../src/js/constants/ActionTypes'
import * as actions from '../../src/js/actions/eventDetail'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('EventDetail actions', () => {
  it('should dispatch ON_OPEN_EVENT_DETAIL action when onOpenEventDetail is fired', () => {
    const data = { ts: 601293600 }
    const expectedActions = [
      { type: ON_OPEN_EVENT_DETAIL, isEditMode: false, data }
    ]
    const store = mockStore()
    store.dispatch(actions.onOpenEventDetail(false, data))
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('should dispatch ON_CLOSE_EVENT_DETAIL action when onCloseEventDetail is fired', () => {
    const expectedActions = [
      { type: ON_CLOSE_EVENT_DETAIL }
    ]

    const store = mockStore()
    store.dispatch(actions.onCloseEventDetail())
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('should dispatch ON_SAVE_EVENT_SUCCESS action when onSaveEventSuccess is fired', () => {
    const expectedActions = [
      { type: ON_SAVE_EVENT_SUCCESS }
    ]

    const store = mockStore()
    store.dispatch(actions.onSaveEventSuccess())
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('should dispatch ON_UPDATE_EVENT_SUCCESS action when onUpdateEventSuccess is fired', () => {
    const expectedActions = [
      { type: ON_UPDATE_EVENT_SUCCESS }
    ]

    const store = mockStore()
    store.dispatch(actions.onUpdateEventSuccess())
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('should dispatch ON_DELETE_EVENT_SUCCESS action when onDeleteEventSuccess is fired', () => {
    const expectedActions = [
      { type: ON_DELETE_EVENT_SUCCESS }
    ]

    const store = mockStore()
    store.dispatch(actions.onDeleteEventSuccess())
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('should dispatch ON_SAVE_EVENT_SUCCESS action when saveEvent is fired', () => {
    const data = {
      title: 'meetup',
      description: 'PWA vs Hybrid vs Native',
      ts: 601293600
    }

    const events = [{ ...data, id: 1 }]

    const expectedActions = [
      { type: ON_SAVE_EVENT_SUCCESS }
    ]

    const mock = new MockAdapter(axios)
    mock.onPost('http://localhost:8080/api/event', data).reply(201)
    mock.onGet('http://localhost:8080/api/events').reply(200, { events })

    const store = mockStore()
    return store.dispatch(actions.saveEvent(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should dispatch ON_UPDATE_EVENT_SUCCESS action when updateEvent is fired', () => {
    const data = {
      id: 1,
      title: 'meetup',
      description: 'PWA vs Hybrid vs Native',
      ts: 601293600
    }

    const events = [{ ...data, id: 1 }]

    const expectedActions = [
      { type: ON_UPDATE_EVENT_SUCCESS }
    ]

    const mock = new MockAdapter(axios)
    mock.onPut('http://localhost:8080/api/event/1', { title: 'meetup', description: 'PWA vs Hybrid vs Native', ts: 601293600 }).reply(200)
    mock.onGet('http://localhost:8080/api/events').reply(200, { events })

    const store = mockStore()
    return store.dispatch(actions.updateEvent(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should dispatch ON_DELETE_EVENT_SUCCESS action when deleteEvent is fired', () => {
    const events = []
    const expectedActions = [
      { type: ON_DELETE_EVENT_SUCCESS }
    ]

    const mock = new MockAdapter(axios)
    mock.onDelete('http://localhost:8080/api/event/1').reply(204)
    mock.onGet('http://localhost:8080/api/events').reply(200, { events })

    const store = mockStore()
    return store.dispatch(actions.deleteEvent(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
