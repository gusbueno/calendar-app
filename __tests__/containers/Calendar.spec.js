
/* global describe, it, expect */

import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import Calendar from '../../src/js/containers/calendar/Calendar'

const storeFake = {
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => {
    return {
      calendar: {
        events: []
      }
    }
  }
}

describe('<Calendar /> container', () => {
  it('should match with the snapshot', () => {
    const tree = renderer.create(
      <Provider store={storeFake}>
        <Calendar />
      </Provider>
    )
    const json = tree.toJSON()
    expect(json).toMatchSnapshot()
  })

  const calendarShallow = shallow(
    <Provider store={storeFake}>
      <Calendar />
    </Provider>
  )

  it('should exists', () => {
    expect(calendarShallow.length).toEqual(1)
  })
})
