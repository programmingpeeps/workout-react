import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const Set = (set) => {
  return (
    <div className="set">
      <p className="set-date">{ moment(set.date).format("L") }</p>
      <p style={{ display: 'inline' }} className="set-reps">{ set.reps } &nbsp;</p>
      <p style={{ display: 'inline' }} className="set-weight">{ set.weight } </p>
    </div>
  )
}

Set.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  reps: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired
}

export default Set