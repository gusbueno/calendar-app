import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import styles from './EventDetailModal.scss'

class EventDetailModal extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      description: ''
    }

    this._handleTitleChange = this._handleTitleChange.bind(this)
    this._handleDescriptionChange = this._handleDescriptionChange.bind(this)
    this._saveEvent = this._saveEvent.bind(this)
    this._updateEvent = this._updateEvent.bind(this)
    this._deleteEvent = this._deleteEvent.bind(this)
  }

  componentDidMount () {
    this.props.isEditMode && this.setState({ title: this.props.data.title, description: this.props.data.description })
  }

  _handleTitleChange (e) {
    const title = e.target.value
    this.setState({ title })
  }

  _handleDescriptionChange (e) {
    const description = e.target.value
    this.setState({ description })
  }

  _saveEvent () {
    const { ts } = this.props.data
    const { title, description } = this.state
    const data = { ts, title, description }
    this.props.onSaveEvent(data)
  }

  _updateEvent () {
    const { id, ts } = this.props.data
    const { title, description } = this.state
    const data = { id, ts, title, description }
    this.props.onUpdateEvent(data)
  }

  _deleteEvent () {
    const { id } = this.props.data
    this.props.onDeleteEvent(id)
  }

  render () {
    const date = moment(this.props.data.ts).format('YYYY-MM-DD')
    return (
      <div className={styles['event-detail-modal']}>
        <div className={styles['panel']}>
          <div className={styles['panel-header']}>
            <span className={styles.date}>{date}</span>
            <span className={styles['close-btn']} onClick={this.props.onCloseEventDetail}>Close</span>
          </div>
          <div className={styles['panel-body']}>
            <div className={styles['group-input']}>
              <label>Title</label>
              <input type='text' value={this.state.title} onChange={this._handleTitleChange} />
            </div>
            <div className={styles['group-input']}>
              <label>Description</label>
              <textarea value={this.state.description} rows='10' onChange={this._handleDescriptionChange} />
            </div>
          </div>
          <div className={[styles['panel-footer'], this.props.isEditMode && styles['edit-mode']].join(' ')}>
            {this.props.isEditMode && <button type='button' className={styles.delete} onClick={this._deleteEvent}>Delete</button>}
            {this.props.isEditMode ? <button type='button' className={styles.save} onClick={this._updateEvent}>Update</button> : <button type='button' className={styles.save} onClick={this._saveEvent}>Save</button>}
          </div>
        </div>
      </div>
    )
  }
}

EventDetailModal.propTypes = {
  isEditMode: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  onCloseEventDetail: PropTypes.func.isRequired,
  onSaveEvent: PropTypes.func.isRequired,
  onUpdateEvent: PropTypes.func.isRequired,
  onDeleteEvent: PropTypes.func.isRequired
}

export default EventDetailModal
