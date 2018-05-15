import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'

import styles from './Calendar.scss'
import Month from '../../components/month/Month'
import { onOpenEventDetail } from '../../actions/eventDetail'
import { getEvents } from '../../actions/calendar'

class Calendar extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      year: null,
      month: null
    }

    this._previousMonth = this._previousMonth.bind(this)
    this._nextMonth = this._nextMonth.bind(this)
  }

  componentDidMount () {
    this.props.onGetEvents()
  }

  componentWillMount () {
    const year = Number(moment().format('YYYY'))
    const month = Number(moment().format('M'))
    this.setState({ year, month })
  }

  _previousMonth () {
    const previousDate = moment(`${this.state.month}-${this.state.year}`, ['M-YYYY']).subtract(1, 'months')
    const year = Number(previousDate.format('YYYY'))
    const month = Number(previousDate.format('M'))
    this.setState({ year, month })
  }

  _nextMonth () {
    const nextDate = moment(`${this.state.month}-${this.state.year}`, ['M-YYYY']).add(1, 'months')
    const year = Number(nextDate.format('YYYY'))
    const month = Number(nextDate.format('M'))
    this.setState({ year, month })
  }

  render () {
    const monthName = moment(this.state.month, ['MM']).format('MMMM')
    const daysInMonth = moment(`${this.state.year}-${this.state.month}`, ['YYYY-MM']).daysInMonth()
    return (
      <div className={styles.calendar}>
        <div className={styles['calendar-header']}>
          <div className={styles['previous-btn']} onClick={this._previousMonth}>
            <span>{'<'}</span>
          </div>
          <div className={styles.date}>
            <span className={styles.year}>{this.state.year}</span>
            <span className={styles.month}>{monthName}</span>
          </div>
          <div className={styles['next-btn']} onClick={this._nextMonth}>
            <span>{'>'}</span>
          </div>
        </div>
        <Month year={this.state.year} month={this.state.month} daysInMonth={daysInMonth} onAddEvent={this.props.onAddEvent} events={this.props.events} onUpdateEvent={this.props.onUpdateEvent} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    events: state.calendar.events
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    onAddEvent: (data) => {
      dispatch(onOpenEventDetail(false, data))
    },
    onUpdateEvent: (data) => {
      dispatch(onOpenEventDetail(true, data))
    },
    onGetEvents: () => {
      dispatch(getEvents())
    }
  })
}

Calendar.propTypes = {
  onAddEvent: PropTypes.func.isRequired,
  onGetEvents: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired,
  onUpdateEvent: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
