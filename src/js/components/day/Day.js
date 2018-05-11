import React from 'react'
import PropTypes from 'prop-types'

import styles from './Day.scss'

const Day = ({ dayNumber, onAddEvent, tsDate }) => {
  if (!dayNumber) {
    return <div className={styles.day} />
  }

  return (
    <div className={styles.day}>
      <div className={styles['day-header']}>
        <span>{dayNumber}</span>
        <div className={styles['add-event-btn']} onClick={() => onAddEvent(tsDate)}>
          <span>+</span>
        </div>
      </div>
    </div>
  )
}

Day.propTypes = {
  dayNumber: PropTypes.number,
  onAddEvent: PropTypes.func,
  tsDate: PropTypes.number
}

Day.defaultProps = {
  onAddEvent: () => {}
}

export default Day
