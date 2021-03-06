import React, { Component } from 'react';

// external dependencies
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class City extends Component {
  constructor(props) {
    super(props);
    console.log(`CITY LOADING ${props.name}`);
  }

  handleClick = () => {
    let city = this.props.city;
    return this.props.setActiveCity(city)
  }

  render() {
    return(
      <div className="list-group-item" onClick={this.handleClick}>
        <h4>{this.props.name}</h4>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

// Import actions so as to connect with props
import { setActiveCity } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity: setActiveCity },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
