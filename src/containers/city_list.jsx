import React, { Component } from 'react';
import City from './city.jsx';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';

class CityList extends Component {
  constructor(props) {
    super(props);
    console.log("CITY LIST LOADING");
  }

  componentWillMount() {
    this.props.setCities();
    console.log("MOUNTING CITY LIST");
  }

  renderCities = (cities) => {
    return cities.map(city => {
      return (
          <City key={city.name} city={city} name={city.name} address={city.address} slug={city.slug}/>
        );
    })
  }

  render() {
    return(
      <div className="cities">
        {this.renderCities(this.props.cities)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
