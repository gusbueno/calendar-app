/* global describe, it, expect, jest */

import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Day from '../../src/js/components/day/Day'

describe('<Day /> Component', () => {
  const events = [
    {
      id: 1,
      title: 'meetup',
      description: 'PWA vs Hybrid vs Native',
      ts: 601293600
    }
  ]
  it('should match with the snapshot', () => {
    const tree = renderer.create(
      <Day dayNumber={1} onAddEvent={() => {}} tsDate={601293600} events={events} onUpdateEvent={() => {}} />
    )
    const json = tree.toJSON()
    expect(json).toMatchSnapshot()
  })

  const onAddEventMock = jest.fn()
  const onUpdateEventMock = jest.fn()
  const dayShallow = shallow(
    <Day dayNumber={1} onAddEvent={onAddEventMock} tsDate={601293600} events={events} onUpdateEvent={onUpdateEventMock} />
  )

  it('should exists', () => {
    expect(dayShallow.length).toEqual(1)
  })

  it('should render day div', () => {
    expect(dayShallow.find('.day').length).toEqual(1)
  })

  it('should render day-header div', () => {
    expect(dayShallow.find('.day-header').length).toEqual(1)
  })

  it('should render add-event-btn div', () => {
    expect(dayShallow.find('.add-event-btn').length).toEqual(1)
  })

  it('should call onAddEvent with tsDate value on click add-event-btn', () => {
    dayShallow.find('.add-event-btn').first().simulate('click')
    expect(onAddEventMock).toHaveBeenCalledWith({ ts: 601293600 })
  })

  it('should render 1 event on event list', () => {
    expect(dayShallow.find('.event').length).toEqual(1)
  })

  it('should call onUpdateEvent with event data on click event', () => {
    dayShallow.find('.event').first().simulate('click')
    expect(onUpdateEventMock).toHaveBeenCalledWith(events[0])
  })

  /* empty Day */
  const emptyDayShallow = shallow(
    <Day />
  )

  it('should render day div on empty day', () => {
    expect(emptyDayShallow.find('.day').length).toEqual(1)
  })

  it('should day div have no children', () => {
    expect(emptyDayShallow.find('.day').children()).toHaveLength(0)
  })
})
