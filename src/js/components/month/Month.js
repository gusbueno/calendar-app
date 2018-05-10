import React from 'react'
import propTypes from 'prop-types'

import styles from './Month.scss'

const Month = ({ month, daysInMonth }) => {
  return (
    <div className={styles.month}>
      month
    </div>
  )
}

Month.propTypes = {
  month: propTypes.number.isRequired,
  daysInMonth: propTypes.number.isRequired
}

export default Month
