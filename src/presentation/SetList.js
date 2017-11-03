import React from 'react'
import PropTypes from 'prop-types'
import Set from './Set'
import { connect } from 'react-redux'

const SetList = ({setIds, sets}) => {
  let setsYall = setIds.map((setId) => sets.byId[setId]);

  return (
    setsYall.map(s => {
      return <Set key={s.id} {...s} />
    })
  )
}

SetList.propTypes = {
  sets: PropTypes.object.isRequired
  //onClick: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    sets: state.sets
  }
}

export default connect(
  mapStateToProps
)(SetList);