import React from 'react'
import PropTypes from 'prop-types'
import Set from './Set'

const SetList = ({ sets }) => {
  return (
      sets.map(s => {
          return <Set key={s.id} {...s} />
      })
  )
}

SetList.propTypes = {
  sets: PropTypes.array.isRequired
  //onClick: PropTypes.func.isRequired
}

export default SetList