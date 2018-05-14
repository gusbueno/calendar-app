import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import EventDetailModal from '../../components/eventDetailModal/EventDetailModal'
import { onCloseEventDetail, saveEvent, updateEvent, deleteEvent } from '../../actions/eventDetail'

class EventDetail extends PureComponent {
  componentDidMount () {
    document.body.classList.toggle('modalOpened', this.props.isOpen)
  }

  componentWillReceiveProps (nextProps) {
    document.body.classList.toggle('modalOpened', nextProps.isOpen)
  }

  _showModal () {
    return this.props.isOpen ? <EventDetailModal data={this.props.data} onCloseEventDetail={this.props.onCloseEventDetail} onSaveEvent={this.props.onSaveEvent} isEditMode={this.props.isEditMode} onUpdateEvent={this.props.onUpdateEvent} onDeleteEvent={this.props.onDeleteEvent} /> : null
  }

  render () {
    return this._showModal()
  }
}

const mapStateToProps = (state) => {
  return ({
    isEditMode: state.eventDetail.isEditMode,
    isOpen: state.eventDetail.isOpen,
    data: state.eventDetail.data
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    onCloseEventDetail: () => {
      dispatch(onCloseEventDetail())
    },
    onSaveEvent: (data) => {
      dispatch(saveEvent(data))
    },
    onUpdateEvent: (data) => {
      dispatch(updateEvent(data))
    },
    onDeleteEvent: (id) => {
      dispatch(deleteEvent(id))
    }
  })
}

EventDetail.propTypes = {
  isEditMode: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  onCloseEventDetail: PropTypes.func.isRequired,
  onSaveEvent: PropTypes.func.isRequired,
  onDeleteEvent: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail)
