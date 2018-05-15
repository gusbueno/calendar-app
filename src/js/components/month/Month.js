import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import styles from './Month.scss'
import Day from '../day/Day'

const renderWeekDays = () => {
  return moment.weekdays().map((weekDay, index) => {
    return (
      <div key={index} className={styles['week-day']}>
        <span>{weekDay}</span>
      </div>
    )
  })
}

const renderMonthDays = (year, month, daysInMonth, onAddEvent, events, onUpdateEvent) => {
  const firstMonthDayOnWeek = moment(`${year}-${month}-1`, ['YYYY-M-D']).weekday()
  let dayNumber = 0
  return Array(daysInMonth + firstMonthDayOnWeek).fill().map((_, i) => {
    if (i >= firstMonthDayOnWeek) {
      dayNumber += 1
      const tsDate = moment(`${year}-${month}-${dayNumber}`, ['YYYY-M-D']).unix() * 1000
      const dayEvents = events.filter(event => {
        return event.ts === tsDate
      })
      return <Day key={i} dayNumber={dayNumber} onAddEvent={onAddEvent} tsDate={tsDate} events={dayEvents} onUpdateEvent={onUpdateEvent} />
    }
    return <Day key={i} />
  })
}

const Month = ({ year, month, daysInMonth, onAddEvent, events, onUpdateEvent }) => {
  return (
    <div className={styles.month}>
      <div className={styles['month-header']}>
        {renderWeekDays()}
      </div>
      <div className={styles['month-days']}>
        {renderMonthDays(year, month, daysInMonth, onAddEvent, events, onUpdateEvent)}
      </div>
    </div>
  )
}

Month.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  daysInMonth: PropTypes.number.isRequired,
  onAddEvent: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired,
  onUpdateEvent: PropTypes.func.isRequired
}

export default Month
