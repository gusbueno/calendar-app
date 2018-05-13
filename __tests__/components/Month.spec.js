/* global describe, it, expect */

import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Month from '../../src/js/components/month/Month'
import Day from '../../src/js/components/day/Day'

describe('<Month /> Component', () => {
  it('should match with the snapshot', () => {
    const tree = renderer.create(
      <Month year={2018} month={5} daysInMonth={31} onAddEvent={() => {}} />
    )
    const json = tree.toJSON()
    expect(json).toMatchSnapshot()
  })

  const monthShallow = shallow(
    <Month year={2018} month={5} daysInMonth={31} onAddEvent={() => {}} />
  )

  it('should exists', () => {
    expect(monthShallow.length).toEqual(1)
  })

  it('should render month div', () => {
    expect(monthShallow.find('.month').length).toEqual(1)
  })

  it('should render month-header div with 7 week-day', () => {
    expect(monthShallow.find('.month-header').length).toEqual(1)
    expect(monthShallow.find('.week-day').length).toEqual(7)
  })

  it('should render month-days div with 33 Day components', () => {
    expect(monthShallow.find('.month-days').length).toEqual(1)
    expect(monthShallow.find(Day).length).toEqual(33)
  })
})
