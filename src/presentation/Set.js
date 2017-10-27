import React from 'react'
import PropTypes from 'prop-types'

const Set = (set) => {
  return (
    <div className="set">
        <p style={{ display: 'inline' }} className="set-reps">{ set.reps } &nbsp;</p>
        <p style={{ display: 'inline' }} className="set-weight">{ set.weight } </p>
    </div>
  )
}

Set.propTypes = {
  id: PropTypes.number.isRequired,
  reps: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired
}

export default Set