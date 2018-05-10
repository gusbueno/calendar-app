import React from 'react'
import propTypes from 'prop-types'
import moment from 'moment'

import styles from './Month.scss'

const renderWeekDays = () => {
  return moment.weekdays().map((weekDay, index) => {
    return (
      <div key={index} className={styles['week-day']}>
        <span>{weekDay}</span>
      </div>
    )
  })
}

const renderMonthDays = (daysInMonth) => {
  return Array(daysInMonth).fill().map((_, i) => {
    const dayNumber = i + 1
    return <span key={i}>{dayNumber}</span>
  })
}

const Month = ({ month, daysInMonth }) => {
  return (
    <div className={styles.month}>
      <div className={styles['month-header']}>
        {renderWeekDays()}
      </div>
      <div className={styles['month-days']}>
        {renderMonthDays(daysInMonth)}
      </div>
    </div>
  )
}

Month.propTypes = {
  month: propTypes.number.isRequired,
  daysInMonth: propTypes.number.isRequired
}

export default Month
