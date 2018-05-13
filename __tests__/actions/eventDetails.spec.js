
/* global describe, it, expect */

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { ON_OPEN_EVENT_DETAIL } from '../../src/js/constants/ActionTypes'
import * as actions from '../../src/js/actions/eventDetail'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('EventDetail actions', () => {
  it('should dispatch ON_OPEN_EVENT_DETAIL action when onOpenEventDetail is fired', () => {
    const data = { tsDate: 601293600 }
    const expectedActions = [
      { type: ON_OPEN_EVENT_DETAIL, isEditMode: false, data }
    ]
    const store = mockStore()
    store.dispatch(actions.onOpenEventDetail(false, data))
    expect(store.getActions()).toEqual(expectedActions)
  })
})
