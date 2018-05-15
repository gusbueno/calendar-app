import React from 'react'
import PropTypes from 'prop-types'

import styles from './Day.scss'

const renderEvents = (events, onUpdateEvent) => {
  return events.map(event => {
    return (
      <li className={styles.event} key={event.id} onClick={() => onUpdateEvent(event)}>{event.title}</li>
    )
  })
}

const Day = ({ dayNumber, onAddEvent, tsDate, events, onUpdateEvent }) => {
  if (!dayNumber) {
    return <div className={styles.day} />
  }

  return (
    <div className={styles.day}>
      <div className={styles['day-header']}>
        <span>{dayNumber}</span>
        <div className={styles['add-event-btn']} onClick={() => onAddEvent({ ts: tsDate })}>
          <span>+</span>
        </div>
      </div>
      <div className={styles['day-body']}>
        <ul className={styles.events}>
          {renderEvents(events, onUpdateEvent)}
        </ul>
      </div>
    </div>
  )
}

Day.propTypes = {
  dayNumber: PropTypes.number,
  onAddEvent: PropTypes.func,
  tsDate: PropTypes.number,
  events: PropTypes.array,
  onUpdateEvent: PropTypes.func
}

Day.defaultProps = {
  onAddEvent: () => {},
  onUpdateEvent: () => {}
}

export default Day
