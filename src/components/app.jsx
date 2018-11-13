import React from 'react';
import CityList from '../containers/city_list.jsx'

const App = () => {
  return (
    <div className="app">
      <CityList />
      <div className="active-city">
      </div>
    </div>
  );
};

export default App;
