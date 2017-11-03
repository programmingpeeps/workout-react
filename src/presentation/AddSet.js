import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { saveSet } from '../actions'

class AddSetComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: null, reps: 0, weight: 0.0};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return (event) => {
      this.setState({[field]: event.target.value});
    }
  }

  handleSubmit(event) {
    this.props.saveSet(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <label>
          Reps:
          <input type="text" value={this.state.reps} onChange={this.handleChange('reps')} />
        </label>
        <label>
          Weight:
          <input type="text" value={this.state.weight} onChange={this.handleChange('weight')} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapDispatchToProps = {
  saveSet
};

export default connect(
  undefined,
  mapDispatchToProps
)(AddSetComponent)