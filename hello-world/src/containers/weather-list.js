
import React, { Component } from "react";
import { connect } from "react-redux";
// import {countries} from "country-data";
import CountryData from 'country-data'

console.log("CountryData.countries", CountryData.countries);
// const CountryData2 = require(CountryData)
class WeatherList extends Component {

  weatherDetails() {
    // console.log("countries", CountryData.countries, CountryData.countries["US"])
    // console.log(JSON.stringify(countries['US']));
    // console.log(JSON.stringify(CountryData.countries['US']));
    // console.log(JSON.stringify(CountryData.countries.TW));
    console.log("CountryData.countries.TW", CountryData.countries.TW);
    // console.log(countries.TW);

    function convertKToC(k) {
      return Math.round(10*(k - 273.15)) / 10
    }
    //console.log("countries", CountryData, CountryData.countries, CountryData.countries.all, CountryData.countries["TW"])
    return this.props.weatherList.map((weather) => {

      // const temps = weather.list.map((data) => Math.round(10*(data.main.temp - 273.15)) / 10);
      // const humidities = weather.list.map((data) => data.main.humidity);
      // const pressures = weather.list.map((data) => data.main.pressure);

      // console.log("temps", temps);

      return (
        <tr key={weather.name + "," + weather.sys.country}>
          <td>{ weather.name }</td>
          <td>{ CountryData.countries[weather.sys.country].name }</td>
{
          //  <td>{ CountryData.countries[weather.city.country].emoji }</td>
}

          {/* }<td> {CountryData.countries[weather.city.country]}</td> */}
          <td>{ convertKToC(weather.main.temp) } °C</td>
          <td> {convertKToC(weather.main.temp_min)} - {convertKToC(weather.main.temp_max)} °C</td>

          <td>{ weather.main.humidity } %</td>

          <td>{ weather.weather[0].description }</td>
          {
          // <td><Chart data={temps} color="orange" low={Math.min.apply(null, temps)} high={Math.max.apply(null, temps)} unit="°C" /></td>
          // <td><Chart data={humidities} color="blue" low={Math.min.apply(null, humidities)} high={Math.max.apply(null, humidities)} unit="%" /></td>
          // <td><Chart data={pressures} color="green" low={Math.min.apply(null, pressures)} high={Math.max.apply(null, pressures)} unit="hPa" /></td>
        }
        </tr>
      )

    })
  }

  render() {
    if (this.props.weatherList.length === 0) {
      return <div></div>;
    } else {
      return (
        <table className="table table-hover weather-info-list">
        <thead>
        <th>City</th>
        <th>Country</th>
        <th>Temperature</th>
        <th>Temperature Range</th>
        <th>Humidity</th>
        <th>Conditions</th>

        {/*}<th>Country</th>
        <th>Temperature</th>
        <th>Description</th>
        <th>Description</th>
        <th>Description</th>
        <th>Description</th>*/}
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
