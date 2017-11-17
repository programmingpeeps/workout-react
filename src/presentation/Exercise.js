import React from 'react'
import PropTypes from 'prop-types'

const Exercise = (props) => {
  const { name, sets } = props;
  const something = sets.map((val) => (
    <li className="set">
      <p>{ val.weight }</p>
      <p>{ val.reps }</p>
    </li>
  ))
  return (
    <div className="exercise">
      <p className="exercise-name">{ name }</p>
      <ul className="sets">
        { something }
      </ul>
    </div>
  )
}

Exercise.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sets: PropTypes.array.isRequired
}

export default Exercise
