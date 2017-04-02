import React, { Component } from "react";
import { connect } from "react-redux";
import CountryData from 'country-data'

class WeatherList extends Component {

  weatherDetails() {

    function convertKToC(k) {
      return Math.round(10 * (k - 273.15)) / 10;
    }

    return this.props.weatherList.map((weather, i) => {

      return (
        <tr key={`${i} ${weather.name} ${weather.sys.country}`}>
          <td>{ weather.name }</td>
          <td>{ CountryData.countries[weather.sys.country].name }</td>
          <td>{ convertKToC(weather.main.temp) } °C</td>
          <td>{ convertKToC(weather.main.temp_min) } - { convertKToC(weather.main.temp_max) } °C</td>
          <td>{ weather.main.humidity } %</td>
          <td>{ weather.weather[0].description }</td>
          <td><img className="weather-condition-icon" src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt={ weather.weather[0].description } /></td>
        </tr>
      );

    });
  }

  render() {
    if (this.props.weatherList.length === 0) {
      return (
        <div></div>
      );
    } else {
      return (
        <table className="table table-hover weather-info-list">

          <thead>
            <tr>
              <th>City</th>
              <th>Country</th>
              <th>Temperature</th>
              <th>Temperature Range</th>
              <th>Humidity</th>
              <th>Conditions</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {this.weatherDetails()}
          </tbody>

        </table>
      );
    }
  }
}

function mapStateToProps(state) {    // HOW TO CONNECT APP STATE TO CONTAINER: map the app level state to props
  return {
    weatherList: state.weather
  }
}

export default connect(mapStateToProps)(WeatherList);    // HOW TO CONNECT APP STATE TO CONTAINER: export this smart component, AKA container
