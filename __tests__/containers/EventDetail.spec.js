/* global describe, it, expect */

import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import EventDetail from '../../src/js/containers/eventDetail/EventDetail'

const storeFake = {
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => {
    return {
      eventDetail: {
        isEditMode: false,
        isOpen: true,
        data: {
          ts: 601293600
        }
      }
    }
  }
}

describe('<EventDetail /> container', () => {
  it('should match with the snapshot', () => {
    const tree = renderer.create(
      <Provider store={storeFake}>
        <EventDetail />
      </Provider>
    )
    const json = tree.toJSON()
    expect(json).toMatchSnapshot()
  })

  const eventDetailShallow = shallow(
    <Provider store={storeFake}>
      <EventDetail />
    </Provider>
  )

  it('should exists', () => {
    expect(eventDetailShallow.length).toEqual(1)
  })
})
