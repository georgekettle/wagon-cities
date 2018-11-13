import React, { Component } from 'react';

// external dependencies
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ActiveCity extends Component {
  constructor(props) {
    super(props);
    console.log(`ActiveCity LOADING ${props.name}`);
  }

  render() {
    let activeCity = this.props.activeCity;
    console.log(activeCity);
    if (activeCity !== null) {
      var src = "https://kitt.lewagon.com/placeholder/cities/" + activeCity.slug;
    } else {
      var src = "https://kitt.lewagon.com/placeholder/cities/paris";
    }
    return(
      <div className="active-city">
        <img src={src} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

import { setActiveCity } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity: setActiveCity },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveCity);
