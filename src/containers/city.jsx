import React, { Component } from 'react';

class City extends Component {
  constructor(props) {
    super(props);
    console.log(`CITY LOADING ${props.name}`);
  }

  render() {
    return(
      <div className="list-group-item">
        <h4>{this.props.name}</h4>
      </div>
    );
  }
}

export default City;
