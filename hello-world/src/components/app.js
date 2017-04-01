import React, { Component } from 'react';
import SearchBar from "../containers/search-bar"
import WeatherList from "../containers/weather-list"

import {countries} from "country-data";
console.log("countries.TW", countries.TW);

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
