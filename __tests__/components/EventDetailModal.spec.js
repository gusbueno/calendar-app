/* global describe, it, expect, jest */

import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import EventDetailModal from '../../src/js/components/eventDetailModal/EventDetailModal'

describe('<EventDetailModal /> Component', () => {
  it('should match with the snapshot', () => {
    const tree = renderer.create(
      <EventDetailModal
        isEditMode={false}
        data={{ ts: 601293600 }}
        onCloseEventDetail={() => {}}
        onSaveEvent={() => {}}
        onUpdateEvent={() => {}}
        onDeleteEvent={() => {}}
      />
    )
    const json = tree.toJSON()
    expect(json).toMatchSnapshot()
  })

  const onCloseEventDetailMock = jest.fn()
  const onSaveEventMock = jest.fn()
  const onUpdateEventMock = jest.fn()
  const onDeleteEventMock = jest.fn()
  const eventDetailModalShallow = shallow(
    <EventDetailModal
      isEditMode={false}
      data={{ ts: 601293600 }}
      onCloseEventDetail={onCloseEventDetailMock}
      onSaveEvent={onSaveEventMock}
      onUpdateEvent={onUpdateEventMock}
      onDeleteEvent={onDeleteEventMock}
    />
  )

  it('should exists', () => {
    expect(eventDetailModalShallow.length).toEqual(1)
  })

  it('should set title value into the state on title input change', () => {
    const e = { target: { value: 'meetup' } }
    eventDetailModalShallow.find('input').first().simulate('change', e)
    expect(eventDetailModalShallow.state().title).toEqual('meetup')
  })

  it('should set description value into the state on description input change', () => {
    const e = { target: { value: 'PWA vs Hybrid vs Native' } }
    eventDetailModalShallow.find('textarea').first().simulate('change', e)
    expect(eventDetailModalShallow.state().description).toEqual('PWA vs Hybrid vs Native')
  })

  it('should call onSaveEvent on click save button', () => {
    eventDetailModalShallow.find('.save').simulate('click')
    expect(onSaveEventMock).toHaveBeenCalled()
  })

  it('should call onCloseEventDetail on click close button', () => {
    eventDetailModalShallow.find('.close-btn').simulate('click')
    expect(onCloseEventDetailMock).toHaveBeenCalled()
  })

  const eventDetailEditModeShallow = shallow(
    <EventDetailModal
      isEditMode
      data={{ id: 1, title: 'meetup', description: 'PWA vs Hybrid vs Native', ts: 601293600 }}
      onCloseEventDetail={onCloseEventDetailMock}
      onSaveEvent={onSaveEventMock}
      onUpdateEvent={onUpdateEventMock}
      onDeleteEvent={onDeleteEventMock}
    />
  )

  it('should set title and description values to state on componentDidMount', () => {
    expect(eventDetailEditModeShallow.state().title).toEqual('meetup')
    expect(eventDetailEditModeShallow.state().description).toEqual('PWA vs Hybrid vs Native')
  })

  it('should call onUpdateEvent on click update button', () => {
    eventDetailEditModeShallow.find('.save').simulate('click')
    expect(onUpdateEventMock).toHaveBeenCalled()
  })

  it('should call onDeleteEvent on click delete button', () => {
    eventDetailEditModeShallow.find('.delete').simulate('click')
    expect(onDeleteEventMock).toHaveBeenCalled()
  })
})
